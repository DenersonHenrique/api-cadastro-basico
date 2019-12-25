module.exports.responseApi = (data, req, res) => {
    if (!data) {
        req.statusCode = 404;
        res.status(req.statusCode).json(data);
    }
    else {
        req.statusCode = 200;
        res.status(req.statusCode).json(data);
    }
}
