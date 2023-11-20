const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

class Projeto {
  constructor(titulo, desc, img, ytUrl, teaserUrl = null) {
    this.titulo = titulo;
    this.desc = desc;
    this.img = img;
    this.ytUrl = ytUrl;
    this.teaserUrl = teaserUrl;
  }
}

const projetos = [
  new Projeto(
    'A mulher que planta cor',
    'O curta aborda a rotina da estilista e tingideira natural Thanina Godinho, \
    dando visibilidade a sua marca. "A Mulher que planta cor" invoca a moda \
    autossustentável, a beleza do criar cores e tons, sentir o processo por \
    inteiro e estar em contato com a natureza, sabendo utilizar os seus recursos \
    de maneira equilibrada.',
    'a_mulher_que_planta_cor',
    'https://youtu.be/8efarqvz4eY',
    'https://youtu.be/4Ja8VegqQ7A'
  ),
  new Projeto(
    'Agorafobia',
    'O curta conta a história de Beta, uma artista plástica que vive solitária em \
    sua casa, enfrentando o dilema entre a segurança e o conforto dentro de seus \
    ambientes e as possibilidades incertas do mundo exterior. Uma obra que busca \
    criar um paralelo com a vida de um peixe em um aquário e a ideia de liberdade \
    imersa no oceano.',
    'agorafobia',
    'https://youtu.be/zimDpGkG3eg'
  ),
  new Projeto(
    'Perpétua',
    '"Perpétua" trata-se do ciclo predatório dos medos e \
    dores comuns de uma mulher. Ao abandonar o carro \
    depois de uma briga com seu parceiro, a personagem vê, \
    em seu caminho, figuras femininas projetando as principais \
    aflições pelas quais uma mulher passa ao longo da vida.',
    'perpetua',
    'https://youtu.be/hUgAjQ7iS0Q'
  ),
  new Projeto(
    'Vinheta Tipografia Cinematográfica',
    'Vinheta submetida ao 7° Concurso de Vinhetas do Canal Curta! (2023).',
    'vinheta_tipografia',
    'https://youtu.be/jXn1wbCVogo'
  ),
  new Projeto(
    'Vinheta Queda TV',
    'Vinheta submetida ao 7° Concurso de Vinhetas do Canal Curta! (2023).',
    'vinheta_tv',
    'https://youtu.be/Ii-nFC3nTGY'
  )
];

// Transporter to send emails
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: emailUser,
//     pass: emailPwd,
//   },
// });

// Set view engine to EJS and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); // Serve public/ directory

app.use(express.urlencoded({ extended: true })); // Parse only urlencoded bodies with qs library

app.get('/', (req, res) => {
  const page = 'home';
  res.render('index', { page });
});

app.get('/bio', (req, res) => {
  const page = 'bio';
  res.render('bio', { page });
});

app.get('/projetos', (req, res) => {
  const page = 'projetos';
  res.render('projetos', { projetos, page });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
