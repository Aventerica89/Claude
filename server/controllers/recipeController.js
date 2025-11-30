import { recipes } from '../data/recipes.js';

// Get all recipes
export const getAllRecipes = (req, res) => {
  try {
    const recipeList = recipes.map(recipe => ({
      id: recipe.id,
      name: recipe.name,
      emoji: recipe.emoji,
      description: recipe.description,
      servings: recipe.servings,
      time: recipe.time
    }));
    res.json(recipeList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};

// Get single recipe by ID
export const getRecipeById = (req, res) => {
  try {
    const { id } = req.params;
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
};

// Calculate scaled ingredients
export const calculateIngredients = (req, res) => {
  try {
    const { id } = req.params;
    const { chickenWeight } = req.body;

    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    if (!chickenWeight || chickenWeight <= 0) {
      return res.status(400).json({ error: 'Invalid chicken weight' });
    }

    const multiplier = chickenWeight / recipe.baseWeight;
    const servings = Math.round(recipe.baseServings * multiplier);

    const formatAmount = (value, decimals = 1) => {
      if (typeof value === 'string') return value;
      return value.toFixed(decimals).replace(/\.0+$/, '');
    };

    const scaleIngredients = (ingredientList) => {
      return ingredientList.map(ingredient => {
        if (ingredient.scaleWithWeight) {
          return {
            ...ingredient,
            amount: formatAmount(chickenWeight, 2)
          };
        } else if (ingredient.multiplier > 0) {
          return {
            ...ingredient,
            amount: formatAmount(ingredient.baseAmount * multiplier, ingredient.baseAmount < 1 ? 2 : 1)
          };
        } else {
          return {
            ...ingredient,
            amount: ingredient.baseAmount
          };
        }
      });
    };

    const scaledIngredients = {
      chickenMarinade: scaleIngredients(recipe.ingredients.chickenMarinade),
      rice: scaleIngredients(recipe.ingredients.rice),
      orangeSauce: scaleIngredients(recipe.ingredients.orangeSauce),
      cornstarchSlurry: scaleIngredients(recipe.ingredients.cornstarchSlurry),
      garnish: scaleIngredients(recipe.ingredients.garnish)
    };

    res.json({
      recipeId: recipe.id,
      chickenWeight,
      servings,
      multiplier,
      ingredients: scaledIngredients,
      nutrition: recipe.nutrition,
      instructions: recipe.instructions
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate ingredients' });
  }
};
