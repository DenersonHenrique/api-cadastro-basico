'use strict';

const http = require('http');
const app = require('./middlewares');
const mongoose = require('./db/mongoose');

const server = http.createServer(app);

mongoose();

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
