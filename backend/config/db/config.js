'use strict';
//Enviroment ambiente para conexão com banco.
module.exports = {
    db: process.env.NODE_ENV === 'production' ? 'mongodb://database/product' : 'mongodb://192.168.99.100:27017/product'
};