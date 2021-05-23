const nano = require('nano');
const http = require('http');

const logger = require('@logger');
const { database } = require('@config');

const myagent = new http.Agent({
  keepAlive: true,
  maxSockets: 15
})

const connection = () => nano({
  url: `http://${database.user}:${database.password}@${database.host}:${database.port}`,
});

logger.debug(`connected to database at ${connection().config.url}`)

class Connection {

  static use(dbname) {
    return connection().db.use(dbname);
  }

  static async view(dbname, viewUrl, queryOptions) {
    try {
      const { data, headers, status } = couch.get(dbname, viewUrl, queryOptions);
      logger.info('view ' + viewUrl + ' result: { status: ' + status + ', headers: ' + headers  + ' }');
      return data;
    } catch (ex) {
      console.log('ex', ex);
    }
    return null;
  }

}

module.exports = Connection;