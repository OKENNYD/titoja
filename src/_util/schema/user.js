const userSchema = {
  userId: {
    type: String,
    required: true,
    unique: true,
    description: "A unique identifier for the user."
  },
  username: {
    type: String,
    required: true,
    unique: true,
    description: "The username for login or display."
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v),
      message: "Invalid email format."
    },
    description: "The user's email address."
  },
  password: {
    type: String,
    required: true,
    description: "A securely hashed password."
  },
  name: {
    firstName: {
      type: String,
      required: true,
      description: "The user's first name."
    },
    lastName: {
      type: String,
      required: true,
      description: "The user's last name."
    }
  },
  phone: {
    type: String,
    validate: {
      validator: (v) => /^\+?[1-9]\d{1,14}$/.test(v), // E.164 phone format
      message: "Invalid phone number."
    },
    description: "The user's phone number."
  },
  role: {
    type: String,
    enum: ["user", "seller", "admin"],
    default: "user",
    description: "The user's role (e.g., user, seller, admin)."
  },
  addresses: {
    type: [
      {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String,
        isDefault: {
          type: Boolean,
          default: false
        }
      }
    ],
    default: [],
    description: "An array of the user's saved addresses."
  },
  profilePicture: {
    type: String,
    default: "https://example.com/default-avatar.jpg",
    description: "URL of the user's profile picture."
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
    description: "Indicates if the user's email is verified."
  },
  verificationToken: {
    type: String,
    description: "Token for email verification."
  },
  resetPasswordToken: {
    type: String,
    description: "Token for password reset."
  },
  resetPasswordExpires: {
    type: Date,
    description: "Expiration time for the password reset token."
  },
  orderHistory: {
    type: [
      {
        orderId: String,
        date: Date,
        totalAmount: Number,
        status: {
          type: String,
          enum: ["pending", "shipped", "delivered", "cancelled"]
        }
      }
    ],
    default: [],
    description: "An array of the user's past orders."
  },
  wishlist: {
    type: [String], // Array of productIds
    default: [],
    description: "An array of product IDs the user has saved."
  },
  createdAt: {
    type: Date,
    default: Date.now,
    description: "The date the user account was created."
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    description: "The date the user account was last updated."
  },
  isActive: {
    type: Boolean,
    default: true,
    description: "Indicates if the user account is active."
  },
  preferences: {
    newsletter: {
      type: Boolean,
      default: false,
      description: "Whether the user wants to receive newsletters."
    },
    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
      description: "The user's UI theme preference."
    },
    language: {
      type: String,
      default: "en",
      description: "The user's preferred language (e.g., 'en', 'es')."
    }
  },
  socialLogins: {
    googleId: {
      type: String,
      description: "Google OAuth ID for login."
    },
    facebookId: {
      type: String,
      description: "Facebook OAuth ID for login."
    }
  },
  paymentMethods: {
    type: [
      {
        paymentMethodId: String, // Token from Stripe/PayPal
        cardLast4: String,
        brand: String, // Visa, Mastercard, etc.
        isDefault: {
          type: Boolean,
          default: false
        }
      }
    ],
    default: [],
    description: "An array of saved payment methods."
  },
  reviews: {
    type: [
      {
        productId: String,
        rating: Number,
        comment: String,
        date: Date
      }
    ],
    default: [],
    description: "An array of product reviews written by the user."
  },
  refreshToken: {
    type: String,
    description: "JWT refresh token for authentication."
  }
};