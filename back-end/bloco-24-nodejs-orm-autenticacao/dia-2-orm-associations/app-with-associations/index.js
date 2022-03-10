require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const employeesController = require('./src/controllers/employeesController');

const PORT = process.env.APP_PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.use('/employees', employeesController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
