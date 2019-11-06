'use strict'
const mongoose = require('../db/mongoose');

class DataBaseService {
    constructor() {}
    // Save items.
    save(collection) {
        return new Promise((resolve, reject) => {
            collection.save().then((doc) => {
                resolve(doc);
            }, error => {
                reject(error);
            });
        });
    }
    // Get items list.
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