var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require('./Server/routes/db.connection');
var RedisStore = require('connect-redis')(session);
var app = express();

var routes = require('./Server/routes/index');
var user = require('./Server/routes/user');
var authenticationHandler = require('./Server/routes/authenticationHandler')(passport);
var postContent = require('./Server/routes/postContent');
app.use(session({
  store: new RedisStore({
    host: process.env.REDIS_HOST||'127.0.0.1',
    port: process.env.REDIS_PORT||6379,
    db: 7
  }),

  secret:process.env.REDIS_SECRET||'fragile'
}));

var initPassport = require('./Server/passport-init');
initPassport(passport);

//
//Add socket.js link here
//
app.use(express.static(path.join(__dirname, 'dist/tech-bidies-app-v2')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',authenticationHandler);
app.use('/content', passport.authenticate('jwt', {session: false}), postContent);
app.use('/user', passport.authenticate('jwt', {session: false}), user);


// view engine setup

app.use(function(req, res, next) {
  if (req.isAuthenticated())
  {
    return next();
  }
  else
  {
    return res.redirect('');
  }
});


app.use(express.static(path.join(__dirname, 'dist/tech-bidies-app-v2')));




app.set('views', path.join(__dirname, 'Server/views'));
app.set('view engine', 'ejs');




// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//production error handler
//no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
   res.render('error', {
   message: err.message,
    error: {}
 });
});

module.exports = app;
