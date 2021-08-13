const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
var mongoose = require('mongoose'),
	User = require('./models/user'),
	LocalStrategy = require('passport-local').Strategy,
	FacebookStrategy = require('passport-facebook').Strategy,
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	configAuth = require('./config/auth'),
	bCrypt = require('bcrypt-nodejs');
module.exports = function (passport) {
	console.log("Came here");
	passport.use(new JWTStrategy({
		jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
		secretOrKey: 'techbirdies'
	},
		function (jwtPayload, cb) {
			console.log("showing payload");
			console.log(jwtPayload);
			if (jwtPayload.id) {
				return cb(null, jwtPayload);
			} else {
			  return cb(err);
			}
		}
	));

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	passport.serializeUser(function (user, done) {
		console.log("in serializeUser");
		console.log(user);
		done(null, user._id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	passport.use('local-login', new LocalStrategy({
		passReqToCallback: true,
		usernameField: 'email',
		passwordField: 'password'
	},
		function (req, email, password, done) {
			console.log(email);
			console.log(password);
			// check in mongo if a user with email exists or not
			User.findOne({ 'email': email },
				function (err, user) {
					// In case of any error, return using the done method
					if (err)
						return done(err);
					// Email does not exist, log the error and redirect back
					if (!user) {
						return done(null, false);
					}
					// User exists but wrong password, log the error
					if (!isValidPassword(user, password)) {
						return done(null, false); // redirect back to login page
					}
					else {
						console.log("passing This: ", user.email);
						return done(null, user);
					}

				});
		}
	));

	passport.use('sign-up', new LocalStrategy({
		passReqToCallback: true,// allows us to pass back the entire request to the callback
		usernameField: 'email',
		passwordField: 'password'
	},

		function (req, email, password, done) {
			console.log(req.body);
			// find a user in mongo with provided email
			User.findOne({ 'email': email }, function (err, user) {
				// In case of any error, return using the done method
				if (err) {
					return done(err);
				}
				// already exists
				if (user) {
					return done(null, false);
				} else {
					// if there is no user, create the user
					var newUser = new User();

					// set the user's local credentials
					newUser.email = email;
					newUser.password = createHash(password);
					if (req.body.firstName === undefined) {
						newUser.firstName = "";
					}
					else {
						newUser.firstName = req.body.firstName;
					}
					if (req.body.lastName === undefined) {
						newUser.lastName = "";
					}
					else {
						newUser.lastName = req.body.lastName;
					}
					// save the user
					newUser.save(function (err) {
						if (err) {
							throw err;
						}
						return done(null, newUser);
					});
				}
			});
		})
	);

	passport.use(new FacebookStrategy({
		clientID: configAuth.facebookAuth.clientID,
		clientSecret: configAuth.facebookAuth.clientSecret,
		callbackURL: configAuth.facebookAuth.callbackURL,
		profileFields: ['id', 'email', 'name', 'displayName', 'photos']
	},
		function (accessToken, refreshToken, profile, done) {
			process.nextTick(function () {
				User.findOne({ 'facebook.id': profile.id }, function (err, user) {
					if (err)
						return done(err);
					if (user) {
						return done(null, user);
					} else {

						var newUser = new User();
						newUser.facebook.id = profile.id;
						newUser.facebook.token = accessToken;
						newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
						newUser.facebook.email = profile.emails[0].value;
						newUser.firstName = profile.name.givenName;
						newUser.lastName = profile.name.familyName;
						newUser.email = profile.emails[0].value;
						newUser.photo = profile.photos[0].value;

						newUser.save(function (err) {
							if (err)
								throw err;
							return done(null, newUser);
						})
					}
				});
			});
		}

	));

	passport.use(new GoogleStrategy({
		clientID: configAuth.googleAuth.clientID,
		clientSecret: configAuth.googleAuth.clientSecret,
		callbackURL: configAuth.googleAuth.callbackURL
	},
		function (accessToken, refreshToken, profile, done) {
			process.nextTick(function () {

				User.findOne({ 'google.id': profile.id }, function (err, user) {
					if (err)
						return done(err);
					if (user)
						return done(null, user);
					else {
						var newUser = new User();
						newUser.google.id = profile.id;
						newUser.google.token = accessToken;
						newUser.google.name = profile.displayName;
						newUser.google.email = profile.emails[0].value;

						a = profile.displayName.split(" ");
						newUser.firstName = a[0];
						newUser.lastName = a[a.length - 1];
						newUser.email = profile.emails[0].value;


						newUser.save(function (err) {
							if (err)
								throw err;
							return done(null, newUser);
						})
						//console.log(profile);
					}
				});
			});
		}

	));


	var isValidPassword = function (user, password) {
		console.log(password);
		console.log(user.password);
		console.log(bCrypt.compareSync(password, user.password));
		return bCrypt.compareSync(password, user.password);
	};
	// Generates hash using bCrypt
	var createHash = function (password) {
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	};

};
