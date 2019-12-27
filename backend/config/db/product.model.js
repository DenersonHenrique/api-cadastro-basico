'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Product Model(Collection)
let ProductSchema = new Schema({
    product_id: { type: Number, required: false },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    attribute: { type: String, required: true },
    category: { type: String, required: true }
});

mongoose.model('Product', ProductSchema);
