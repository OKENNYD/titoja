const bidSchema = {
  bidId: {
    type: String,
    required: true,
    unique: true,
    description: "A unique identifier for the bid."
  },
  productId: {
    type: String,
    required: true,
    description: "The ID of the product being bid on."
  },
  userId: {
    type: String,
    required: true,
    description: "The ID of the user placing the bid."
  },
  bidAmount: {
    type: Number,
    required: true,
    description: "The amount of the bid."
  },
  currency: {
    type: String,
    required: true,
    default: "USD",
    description: "The currency in which the bid is placed (e.g., USD, EUR)."
  },
  bidTime: {
    type: Date,
    default: Date.now,
    description: "The timestamp when the bid was placed."
  },
  bidStatus: {
    type: String,  
    enum: ["active", "won", "lost", "cancelled"],
    default: "active",
    description: "The status of the bid (e.g., active, won, lost, cancelled)."
  },
  autoBid: {
    type: Boolean,
    default: false,
    description: "Indicates if the bid is part of an auto-bidding strategy."
  },
  maxBidAmount: {
    type: Number,
    description: "The maximum bid amount for auto-bidding (if applicable)."
  },
  bidIncrement: {
    type: Number,
    description: "The increment amount for auto-bidding (if applicable)."
  },
  bidExpiry: {
    type: Date,
    description: "The expiration time for the bid (if applicable)."
  },
  paymentMethodId: {
    type: String,
    description: "The ID of the payment method to be used if the bid is won."
  },
  shippingAddressId: {
    type: String,
    description: "The ID of the shipping address to be used if the bid is won."
  },
  metadata: {
    type: Object,
    description: "Additional metadata related to the bid (e.g., notes, custom fields)."
  }
};