const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Api cadastro de itens com Docker e MongoDB.",
        version: "1.0.0"
    });
});

module.exports = router;