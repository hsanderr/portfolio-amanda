const express = require('express');
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer'); // require nodemailer to send pwd recovery email
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const emailUser = process.env.EMAIL_USER;
const emailPwd = process.env.EMAIL_PWD;
const personalEmail = 'amanda.ialamov@gmail.com';

const app = express();
const port = 3000;

// Transporter to send emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPwd,
  },
});

// Set view engine to EJS and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); // Serve public/ directory

app.use(express.urlencoded({ extended: true })); // Parse only urlencoded bodies with qs library

app
  .get('/', (req, res) => {
    res.render('index');
  })
  .post('/', (req, res) => {
    const { email, msg } = req.body.user;
    const mailOptions = {
      from: emailUser,
      to: personalEmail,
      subject: 'Contato através do portfólio',
      html: `
      <h1>Você tem uma nova mensagem do seu portfólio!</h1>
      <h2>Usuário:</h2>
      <p>${email}</p>
      <h2>Mensagem:</h2>
      <p>${msg}</p>`,
    };
    transporter.sendMail(mailOptions, (err, inf) => {
      if (err) {
        res.render('emailError');
      } else {
        res.render('emailSuccess');
      }
    });
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
