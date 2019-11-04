const modelProduct = require('../models/produto.model');

// POST Cadastro de produto.
exports.post = async (req, res, next) => {
    result = await modelProduto.produtoPost(req);
    let data = req.body;
    let Products = require('mongoose').model('Products');
    try {
        let product = new Products();
        // product.product_id = data.product_id;
        product.name = data.nome;
        product.value = data.valor;
        product.color = data.cor;
        product.brand = data.marca;
        product.attibute = data.caracteristica;
        product.category = data.category;
        result = await modelProduct.productPost(product);
    } catch (error) {
        console.log(error.message);
    }
}