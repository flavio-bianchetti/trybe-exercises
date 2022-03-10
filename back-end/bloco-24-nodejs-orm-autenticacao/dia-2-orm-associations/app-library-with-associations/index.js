require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const usersBooksController = require('./src/controllers/usersBooksController');

const PORT = process.env.APP_PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.use('/usersbooks', usersBooksController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
