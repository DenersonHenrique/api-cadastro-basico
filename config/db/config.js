'use strict';
//Enviroment ambiente para conexão com banco.
module.exports = {
    db: process.env.NODE_ENV === 'production' ? 'mongodb://database/product' : 'mongodb://localhost:27017/product'
};