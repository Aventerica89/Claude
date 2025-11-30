import React, { useState } from 'react';

const RecipeApp = () => {
  const [currentView, setCurrentView] = useState('home');

  const recipes = [
    {
      id: 'chili-crisp-chicken',
      name: 'Chili Crisp Orange Chicken',
      emoji: '🍊',
      description: 'Sweet and spicy slow cooker chicken with orange marmalade',
      servings: '10 servings',
      time: '4-5 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-800">
      {currentView === 'home' ? (
        <HomePage recipes={recipes} onSelectRecipe={(id) => setCurrentView(id)} />
      ) : (
        <ChickenRecipeCalculator onBack={() => setCurrentView('home')} />
      )}
    </div>
  );
};

const HomePage = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center py-12 mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">🍳 Recipe Calculators</h1>
          <p className="text-xl text-white/90">Smart scaling for your favorite recipes</p>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => onSelectRecipe(recipe.id)}
              className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform text-left group"
            >
              <div className="text-6xl mb-4">{recipe.emoji}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {recipe.name}
              </h2>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>📊 {recipe.servings}</span>
                <span>⏱️ {recipe.time}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Coming Soon Placeholder */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-dashed border-white/30">
          <p className="text-white text-lg">More recipes coming soon...</p>
        </div>
      </div>
    </div>
  );
};

