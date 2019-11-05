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

}

module.exports = DataBaseService;