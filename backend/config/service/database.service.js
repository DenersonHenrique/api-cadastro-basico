'use strict'
const mongoose = require('../db/mongoose');
// Salvar coleção no Banco de Dados
class DataBaseService {
    constructor() {}

    save(collection) {
        return new Promise((resolve, reject) => {
            mongoose().on('connected', function () {
                collection.save().then((doc) => {
                    resolve(doc)
                }, error => {
                    reject(error)
                })
            }).on('disconnected', function () {
                reject("Falha ao abrir conexão com o banco de dados");
            });
        })
    }
}

module.exports = DataBaseService;