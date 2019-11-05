const modelProduct = require('../models/produto.model');

// POST Cadastro de produto.
exports.post = async (req, res, next) => {
    let data = req.body;
    try {
        const Products = require('mongoose').model('Product');
        let product = new Products();
        // product.product_id = data.product_id;
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

// GET Lista de produtos
exports.get = async (req, res, next) => {
    try {
        const Products = require('mongoose').model('Product');
        let product = new Products();
        let result = await modelProduct.productGet(product);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}