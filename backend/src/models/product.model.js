'use strict'
const mongoose = require('../../config/db/mongoose');

// Product Schema(Collection).
let ProductSchema = new mongoose.Schema({
  product_id: { type: Number, required: false },
  name: { type: String, required: true },
  value: { type: Number, required: true },
  color: { type: String, required: true },
  brand: { type: String, required: true },
  attribute: { type: String, required: true },
  category: { type: String, required: true }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
