const modelProduct = require('../models/produto.model');
const response = require('../../config/response');// Objeto de resposta da api.

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
        response.responseApi(result, req, res);
    } catch (error) {
        response.responseApi(error.message, req, res);
    }
}

// GET products list.
exports.get = async (req, res, next) => {
    try {
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productGet(Products);
        response.responseApi(result, req, res);
    } catch (error) {
        response.responseApi(error.message, req, res);
    }
}

// GET Product by id
exports.getById = async (req, res, next) => {
    let id = req.params.id;
    try {
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productGetById(Products, id);
        response.responseApi(result, req, res);
    } catch (error) {
        response.responseApi(error.message, req, res);
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
        response.responseApi(result, req, res);
    } catch (error) {
        response.responseApi(error.message, req, res);
    }
}

// DELETE Product
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productDelete(Products, id);
        response.responseApi(result, req, res);
    } catch (error) {
        response.responseApi(error.message, req, res);
    }
}
