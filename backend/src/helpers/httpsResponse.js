'use strict';

module.exports.responseAPI = {
    success: function (data, res, statusCode) {
        res.status(statusCode).json(data);
    },
    error: async function (errorMsg, res, statusCode, Known_error = false) {
        if (Known_error)
            res.status(statusCode).send({ message: errorMsg });
        else
            res.status(statusCode).send({ message: errorMsg });
    }
}
