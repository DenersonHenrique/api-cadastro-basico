const DataBaseService = require('../../config/service/database.service');

module.exports.productPost = async (product) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.save(product);// Save item.
}

module.exports.productGet = async (product) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.getAll(product);// Get items list.
}

module.exports.productGetById = async (product, id) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.getById(product, id);// Get item by id.
}

module.exports.productUpdate = async (product, id) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.updateById(product, id);// Update item by id.
}

module.exports.productDelete = async (product, id) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.deleteById(product, id);// Delete item by id.
}
