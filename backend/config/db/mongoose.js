'use strict';

const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
    mongoose.Promise = global.Promise;
    //Connection with mongodb
    let db = mongoose.connect(config.db, { promiseLibrary: require('bluebird'), useUnifiedTopology: true, useNewUrlParser: true });
    db.then((conn) => {
        console.log(mongoose.connection.readyState);//Connection status.
        console.log('Connected with MongoDB');
    })
    .catch((err) => {
            console.log(mongoose.connection.readyState);//Connection status.
            console.log(err);
        })

    //Register schemas and models.
    require('./product.model');

    return db;
};