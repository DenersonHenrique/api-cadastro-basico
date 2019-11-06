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
    // Get item by id.
    getById(collection, idCollection) {
        return new Promise((resolve, reject) => {
            collection.findOne({'_id': idCollection}, function (error, object) {
                if (!error)
                    resolve(object);
                else
                    reject(error);
            });
        });
    }

}

module.exports = DataBaseService;