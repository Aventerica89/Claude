const recipeLibrary = require('./lib/recipeLibrary');

// Example usage of recipe library functions

console.log('=== Recipe Library Examples ===\n');

// 1. Get all recipes
console.log('1. Get all recipes:');
const allRecipes = recipeLibrary.getAllRecipes();
console.log(`Found ${allRecipes.length} recipe(s)`);
allRecipes.forEach(recipe => {
  console.log(`  - ${recipe.name} (${recipe.servings} servings, ${recipe.nutrition.calories} cal)`);
});
console.log();

// 2. Get recipe by ID
console.log('2. Get recipe by ID:');
const recipe = recipeLibrary.getRecipeById('tzatziki-chicken-harissa-spiced-rice');
if (recipe) {
  console.log(`  Found: ${recipe.name}`);
  console.log(`  Cuisine: ${recipe.cuisine}`);
  console.log(`  Difficulty: ${recipe.difficulty}`);
  console.log(`  Total Time: ${recipe.totalTime}`);
}
console.log();

// 3. Search recipes
console.log('3. Search recipes (query: "chicken"):');
const searchResults = recipeLibrary.searchRecipes('chicken');
searchResults.forEach(recipe => {
  console.log(`  - ${recipe.name}`);
});
console.log();

// 4. Get recipes by tag
console.log('4. Get recipes by tag (tag: "high-protein"):');
const highProteinRecipes = recipeLibrary.getRecipesByTag('high-protein');
highProteinRecipes.forEach(recipe => {
  console.log(`  - ${recipe.name} (${recipe.nutrition.protein}g protein)`);
});
console.log();

// 5. Filter recipes by nutrition
console.log('5. Filter recipes by nutrition (max 500 calories, min 40g protein):');
const filteredRecipes = recipeLibrary.getRecipesByNutrition({
  maxCalories: 500,
  minProtein: 40
});
filteredRecipes.forEach(recipe => {
  console.log(`  - ${recipe.name}: ${recipe.nutrition.calories} cal, ${recipe.nutrition.protein}g protein`);
});
console.log();

// 6. Display full recipe details
if (recipe) {
  console.log('6. Full recipe details:');
  console.log(`\n=== ${recipe.name} ===`);
  console.log(`Servings: ${recipe.servings}`);
  console.log(`Prep Time: ${recipe.prepTime}`);
  console.log(`Cook Time: ${recipe.cookTime}`);
  console.log(`\nNutrition (per serving):`);
  console.log(`  Calories: ${recipe.nutrition.calories}`);
  console.log(`  Protein: ${recipe.nutrition.protein}g`);
  console.log(`  Carbs: ${recipe.nutrition.carbs}g`);
  console.log(`  Fat: ${recipe.nutrition.fat}g`);

  console.log(`\nIngredients:`);
  recipe.ingredients.forEach(section => {
    console.log(`\n  ${section.section}:`);
    section.items.forEach(item => {
      console.log(`    - ${item}`);
    });
  });

  console.log(`\nInstructions:`);
  recipe.instructions.forEach(instruction => {
    console.log(`  ${instruction.step}. ${instruction.description}`);
  });
}
