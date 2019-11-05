'use strict';

const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
    mongoose.Promise = global.Promise;
    //Conexão com mongo db.
    let db = mongoose.connect(config.db, { promiseLibrary: require('bluebird'), useUnifiedTopology: true, useNewUrlParser: true });

    db.then((conn) => {
        console.log('Conectado com MongoDB');
    })
        .catch((err) => {
            console.log(err);
        })

    // Registrar schemas e modelos
    require('./product.model');

    return db;
};