const DataBaseService = require('../../config/service/database.service');

module.exports.productPost = async (product) => {
    let dataBaseService = new DataBaseService();
    return await dataBaseService.save(product);//Salvar Produto.
}