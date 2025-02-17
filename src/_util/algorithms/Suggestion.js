// Sample data
const users = [
  {
    userId: "USER123",
    browsingHistory: ["PROD001", "PROD003", "PROD005"],
    purchaseHistory: ["PROD001", "PROD004"],
    wishlist: ["PROD002", "PROD006"]
  },
  {
    userId: "USER456",
    browsingHistory: ["PROD002", "PROD004", "PROD006"],
    purchaseHistory: ["PROD002", "PROD005"],
    wishlist: ["PROD001", "PROD003"]
  }
];

const products = [
  { productId: "PROD001", category: "Electronics", tags: ["smartphone", "5G"] },
  { productId: "PROD002", category: "Fashion", tags: ["shirt", "cotton"] },
  { productId: "PROD003", category: "Electronics", tags: ["laptop", "gaming"] },
  { productId: "PROD004", category: "Home & Garden", tags: ["candle", "decor"] },
  { productId: "PROD005", category: "Beauty & Health", tags: ["skincare", "moisturizer"] },
  { productId: "PROD006", category: "Fashion", tags: ["shoes", "sneakers"] }
];

function findSimilarUsers(targetUserId) {
  const targetUser = users.find(user => user.userId === targetUserId);
  if (!targetUser) return [];

  return users
    .filter(user => user.userId !== targetUserId)
    .map(user => {
      const commonInterests = [
        ...new Set([...targetUser.browsingHistory, ...targetUser.purchaseHistory, ...targetUser.wishlist])
      ].filter(item => 
        user.browsingHistory.includes(item) ||
        user.purchaseHistory.includes(item) ||
        user.wishlist.includes(item)
      ).length;

      return { userId: user.userId, similarityScore: commonInterests };
    })
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, 3); 
}

function recommendBasedOnInterests(userId) {
  const user = users.find(user => user.userId === userId);
  if (!user) return [];

  const userInterests = [
    ...new Set([...user.browsingHistory, ...user.purchaseHistory, ...user.wishlist])
  ];

  return products
    .filter(product => 
      userInterests.includes(product.productId) ||
      userInterests.some(interest => product.tags.includes(interest))
    )
    .map(product => product.productId);
}

function recommendPopularProducts() {
  const productPopularity = products.map(product => {
    const purchaseCount = users.reduce((count, user) => 
      user.purchaseHistory.includes(product.productId) ? count + 1 : count, 0
    );
    return { productId: product.productId, popularity: purchaseCount };
  });

  return productPopularity
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5)
    .map(item => item.productId);
}

function generateRecommendations(userId) {
  const similarUsers = findSimilarUsers(userId);
  const similarUserRecommendations = similarUsers.flatMap(user => 
    [...user.browsingHistory, ...user.purchaseHistory, ...user.wishlist]
  );

  const interestBasedRecommendations = recommendBasedOnInterests(userId);
  const popularRecommendations = recommendPopularProducts();

  const allRecommendations = [
    ...new Set([
      ...similarUserRecommendations,
      ...interestBasedRecommendations,
      ...popularRecommendations
    ])
  ];

  return allRecommendations;
}

// Example usage
const userId = "USER123";
const recommendations = generateRecommendations(userId);
console.log("Recommendations for USER123:", recommendations);