var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akkizade25@gmail.com',
    pass: 'Akki@2000'
  }
});

var mailOptions = {
  from: 'akkizade25@gmail.com',
  to: 'akshayzade707@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});