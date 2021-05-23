const logger = require('@logger');
const connection = require('./_connection');

module.exports = class BaseRepository {

  constructor(db, modelClass) {
    this.$db = null;
    this.$dbname = db;
    this.modelClass = modelClass;
  }

  getDB() {
    if (this.$db == null) {
      try {
        this.$db = connection.use(this.$dbname, true);
      } catch (ex) {
        this.$db = null;
        console.log('ex', ex);
        throw ex;
      }
    }
    return this.$db;
  }

  async insert(model) {
    const { modelClass } = this;
    if (!model instanceof modelClass) {
      throw new Error('cannot insert an object distinct of type ' + modelClass)
    }
    logger.info('inserting model ', model)
    const db = await this.getDB();
    return db.insert(model);
  }

  async list() {
    try {
      const db = await this.getDB();
      const result = await db.list({
        include_docs: true
      });
      return result;
    } catch (ex) {
      throw ex;
    }
  }

  async find(fields, filters={}, start, size=20) {
    try {
      const db = await this.getDB();
      const result = await db.find({
        selector: filters,
        limit: size,
        fields,
      })
      return result;
    } catch (ex) {
      throw ex;
    }
  }

  async getAttachment(docId, attName) {
    try {
      const db = await this.getDB();
      
      return db.attachment.get(
        docId,
        attName,
      )
    } catch (ex) {
      throw ex;
    }
  }

}

