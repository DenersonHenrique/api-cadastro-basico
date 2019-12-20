const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto.controller');

router.get('/', controller.get);// Get list items.
router.post('/', controller.post);// Save Item.
router.get('/:id', controller.getById);// Get Item by Id.
router.update('/:id', controller.update);// Update item by id.
router.delete('/:id', controller.delete);// Delete item by id.

module.exports = router;
