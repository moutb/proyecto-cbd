
module.exports = class RequestUtil {

  /**
   * Reads request query attribute and parse it to an operational object 
   * @param {Array<String>} allowedFilters an array with allowed filter keys
   * @returns the request middleware which evaluates request query and fill a request.filter attribute with parsed filters
   */
  static parseQueryFilters(allowedFilters) {
    return function parse(req, res, next) {
      const { query } = req;
      req.filters = allowedFilters.reduce((acum, key) => {
        if (query[key] != null) {
          let op = 'eq'; // default operator
          let value = query[key];
          if (query[key].includes(':')) {
            [op, value] = query[key].split(':')
          }
          acum[key] = { [`\$${op}`]: value };
        }
        return acum;
      }, {});
      
      next();
    };
  }

}