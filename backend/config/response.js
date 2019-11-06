module.exports.responseApi = (data, req, res) => {
    res.status(data.status).json(data);
}
