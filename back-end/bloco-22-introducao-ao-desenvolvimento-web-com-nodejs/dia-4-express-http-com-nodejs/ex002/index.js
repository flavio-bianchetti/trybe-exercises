const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const rescue = require('express-rescue');

const app = express();

const simpsonsList = './simpsons.json';

app.use(bodyParser.json());

app.get('/simpsons', rescue( async (req, res) => {
  fs.readFile(simpsonsList, 'utf8')
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}));

app.post('/simpsons', rescue( async (req, res) => {
  const { id, name } = req.body;
  fs.readFile(simpsonsList, 'utf8')
    .then((data) => {
      const simpsons = JSON.parse(data);
      const simpson = simpsons.find((s) => s.id === `${id}`);
      if (simpson) {
        res.status(409).send('message: id already exists');
      } else {
        simpsons.push({ id, name });
        fs.writeFile(simpsonsList, JSON.stringify(simpsons))
          .then(() => res.status(204).end())
          .catch(err => res.status(500).send(err));          
      }
    })
}));

app.get('/simpsons/:id', async (req, res) => {
  const id = req.params.id;
  fs.readFile(simpsonsList, 'utf8')
    .then((data) => {
      const simpsons = JSON.parse(data);
      const simpson = simpsons.find(s => s.id === id);
      if (simpson) {
        res.status(200).send(simpson);
      } else {
        res.status(404).send({ message: 'Simpson not found' });
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => console.log('ouvindo na porta 3001!'));
