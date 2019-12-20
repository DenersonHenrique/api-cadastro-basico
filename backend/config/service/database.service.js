'use strict'
const mongoose = require('../db/mongoose');

class DataBaseService {
    constructor() {}
    // Save items.
    save(collection) {
        console.log(collection);
        return new Promise((resolve, reject) => {
            collection.save().then((doc) => {
                resolve(doc);
            }, error => {
                reject(error);
            });
        });
    }
    // Get list items.
    getAll(collection) {
        return new Promise((resolve, reject) => {
            collection.find(function (error, object) {
                !error ? resolve(object) : reject(error);
            });
        });
    }
    // Get item by id.
    getById(collection, idCollection) {
        return new Promise((resolve, reject) => {
            collection.findOne({'_id': idCollection}, function (error, object) {
                !error ? resolve(object) : reject(error);
            });
        });
    }
    // Update item
    updateById(collection, idCollection) {
        return new Promise((resolve, reject) => {
            collection.update({'_id': idCollection}, function (error, object) {
                !error ? resolve(object) : reject(error);
            });
        });
    }
    // Delete item
    deleteById(collection, idCollection) {
        return new Promise((resolve, reject) => {
            collection.remove({ '_id': idCollection }, function (error, object) {
                !error ? resolve(object) : reject(error);
            });
        })
    }
}

module.exports = DataBaseService;