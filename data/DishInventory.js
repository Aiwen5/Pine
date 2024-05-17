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
      "Prepare the broth: In a large pot, add chicken bones, water, sliced ginger, and halved onion. Bring to a boil and then simmer for 6 hours for a rich flavor.",
      "Strain the broth and season with soy sauce for a Shoyu base, miso for a Miso base, or keep it plain for a Shio base.",
      "Cook the ramen noodles in a separate pot of boiling water until they are just tender, about 2-4 minutes.",
      "Prepare the toppings: Grill marinated pork belly until cooked, soft-boil eggs to your desired doneness, and slice green onions and nori sheets.",
      "Assemble the ramen by placing the noodles in a bowl, pouring the hot broth over them, and adding the prepared toppings. Optionally, add bamboo shoots, corn, and bean sprouts."
    ],
    ingredients: [
      "2 lbs of chicken bones",
      "6 cups of water",
      "1 piece of kombu seaweed",
      "1 ginger root, sliced",
      "1 onion, halved",
      "Soy sauce, miso paste, or salt to taste",
      "Ramen noodles",
      "Pork belly, sliced",
      "4 eggs",
      "Green onions, finely chopped",
      "Nori sheets, cut into strips",
      "Bamboo shoots, corn, and bean sprouts (optional)"
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
    categories: ["Italian", "Vegetarian"],
    image: "/images/MargheritaPizza.jpg",
    steps: [
      "Prepare the dough: Combine flour, yeast, sugar, salt, and water in a large mixing bowl. Knead until smooth and elastic, then let it rise for 1 hour.",
      "For the tomato sauce: Blend canned tomatoes, a clove of garlic, salt, and a drizzle of olive oil until smooth.",
      "Preheat your oven to its highest setting, typically between 475°F (245°C) to 500°F (260°C).",
      "Roll out the dough to a 12-inch circle and spread the tomato sauce on top, leaving the edges clear for the crust.",
      "Tear fresh mozzarella and distribute it evenly over the sauce. Drizzle with olive oil and scatter fresh basil leaves.",
      "Bake for 10-15 minutes until the crust is golden and cheese is bubbly.",
      "Remove from oven and let cool for a few minutes before slicing and serving."
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "1 tsp active dry yeast",
      "1/2 tsp sugar",
      "3/4 cup warm water",
      "1/2 tsp salt",
      "1 can (14 oz) whole peeled tomatoes",
      "1 garlic clove",
      "Salt to taste",
      "Olive oil",
      "8 oz fresh mozzarella cheese",
      "A handful of fresh basil leaves",
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
    categories: ["Salad", "American"],
    image: "/images/CaesarSalad.jpg",
    steps: [
      "Wash and dry romaine lettuce, then tear into bite-sized pieces.",
      "For the croutons, cube day-old bread, toss with olive oil and garlic, and bake until golden.",
      "In a blender, combine egg yolks, lemon juice, anchovy fillets, minced garlic, Dijon mustard, and Worcestershire sauce for the dressing.",
      "While blending, slowly drizzle in olive oil to create an emulsion, then stir in grated Parmesan cheese.",
      "Toss the lettuce with the dressing, then top with croutons and extra Parmesan cheese before serving.",
      "Season with salt and freshly ground black pepper to taste."
    ],
    ingredients: [
      "1 large or 2 small heads of romaine lettuce",
      "2 cups of cubed day-old bread",
      "1/3 cup extra-virgin olive oil",
      "2 cloves of garlic, minced",
      "2 egg yolks",
      "Juice of 1 lemon",
      "4 anchovy fillets",
      "1 teaspoon Dijon mustard",
      "1 teaspoon Worcestershire sauce",
      "1/2 cup freshly grated Parmesan cheese",
      "Salt and freshly ground black pepper"
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
    categories: ["Mexican", "Street Food"],
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
    categories: ["Chinese", "Spicy"],
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
  },
  {
    id: 6,
    name: "Onigiri",
    rating: 3,
    time: 30,
    difficulty: "Easy",
    description: "Onigiri, also known as rice balls, is a Japanese comfort food made from white rice formed into triangular or cylindrical shapes and often wrapped in nori (seaweed).",
    categories: ["Easy Difficulty", "Japanese", "Snack"],
    image: "/images/Onigiri.jpg",
    steps: [
      "Cook sushi rice and let it cool slightly",
      "Wet your hands with water and salt them",
      "Place a scoop of rice into your hand and form into a shape",
      "Add your favorite filling and mold rice around it",
      "Wrap with nori for easy handling"
    ],
    ingredients: [
      "Sushi rice",
      "Water",
      "Salt",
      "Your choice of filling (e.g., pickled plum, salmon, tuna mayo)",
      "Nori sheets"
    ],
    nutrition: {
      calories: 130,
      protein: 2.6,
      carbs: 28,
      fat: 0.2
    }
  },
  {
    id: 7,
    name: "Tempura",
    rating: 4,
    time: 40,
    difficulty: "Medium",
    description: "Tempura is a Japanese dish usually consisting of seafood or vegetables that have been battered and deep fried, known for its light, airy, and crispy texture.",
    categories: ["Medium Difficulty", "Japanese", "Appetizer"],
    image: "/images/Tempura.jpg",
    steps: [
      "Prepare the tempura batter with cold water and flour",
      "Heat oil in a deep fryer or large pot to 175°C (350°F)",
      "Dip seafood or vegetables into the batter",
      "Fry in batches until lightly golden and crisp",
      "Drain on paper towels and serve immediately with dipping sauce"
    ],
    ingredients: [
      "Assorted seafood or vegetables (shrimp, sweet potato, green beans, etc.)",
      "Flour",
      "Egg",
      "Ice-cold water",
      "Tempura dipping sauce"
    ],
    nutrition: {
      calories: 250,
      protein: 4,
      carbs: 30,
      fat: 12
    }
  },
  {
    id: 8,
    name: "Lasagna",
    rating: 5,
    time: 120,
    difficulty: "Hard",
    description: "Lasagna is a classic Italian oven-baked dish which consists of alternating layers of pasta, cheese, sauce, and meat.",
    categories: ["Hard Difficulty", "Italian", "Main Course"],
    image: "/images/Lasagna.jpg",
    steps: [
      "Prepare the bolognese sauce by simmering ground beef, tomato sauce, and herbs",
      "Make the béchamel sauce",
      "Cook lasagna noodles al dente",
      "Layer noodles, bolognese sauce, béchamel, and shredded mozzarella in a baking dish",
      "Bake until bubbly and golden brown on top"
    ],
    ingredients: [
      "Lasagna noodles",
      "Ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic",
      "Béchamel sauce",
      "Mozzarella cheese",
      "Parmesan cheese"
    ],
    nutrition: {
      calories: 360,
      protein: 22,
      carbs: 35,
      fat: 17
    }
  },
  {
    id: 9,
    name: "Enchiladas",
    rating: 4,
    time: 60,
    difficulty: "Medium",
    description: "Enchiladas are a Mexican dish consisting of corn tortillas rolled around a filling, covered with a savory sauce, and baked.",
    categories: ["Medium Difficulty", "Mexican", "Main"],
    image: "/images/Enchiladas.jpg",
    steps: [
      "Preheat the oven to 350°F (175°C).",
      "Prepare the enchilada sauce in a saucepan.",
      "Fry tortillas lightly in oil to soften.",
      "Fill each tortilla with shredded chicken, roll up, and place in a baking dish.",
      "Pour enchilada sauce over the rolled tortillas and sprinkle with cheese.",
      "Bake until cheese is melted and bubbly, about 20 minutes."
    ],
    ingredients: [
      "8 corn tortillas",
      "2 cups shredded cooked chicken",
      "2 cups enchilada sauce",
      "2 cups shredded cheese (cheddar or Mexican blend)",
      "1/2 cup vegetable oil",
      "Chopped onions and cilantro for garnish"
    ],
    nutrition: {
      calories: 310,
      protein: 18,
      carbs: 22,
      fat: 16
    }
  },
  {
    id: 10,
    name: "Sushi",
    rating: 5,
    time: 60,
    difficulty: "Hard",
    description: "Sushi, a traditional Japanese dish, involves vinegared rice accompanied by various ingredients such as seafood, vegetables, and sometimes tropical fruits.",
    categories: ["Hard Difficulty", "Japanese", "Seafood"],
    image: "/images/Sushi.jpg",
    steps: [
      "Prepare sushi rice by mixing cooked short-grain rice with a blend of rice vinegar, sugar, and salt.",
      "Slice fresh fish like salmon or tuna into thin sashimi-style pieces.",
      "Cut vegetables like cucumber and avocado into thin strips.",
      "Place a sheet of nori on a bamboo mat, spread sushi rice on top, and arrange fish and vegetables over it.",
      "Roll the sushi tightly using the bamboo mat, then slice it into bite-sized pieces with a sharp knife."
    ],
    ingredients: [
      "2 cups sushi rice",
      "2 cups water",
      "1/4 cup rice vinegar",
      "2 tablespoons sugar",
      "1 teaspoon salt",
      "Nori sheets",
      "Sashimi-grade fish",
      "Cucumber",
      "Avocado",
      "Soy sauce for dipping"
    ],
    nutrition: {
      calories: 300,
      protein: 11,
      carbs: 54,
      fat: 2
    }
  },
  {
    id: 11,
    name: "Tonkatsu",
    rating: 4,
    time: 45,
    difficulty: "Medium",
    description: "Tonkatsu is a crispy, deep-fried pork cutlet that's breaded with panko breadcrumbs, offering a crunchy exterior and tender meat inside.",
    categories: ["Medium Difficulty", "Japanese", "Fried"],
    image: "/images/Tonkatsu.jpg",
    steps: [
      "Tenderize pork cutlets and season with salt and pepper.",
      "Dredge each cutlet in flour, dip in beaten eggs, and coat with panko breadcrumbs.",
      "Heat oil in a deep skillet and fry the breaded pork cutlets until golden brown.",
      "Drain excess oil on paper towels and slice cutlets into strips.",
      "Serve with shredded cabbage and tonkatsu sauce."
    ],
    ingredients: [
      "4 pork cutlets",
      "Salt and pepper to taste",
      "1/2 cup all-purpose flour",
      "2 beaten eggs",
      "1 cup panko breadcrumbs",
      "Oil for frying",
      "Shredded cabbage",
      "Tonkatsu sauce"
    ],
    nutrition: {
      calories: 620,
      protein: 33,
      carbs: 43,
      fat: 36
    }
  },
  {
    id: 12,
    name: "Miso Soup",
    rating: 5,
    time: 30,
    difficulty: "Easy",
    description: "Miso soup is a traditional Japanese soup consisting of a dashi stock into which softened miso paste is mixed, often containing tofu and seaweed.",
    categories: ["Easy Difficulty", "Japanese", "Soup"],
    image: "/images/MisoSoup.jpg",
    steps: [
      "Prepare dashi stock by simmering kombu (dried kelp) and katsuobushi (dried bonito flakes).",
      "Strain the solids from the dashi stock.",
      "Dissolve miso paste in a small amount of the dashi to prevent clumping, then combine with the rest of the dashi.",
      "Add diced tofu and wakame (dried seaweed) to the soup.",
      "Heat the soup gently without boiling and serve garnished with chopped green onions."
    ],
    ingredients: [
      "4 cups water",
      "1 piece kombu",
      "1/2 cup katsuobushi",
      "3 tablespoons miso paste",
      "1/2 block tofu, cut into cubes",
      "1 tablespoon dried wakame",
      "Green onions for garnish"
    ],
    nutrition: {
      calories: 80,
      protein: 6,
      carbs: 7,
      fat: 2
    }
  },
  {
    id: 13,
    name: "Pesto Pasta",
    rating: 4,
    time: 20,
    difficulty: "Easy",
    description: "Pesto Pasta is a simple yet vibrant dish, often made with fresh basil pesto, which is a blend of basil, pine nuts, garlic, Parmesan cheese, and olive oil.",
    categories: ["Italian", "Pasta"],
    image: "/images/PestoPasta.jpg",
    steps: [
      "Boil pasta in salted water until al dente.",
      "Blend fresh basil, garlic, pine nuts, Parmesan, and olive oil to make pesto.",
      "Drain pasta and reserve some cooking water.",
      "Toss the pasta with pesto, adding pasta water as needed to loosen.",
      "Serve with extra Parmesan and a drizzle of olive oil."
    ],
    ingredients: [
      "400g pasta",
      "2 cups fresh basil leaves",
      "1/3 cup pine nuts",
      "3 cloves garlic",
      "1/2 cup grated Parmesan cheese",
      "1/2 cup extra-virgin olive oil",
      "Salt to taste"
    ],
    nutrition: {
      calories: 600,
      protein: 20,
      carbs: 74,
      fat: 24
    }
  },
  {
    id: 14,
    name: "Chicken Parmigiana",
    rating: 4.5,
    time: 45,
    difficulty: "Medium",
    description: "Chicken Parmigiana is a hearty Italian-American classic that consists of breaded chicken breasts topped with marinara sauce and melted cheese.",
    categories: ["Medium Difficulty", "Italian", "Chicken"],
    image: "/images/ChickenParmigiana.jpg",
    steps: [
      "Pound chicken breasts to even thickness.",
      "Dredge in flour, dip in beaten eggs, then coat in breadcrumbs.",
      "Fry chicken until golden, then drain on paper towels.",
      "Place in baking dish, cover with marinara sauce and mozzarella.",
      "Bake until cheese is bubbly and chicken is cooked through."
    ],
    ingredients: [
      "4 chicken breast halves",
      "1 cup all-purpose flour",
      "2 large eggs",
      "2 cups breadcrumbs",
      "1 cup marinara sauce",
      "1 cup shredded mozzarella",
      "1/4 cup grated Parmesan",
      "Oil for frying"
    ],
    nutrition: {
      calories: 700,
      protein: 55,
      carbs: 68,
      fat: 22
    }
  },
  {
    id: 15,
    name: "Tiramisu",
    rating: 5,
    time: 30,
    difficulty: "Medium",
    description: "Tiramisu is a popular coffee-flavored Italian dessert made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, and flavored with cocoa.",
    categories: ["Medium Difficulty", "Italian", "Dessert"],
    image: "/images/Tiramisu.jpg",
    steps: [
      "Mix egg yolks and sugar until thick and pale, then blend in mascarpone.",
      "Dip ladyfingers in coffee and layer in a dish.",
      "Spread half of the mascarpone mixture over the ladyfingers.",
      "Repeat layers and refrigerate for several hours.",
      "Sift cocoa powder on top before serving."
    ],
    ingredients: [
      "6 egg yolks",
      "3/4 cup sugar",
      "1 1/4 cups mascarpone cheese",
      "1 3/4 cups strong coffee, cooled",
      "24 ladyfingers",
      "Cocoa powder for dusting"
    ],
    nutrition: {
      calories: 450,
      protein: 8,
      carbs: 50,
      fat: 25
    }
  },
  {
    id: 16,
    name: "Beef and Broccoli",
    rating: 4,
    time: 30,
    difficulty: "Easy",
    description: "Beef and Broccoli is a classic Chinese stir-fry dish with tender strips of beef and fresh broccoli in a savory sauce.",
    categories: ["Chinese", "Stir Fry"],
    image: "/images/BeefAndBroccoli.jpeg",
    steps: [
      "Slice beef into thin strips and marinate in a mixture of soy sauce, sesame oil, and cornstarch.",
      "Blanch broccoli florets in boiling water, then rinse under cold water.",
      "Heat oil in a wok and stir-fry the beef until browned.",
      "Add broccoli and stir-fry until vegetables are tender-crisp.",
      "Pour in a sauce made from garlic, ginger, beef stock, oyster sauce, and a cornstarch slurry. Cook until the sauce thickens."
    ],
    ingredients: [
      "1 pound beef sirloin or flank steak",
      "2 tablespoons soy sauce",
      "1 teaspoon sesame oil",
      "2 tablespoons cornstarch",
      "3 cups broccoli florets",
      "2 cloves garlic, minced",
      "1 tablespoon fresh ginger, minced",
      "1/2 cup beef stock",
      "2 tablespoons oyster sauce",
      "Vegetable oil for cooking"
    ],
    nutrition: {
      calories: 320,
      protein: 25,
      carbs: 15,
      fat: 18
    }
  },
  {
    id: 17,
    name: "Sweet and Sour Pork",
    rating: 5,
    time: 40,
    difficulty: "Medium",
    description: "Sweet and Sour Pork is a popular dish with a perfect balance of sweet and tangy flavors, featuring crispy pork pieces coated in a colorful sauce with pineapple and bell peppers.",
    categories: ["Chinese", "Fried"],
    image: "/images/SweetAndSourPork.jpeg",
    steps: [
      "Cut pork into bite-sized pieces and coat with seasoned cornstarch.",
      "Deep-fry the pork until golden and set aside.",
      "In a saucepan, mix vinegar, ketchup, soy sauce, and sugar to make the sweet and sour sauce.",
      "Stir-fry bell peppers, onion, and pineapple until just tender.",
      "Add the fried pork to the vegetables, pour the sauce over, and heat through."
    ],
    ingredients: [
      "1 pound pork tenderloin",
      "1/2 cup cornstarch",
      "1/2 cup vinegar",
      "4 tablespoons ketchup",
      "2 tablespoons soy sauce",
      "1/2 cup sugar",
      "1 bell pepper, cut into pieces",
      "1 onion, cut into wedges",
      "1 cup pineapple chunks",
      "Oil for frying"
    ],
    nutrition: {
      calories: 400,
      protein: 24,
      carbs: 50,
      fat: 12
    }
  },
  {
    id: 18,
    name: "General Tso's Chicken",
    rating: 4.5,
    time: 45,
    difficulty: "Medium",
    description: "General Tso's Chicken is a sweet and spicy deep-fried chicken dish that is popularly served in North American Chinese restaurants.",
    categories: ["Chinese", "Chicken"],
    image: "/images/GeneralTsosChicken.jpeg",
    steps: [
      "Cut chicken thighs into chunks and marinate in soy sauce and egg white, then dredge in cornstarch.",
      "Deep-fry the chicken until crispy and drain on paper towels.",
      "Sauté garlic, ginger, and dried red chilies until fragrant.",
      "Add sauce made of chicken stock, soy sauce, rice vinegar, sugar, and cornstarch, cooking until thickened.",
      "Toss the fried chicken in the sauce and garnish with green onions."
    ],
    ingredients: [
      "1 pound chicken thighs",
      "1 egg white",
      "3 tablespoons soy sauce",
      "1/2 cup cornstarch",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, minced",
      "10 dried red chilies",
      "1/2 cup chicken stock",
      "2 tablespoons rice vinegar",
      "1/4 cup sugar",
      "Oil for frying",
      "Green onions for garnish"
    ],
    nutrition: {
      calories: 430,
      protein: 23,
      carbs: 35,
      fat: 22
    }
  },
  {
    id: 19,
    name: "Chicken Tikka Masala",
    rating: 4.5,
    time: 60,
    difficulty: "Medium",
    description: "Chicken Tikka Masala is a popular Indian dish featuring marinated and grilled chicken chunks in a creamy tomato-based sauce with aromatic spices.",
    categories: ["Indian", "Chicken", "Curry"],
    image: "/images/ChickenTikkaMasala.jpg",
    steps: [
      "Marinate chicken pieces in yogurt and spices like cumin, coriander, and garam masala.",
      "Grill or bake the chicken until cooked through.",
      "Prepare the masala sauce by sautéing onions, garlic, ginger, and spices in a pan.",
      "Add tomato puree, cream, and other seasonings to the pan and simmer until thickened.",
      "Add the cooked chicken to the sauce and simmer until heated through.",
      "Garnish with fresh cilantro and serve with rice or naan bread."
    ],
    ingredients: [
      "1 lb boneless, skinless chicken breasts, cut into chunks",
      "1 cup plain yogurt",
      "2 tablespoons lemon juice",
      "2 teaspoons ground cumin",
      "2 teaspoons ground coriander",
      "1 teaspoon paprika",
      "1 teaspoon garam masala",
      "Salt and pepper to taste",
      "2 tablespoons vegetable oil",
      "1 onion, finely chopped",
      "3 cloves garlic, minced",
      "1-inch piece of ginger, grated",
      "1 can (14 oz) tomato puree",
      "1 cup heavy cream",
      "Fresh cilantro for garnish"
    ],
    nutrition: {
      calories: 400,
      protein: 30,
      carbs: 15,
      fat: 25
    }
  },
  {
    id: 20,
    name: "Palak Paneer",
    rating: 4.8,
    time: 45,
    difficulty: "Medium",
    description: "Palak Paneer is a nutritious and flavorful Indian dish made with spinach (palak) and paneer (Indian cottage cheese) cooked with aromatic spices.",
    categories: ["Indian", "Vegetarian", "Curry"],
    image: "/images/PalakPaneer.jpg",
    steps: [
      "Blanch spinach leaves in boiling water, then transfer to ice water to retain color.",
      "Blend the blanched spinach into a smooth paste along with green chilies and ginger.",
      "Sauté onions, garlic, and spices in a pan until fragrant.",
      "Add the spinach puree and cook until thickened.",
      "Add cubes of paneer and cook until heated through.",
      "Finish with a splash of cream and garnish with garam masala and fenugreek leaves.",
      "Serve hot with rice or naan."
    ],
    ingredients: [
      "2 bunches of spinach, washed and chopped",
      "2 green chilies",
      "1-inch piece of ginger",
      "1 onion, finely chopped",
      "3 cloves garlic, minced",
      "1 teaspoon cumin seeds",
      "1 teaspoon garam masala",
      "1/2 teaspoon turmeric powder",
      "Salt to taste",
      "1 cup paneer, cubed",
      "2 tablespoons vegetable oil",
      "2 tablespoons heavy cream",
      "1 teaspoon dried fenugreek leaves (kasuri methi) for garnish"
    ],
    nutrition: {
      calories: 300,
      protein: 15,
      carbs: 10,
      fat: 20
    }
  },
];

export default DishInventory;
