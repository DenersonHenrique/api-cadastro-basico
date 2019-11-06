const modelProduct = require('../models/produto.model');
const response = require('../../config/response');

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
        response.responseApi(error, req, res);
    }
}

// GET products list.
exports.get = async (req, res, next) => {
    try {
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productGet(Products);
        response.responseApi(result, req, res);
    } catch (error) {
        response.responseApi(error, req, res);
    }
}