const router = require('express').Router();
const bodyParser = require('body-parser');
const logger = require('@logger');

const recipesRouter = require('./recipe');

router.use(bodyParser.json());

router.use(function(req, res, next) {
  logger.info(`REQUEST [${req.method}] /api${req.url}`);
  next();
});

router.get('/version', function(req, res) {
  logger.info('returning version 0.0.1')
  res.json({
    v: '0.0.1',
  })
});

router.use('/recipes', recipesRouter);

module.exports = {

  enable(app) {
    app.use('/api', router);
  },
  order: 2,

}