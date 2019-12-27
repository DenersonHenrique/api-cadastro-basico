const modelProduct = require('../models/produto.model');
const response = require('../../config/response');// Objeto de resposta da api.
const responseHttp = require('../helpers/httpsResponse');// Objeto de resposta HTTP.
const statusCodeHttp = require('../helpers/httpStatusCode');// StatusCode request HTTP.
const NotFoundException = require('../exception/notFoundException');// Exception error not found.

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
        result = await modelProduct.productPost(product);
        responseHttp.responseAPI.success(result, res, statusCodeHttp.CREATED);
    } catch (error) {
        if (error instanceof NotFoundException)
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.NOT_FOUND, true);
        else
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.BAD_REQUEST);
    }
}

// GET products list.
exports.get = async (req, res, next) => {
    try {
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productGet(Products);
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
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productGetById(Products, id);
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
        let result = await modelProduct.productUpdate(product, id);
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
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productDelete(Products, id);
        responseHttp.responseAPI.success(result, res, statusCodeHttp.OK);
    } catch (error) {
        if (error instanceof NotFoundException)
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.NOT_FOUND, true);
        else
            responseHttp.responseAPI.error(error.message, res, statusCodeHttp.BAD_REQUEST);
    }
}
