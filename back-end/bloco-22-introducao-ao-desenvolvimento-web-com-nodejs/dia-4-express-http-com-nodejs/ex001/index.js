const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => 
  res.json({'message': 'pong'})
);

app.post('/hello', (req, res) => {
  res.json({ 'message': `Hello, ${req.body.name}`})
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age, 10) < 18) {
    return res.status(401).json({'message': 'Unauthorized'});
  }

  res.status(200).json({ 'message': `Hello, ${name}!`})
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({'message': `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => console.log('ouvindo na porta 3001'));
