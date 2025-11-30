import express from 'express';
import { getAllRecipes, getRecipeById, calculateIngredients } from '../controllers/recipeController.js';

const router = express.Router();

// Get all recipes
router.get('/', getAllRecipes);

// Get single recipe by ID
router.get('/:id', getRecipeById);

// Calculate scaled ingredients
router.post('/:id/calculate', calculateIngredients);

export default router;
