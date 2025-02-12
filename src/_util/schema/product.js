const productSchema = {
  productId: {
    type: String,
    required: true,
    unique: true,
    description: "A unique identifier for the product."
  },
  name: {
    type: String,
    required: true,
    description: "The name of the product."
  },
  description: {
    type: String,
    required: true,
    description: "A detailed description of the product."
  },
  price: {
    type: Number,
    required: true,
    description: "The price of the product."
  },
  currency: {
    type: String,
    required: true,
    default: "USD",
    description: "The currency in which the price is listed (e.g., USD, EUR)."
  },
  department: {
    type: String,
    required: true,
    description: "The department to which the product belongs (e.g., Electronics, Fashion)."
  },
  category: {
    type: String,
    required: true,
    description: "The category of the product (e.g., Mobile Phones & Accessories, Women's Clothing)."
  },
  subcategory: {
    type: String,
    required: true,
    description: "The subcategory of the product (e.g., Smartphones, Dresses)."
  },
  brand: {
    type: String,
    description: "The brand of the product (e.g., Apple, Nike)."
  },
  seller: {
    type: String,
    required: true,
    description: "The seller or vendor of the product."
  },
  stock: {
    type: Number,
    required: true,
    description: "The available stock quantity of the product."
  },
  images: {
    type: [String],
    required: true,
    description: "An array of image URLs for the product."
  },
  ratings: {
    type: Number,
    default: 0,
    description: "The average rating of the product (e.g., 4.5 out of 5)."
  },
  reviews: {
    type: [
      {
        userId: {
          type: String,
          required: true,
          description: "The ID of the user who left the review."
        },
        rating: {
          type: Number,
          required: true,
          description: "The rating given by the user (e.g., 1 to 5)."
        },
        comment: {
          type: String,
          description: "The review comment left by the user."
        },
        date: {
          type: Date,
          default: Date.now,
          description: "The date the review was posted."
        }
      }
    ],
    default: [],
    description: "An array of user reviews for the product."
  },
  specifications: {
    type: Object,
    description: "Key-value pairs of product specifications (e.g., { color: 'Red', weight: '500g' })."
  },
  tags: {
    type: [String],
    description: "An array of tags for the product (e.g., ['smartphone', '5G', 'Android'])."
  },
  shippingInfo: {
    type: {
      weight: {
        type: Number,
        description: "The weight of the product in grams or kilograms."
      },
      dimensions: {
        type: {
          length: Number,
          width: Number,
          height: Number
        },
        description: "The dimensions of the product (length, width, height)."
      },
      shippingCost: {
        type: Number,
        description: "The cost of shipping the product."
      },
      estimatedDelivery: {
        type: String,
        description: "The estimated delivery time (e.g., '3-5 business days')."
      }
    },
    description: "Shipping-related information for the product."
  },
  createdAt: {
    type: Date,
    default: Date.now,
    description: "The date the product was added to the platform."
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    description: "The date the product was last updated."
  },
  isActive: {
    type: Boolean,
    default: true,
    description: "Indicates whether the product is active and available for purchase."
  }
};