'use strict';

const express = require('express');
const router = express.Router();

const index = require('../src/routes/index');
const cadastro = require('../src/routes/produto.router');

router.use('/', index);
router.use('/produto', cadastro);//Registration route.

module.exports = router;
