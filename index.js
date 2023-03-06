const express = require('express');
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer'); // require nodemailer to send pwd recovery email
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const port = 3000;

// Transporter to send pwd recovery email
// const transporter = nodemailer.createTransport({
//   host: 'smtp-relay.sendinblue.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PWD,
//   },
// });

// Set view engine to EJS and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); // Serve public/ directory

app.use(express.urlencoded({ extended: true })); // Parse only urlencoded bodies with qs library

app.get('/', (req, res) => {
  res.render('index');
});
// .post('/', async (req, res) => {
//   const { email, msg } = req.body.user;
//   const mailOptions = {
//     // from: email,;
//     from: 'portfolio.amanda.iala@gmail.com',
//     to: 'henriquesander27@gmail.com',
//     subject: 'Contato portfólio',
//     html: `
//       <h1>Você tem uma nova mensagem do seu portfólio!</h1>
//       <h2>Usuário:</h2>
//       <p>${email}</p>
//       <h2>Mensagem:</h2>
//       <p>${msg}</p>`,
//   };
//   await transporter.sendMail(mailOptions, (err, inf) => {
//     if (err) {
//       res.send(`Error: ${err}`);
//     } else {
//       res.send(`Success: ${info.response}`);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
