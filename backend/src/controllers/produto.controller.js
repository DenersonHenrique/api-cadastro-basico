const modelProduct = require('../models/produto.model');

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
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// GET products list.
exports.get = async (req, res, next) => {
    try {
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productGet(Products);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// GET item por id
exports.getById = async (req, res, next) => {
    let id = req.params.id;
    try {
        const Products = require('mongoose').model('Product');
        let result = await modelProduct.productGet(Products, id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
