const { RecipeRepository } = require('@repository');
const nano = require('nano');
const { database } = require('@config');


class RecipeService {

  constructor() {
    this.repository = new RecipeRepository();
  }

  createRecipe(recipe) {
    return this.repository.insert(recipe);
  }

  getRecipe(id) {
    return this.repository.get(id);
  }

  listRecipes() {
    return this.repository.list();
  }

  searchRecipes(filters) {
    return this.repository.find(['name', 'type', 'difficulty'], {
      ...filters,
      type: 'recipe',
    }, 0, 20);
  }

  getAttachment(docId, attName) {
    return this.repository.getAttachment(docId, attName);
  }

  listIngredients() {
    return this.repository.ingredients();
  }
 
}

module.exports = new RecipeService();