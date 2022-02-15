const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const setUser = require('./middlewares/setUser');
const validateLogin = require('./middlewares/validateLogin');

app.use(bodyParser.json());

app.post('/user/register', setUser);

app.post('/user/login', validateLogin);

app.all('*', (req, res) =>
  res.status(404).json({message: `Route ${req.path} not found!`})
);

app.listen(3001, () => console.log('Server running on port 3001'));
