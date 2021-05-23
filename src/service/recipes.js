import axios from 'axios';

const mockResponse = ({ rows = [], total = 0 }) => ({
  rows,
  total: total,
})

class RecipesService {

  async listRecipes() {
    try {
      const response = await axios.get('/recipes');
      if (response.status === 200 && response.data.recipes != null) {
        const recipes = response.data.recipes;
        if (recipes.total_rows > 0) {
          recipes.rows = recipes.rows.map(r => ({
            id: r.id,
            ...r.value
          }))
        }
        return recipes;
      }

      return mockResponse();
    } catch (ex) {
      throw ex;
    }
  }

  async listIngredients() {
    try {
      const response = await axios.get('/recipes/ingredients');
      if (response.status === 200 && response.data.ingredients != null) {
        const ingredients = response.data.ingredients;
        if (ingredients.total_rows > 0) {
          ingredients.rows = ingredients.rows.map(r => ({
            id: r.id,
            ...r.value
          }))
        }
        return ingredients;
      }

      return mockResponse();
    } catch (ex) {
      throw ex;
    }
  }

}

export default new RecipesService();