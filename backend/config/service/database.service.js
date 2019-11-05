'use strict'
const mongoose = require('../db/mongoose');
// Salvar coleção no Banco de Dados
class DataBaseService {
    constructor() {}

    save(collection) {
        return new Promise((resolve, reject) => {
            collection.save().then((doc) => {
                resolve(doc);
            }, error => {
                reject(error);
            });
        });
    }

    getAll(collection) {
        return new Promise((resolve, reject) => {
            collection.find(function (error, object) {
                if (!error)
                    resolve(object);
                else
                    reject(error);
            });
        });
    }

}

module.exports = DataBaseService;