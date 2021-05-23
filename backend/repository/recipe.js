const Model = require('./_model');
const BaseRepository = require('./_base');

class Recipe extends Model {

  constructor(name) {
    this.name = name;
  }

}

class RecipeRepository extends BaseRepository {

  constructor() {
    super('recipes', Recipe);
  }

  async list() {
    try {
      const db = await this.getDB();
      const result = await db.view('list', 'list-recipes-view');
      return result;
    } catch (ex) {
      throw ex;
    }
  }

  async find(fields, filters) {
    try {
      const db = await this.getDB();
      const response = await db.view('list', 'list-recipes-view', {
        ...filters,
        include_docs: false
      })
      return response;
    } catch (ex) {
      throw ex;
    }
  }

  async ingredients() {
    try {
      const db = await this.getDB();
      const response = await db.view('list', 'list-ingredients-view', {
        include_docs: false
      })
      return response;
    } catch (ex) {
      throw ex;
    }
  }

}

module.exports = {
  Recipe,
  RecipeRepository,
};