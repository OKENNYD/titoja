
const categories = [
  {
    department: "Electronics",
    categories: [
      {
        name: "Mobile Phones & Accessories",
        subcategories: [
          "Smartphones",
          "Feature Phones",
          "Phone Cases & Covers",
          "Screen Protectors",
          "Chargers & Cables",
          "Power Banks",
          "Bluetooth Headsets",
          "Smart Watches",
          "VR Headsets"
        ]
      },
      {
        name: "Computers & Office",
        subcategories: [
          "Laptops",
          "Desktop Computers",
          "Tablets",
          "Computer Components",
          "Printers & Scanners",
          "Computer Accessories",
          "External Storage",
          "Networking Devices",
          "Office Electronics"
        ]
      },
      {
        name: "Consumer Electronics",
        subcategories: [
          "TVs",
          "Home Audio & Theater",
          "Cameras & Drones",
          "Gaming Consoles",
          "Wearable Devices",
          "Smart Home Devices",
          "Electronic Accessories"
        ]
      }
    ]
  },
  {
    department: "Fashion",
    categories: [
      {
        name: "Women's Clothing",
        subcategories: [
          "Dresses",
          "Tops & Tees",
          "Jeans & Pants",
          "Skirts",
          "Jackets & Coats",
          "Activewear",
          "Lingerie & Sleepwear",
          "Traditional & Cultural Wear"
        ]
      },
      {
        name: "Men's Clothing",
        subcategories: [
          "Shirts & Polos",
          "T-Shirts",
          "Jeans & Pants",
          "Jackets & Coats",
          "Suits & Blazers",
          "Activewear",
          "Underwear & Sleepwear",
          "Traditional Wear"
        ]
      },
      {
        name: "Shoes",
        subcategories: [
          "Women's Shoes",
          "Men's Shoes",
          "Sports Shoes",
          "Sandals & Flip Flops",
          "Boots",
          "Slippers",
          "Kids' Shoes"
        ]
      },
      {
        name: "Accessories",
        subcategories: [
          "Bags & Backpacks",
          "Wallets & Purses",
          "Sunglasses",
          "Hats & Caps",
          "Belts",
          "Jewelry",
          "Watches"
        ]
      }
    ]
  },
  {
    department: "Home & Garden",
    categories: [
      {
        name: "Home Decor",
        subcategories: [
          "Wall Art",
          "Clocks",
          "Candles & Holders",
          "Vases",
          "Photo Frames",
          "Decorative Pillows",
          "Festive Decorations"
        ]
      },
      {
        name: "Furniture",
        subcategories: [
          "Living Room Furniture",
          "Bedroom Furniture",
          "Kitchen & Dining Furniture",
          "Office Furniture",
          "Outdoor Furniture",
          "Kids' Furniture"
        ]
      },
      {
        name: "Kitchen & Dining",
        subcategories: [
          "Cookware",
          "Bakeware",
          "Kitchen Tools",
          "Tableware",
          "Drinkware",
          "Kitchen Storage",
          "Small Appliances"
        ]
      },
      {
        name: "Gardening",
        subcategories: [
          "Gardening Tools",
          "Outdoor Plants",
          "Planters & Pots",
          "Garden Decor",
          "Watering Equipment",
          "Lawn Care"
        ]
      }
    ]
  },
  {
    department: "Toys & Hobbies",
    categories: [
      {
        name: "Toys",
        subcategories: [
          "Action Figures",
          "Dolls & Accessories",
          "Building Blocks",
          "Educational Toys",
          "Remote Control Toys",
          "Puzzles",
          "Outdoor Toys"
        ]
      },
      {
        name: "Hobbies",
        subcategories: [
          "Model Building",
          "Collectibles",
          "Arts & Crafts",
          "Musical Instruments",
          "Party Supplies",
          "Magic & Novelty"
        ]
      },
      {
        name: "Sports & Outdoor",
        subcategories: [
          "Fitness Equipment",
          "Camping Gear",
          "Cycling",
          "Fishing",
          "Team Sports",
          "Water Sports"
        ]
      }
    ]
  },
  {
    department: "Beauty & Health",
    categories: [
      {
        name: "Skincare",
        subcategories: [
          "Moisturizers",
          "Cleansers",
          "Face Masks",
          "Sunscreen",
          "Anti-Aging",
          "Toners & Mists"
        ]
      },
      {
        name: "Makeup",
        subcategories: [
          "Foundation",
          "Lipstick",
          "Eyeshadow",
          "Mascara",
          "Blush",
          "Makeup Tools"
        ]
      },
      {
        name: "Hair Care",
        subcategories: [
          "Shampoo & Conditioner",
          "Hair Styling Tools",
          "Hair Color",
          "Hair Extensions",
          "Hair Accessories"
        ]
      },
      {
        name: "Health & Wellness",
        subcategories: [
          "Vitamins & Supplements",
          "Medical Supplies",
          "Fitness Trackers",
          "Massage Devices",
          "Oral Care"
        ]
      }
    ]
  },
  {
    department: "Automotive",
    categories: [
      {
        name: "Car Accessories",
        subcategories: [
          "Car Covers",
          "Car Mats",
          "Car Electronics",
          "Car Care",
          "Car Decor",
          "Car Safety"
        ]
      },
      {
        name: "Motorcycle Accessories",
        subcategories: [
          "Helmets",
          "Gloves",
          "Jackets",
          "Motorcycle Parts",
          "Motorcycle Care"
        ]
      }
    ]
  },
  {
    department: "Groceries",
    categories: [
      {
        name: "Food & Beverages",
        subcategories: [
          "Snacks",
          "Canned Foods",
          "Pasta & Grains",
          "Breakfast Foods",
          "Baking Ingredients",
          "Cooking Oils",
          "Sauces & Condiments",
          "Beverages",
          "Tea & Coffee",
          "Health Foods"
        ]
      },
      {
        name: "Fresh Produce",
        subcategories: [
          "Fruits",
          "Vegetables",
          "Herbs",
          "Organic Produce",
          "Exotic Fruits"
        ]
      },
      {
        name: "Dairy & Eggs",
        subcategories: [
          "Milk",
          "Cheese",
          "Yogurt",
          "Butter",
          "Eggs",
          "Plant-Based Alternatives"
        ]
      },
      {
        name: "Meat & Seafood",
        subcategories: [
          "Beef",
          "Poultry",
          "Pork",
          "Lamb",
          "Seafood",
          "Frozen Meat"
        ]
      },
      {
        name: "Frozen Foods",
        subcategories: [
          "Frozen Meals",
          "Frozen Vegetables",
          "Frozen Fruits",
          "Ice Cream & Desserts",
          "Frozen Snacks"
        ]
      },
      {
        name: "Household Essentials",
        subcategories: [
          "Cleaning Supplies",
          "Paper Products",
          "Laundry Supplies",
          "Trash Bags",
          "Air Fresheners"
        ]
      }
    ]
  },
  {
    department: "Pet Supplies",
    categories: [
      {
        name: "Pet Food",
        subcategories: [
          "Dog Food",
          "Cat Food",
          "Bird Food",
          "Fish Food",
          "Small Animal Food",
          "Reptile Food"
        ]
      },
      {
        name: "Pet Accessories",
        subcategories: [
          "Collars & Leashes",
          "Pet Beds",
          "Pet Clothing",
          "Pet Toys",
          "Pet Carriers",
          "Pet Bowls & Feeders"
        ]
      },
      {
        name: "Pet Care",
        subcategories: [
          "Grooming Supplies",
          "Health & Wellness",
          "Litter & Waste Disposal",
          "Training Aids",
          "Pet Vitamins & Supplements"
        ]
      },
      {
        name: "Pet Furniture",
        subcategories: [
          "Cat Trees & Scratching Posts",
          "Dog Houses",
          "Pet Cages & Crates",
          "Pet Playpens"
        ]
      }
    ]
  },
  {
    department: "Media",
    categories: [
      {
        name: "Books",
        subcategories: [
          "Fiction",
          "Non-Fiction",
          "Children's Books",
          "Educational Books",
          "Comics & Graphic Novels",
          "Audiobooks"
        ]
      },
      {
        name: "Movies & TV Shows",
        subcategories: [
          "DVDs & Blu-rays",
          "Streaming Devices",
          "Movie Merchandise",
          "TV Series Box Sets"
        ]
      },
      {
        name: "Music",
        subcategories: [
          "CDs & Vinyl",
          "Music Streaming Devices",
          "Instruments",
          "Music Accessories"
        ]
      },
      {
        name: "Video Games",
        subcategories: [
          "Console Games",
          "PC Games",
          "Gaming Accessories",
          "Virtual Reality Games"
        ]
      }
    ]
  },
  {
    department: "Travel",
    categories: [
      {
        name: "Luggage & Bags",
        subcategories: [
          "Suitcases",
          "Backpacks",
          "Travel Duffle Bags",
          "Carry-On Bags",
          "Travel Organizers"
        ]
      },
      {
        name: "Travel Accessories",
        subcategories: [
          "Travel Pillows",
          "Travel Adapters",
          "Luggage Tags",
          "Travel Toiletries",
          "Passport Holders"
        ]
      },
      {
        name: "Outdoor Gear",
        subcategories: [
          "Camping Tents",
          "Sleeping Bags",
          "Hiking Backpacks",
          "Travel Water Bottles",
          "Portable Chairs"
        ]
      },
      {
        name: "Travel Clothing",
        subcategories: [
          "Travel Jackets",
          "Convertible Pants",
          "Travel Shoes",
          "Sun Hats",
          "Travel Scarves"
        ]
      }
    ]
  },
  {
    department: "Art & Craft",
    categories: [
      {
        name: "Drawing & Painting",
        subcategories: [
          "Pencils & Charcoal",
          "Paints & Brushes",
          "Canvases & Paper",
          "Easels",
          "Palettes"
        ]
      },
      {
        name: "Craft Supplies",
        subcategories: [
          "Beads & Jewelry Making",
          "Sewing & Knitting",
          "Scrapbooking",
          "Clay & Modeling",
          "Stickers & Decals"
        ]
      },
      {
        name: "Stationery",
        subcategories: [
          "Notebooks & Journals",
          "Pens & Markers",
          "Stamps & Ink",
          "Sticky Notes",
          "Planners"
        ]
      },
      {
        name: "DIY Kits",
        subcategories: [
          "Painting Kits",
          "Candle Making Kits",
          "Embroidery Kits",
          "Soap Making Kits",
          "Model Building Kits"
        ]
      }
    ]
  },
  {
    department: "Tools & Hardware",
    categories: [
      {
        name: "Hand Tools",
        subcategories: [
          "Screwdrivers",
          "Hammers",
          "Pliers",
          "Wrenches",
          "Saws"
        ]
      },
      {
        name: "Power Tools",
        subcategories: [
          "Drills",
          "Sanders",
          "Grinders",
          "Power Saws",
          "Air Compressors"
        ]
      },
      {
        name: "Tool Storage",
        subcategories: [
          "Toolboxes",
          "Tool Cabinets",
          "Tool Belts",
          "Pegboards"
        ]
      },
      {
        name: "Hardware",
        subcategories: [
          "Nails & Screws",
          "Bolts & Nuts",
          "Anchors",
          "Hinges",
          "Locks"
        ]
      }
    ]
  },
  {
    department: "Baby & Kids",
    categories: [
      {
        name: "Baby Clothing",
        subcategories: [
          "Onesies",
          "Rompers",
          "Sleepwear",
          "Outerwear",
          "Socks & Shoes"
        ]
      },
      {
        name: "Baby Gear",
        subcategories: [
          "Strollers",
          "Car Seats",
          "High Chairs",
          "Baby Carriers",
          "Playpens"
        ]
      },
      {
        name: "Toys & Games",
        subcategories: [
          "Soft Toys",
          "Educational Toys",
          "Outdoor Toys",
          "Puzzles",
          "Board Games"
        ]
      },
      {
        name: "Nursery",
        subcategories: [
          "Cribs",
          "Changing Tables",
          "Nursery Decor",
          "Baby Bedding",
          "Night Lights"
        ]
      }
    ]
  },
  {
    department: "Industrial & Scientific",
    categories: [
      {
        name: "Industrial Tools",
        subcategories: [
          "Welding Equipment",
          "Power Tools",
          "Measuring Tools",
          "Safety Equipment"
        ]
      },
      {
        name: "Lab Supplies",
        subcategories: [
          "Microscopes",
          "Lab Glassware",
          "Chemicals",
          "Lab Safety Gear"
        ]
      },
      {
        name: "Machinery",
        subcategories: [
          "CNC Machines",
          "3D Printers",
          "Industrial Robots",
          "Packaging Machines"
        ]
      },
      {
        name: "Scientific Instruments",
        subcategories: [
          "Telescopes",
          "Binoculars",
          "Thermometers",
          "Spectrometers"
        ]
      }
    ]
  },
  {
    department: "Office Supplies",
    categories: [
      {
        name: "Stationery",
        subcategories: [
          "Pens & Pencils",
          "Notebooks",
          "Sticky Notes",
          "Markers",
          "Planners"
        ]
      },
      {
        name: "Office Furniture",
        subcategories: [
          "Desks",
          "Chairs",
          "Filing Cabinets",
          "Bookshelves",
          "Office Tables"
        ]
      },
      {
        name: "Office Equipment",
        subcategories: [
          "Printers",
          "Scanners",
          "Shredders",
          "Projectors",
          "Whiteboards"
        ]
      },
      {
        name: "Office Supplies",
        subcategories: [
          "Paper",
          "Envelopes",
          "Binders",
          "Staplers",
          "Tape"
        ]
      }
    ]
  },
  {
    department: "Jewelry & Watches",
    categories: [
      {
        name: "Fine Jewelry",
        subcategories: [
          "Rings",
          "Necklaces",
          "Earrings",
          "Bracelets",
          "Pendants"
        ]
      },
      {
        name: "Fashion Jewelry",
        subcategories: [
          "Costume Rings",
          "Costume Necklaces",
          "Costume Earrings",
          "Costume Bracelets"
        ]
      },
      {
        name: "Watches",
        subcategories: [
          "Men's Watches",
          "Women's Watches",
          "Smart Watches",
          "Luxury Watches"
        ]
      },
      {
        name: "Jewelry Care",
        subcategories: [
          "Cleaning Kits",
          "Jewelry Boxes",
          "Repair Tools",
          "Polishing Cloths"
        ]
      }
    ]
  },
  {
    department: "Party & Events",
    categories: [
      {
        name: "Party Decorations",
        subcategories: [
          "Balloons",
          "Banners",
          "Tableware",
          "Streamers",
          "Confetti"
        ]
      },
      {
        name: "Party Supplies",
        subcategories: [
          "Cake Toppers",
          "Party Hats",
          "Candles",
          "Goodie Bags",
          "Party Games"
        ]
      },
      {
        name: "Event Planning",
        subcategories: [
          "Invitations",
          "Guest Books",
          "Event Signage",
          "Photo Booths"
        ]
      },
      {
        name: "Themed Parties",
        subcategories: [
          "Birthday Themes",
          "Holiday Themes",
          "Seasonal Themes",
          "Cultural Themes"
        ]
      }
    ]
  },
  {
    department: "Musical Instruments",
    categories: [
      {
        name: "String Instruments",
        subcategories: [
          "Guitars",
          "Violins",
          "Cellos",
          "Banjos",
          "Ukuleles"
        ]
      },
      {
        name: "Percussion Instruments",
        subcategories: [
          "Drums",
          "Cymbals",
          "Tambourines",
          "Xylophones",
          "Maracas"
        ]
      },
      {
        name: "Wind Instruments",
        subcategories: [
          "Flutes",
          "Clarinets",
          "Saxophones",
          "Trumpets",
          "Harmonicas"
        ]
      },
      {
        name: "Keyboard Instruments",
        subcategories: [
          "Pianos",
          "Keyboards",
          "Synthesizers",
          "MIDI Controllers"
        ]
      }
    ]
  }
];

console.table(categories);