const responseHttp = require('../helpers/httpsResponse');// Objeto de resposta HTTP.
const statusCodeHttp = require('../helpers/httpStatusCode');// StatusCode request HTTP.
const NotFoundException = require('../exception/notFoundException');// Exception error not found.
const DataBaseService = require('../../config/service/database.service');

// POST Save product.
exports.post = async (req, res, next) => {
    let data = req.body;
    try {
        const Products = require('mongoose').model('Product');
        let product = new Products();
        product.name = data.name;
        product.value = data.value;
        product.color = data.color;
        product.brand = data.brand;
        product.attribute = data.attribute;
        product.category = data.category;
        // result = await modelProduct.productPost(product);
        let dataBaseService = new DataBaseService();
        let result = await dataBaseService.save(product);// Save item.
        responseHttp.responseAPI.success(result, res, statusCodeHttp.CREATED);
    } catch (error) {
        if (error instanceof NotFoundException)
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.NOT_FOUND, true);
        else
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.BAD_REQUEST);
    }
}

// GET Products list.
exports.get = async (req, res, next) => {
    try {
        const product = require('mongoose').model('Product');
        let dataBaseService = new DataBaseService();
        let result = await dataBaseService.getAll(product);// Get items list.
        responseHttp.responseAPI.success(result, res, statusCodeHttp.OK);
    } catch (error) {
        if (error instanceof NotFoundException)
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.NOT_FOUND, true);
        else
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.BAD_REQUEST);
    }
}

// GET Product by id
exports.getById = async (req, res, next) => {
    let id = req.params.id;
    try {
        const product = require('mongoose').model('Product');
        let dataBaseService = new DataBaseService();
        let result = await dataBaseService.getById(product, id);// Get item by id.
        responseHttp.responseAPI.success(result, res, statusCodeHttp.OK);
    } catch (error) {
        if (error instanceof NotFoundException)
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.NOT_FOUND, true);
        else
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.BAD_REQUEST);
    }
}

// UPDATE Product
exports.update = async (req, res, next) => {
    let id = req.params.id;
    let data = req.body;
    try {
        const Products = require('mongoose').model('Product');
        let product = new Products();
        product.name = data.name;
        product.value = data.value;
        product.color = data.color;
        product.brand = data.brand;
        product.attribute = data.attribute;
        product.category = data.category;
        let dataBaseService = new DataBaseService();
        let result = await dataBaseService.updateById(product, id);// Update item by id.
        responseHttp.responseAPI.success(result, res, statusCodeHttp.OK);
    } catch (error) {
        if (error instanceof NotFoundException)
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.NOT_FOUND, true);
        else
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.BAD_REQUEST);
    }
}

// DELETE Product
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
        const product = require('mongoose').model('Product');
        let dataBaseService = new DataBaseService();
        let result = await dataBaseService.deleteById(product, id);// Delete item by id.
        if (result.deletedCount > 0)
            result.message =  `Registro ${id} excluido com sucesso`;
        responseHttp.responseAPI.success(result, res, statusCodeHttp.OK);
    } catch (error) {
        if (error instanceof NotFoundException)
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.NOT_FOUND, true);
        else
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.BAD_REQUEST);
    }
}
