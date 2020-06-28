'use strict';

const http = require('http');
const app = require('./middlewares');
const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`API running port: ${port}`);
    // console.log(`Environment: ${process.env.NODE_ENV}`);
});
