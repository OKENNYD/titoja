const departments = [
  {
    id: 0,
    name: "Specials",
    categories: [
      {
        name: "Offers",
        segments: [
          "Blind Box",
          "Mystery Box",
          "Black Friday",
          "Annivasary",
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Arts & Crafts",
    categories: [
      {
        name: "Drawing & Painting Supplies",
        segments: [
          "Pencils & Charcoal",
          "Paints & Brushes",
          "Drawing Paper & Canvas",
          "Drawing & Painting Accessories",
        ],
      },
      {
        name: "Sculpting & Molding",
        segments: [
          "Clay & Sculpting Materials",
          "Molding & Casting Supplies",
          "Sculpting Tools & Equipment",
          "Sculpting Accessories",
        ],
      },
      {
        name: "Jewelry Making",
        segments: [
          "Beads & Findings",
          "Jewelry Making Tools & Equipment",
          "Jewelry Wire & String",
          "Jewelry Clasps & Closures",
        ],
      },
      {
        name: "Paper Crafts",
        segments: [
          "Cardstock & Paper",
          "Crafting Tools & Equipment",
          "Embellishments & Decorations",
          "Paper Crafting Kits",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Automobile & Motorcycle",
    categories: [
      {
        name: "Car Parts & Accessories",
        segments: [
          "Interior Accessories",
          "Exterior Accessories",
          "Performance Parts",
          "Replacement Parts",
        ],
      },
      {
        name: "Motorcycle Parts & Accessories",
        segments: [
          "Riding Gear (Helmets, Jackets, Gloves)",
          "Motorcycle Parts",
          "Motorcycle Accessories",
          "Motorcycle Luggage",
        ],
      },
      {
        name: "Car Care",
        segments: [
          "Car Wash & Wax",
          "Auto Detailing Supplies",
          "Car Maintenance Products",
          "Car Cleaning Tools & Equipment",
        ],
      },
      {
        name: "Motorcycle Gear",
        segments: [
          "Riding Gear (Helmets, Jackets, Gloves)",
          "Motorcycle Accessories",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Baby",
    categories: [
      {
        name: "Diapers & Wipes",
        segments: ["Diapers", "Wipes & Cleaning Supplies"],
      },
      {
        name: "Feeding & Nursing",
        segments: [
          "Bottles & Feeding Accessories",
          "Breastfeeding Supplies",
          "Baby Food & Formula",
        ],
      },
      {
        name: "Clothing & Bedding",
        segments: [
          "Baby Clothes",
          "Baby Bedding & Sleepwear",
          "Baby Gear & Accessories",
        ],
      },
      {
        name: "Toys & Games",
        segments: [
          "developmental Toys",
          "Plush Toys & Stuffed Animals",
          "Active Play Toys",
          "Arts & Crafts Toys",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Media & Books",
    categories: [
      {
        name: "Books",
        segments: [
          "Fiction",
          "Non-Fiction",
          "Children's Books",
          "Textbooks & Educational Materials",
        ],
      },
      {
        name: "Movies & TV Shows",
        segments: [
          "Action & Adventure",
          "Comedy",
          "Drama",
          "Sci-Fi & Fantasy",
          "Animation",
          "Documentaries",
          "TV Series",
        ],
      },
      {
        name: "Music",
        segments: [
          "Pop",
          "Rock",
          "Hip Hop",
          "Country",
          "Electronic",
          "Classical",
          "World Music",
        ],
      },
      {
        name: "Video Games",
        segments: [
          "Action",
          "Adventure",
          "Role-Playing",
          "Simulation",
          "Sports",
          "Strategy",
          "Puzzle",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Pet Supplies",
    categories: [
      {
        name: "Food",
        segments: ["Dry Food", "Wet Food", "Treats", "Special Diets"],
      },
      {
        name: "Treats",
        segments: ["Chews", "Biscuits", "Jerky", "Dental Treats"],
      },
      {
        name: "Toys & Accessories",
        segments: [
          "Balls & Toys",
          "Beds & Bedding",
          "Collars & Leashes",
          "Clothing & Apparel",
          "Grooming Supplies",
        ],
      },
      {
        name: "Beds & Bedding",
        segments: ["Beds", "Mats & Blankets", "Houses & Carriers"],
      },
    ],
  },
  {
    id: 6,
    name: "Industrial & Scientific",
    categories: [
      {
        name: "Lab Equipment",
        segments: ["Microscopes", "Centrifuges", "Beakers", "Safety Glasses"],
      },
      {
        name: "Power Tools",
        segments: ["Drills", "Saws", "Sanders", "Power Tool Accessories"],
      },
      { name: "Safety Gear", segments: [] },
      {
        name: "Measuring Instruments",
        segments: ["Rulers", "Calipers", "Levels", "Thermometers"],
      },
    ],
  },
  {
    id: 7,
    name: "Luggage",
    categories: [
      {
        name: "Suitcases & Duffel Bags",
        segments: [
          "Hardside Luggage",
          "Softside Luggage",
          "Duffel Bags",
          "Weekender Bags",
        ],
      },
      {
        name: "Backpacks & Travel Bags",
        segments: ["Backpacks", "Travel Totes", "Duffel Bags", "Garment Bags"],
      },
      {
        name: "Luggage Accessories",
        segments: [],
      },
      {
        name: "Business Cases",
        segments: [
          "Briefcases",
          "Rolling Laptop Cases",
          "Backpack Briefcases",
          "Suitcases",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Fashion",
    categories: [
      {
        name: "Men's Clothing",
        segments: [
          "Shirts",
          "Pants",
          "Suits",
          "Accessories (Ties, Belts, Wallets)",
        ],
      },
      {
        name: "Women's Clothing",
        segments: [
          "Dresses",
          "Tops",
          "Bottoms",
          "Accessories (Jewelry, Scarves, Bags)",
        ],
      },
      {
        name: "Children's Clothing",
        segments: [
          "Boys' Clothing",
          "Girls' Clothing",
          "Baby Clothing",
          "Shoes",
        ],
      },
      {
        name: "Shoes & Accessories",
        segments: [
          "Men's Shoes",
          "Women's Shoes",
          "Athletic Shoes",
          "Casual Shoes",
          "Dress Shoes",
          "Bags & Luggage",
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Groceries",
    categories: [
      {
        name: "Snacks & Beverages",
        segments: [
          "Chips & Crackers",
          "Candy & Chocolate",
          "Soft Drinks",
          "Coffee & Tea",
          "Energy Drinks & Sports Drinks",
        ],
      },
      {
        name: "Canned Goods & Dry Staples",
        segments: [
          "Canned Vegetables",
          "Canned Fruits",
          "Pasta",
          "Rice & Grains",
          "Beans & Lentils",
          "Soup & Broth",
        ],
      },
      {
        name: "Bakery & Dairy",
        segments: [
          "Bread",
          "Bakery Items (Cakes, Cookies)",
          "Milk & Dairy Alternatives",
          "Cheese",
          "Eggs",
        ],
      },
      {
        name: "Meat & Seafood",
        segments: [
          "Fresh Meat (Beef, Pork, Chicken, Seafood)",
          "Frozen Meat & Seafood",
          "Deli Meat & Sausages",
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Home, Kitchen & Office",
    categories: [
      {
        name: "Furniture",
        segments: [
          "Living Room Furniture (Sofas, Chairs, Tables)",
          "Bedroom Furniture (Beds, Dressers, Nightstands)",
          "Dining Room Furniture (Tables, Chairs)",
          "Outdoor Furniture",
        ],
      },
      {
        name: "Kitchenware",
        segments: [
          "Pots & Pans",
          "Cutlery & Knives",
          "Cooking Utensils",
          "Small Appliances (Blenders, Toasters, Coffee Makers)",
          "Bakeware",
        ],
      },
      {
        name: "Home Decor",
        segments: [
          "Lighting",
          "Rugs & Carpets",
          "Wall Decor",
          "Bedding & Bath",
          "Seasonal Decor",
        ],
      },
      {
        name: "Office Supplies",
        segments: [
          "Paper & Printing Supplies",
          "Writing Instruments",
          "Desk Organizers",
          "Tech Accessories (Cables, Chargers)",
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Beauty & Health",
    categories: [
      {
        name: "Makeup",
        segments: [
          "Face (Foundation, Concealer, Blush, Bronzer)",
          "Eyes (Eyeshadow, Eyeliner, Mascara, Brows)",
          "Lips (Lipstick, Lip Gloss, Lip Liner)",
          "Nails (Nail Polish, Nail Care, Artificial Nails)",
          "Brushes & Tools (Makeup Brushes, Sponges, Applicators)",
        ],
      },
      {
        name: "Skincare",
        segments: [
          "Cleansers & Toners",
          "Moisturizers & Serums (Hydrating, Anti-Aging, Acne Treatment)",
          "Treatments & Masks (Exfoliating, Hydrating, Brightening)",
          "Sun Protection (Sunscreen, After Sun Care)",
          "Eye Care (Eye Cream, Moisturizer, Makeup Remover)",
        ],
      },
      {
        name: "Hair Care",
        segments: [
          "Shampoo & Conditioner (Color-Safe, Volumizing, Damage Repair)",
          "Styling Products (Hairspray, Gel, Mousse, Wax)",
          "Hair Treatments (Deep Conditioner, Hair Mask, Scalp Treatment)",
          "Hair Color (Hair Dye, Bleaching Kits, Hair Toner)",
          "Hair Tools (Hair Dryer, Straightener, Curler)",
        ],
      },
      {
        name: "Bath & Body",
        segments: [
          "Soaps & Shower Gels",
          "Lotions & Creams (Body Lotion, Hand Cream, Foot Cream)",
          "Bath Salts & Oils",
          "Deodorants & Antiperspirants",
          "Fragrances (Perfume, Eau de Toilette, Body Mist)",
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Computers",
    categories: [
      {
        name: "Laptops",
        segments: [
          "Operating System (Windows, macOS, ChromeOS)",
          'Screen Size (e.g., 13", 15", 17")',
          "Brand (e.g., Apple, Dell, HP, Lenovo)",
          "Processor (e.g., Intel Core i3, i5, i7, AMD Ryzen)",
          "RAM (e.g., 8GB, 16GB, 32GB)",
        ],
      },
      {
        name: "Desktops",
        segments: [
          "Form Factor (Tower, All-in-One)",
          "Operating System (Windows, macOS)",
          "Processor (e.g., Intel Core, AMD Ryzen)",
          "RAM (e.g., 8GB, 16GB, 32GB)",
          "Storage (HDD, SSD, Capacity)",
        ],
      },
      {
        name: "Tablets",
        segments: [
          "Operating System (Android, iPadOS)",
          'Screen Size (e.g., 7", 10", 12")',
          "Brand (e.g., Apple, Samsung, Amazon)",
          "Storage Capacity",
          "Wi-Fi vs. Cellular",
        ],
      },
      {
        name: "Computer Components",
        segments: [
          "Processors (CPU)",
          "Graphics Cards (GPU)",
          "Motherboards",
          "Memory (RAM)",
          "Storage (HDD, SSD)",
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Electronics & Appliances",
    categories: [
      {
        name: "Televisions",
        segments: [
          "Screen Size",
          "Resolution (HD, Full HD, UHD/4K, 8K)",
          "Technology (LED, OLED, QLED)",
          "Smart TV vs. Non-Smart",
          "Brands (e.g., Samsung, LG, Sony)",
        ],
      },
      {
        name: "Home Appliances",
        segments: [
          "Refrigerators",
          "Washing Machines",
          "Dishwashers",
          "Kitchen Appliances (Ovens, Microwaves, Blenders)",
          "Small Appliances (Coffee Makers, Toasters)",
        ],
      },
      {
        name: "Audio & Video Equipment",
        segments: [
          "Speakers",
          "Headphones",
          "Home Theater Systems",
          "Projectors & Screens",
          "Streaming Devices",
        ],
      },
    ],
  },
];
  
export default departments;