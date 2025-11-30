const fs = require('fs');
const path = require('path');

const RECIPES_DIR = path.join(__dirname, '../data');

/**
 * Get all recipes from the library
 * @returns {Array} Array of all recipes
 */
function getAllRecipes() {
  const files = fs.readdirSync(RECIPES_DIR).filter(file => file.endsWith('.json'));
  return files.map(file => {
    const filePath = path.join(RECIPES_DIR, file);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  });
}

/**
 * Get a recipe by ID
 * @param {string} id - Recipe ID
 * @returns {Object|null} Recipe object or null if not found
 */
function getRecipeById(id) {
  const filePath = path.join(RECIPES_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

/**
 * Add a new recipe to the library
 * @param {Object} recipe - Recipe object
 * @returns {Object} Added recipe with generated ID
 */
function addRecipe(recipe) {
  const id = recipe.id || generateId(recipe.name);
  const recipeWithId = { ...recipe, id };
  const filePath = path.join(RECIPES_DIR, `${id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(recipeWithId, null, 2));
  return recipeWithId;
}

/**
 * Search recipes by name, ingredients, or tags
 * @param {string} query - Search query
 * @returns {Array} Array of matching recipes
 */
function searchRecipes(query) {
  const recipes = getAllRecipes();
  const lowerQuery = query.toLowerCase();

  return recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(lowerQuery);
    const ingredientMatch = recipe.ingredients.some(section =>
      section.items && section.items.some(item =>
        item.toLowerCase().includes(lowerQuery)
      )
    );
    const tagMatch = recipe.tags && recipe.tags.some(tag =>
      tag.toLowerCase().includes(lowerQuery)
    );

    return nameMatch || ingredientMatch || tagMatch;
  });
}

/**
 * Get recipes by tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} Array of recipes with the specified tag
 */
function getRecipesByTag(tag) {
  const recipes = getAllRecipes();
  return recipes.filter(recipe =>
    recipe.tags && recipe.tags.includes(tag)
  );
}

/**
 * Get recipes by dietary filter (e.g., calories, protein, carbs, fat)
 * @param {Object} filters - Filter object with min/max values
 * @returns {Array} Array of recipes matching the filters
 */
function getRecipesByNutrition(filters) {
  const recipes = getAllRecipes();

  return recipes.filter(recipe => {
    const nutrition = recipe.nutrition;
    if (!nutrition) return false;

    if (filters.maxCalories && nutrition.calories > filters.maxCalories) return false;
    if (filters.minProtein && nutrition.protein < filters.minProtein) return false;
    if (filters.maxCarbs && nutrition.carbs > filters.maxCarbs) return false;
    if (filters.maxFat && nutrition.fat > filters.maxFat) return false;

    return true;
  });
}

/**
 * Generate a URL-safe ID from recipe name
 * @param {string} name - Recipe name
 * @returns {string} Generated ID
 */
function generateId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  addRecipe,
  searchRecipes,
  getRecipesByTag,
  getRecipesByNutrition
};
