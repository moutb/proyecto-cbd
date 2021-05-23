const router = require('express').Router();
const logger = require('@logger');
const { RecipesService } = require('@services');
const { RequestUtil } = require('@util');

const ALLOWED_FILTERS = ['name'];

router.get('', async function(req, res) {
  logger.info('listing recipes...')
  try {
    const recipes = await RecipesService.listRecipes();

    res.json({
      recipes
    });
  } catch (ex) {
    logger.error('error listing recipes', ex);
    res.status(500);
    res.send({
      message: 'Unhandled error listing recipes'
    })
  }
});

router.get('/ingredients', async function(req, res) {
  logger.info('listing ingredients...')
  try {
    const ingredients = await RecipesService.listIngredients();

    res.json({
      ingredients
    });
  } catch (ex) {
    logger.error('error listing ingredients', ex);
    res.status(500);
    res.send({
      message: 'Unhandled error listing ingredients'
    })
  }
});

router.get('/search', RequestUtil.parseQueryFilters(ALLOWED_FILTERS), async function(req, res) {
  try {
    const { filters } = req;
    
    logger.info('searching recipes filtering by ' + JSON.stringify(filters));
    const recipes = await RecipesService.searchRecipes(filters);

    res.json({
      recipes
    });
  } catch (ex) {
    logger.error('error searching recipes', ex);
    res.status(500);
    res.send({
      message: 'Unhandled error searching recipes'
    })
  }  
});

router.get('/:id/attachment', async function(req, res) {
  console.log('get attachment request', req.url);
  try {
    if (typeof req.query.name !== 'string') {
      res.status(400)
      res.send({ message: 'Request was missing name parameter' });
      return;
    }
    const { id } = req.params;

    const data = await RecipesService.getAttachment(id, req.query.name);
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Content-Length', data.length);
    res.write(data, 'binary');
    res.end();

    /*console.log('stream', stream);
    stream.
      on('error', (e) => {
        logger.error('error getting recipe attachment: ' + e.message)
        res.status(500)
        res.send({
          message: e
        })
      })
      .on('finish', () => {
        res.status(200);
      })
      .pipe(res)*/

  } catch (ex) {
    logger.error('error getting recipe attachment', ex);
    console.error(ex);
    res.status(500);
    res.send({
      message: 'Unhandled error getting recipe attachment'
    })
  }
});

router.get('/:id', async function(req, res) {
  try {
    const { id } = req.params;
    
    logger.info('searching recipes filtering by ' + JSON.stringify(filters));
    const recipes = await RecipesService.searchRecipes(filters);

    res.json({
      recipes
    });
  } catch (ex) {
    logger.error('error searching recipes', ex);
    res.status(500);
    res.send({
      message: 'Unhandled error searching recipes'
    })
  }  
});

module.exports = router;