const foodSchema = {
  foodId: {
    type: String,
    required: true,
    unique: true,
    description: "A unique identifier for the food product."
  },
  name: {
    type: String,
    required: true,
    description: "The name of the food product."
  },
  description: {
    type: String,
    required: true,
    description: "A detailed description of the food product."
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Snacks",
      "Beverages",
      "Dairy & Eggs",
      "Meat & Seafood",
      "Frozen Foods",
      "Baking Ingredients",
      "Canned Foods",
      "Health Foods",
      "Fresh Produce",
      "Ready-to-Eat Meals"
    ],
    description: "The category of the food product."
  },
  subcategory: {
    type: String,
    description: "The subcategory of the food product (e.g., 'Chips' under 'Snacks')."
  },
  brand: {
    type: String,
    description: "The brand of the food product (e.g., 'Kellogg's', 'Nestle')."
  },
  price: {
    type: Number,
    required: true,
    description: "The price of the food product."
  },
  currency: {
    type: String,
    required: true,
    default: "USD",
    description: "The currency in which the price is listed (e.g., USD, EUR)."
  },
  ingredients: {
    type: [String],
    required: true,
    description: "A list of ingredients in the food product."
  },
  allergens: {
    type: [String],
    description: "A list of allergens present in the food product (e.g., 'Gluten', 'Nuts')."
  },
  nutritionalInfo: {
    calories: {
      type: Number,
      description: "Calories per serving."
    },
    fat: {
      type: Number,
      description: "Total fat per serving (in grams)."
    },
    carbohydrates: {
      type: Number,
      description: "Total carbohydrates per serving (in grams)."
    },
    protein: {
      type: Number,
      description: "Total protein per serving (in grams)."
    },
    sugar: {
      type: Number,
      description: "Total sugar per serving (in grams)."
    },
    sodium: {
      type: Number,
      description: "Total sodium per serving (in milligrams)."
    }
  },
  dietaryPreferences: {
    type: [String],
    enum: [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Dairy-Free",
      "Organic",
      "Keto-Friendly",
      "Low-Carb",
      "Halal",
      "Kosher"
    ],
    description: "Dietary preferences or restrictions the food product adheres to."
  },
  images: {
    type: [String],
    required: true,
    description: "An array of image URLs for the food product."
  },
  stock: {
    type: Number,
    required: true,
    description: "The available stock quantity of the food product."
  },
  seller: {
    type: String,
    required: true,
    description: "The seller or vendor of the food product."
  },
  ratings: {
    type: Number,
    default: 0,
    description: "The average rating of the food product (e.g., 4.5 out of 5)."
  },
  reviews: {
    type: [
      {
        userId: String,
        rating: Number,
        comment: String,
        date: Date
      }
    ],
    default: [],
    description: "An array of user reviews for the food product."
  },
  expirationDate: {
    type: Date,
    description: "The expiration date of the food product."
  },
  storageInstructions: {
    type: String,
    description: "Instructions for storing the food product (e.g., 'Keep refrigerated')."
  },
  preparationInstructions: {
    type: String,
    description: "Instructions for preparing the food product (if applicable)."
  },
  tags: {
    type: [String],
    description: "An array of tags for the food product (e.g., ['organic', 'gluten-free'])."
  },
  createdAt: {
    type: Date,
    default: Date.now,
    description: "The date the food product was added to the platform."
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    description: "The date the food product was last updated."
  },
  isActive: {
    type: Boolean,
    default: true,
    description: "Indicates whether the food product is active and available for purchase."
  }
};