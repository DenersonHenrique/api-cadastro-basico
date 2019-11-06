'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
// Aplication routes.
const routes = require('../config/routes');
app.use('/item', routes);

module.exports = app;