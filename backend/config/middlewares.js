'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const jsyaml = require('js-yaml');
const swaggerTools = require('swagger-tools');
const swaggerUIExpress = require('swagger-ui-express');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

//The Swagger document
const spec = fs.readFileSync(path.join(__dirname, '../src/swagger/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

//Initialize the Swagger middleware -- http://localhost:3000/api-docs/
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    app.use('/api-docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerDoc, true));

    app.use(middleware.swaggerMetadata());

    app.use(middleware.swaggerRouter({ controllers: path.join(__dirname, '../src/controllers'), useStubs: false }));

    app.use(middleware.swaggerUi());
});

//Aplication routes.
const routes = require('../config/routes');
app.use('/item', routes);

module.exports = app;
