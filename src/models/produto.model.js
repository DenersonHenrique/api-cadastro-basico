const DataBaseService = require('../../config/service/database.service');

module.exports.productPost = async (product) => {
    DataBaseService.save(product);//Salvar Produto.
}