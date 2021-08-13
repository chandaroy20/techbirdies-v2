var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */

router.post('/query', function (req, res, next) {
  var transporter = nodemailer.createTransport({

    service: 'Gmail',
    auth: {
      user: 'XXXXXXXXXXXXXX',
      pass: 'xxxxxxx'
    }
  });
  var mailOption1 = {
    from: 'TechBirdie <xxxxxxxxx@gmail.com>',
    to: ['xxxxxxx@gmail.com','yyyyyyy@gmail.com'],
    subject: req.body.subject,
    text: "",
    html: `<h6>Hi Expert,</h6>
           <div>`+req.body.messageText+`</div><br>
           <div>Thanks</div>
           <div>`+req.body.name+`</div>
           <div>`+req.body.email+`</div>
    `
  }
  transporter.sendMail(mailOption1, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ 'sendStatus': false });
    }
    else {
      var mailOption2 = {
        from: 'TechBirdie <xxxxxxxxx@gmail.com>',
        to: req.body.email,
        subject: req.body.subject,
        text: "",
        html: `<h6>Hi `+req.body.name+`,</h6>
               <div>We have received your query. We'll get back to you shortly.</div><br>
               <div>Thanks for connecting with us.</div>
               <div>Have a wonderful day ahead!</div><br>
               <div>TechBirdies Team</div>
        `
      }
      transporter.sendMail(mailOption2, function (error2, info2) {
        if (error2) {
          console.log(error2);
        }
        else {
        }
      });
      res.json({ 'sendStatus': true });
    }
  });


});



module.exports = router;
