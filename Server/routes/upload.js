
var fs = require('fs');
var cloudinary = require('cloudinary').v2;

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
    cloud_name: 'xxxxxxxx',
    api_key: 'XXXXXXXXXXX',
    api_secret: 'xxxxxxxxxxxxxxx'
});

console.log("** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");

module.exports = cloudinary;