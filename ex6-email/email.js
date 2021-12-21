var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sikharin.kadeeroj@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'sikharin.kadeeroj@gmail.com',
  to: 'sikharin1607@gmail.com',
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