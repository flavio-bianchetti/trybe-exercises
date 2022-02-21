const express = require('express');
// const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PingController = require('./controller/PingController');
const CepController = require('./controller/CepController');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (PingController.getStatus));

app.get('/cep/:cep', CepController.isValid);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
