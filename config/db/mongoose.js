'use strict';

const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
    mongoose.Promise = global.Promise;

    let db = mongoose.connect(config.db, { promiseLibrary: require(bluebird), useMongoCliente: true });

    db.then((conn) => {
        console.log('Conectado com MongoDB');
    })
        .catch((err) => {
            console.log('Ocorreu erro ao tentar conectar com MongoDB');
        })

    // Registrar schemas e modelos
    require('./product.model');

    return db;
};