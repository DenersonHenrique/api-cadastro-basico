'use strict'
const mongoose = require('../db/mongoose');

class DataBaseService {
    constructor() {}
    // Save item.
    save(collection) {
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
            let valuesUpdate = { $set: {name: "Iphone"} };
            collection.updateOne({ '_id': idCollection }, valuesUpdate, function (error, object) {
                console.log(object);
                !error ? resolve(object) : reject(error);
            });
        });
    }
    // Delete item
    deleteById(collection, idCollection) {
        return new Promise((resolve, reject) => {
            collection.deleteOne({ '_id': idCollection }, function (error, object) {
                !error ? resolve(object) : reject(error);
            });
        })
    }
}

module.exports = DataBaseService;