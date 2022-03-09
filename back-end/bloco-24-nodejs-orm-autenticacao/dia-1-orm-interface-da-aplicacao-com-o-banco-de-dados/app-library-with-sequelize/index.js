const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const bookController = require('./src/controllers/bookController');
const PORT = process.env.APP_PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use('/books', bookController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
