require('dotenv').config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanxxxxxxxxxxxxxxxx@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'sandxxxxxxxxxxxxx@gmail.com',
  to: 'vcsanxxxdexxxxxxxxxxxxxxx@gmail.com',
  subject: 'Sending Email using Node.js',
  text:"Hi guys ,Welcome to the learning points",
  attachments:[
            {
                path : '../data1.xlsx'
            },
            {
                path : '../readme.txt'
            },
            {
                path:  './file.txt'
            }
        ]
  html: '<h style="background-color:yellow"><h1 style="color:blue">Welcome</h1><p>That was easy!</p></h>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
