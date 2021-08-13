module.exports = {
	'facebookAuth' : {
		'clientID': process.env.FACEBOOK_APP_CLIENTID||"608841699974896",
		'clientSecret': process.env.FACEBOOK_APP_CLIENTSECRET||"4156cee178830e7c3f9adb66594defb2",
		'callbackURL': process.env.FACEBOOK_APP_CALLBACKURL||'http://localhost:8080/auth/facebook/callback'
	},
	'googleAuth' : {
		'clientID':process.env.GOOGLE_APP_CLIENTID||"218156326871-mqv1a04adgb2smlhprk633p26k070bgr.apps.googleusercontent.com" ,
		'clientSecret':process.env.GOOGLE_APP_CLIENTSECRET||"5zBt0kw6dwllLllLqvn9T6KQ",
		'callbackURL': process.env.GOOGLE_APP_CALLBACKURL||'http://localhost:8080/auth/google/callback'
},
	'githubAuth' : {
		'clientID': process.env.GITHUB_APP_CLIENTID||"26f08576b86ec549a368",
    'clientSecret': process.env.GITHUB_APP_CLIENTSECRET||"0306c3f70e11af5a4ac9e11b7b41174a4e1b3a30",
    'callbackURL': process.env.GITHUB_APP_CALLBACKURL||"http://localhost:8080/auth/github/callback"
	},
	'dropboxAuth':{
		'clientID':process.env.DROPBOX_APP_CLIENTID||"xhr4rvb0mv5h05i",
		'clientSecret':process.env.DROPBOX_APP_CLIENTSECRET||"toy07da0j1ruu5y",
		'callbackURL': process.env.DROPBOX_APP_CALLBACKURL||"http://limber.stackroute.in:8080/auth/dropbox/callback"
	}
}