const ChickenRecipeCalculator = ({ onBack }) => {
  const [chickenWeight, setChickenWeight] = useState(8.86);
  const baseWeight = 4;
  const baseServings = 10;
  const multiplier = chickenWeight / baseWeight;
  const servings = Math.round(baseServings * multiplier);

  const formatAmount = (value, decimals = 1) => {
    return value.toFixed(decimals).replace(/\.0+$/, '');
  };

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="m-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          ← Back to Recipes
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-400 to-red-400 text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-2">🍊 Chili Crisp Orange Chicken</h1>
          <p className="text-white/90">Slow Cooker Recipe Calculator</p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-50 p-8 border-b-2 border-gray-200">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <label htmlFor="weight" className="text-lg font-semibold text-gray-700">
              Chicken Weight:
            </label>
            <input
              id="weight"
              type="number"
              value={chickenWeight}
              onChange={(e) => setChickenWeight(parseFloat(e.target.value) || 0)}
              step="0.01"
              min="0.1"
              className="px-5 py-3 border-2 border-gray-300 rounded-xl text-lg w-36 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
            />
            <span className="text-lg font-semibold text-gray-700">lbs</span>
          </div>
          <div className="text-center mt-4 p-4 bg-white rounded-xl">
            <span className="text-gray-600">Makes approximately </span>
            <span className="text-3xl font-bold text-pink-500">{servings}</span>
            <span className="text-gray-600"> servings</span>
          </div>
        </div>

        <div className="p-8">
          {/* Nutrition */}
          <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Per Serving Nutrition</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '510', label: 'Calories' },
                { value: '40g', label: 'Protein' },
                { value: '59g', label: 'Carbs' },
                { value: '10g', label: 'Fat' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-500">{item.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chicken & Marinade */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-4 border-purple-500">
              🍗 Chicken & Marinade
            </h2>
            <div className="space-y-3">
              <IngredientRow name="Boneless, skinless chicken thighs" amount={`${formatAmount(chickenWeight, 2)} lbs`} />
              <IngredientRow name="Orange juice" amount={`${formatAmount(1 * multiplier)} cups`} />
              <IngredientRow name="Soy sauce" amount={`${formatAmount(6 * multiplier)} Tbsp`} />
              <IngredientRow name="Mirin" amount={`${formatAmount(3 * multiplier)} Tbsp`} />
              <IngredientRow name="Chili crisp" amount={`${formatAmount(1 * multiplier)} Tbsp`} />
              <IngredientRow name="Garlic powder" amount={`${formatAmount(1 * multiplier)} Tbsp`} />
              <IngredientRow name="Onion powder" amount={`${formatAmount(1 * multiplier)} Tbsp`} />
              <IngredientRow name="Black pepper" amount={`${formatAmount(1 * multiplier)} tsp`} />
            </div>
          </div>

          {/* Rice */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-4 border-purple-500">
              🍚 Rice
            </h2>
            <div className="space-y-3">
              <IngredientRow name="Rice" amount={`${formatAmount(2.5 * multiplier)} cups`} />
            </div>
          </div>

          {/* Orange Sauce */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-4 border-purple-500">
              🍊 Orange Sauce
            </h2>
            <div className="space-y-3">
              <IngredientRow name="Orange marmalade" amount={`${formatAmount(0.5 * multiplier, 2)} cups`} />
              <IngredientRow name="Chili crisp" amount={`${formatAmount(2 * multiplier)} Tbsp`} />
              <IngredientRow name="Seasoned rice vinegar" amount={`${formatAmount(2 * multiplier)} Tbsp`} />
              <IngredientRow name="Honey" amount={`${formatAmount(1 * multiplier)} Tbsp`} />
              <IngredientRow name="Ginger paste or minced ginger" amount={`${formatAmount(0.5 * multiplier)} Tbsp`} />
            </div>
          </div>

          {/* Cornstarch Slurry */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-4 border-purple-500">
              🥄 Cornstarch Slurry
            </h2>
            <div className="space-y-3">
              <IngredientRow name="Cornstarch" amount={`${formatAmount(1 * multiplier)} Tbsp`} />
              <IngredientRow name="Cold water" amount={`${formatAmount(2 * multiplier)} Tbsp`} />
            </div>
          </div>

          {/* Garnish */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-4 border-purple-500">
              🌿 Garnish
            </h2>
            <div className="space-y-3">
              <IngredientRow name="Green onions" amount="To taste" />
              <IngredientRow name="White/black sesame seeds" amount="To taste" />
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Instructions</h3>
            <ol className="list-decimal list-outside ml-5 space-y-4 text-gray-700 leading-relaxed">
              <li>
                Place the <strong>chicken thighs</strong> in the slow cooker. Add the <strong>orange juice, soy sauce, mirin, chili crisp, garlic powder, onion powder, and black pepper</strong>. Stir to coat the chicken evenly. Cover and cook on high for 3-4 hours or low for 4-5 hours, until the chicken is fully cooked and tender.
              </li>
              <li>
                Once cooked, remove all the liquid from the slow cooker. If easier, remove the chicken first and transfer the liquid to a pot or pan. Bring the liquid to a boil over medium-high heat and reduce it for about 20 minutes until it thickens slightly and the flavors concentrate.
              </li>
              <li>
                Remove the pot from the heat and stir in the <strong>orange marmalade, additional chili crisp, rice vinegar, honey, and ginger paste</strong>. Mix until fully combined, then return the pot to heat for about 30 seconds to help the sauce blend together. In a small bowl, whisk the <strong>cornstarch with cold water</strong> to form a slurry. Gradually add the slurry to the sauce while stirring, and cook over medium heat until the sauce thickens to your desired consistency.
              </li>
              <li>
                While the sauce reduces, cook the <strong>rice</strong> according to package instructions. Fluff with a fork. Shred the chicken in the slow cooker using two forks. Pour the thickened orange sauce over the shredded chicken and mix until evenly coated. Divide the rice into servings and top with the orange chicken. Garnish with <strong>chopped green onions and white/black sesame seeds</strong>. Serve warm, and store leftovers in airtight, freezer-safe containers for later.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const IngredientRow = ({ name, amount }) => (
  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 hover:translate-x-1 transition-all">
    <span className="text-gray-700 flex-1">{name}</span>
    <span className="text-purple-600 font-semibold text-right min-w-[120px]">{amount}</span>
  </div>
);

export default RecipeApp;
