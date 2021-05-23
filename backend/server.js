require('module-alias/register');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const config = require('@config');
const logger = require('@logger');
const modules = require('./modules');

const app = express();

logger.info(`-------------------------------`)
logger.info(`starting server...`)

if (config.server.corsEnabled) {
  app.use(cors());
  logger.info(`CORS is enabled`)
}

Object.keys(modules)
  .sort((m1, m2) => (modules[m2].order || Number.MAX_VALUE) - (modules[m1].order || Number.MAX_VALUE))
  .forEach(moduleName => {
    modules[moduleName].enable(app);
    logger.info(`enabled server module: ${moduleName}`)
  })

app.listen(config.server.port, () => {
  logger.info(`server listening on port ${config.server.port}`)
});

