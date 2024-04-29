const DishInventory = [
  {
    id: 1,
    name: "Ramen",
    rating: 5,
    time: 45,
    difficulty: "Easy",
    description: "Ramen is a beloved Japanese noodle soup, renowned for its flavorful broth, chewy noodles, and varied toppings like sliced pork, soft-boiled egg, and green onions. With broth options like shoyu, shio, miso, and tonkotsu, and noodles made from wheat flour, ramen offers a delightful culinary experience enjoyed worldwide.",
    categories: ["Medium Difficulty", "Japanese", "Soup"],
    image: "/images/Ramen.jpg",
    steps: [
      "Boil the broth and cook the noodles",
      "Prepare the toppings",
      "Assemble the dish"
    ],
    ingredients: [
      "Noodles",
      "Pork broth",
      "Soy sauce",
      "Sliced pork",
      "Green onions"
    ],
    nutrition: {
      calories: 500,
      protein: 25,
      carbs: 50,
      fat: 20
    }
  },
  {
    id: 2,
    name: "Margherita Pizza",
    rating: 4,
    time: 30,
    difficulty: "Medium",
    description: "Margherita Pizza is a simple yet delicious Italian pizza, featuring a classic combination of fresh tomato sauce, mozzarella cheese, fresh basil, and a drizzle of olive oil. It's a testament to the beauty of Italian cuisine with its crispy crust and vibrant flavors.",
    categories: ["Italian", "Vegetarian", "Baking"],
    image: "/images/MargheritaPizza.jpg",
    steps: [
      "Prepare the pizza dough",
      "Spread the tomato sauce and add cheese",
      "Bake the pizza and garnish with basil"
    ],
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil"
    ],
    nutrition: {
      calories: 300,
      protein: 15,
      carbs: 35,
      fat: 10
    }
  },
  {
    id: 3,
    name: "Caesar Salad",
    rating: 5,
    time: 15,
    difficulty: "Easy",
    description: "Caesar Salad is a classic American salad with romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper. It's a fresh, tangy, and creamy salad that's perfect as a side dish or a light meal.",
    categories: ["Salad", "American", "Low Calories"],
    image: "/images/CaesarSalad.jpg",
    steps: [
      "Mix the dressing",
      "Toss the lettuce and croutons with the dressing",
      "Sprinkle with Parmesan cheese and serve"
    ],
    ingredients: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Anchovies",
      "Garlic"
    ],
    nutrition: {
      calories: 170,
      protein: 7,
      carbs: 8,
      fat: 12
    }
  },
  {
    id: 4,
    name: "Tacos al Pastor",
    rating: 4,
    time: 30,
    difficulty: "Medium",
    description: "Tacos al Pastor is a popular Mexican street food dish featuring marinated pork that's traditionally cooked on a vertical spit. The flavorful pork is served on small tortillas and often topped with pineapple, onions, and cilantro.",
    categories: ["Mexican", "Street Food", "Tacos"],
    image: "/images/TacosAlPastor.jpg",
    steps: [
      "Marinate the pork with traditional spices",
      "Cook the pork on a grill or skillet",
      "Warm the tortillas and assemble the tacos with toppings"
    ],
    ingredients: [
      "Pork shoulder",
      "Achiote paste",
      "Chipotle peppers",
      "Pineapple",
      "Corn tortillas",
      "Cilantro",
      "Onions"
    ],
    nutrition: {
      calories: 350,
      protein: 23,
      carbs: 26,
      fat: 16
    }
  },
  {
    id: 5,
    name: "Kung Pao Chicken",
    rating: 4,
    time: 25,
    difficulty: "Medium",
    description: "Kung Pao Chicken is a classic Sichuan dish known for its spicy and bold flavors, combining marinated chicken with a tangy sauce, peanuts, and chili peppers. It's a stir-fried dish that's a staple in both Chinese restaurants and household kitchens.",
    categories: ["Chinese", "Spicy", "Stir Fry"],
    image: "/images/KungPaoChicken.jpg",
    steps: [
      "Marinate the chicken in soy sauce and sherry",
      "Stir fry the chicken with vegetables and peanuts",
      "Add Sichuan sauce and simmer"
    ],
    ingredients: [
      "Chicken breast",
      "Soy sauce",
      "Shaoxing wine",
      "Peanuts",
      "Dried chili peppers",
      "Bell peppers",
      "Sichuan peppercorns"
    ],
    nutrition: {
      calories: 290,
      protein: 20,
      carbs: 24,
      fat: 12
    }
  }
  
];

export default DishInventory;
