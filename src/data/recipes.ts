export interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  difficulty: string;
  ingredients?: string[];
  instructions?: string[];
  nutritionalInfo?: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export const FEATURED_RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Creamy Mushroom Pasta",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
    cookTime: "30 mins",
    difficulty: "Easy",
    ingredients: ["Pasta", "Mushrooms", "Cream", "Garlic", "Parmesan"],
    instructions: [
      "Cook pasta according to package instructions.",
      "Sauté garlic and mushrooms in a pan.",
      "Add cream and simmer.",
      "Combine with pasta and serve with Parmesan."
    ],
    nutritionalInfo: {
      calories: "450",
      protein: "12g",
      carbs: "60g",
      fat: "20g"
    }
  },
  {
    id: "2",
    title: "Mediterranean Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    cookTime: "15 mins",
    difficulty: "Easy",
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Feta", "Olives"],
    instructions: [
      "Chop all vegetables.",
      "Mix in a bowl with feta and olives.",
      "Drizzle with olive oil and serve."
    ],
    nutritionalInfo: {
      calories: "200",
      protein: "6g",
      carbs: "15g",
      fat: "14g"
    }
  },
  {
    id: "3",
    title: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    cookTime: "25 mins",
    difficulty: "Medium",
    ingredients: ["Salmon fillet", "Lemon", "Garlic", "Herbs"],
    instructions: [
      "Preheat grill.",
      "Season salmon with lemon, garlic, and herbs.",
      "Grill for 15-20 minutes until cooked through."
    ],
    nutritionalInfo: {
      calories: "350",
      protein: "30g",
      carbs: "0g",
      fat: "22g"
    }
  },
  {
    id: "4",
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    cookTime: "45 mins",
    difficulty: "Medium",
    ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Spices"],
    instructions: [
      "Marinate chicken in yogurt and spices.",
      "Cook chicken in a pan until browned.",
      "Add tomato sauce and simmer for 20 minutes."
    ],
    nutritionalInfo: {
      calories: "500",
      protein: "40g",
      carbs: "30g",
      fat: "25g"
    }
  },
  {
    id: "5",
    title: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    cookTime: "20 mins",
    difficulty: "Easy",
    ingredients: ["Mixed vegetables", "Soy sauce", "Ginger", "Garlic"],
    instructions: [
      "Heat oil in a pan.",
      "Add garlic and ginger, sauté for 1 minute.",
      "Add vegetables and stir fry for 5-7 minutes.",
      "Add soy sauce and serve."
    ],
    nutritionalInfo: {
      calories: "250",
      protein: "5g",
      carbs: "30g",
      fat: "10g"
    }
  },
  {
    id: "6",
    title: "Classic Beef Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    cookTime: "25 mins",
    difficulty: "Easy",
    ingredients: ["Ground beef", "Burger buns", "Lettuce", "Tomato", "Cheese"],
    instructions: [
      "Form beef into patties.",
      "Grill or pan-fry patties for 5-7 minutes each side.",
      "Assemble burgers with toppings."
    ],
    nutritionalInfo: {
      calories: "600",
      protein: "35g",
      carbs: "40g",
      fat: "30g"
    }
  },
  {
    id: "7",
    title: "Sushi Roll Platter",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    cookTime: "60 mins",
    difficulty: "Hard",
    ingredients: ["Sushi rice", "Nori", "Fish", "Vegetables", "Soy sauce"],
    instructions: [
      "Cook sushi rice and let it cool.",
      "Lay nori on a bamboo mat.",
      "Spread rice, add fillings, and roll tightly.",
      "Slice and serve with soy sauce."
    ],
    nutritionalInfo: {
      calories: "350",
      protein: "20g",
      carbs: "50g",
      fat: "10g"
    }
  },
  {
    id: "8",
    title: "Vegetarian Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    cookTime: "35 mins",
    difficulty: "Medium",
    ingredients: ["Pizza dough", "Tomato sauce", "Cheese", "Vegetables"],
    instructions: [
      "Preheat oven to 475°F (245°C).",
      "Roll out dough and place on a pizza stone.",
      "Spread sauce, add cheese and toppings.",
      "Bake for 15-20 minutes."
    ],
    nutritionalInfo: {
      calories: "400",
      protein: "15g",
      carbs: "50g",
      fat: "15g"
    }
  },
  {
    id: "9",
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51",
    cookTime: "25 mins",
    difficulty: "Medium",
    ingredients: ["Chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Melt chocolate and butter together.",
      "Whisk eggs and sugar, then combine with chocolate.",
      "Pour into greased ramekins and bake for 12 minutes."
    ],
    nutritionalInfo: {
      calories: "500",
      protein: "8g",
      carbs: "60g",
      fat: "25g"
    }
  },
  {
    id: "10",
    title: "Greek Moussaka",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    cookTime: "90 mins",
    difficulty: "Hard",
    ingredients: ["Eggplant", "Ground beef", "Tomato sauce", "Bechamel sauce"],
    instructions: [
      "Slice and salt eggplant, let sit for 30 minutes.",
      "Cook ground beef with tomato sauce.",
      "Layer eggplant, beef, and bechamel in a baking dish.",
      "Bake at 350°F (175°C) for 45 minutes."
    ],
    nutritionalInfo: {
      calories: "600",
      protein: "35g",
      carbs: "40g",
      fat: "35g"
    }
  },
  {
    id: "11",
    title: "Pad Thai",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
    cookTime: "30 mins",
    difficulty: "Medium",
    ingredients: ["Rice noodles", "Shrimp", "Eggs", "Peanuts", "Bean sprouts"],
    instructions: [
      "Soak rice noodles in hot water.",
      "Stir-fry shrimp and eggs in a pan.",
      "Add noodles, peanuts, and bean sprouts, toss to combine."
    ],
    nutritionalInfo: {
      calories: "450",
      protein: "25g",
      carbs: "60g",
      fat: "15g"
    }
  },
  {
    id: "12",
    title: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
    cookTime: "15 mins",
    difficulty: "Easy",
    ingredients: ["Romaine lettuce", "Croutons", "Parmesan", "Caesar dressing"],
    instructions: [
      "Chop romaine lettuce.",
      "Toss with croutons, Parmesan, and dressing.",
      "Serve immediately."
    ],
    nutritionalInfo: {
      calories: "250",
      protein: "8g",
      carbs: "15g",
      fat: "18g"
    }
  },
  {
    id: "13",
    title: "Beef Wellington",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    cookTime: "120 mins",
    difficulty: "Hard",
    ingredients: ["Beef tenderloin", "Puff pastry", "Mushrooms", "Prosciutto"],
    instructions: [
      "Sear beef tenderloin in a pan.",
      "Prepare mushroom duxelles and wrap beef in prosciutto.",
      "Encase in puff pastry and bake at 400°F (200°C) for 25-30 minutes."
    ],
    nutritionalInfo: {
      calories: "800",
      protein: "50g",
      carbs: "30g",
      fat: "50g"
    }
  },
  {
    id: "14",
    title: "Miso Ramen",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    cookTime: "45 mins",
    difficulty: "Medium",
    ingredients: ["Ramen noodles", "Miso paste", "Broth", "Toppings"],
    instructions: [
      "Cook ramen noodles according to package instructions.",
      "Prepare broth with miso paste.",
      "Serve noodles in broth with desired toppings."
    ],
    nutritionalInfo: {
      calories: "400",
      protein: "15g",
      carbs: "60g",
      fat: "10g"
    }
  },
  {
    id: "15",
    title: "Quinoa Buddha Bowl",
    image: "https://images.unsplash.com/photo-1540914124281-342587941389",
    cookTime: "25 mins",
    difficulty: "Easy",
    ingredients: ["Quinoa", "Chickpeas", "Vegetables", "Tahini"],
    instructions: [
      "Cook quinoa according to package instructions.",
      "Roast chickpeas and vegetables.",
      "Assemble in a bowl with tahini dressing."
    ],
    nutritionalInfo: {
      calories: "350",
      protein: "12g",
      carbs: "50g",
      fat: "15g"
    }
  },
  {
    id: "16",
    title: "Fish Tacos",
    image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd",
    cookTime: "30 mins",
    difficulty: "Medium",
    ingredients: ["Fish", "Tortillas", "Cabbage", "Salsa"],
    instructions: [
      "Grill or pan-fry fish.",
      "Warm tortillas and fill with fish and toppings.",
      "Serve with salsa."
    ],
    nutritionalInfo: {
      calories: "300",
      protein: "20g",
      carbs: "30g",
      fat: "10g"
    }
  },
  {
    id: "17",
    title: "Beef Stroganoff",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
    cookTime: "40 mins",
    difficulty: "Medium",
    ingredients: ["Beef", "Mushrooms", "Sour cream", "Noodles"],
    instructions: [
      "Cook beef and mushrooms in a pan.",
      "Add sour cream and simmer.",
      "Serve over cooked noodles."
    ],
    nutritionalInfo: {
      calories: "500",
      protein: "30g",
      carbs: "40g",
      fat: "25g"
    }
  },
  {
    id: "18",
    title: "Vegetable Lasagna",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
    cookTime: "75 mins",
    difficulty: "Medium",
    ingredients: ["Lasagna noodles", "Ricotta", "Spinach", "Marinara sauce"],
    instructions: [
      "Layer noodles, ricotta, spinach, and marinara in a baking dish.",
      "Repeat layers and top with cheese.",
      "Bake at 375°F (190°C) for 45 minutes."
    ],
    nutritionalInfo: {
      calories: "400",
      protein: "20g",
      carbs: "50g",
      fat: "15g"
    }
  },
  {
    id: "19",
    title: "Shrimp Scampi",
    image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa",
    cookTime: "25 mins",
    difficulty: "Medium",
    ingredients: ["Shrimp", "Garlic", "Butter", "Pasta"],
    instructions: [
      "Sauté garlic in butter.",
      "Add shrimp and cook until pink.",
      "Toss with cooked pasta and serve."
    ],
    nutritionalInfo: {
      calories: "450",
      protein: "25g",
      carbs: "40g",
      fat: "20g"
    }
  },
  {
    id: "20",
    title: "Chicken Fajitas",
    image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615",
    cookTime: "30 mins",
    difficulty: "Easy",
    ingredients: ["Chicken", "Bell peppers", "Onions", "Tortillas"],
    instructions: [
      "Sauté chicken with bell peppers and onions.",
      "Serve in tortillas with toppings."
    ],
    nutritionalInfo: {
      calories: "400",
      protein: "30g",
      carbs: "40g",
      fat: "15g"
    }
  },
  {
    id: "21",
    title: "Eggplant Parmesan",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7",
    cookTime: "60 mins",
    difficulty: "Medium",
    ingredients: ["Eggplant", "Marinara sauce", "Mozzarella", "Parmesan"],
    instructions: [
      "Slice and salt eggplant, let sit for 30 minutes.",
      "Layer eggplant, marinara, and cheese in a baking dish.",
      "Bake at 375°F (190°C) for 45 minutes."
    ],
    nutritionalInfo: {
      calories: "500",
      protein: "20g",
      carbs: "40g",
      fat: "30g"
    }
  },
  {
    id: "22",
    title: "Tom Yum Soup",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853",
    cookTime: "35 mins",
    difficulty: "Medium",
    ingredients: ["Shrimp", "Lemongrass", "Mushrooms", "Chili"],
    instructions: [
      "Boil water with lemongrass and chili.",
      "Add shrimp and mushrooms, cook until done.",
      "Serve hot."
    ],
    nutritionalInfo: {
      calories: "200",
      protein: "15g",
      carbs: "10g",
      fat: "5g"
    }
  },
  {
    id: "23",
    title: "Apple Pie",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e9e5",
    cookTime: "75 mins",
    difficulty: "Medium",
    ingredients: ["Apples", "Sugar", "Pie crust", "Cinnamon"],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Slice apples and mix with sugar and cinnamon.",
      "Fill pie crust and bake for 45 minutes."
    ],
    nutritionalInfo: {
      calories: "300",
      protein: "2g",
      carbs: "50g",
      fat: "10g"
    }
  },
  {
    id: "24",
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    cookTime: "30 mins",
    difficulty: "Easy",
    ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomato", "Cheese"],
    instructions: [
      "Cook ground beef in a pan.",
      "Fill taco shells with beef and toppings.",
      "Serve with salsa."
    ],
    nutritionalInfo: {
      calories: "400",
      protein: "25g",
      carbs: "30g",
      fat: "20g"
    }
  },
  {
    id: "25",
    title: "Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
    cookTime: "45 mins",
    difficulty: "Medium",
    ingredients: ["Arborio rice", "Mushrooms", "Broth", "Parmesan"],
    instructions: [
      "Sauté mushrooms in a pan.",
      "Add rice and broth gradually, stirring constantly.",
      "Finish with Parmesan cheese."
    ],
    nutritionalInfo: {
      calories: "500",
      protein: "12g",
      carbs: "70g",
      fat: "20g"
    }
  },
  {
    id: "26",
    title: "Korean BBQ",
    image: "https://images.unsplash.com/photo-1632558610168-8377309e34c7",
    cookTime: "40 mins",
    difficulty: "Medium",
    ingredients: ["Beef", "Soy sauce", "Garlic", "Sesame oil"],
    instructions: [
      "Marinate beef in soy sauce and garlic.",
      "Grill beef until cooked through.",
      "Serve with rice and vegetables."
    ],
    nutritionalInfo: {
      calories: "600",
      protein: "40g",
      carbs: "30g",
      fat: "35g"
    }
  },
  {
    id: "27",
    title: "Tiramisu",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    cookTime: "30 mins",
    difficulty: "Medium",
    ingredients: ["Mascarpone", "Coffee", "Ladyfingers", "Cocoa powder"],
    instructions: [
      "Dip ladyfingers in coffee.",
      "Layer with mascarpone and dust with cocoa.",
      "Chill before serving."
    ],
    nutritionalInfo: {
      calories: "400",
      protein: "6g",
      carbs: "50g",
      fat: "20g"
    }
  },
  {
    id: "28",
    title: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    cookTime: "50 mins",
    difficulty: "Medium",
    ingredients: ["Chicken", "Butter", "Tomato sauce", "Spices"],
    instructions: [
      "Cook chicken in butter until browned.",
      "Add tomato sauce and spices, simmer for 30 minutes.",
      "Serve with rice."
    ],
    nutritionalInfo: {
      calories: "600",
      protein: "35g",
      carbs: "40g",
      fat: "30g"
    }
  },
  {
    id: "29",
    title: "French Onion Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    cookTime: "60 mins",
    difficulty: "Medium",
    ingredients: ["Onions", "Beef broth", "Bread", "Cheese"],
    instructions: [
      "Caramelize onions in a pot.",
      "Add beef broth and simmer.",
      "Serve with toasted bread and melted cheese."
    ],
    nutritionalInfo: {
      calories: "300",
      protein: "10g",
      carbs: "30g",
      fat: "15g"
    }
  },
  {
    id: "30",
    title: "Pesto Pasta",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    cookTime: "20 mins",
    difficulty: "Easy",
    ingredients: ["Pasta", "Pesto", "Parmesan", "Pine nuts"],
    instructions: [
      "Cook pasta according to package instructions.",
      "Toss with pesto and top with Parmesan and pine nuts."
    ],
    nutritionalInfo: {
      calories: "400",
      protein: "12g",
      carbs: "60g",
      fat: "15g"
    }
  },
  {
    id: "31",
    title: "BBQ Ribs",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    cookTime: "180 mins",
    difficulty: "Hard",
    ingredients: ["Pork ribs", "BBQ sauce", "Spices"],
    instructions: [
      "Rub ribs with spices and marinate.",
      "Cook low and slow on the grill for 3 hours.",
      "Brush with BBQ sauce and serve."
    ],
    nutritionalInfo: {
      calories: "800",
      protein: "50g",
      carbs: "20g",
      fat: "60g"
    }
  },
  {
    id: "32",
    title: "Seafood Paella",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
    cookTime: "60 mins",
    difficulty: "Hard",
    ingredients: ["Rice", "Seafood", "Saffron", "Peas"],
    instructions: [
      "Sauté seafood in a pan.",
      "Add rice and saffron, then broth.",
      "Cook until rice is done and serve."
    ],
    nutritionalInfo: {
      calories: "500",
      protein: "30g",
      carbs: "60g",
      fat: "15g"
    }
  },
  {
    id: "33",
    title: "Chicken Noodle Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    cookTime: "45 mins",
    difficulty: "Easy",
    ingredients: ["Chicken", "Noodles", "Carrots", "Celery"],
    instructions: [
      "Cook chicken in a pot.",
      "Add vegetables and broth, simmer.",
      "Add noodles and cook until tender."
    ],
    nutritionalInfo: {
      calories: "300",
      protein: "20g",
      carbs: "30g",
      fat: "10g"
    }
  },
  {
    id: "34",
    title: "Beef Stir Fry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    cookTime: "25 mins",
    difficulty: "Easy",
    ingredients: ["Beef", "Mixed vegetables", "Soy sauce"],
    instructions: [
      "Sauté beef in a pan.",
      "Add vegetables and stir fry.",
      "Serve with rice."
    ],
    nutritionalInfo: {
      calories: "400",
      protein: "30g",
      carbs: "30g",
      fat: "15g"
    }
  },
  {
    id: "35",
    title: "Lemon Cheesecake",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    cookTime: "70 mins",
    difficulty: "Medium",
    ingredients: ["Cream cheese", "Sugar", "Lemon", "Graham cracker crust"],
    instructions: [
      "Mix cream cheese, sugar, and lemon juice.",
      "Pour into crust and bake at 325°F (160°C) for 60 minutes.",
      "Chill before serving."
    ],
    nutritionalInfo: {
      calories: "450",
      protein: "8g",
      carbs: "50g",
      fat: "25g"
    }
  },
  {
    id: "36",
    title: "Vegetable Curry",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    cookTime: "40 mins",
    difficulty: "Medium",
    ingredients: ["Mixed vegetables", "Coconut milk", "Curry paste"],
    instructions: [
      "Sauté vegetables in a pot.",
      "Add coconut milk and curry paste, simmer.",
      "Serve with rice."
    ],
    nutritionalInfo: {
      calories: "300",
      protein: "5g",
      carbs: "40g",
      fat: "15g"
    }
  }
];
