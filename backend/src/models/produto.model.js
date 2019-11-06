const DataBaseService = require('../../config/service/database.service');

module.exports.productPost = async (product) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.save(product);// Save item.
}

module.exports.productGet = async (product) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.getAll(product);// Get items list.
}

module.exports.productGet = async (product, id) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.getById(product, id);// Get item by id.
}
