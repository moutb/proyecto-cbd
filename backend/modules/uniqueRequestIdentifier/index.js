const uuid = require('node-uuid');
const httpContext = require('express-http-context');

module.exports = {
  enable(app) {
    app.use(httpContext.middleware);

    app.use(function setContext(req, res, next) {
      const reqid = uuid.v1();
      httpContext.set('reqId', reqid);
      next();
    });
  },
  order: 0,  
}