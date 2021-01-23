const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes/userRoutes')

const app = express();
app.use(bodyparser.json());

app.use('/api', router);

module.exports = app;