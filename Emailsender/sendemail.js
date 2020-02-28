require('dotenv').config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sandeepirctc2020@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'sandeepirctc2020@gmail.com',
  to: 'sandeepkumar2016000@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h style="background-color:yellow"><h1 style="color:blue">Welcome</h1><p>That was easy!</p></h>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});