'use strict';

const express = require('express');
const router = express.Router();

const index = require('../src/routes/index');
const registration = require('../src/routes/product.router');

router.use('/', index);
router.use('/product', registration);//Registration route.

module.exports = router;
