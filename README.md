# Recipe Library

A simple and efficient recipe management system with functions to store, retrieve, search, and filter recipes.

## Features

- **Store recipes** in JSON format with detailed nutrition information
- **Search recipes** by name, ingredients, or tags
- **Filter recipes** by nutritional values (calories, protein, carbs, fat)
- **Retrieve recipes** by ID or tags
- **View all recipes** in the library

## Structure

```
recipes/
├── data/           # Recipe JSON files
├── lib/            # Recipe library functions
│   └── recipeLibrary.js
└── example.js      # Usage examples
```

## Available Functions

### `getAllRecipes()`
Returns all recipes in the library.

### `getRecipeById(id)`
Get a specific recipe by its ID.

### `addRecipe(recipe)`
Add a new recipe to the library.

### `searchRecipes(query)`
Search recipes by name, ingredients, or tags.

### `getRecipesByTag(tag)`
Get all recipes with a specific tag.

### `getRecipesByNutrition(filters)`
Filter recipes by nutritional values.
- Example: `{ maxCalories: 500, minProtein: 40, maxCarbs: 50, maxFat: 15 }`

## Usage

```javascript
const recipeLibrary = require('./recipes/lib/recipeLibrary');

// Get all recipes
const recipes = recipeLibrary.getAllRecipes();

// Get a specific recipe
const recipe = recipeLibrary.getRecipeById('tzatziki-chicken-harissa-spiced-rice');

// Search for chicken recipes
const chickenRecipes = recipeLibrary.searchRecipes('chicken');

// Get high-protein recipes
const highProtein = recipeLibrary.getRecipesByTag('high-protein');

// Filter by nutrition
const healthyRecipes = recipeLibrary.getRecipesByNutrition({
  maxCalories: 500,
  minProtein: 40
});
```

## Run Examples

```bash
npm run example
```

## Current Recipes

- **Tzatziki Chicken & Harissa Spiced Rice** - Greek-inspired slow cooker meal with high protein (49g per serving)
