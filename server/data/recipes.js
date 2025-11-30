export const recipes = [
  {
    id: 'chili-crisp-chicken',
    name: 'Chili Crisp Orange Chicken',
    emoji: '🍊',
    description: 'Sweet and spicy slow cooker chicken with orange marmalade',
    servings: '10 servings',
    time: '4-5 hours',
    baseWeight: 4,
    baseServings: 10,
    nutrition: {
      calories: 510,
      protein: '40g',
      carbs: '59g',
      fat: '10g'
    },
    ingredients: {
      chickenMarinade: [
        { name: 'Boneless, skinless chicken thighs', baseAmount: 4, unit: 'lbs', scaleWithWeight: true },
        { name: 'Orange juice', baseAmount: 1, unit: 'cups', multiplier: 1 },
        { name: 'Soy sauce', baseAmount: 6, unit: 'Tbsp', multiplier: 1 },
        { name: 'Mirin', baseAmount: 3, unit: 'Tbsp', multiplier: 1 },
        { name: 'Chili crisp', baseAmount: 1, unit: 'Tbsp', multiplier: 1 },
        { name: 'Garlic powder', baseAmount: 1, unit: 'Tbsp', multiplier: 1 },
        { name: 'Onion powder', baseAmount: 1, unit: 'Tbsp', multiplier: 1 },
        { name: 'Black pepper', baseAmount: 1, unit: 'tsp', multiplier: 1 }
      ],
      rice: [
        { name: 'Rice', baseAmount: 2.5, unit: 'cups', multiplier: 1 }
      ],
      orangeSauce: [
        { name: 'Orange marmalade', baseAmount: 0.5, unit: 'cups', multiplier: 1 },
        { name: 'Chili crisp', baseAmount: 2, unit: 'Tbsp', multiplier: 1 },
        { name: 'Seasoned rice vinegar', baseAmount: 2, unit: 'Tbsp', multiplier: 1 },
        { name: 'Honey', baseAmount: 1, unit: 'Tbsp', multiplier: 1 },
        { name: 'Ginger paste or minced ginger', baseAmount: 0.5, unit: 'Tbsp', multiplier: 1 }
      ],
      cornstarchSlurry: [
        { name: 'Cornstarch', baseAmount: 1, unit: 'Tbsp', multiplier: 1 },
        { name: 'Cold water', baseAmount: 2, unit: 'Tbsp', multiplier: 1 }
      ],
      garnish: [
        { name: 'Green onions', baseAmount: 'To taste', unit: '', multiplier: 0 },
        { name: 'White/black sesame seeds', baseAmount: 'To taste', unit: '', multiplier: 0 }
      ]
    },
    instructions: [
      'Place the chicken thighs in the slow cooker. Add the orange juice, soy sauce, mirin, chili crisp, garlic powder, onion powder, and black pepper. Stir to coat the chicken evenly. Cover and cook on high for 3-4 hours or low for 4-5 hours, until the chicken is fully cooked and tender.',
      'Once cooked, remove all the liquid from the slow cooker. If easier, remove the chicken first and transfer the liquid to a pot or pan. Bring the liquid to a boil over medium-high heat and reduce it for about 20 minutes until it thickens slightly and the flavors concentrate.',
      'Remove the pot from the heat and stir in the orange marmalade, additional chili crisp, rice vinegar, honey, and ginger paste. Mix until fully combined, then return the pot to heat for about 30 seconds to help the sauce blend together. In a small bowl, whisk the cornstarch with cold water to form a slurry. Gradually add the slurry to the sauce while stirring, and cook over medium heat until the sauce thickens to your desired consistency.',
      'While the sauce reduces, cook the rice according to package instructions. Fluff with a fork. Shred the chicken in the slow cooker using two forks. Pour the thickened orange sauce over the shredded chicken and mix until evenly coated. Divide the rice into servings and top with the orange chicken. Garnish with chopped green onions and white/black sesame seeds. Serve warm, and store leftovers in airtight, freezer-safe containers for later.'
    ]
  }
];
