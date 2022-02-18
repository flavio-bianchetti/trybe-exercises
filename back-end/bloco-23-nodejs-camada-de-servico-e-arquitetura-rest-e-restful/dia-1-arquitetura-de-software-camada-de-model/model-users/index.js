const express = require('express');
const bodyParser = require('body-parser');
const verifyName = require('./middleware/verifyName');
const verifyEmail = require('./middleware/verifyEmail');
const verifyPassword = require('./middleware/verifyPassword');

const app = express();
app.use(bodyParser.json());

const User = require('./models/User');

app.post(
  '/user',
  verifyName,
  verifyEmail,
  verifyPassword,
  (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;
    if (User.create(firstName, lastName, email, password)) {
      return res.status(201).json({ firstName, lastName, email, password });
    }
    return res.status(400).json({ message: 'Dados inválidos' });
  }
);

app.listen(3000, () => console.log('on port 3000'));