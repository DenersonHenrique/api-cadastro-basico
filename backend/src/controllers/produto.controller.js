const modelProduct = require('../models/produto.model');

// POST Cadastro de produto.
exports.post = async (req, res, next) => {
    let data = req.body;
    let Products = require('mongoose').model('Product');
    try {
        let product = new Products();
        // product.product_id = data.product_id;
        product.name = data.name;
        product.value = data.value;
        product.color = data.color;
        product.brand = data.brand;
        product.attribute = data.attribute;
        product.category = data.category;
        result = await modelProduct.productPost(product);
    } catch (error) {
        console.log(error.message);
    }
}