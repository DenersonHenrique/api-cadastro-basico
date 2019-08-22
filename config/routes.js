'use strict';

const express = require('express');
const router = express.Router();

const cadastro = require('../src/routes/produto.router');

router.use('/cadastro', cadastro);//Rota de cadastro.

module.exports = router;