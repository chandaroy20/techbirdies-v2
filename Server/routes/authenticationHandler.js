var express = require('express'),
  router = express.Router();
var mongoose = require('mongoose'),
  User = require('../models/user.js');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
var bCrypt = require('bcrypt-nodejs');


module.exports = function (passport) {

  //sends successful login state back to angular
  router.get('/success', function (req, res) {
    console.log(req.user);
    res.send({ error: null });
  });

  //sends failure login state back to angular
  router.get('/failure', function (req, res) {
    res.send({ error: "PASSWORD_ERR" });
  });
  router.get('/regfailure', function (req, res) {
    res.send({ error: "EMAIL_ERR" });
  });



  router.post('/login', function (req, res, next) {
    passport.authenticate('local-login', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        // generate a signed son web token with the contents of user object and return it in the response

        user = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          photo: user.photo,
          aboutMe: user.aboutMe,
          company: user.company,
          id: user._id
        };
        const token = jwt.sign(user, 'techbirdies');
        return res.json({ token });
      });
    })(req, res);
  });

  //sign up
  router.use('/register', function (req, res, next) {
    console.log(req.body);
    console.log(req.body.user);
    next();
  });

  router.post('/register', passport.authenticate('sign-up', {
    failureRedirect: '/auth/regfailure'
  }), function (req, res) {
    userDetails = {
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      photo: req.user.photo
    };
    console.log(userDetails);
    res.send({ "user": userDetails });
  });

  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/index.html');
  });
  router.get('/home', function (req, res) {
  });


  //login using facebook
  router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

  router.get('/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/home.html',
      failureRedirect: '/index.html'
    }));

  //login using google
  router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  router.get('/google/callback',
    passport.authenticate('google', {
      successRedirect: '/home.html',
      failureRedirect: '/index.html'
    }));

  router.post('/register', passport.authenticate('sign-up', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/regfailure'
  }));
  // this is for resetting the password
  router.post('/resetPassword', function (req, res, next) {
    User.findOne({
      'email': req.body.email
    }).exec(function (err, user) {
      if (err) {
        console.log("In data base error ", err);
        res.send({ error: 'Something went wrong!!' })
      }
      else if (!user) {
        res.send({ error: 'User not found!' })
      } else {

        console.log("Everything's fine");
        user.password = createHash(req.body.password);
        user.save();

        res.send({});
        // next();
      }


    })

  });
  //verify new user starts
  router.post('/verifycode', function (req, res, next) {
    var email = req.body.email;
    var code = Math.floor(Math.random() * 90000) + 10000;
    User.findOne({ 'email': req.body.email }).exec(function (err, user) {
      if (err) {
        res.send({ error: "Something went wrong. Please try again." });
      } else if (user) {

        res.send({ error: "EMAIL_ERR" })
      } else {
        var transporter = nodemailer.createTransport({

          service: 'Gmail',
          auth: {
            user: 'XXXXXXXXXXXXXX',
            pass: 'XXXXXXX'
          }
        });

        var mailOption = {
          from: 'TechBirdies <xxxxxxxx@gmail.com>',
          to: email,
          subject: 'Welcome to TechBirdie',
          text: "Your verification code is " + code + "Enter this code to register.",
          html: '<b>TechBirdie </b>helps you to manage your project in better way.<h2>Verification code for registering TechBirdie app </h2> Verification code :<b>' + code + '</b> <br><b>Enter this code in TechBirdie App to register.</b>'
        }
        transporter.sendMail(mailOption, function (error, info) {
          if (error) {
            console.log(error);
            res.redirect('/index.html')
          }
          else {
            console.log("success");
            res.send({ code: code });
          }
        });

      }//main else

    });


  });
  //verify new user ends
  //this is for forgot password
  router.post('/forgotpass', function (req, res, next) {
    var email = req.body.email;
    User.findOne({
      'email': req.body.email
    }).exec(function (err, user) {
      if (err) {
        res.send({ error: "Something went wrong. Please try again." });
      } else if (!user) {
        res.send({ error: "User not found. Please sign-up." });

      } else {
        var transporter = nodemailer.createTransport({

          service: 'Gmail',
          auth: {
            user: 'XXXXXXXXXXXXXXX',
            pass: 'xxxxxxx'
          }
        });
        var code = req.body.code;
        var mailOption = {
          from: 'TechBirdie <xxxxxxx@gmail.com>',
          to: email,
          subject: 'TechBirdie Password Reset',
          text: "We heard you need a password reset. Code is: " + code + "\nEnter this code to reset your password.",
          html: '<h2>Hello,</h2><h3>We heard you need a password reset. </h3><b>Enter this code to reset your password:' + code + '</b> '
        }
        transporter.sendMail(mailOption, function (error, info) {
          if (error) {
            console.log(error);
            res.json({ 'sendStatus': false });
          }
          else {
            res.json({ 'sendStatus': true });
          }
        });
      } //end of final else
    })
  });
  //forgot passwords ends here

  var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };


  return router;

}
