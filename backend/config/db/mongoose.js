'use strict';

const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(config.db, { promiseLibrary: require('bluebird'), useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise;

module.exports = mongoose
