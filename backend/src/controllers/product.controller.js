const Product = require('../models/product.model')// Schema register.
const responseHttp = require('../helpers/httpsResponse');// Objeto de resposta HTTP.
const statusCodeHttp = require('../helpers/httpStatusCode');// StatusCode request HTTP.
const NotFoundException = require('../exception/notFoundException');// Exception error not found.

// POST - Save product.
exports.post = async (req, res, next) => {
  try {
    let data = req.body;
    const result = await Product.create(data);
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
    const result = await Product.find();
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
  try {
    const result = await Product.findById(req.params.id);
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
  try {
    const result = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
  try {
    const result = await Product.findByIdAndRemove(req.params.id);
    responseHttp.responseAPI.success(result, res, statusCodeHttp.OK);
  } catch (error) {
    if (error instanceof NotFoundException)
      responseHttp.responseAPI.error(error.message, res, statusCodeHttp.NOT_FOUND, true);
    else
      responseHttp.responseAPI.error(error.message, res, statusCodeHttp.BAD_REQUEST);
  }
}
