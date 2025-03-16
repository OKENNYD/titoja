import { NextResponse } from 'next/server';

export async function GET() {
    const departments = [
        {
          id: 1,
          department: "Electronics",
          categories: [
            {
              name: "Mobile Phones & Accessories",
              segments: [
                "Smartphones",
                "Feature Phones",
                "Phone Cases & Covers",
                "Screen Protectors",
                "Chargers & Cables",
                "Power Banks",
                "Bluetooth Headsets",
                "Smart Watches",
                "VR Headsets",
              ],
            },
            {
              name: "Computers & Office",
              segments: [
                "Laptops",
                "Desktop Computers",
                "Tablets",
                "Computer Components",
                "Printers & Scanners",
                "Computer Accessories",
                "External Storage",
                "Networking Devices",
                "Office Electronics",
              ],
            },
            {
              name: "Consumer Electronics",
              segments: [
                "TVs",
                "Home Audio & Theater",
                "Cameras & Drones",
                "Gaming Consoles",
                "Wearable Devices",
                "Smart Home Devices",
                "Electronic Accessories",
              ],
            },
          ],
        },
        {
          id: 2,
          department: "Fashion",
          categories: [
            {
              name: "Women's Clothing",
              segments: [
                "Dresses",
                "Tops & Tees",
                "Jeans & Pants",
                "Skirts",
                "Jackets & Coats",
                "Activewear",
                "Lingerie & Sleepwear",
                "Traditional & Cultural Wear",
              ],
            },
            {
              name: "Men's Clothing",
              segments: [
                "Shirts & Polos",
                "T-Shirts",
                "Jeans & Pants",
                "Jackets & Coats",
                "Suits & Blazers",
                "Activewear",
                "Underwear & Sleepwear",
                "Traditional Wear",
              ],
            },
            {
              name: "Shoes",
              segments: [
                "Women's Shoes",
                "Men's Shoes",
                "Sports Shoes",
                "Sandals & Flip Flops",
                "Boots",
                "Slippers",
                "Kids' Shoes",
              ],
            },
            {
              name: "Accessories",
              segments: [
                "Bags & Backpacks",
                "Wallets & Purses",
                "Sunglasses",
                "Hats & Caps",
                "Belts",
                "Jewelry",
                "Watches",
              ],
            },
          ],
        },
        {
          id: 3,
          department: "Home & Garden",
          categories: [
            {
              name: "Home Decor",
              segments: [
                "Wall Art",
                "Clocks",
                "Candles & Holders",
                "Vases",
                "Photo Frames",
                "Decorative Pillows",
                "Festive Decorations",
              ],
            },
            {
              name: "Furniture",
              segments: [
                "Living Room Furniture",
                "Bedroom Furniture",
                "Kitchen & Dining Furniture",
                "Office Furniture",
                "Outdoor Furniture",
                "Kids' Furniture",
              ],
            },
            {
              name: "Kitchen & Dining",
              segments: [
                "Cookware",
                "Bakeware",
                "Kitchen Tools",
                "Tableware",
                "Drinkware",
                "Kitchen Storage",
                "Small Appliances",
              ],
            },
            {
              name: "Gardening",
              segments: [
                "Gardening Tools",
                "Outdoor Plants",
                "Planters & Pots",
                "Garden Decor",
                "Watering Equipment",
                "Lawn Care",
              ],
            },
          ],
        },
        {
          id: 4,
          department: "Toys & Hobbies",
          categories: [
            {
              name: "Toys",
              segments: [
                "Action Figures",
                "Dolls & Accessories",
                "Building Blocks",
                "Educational Toys",
                "Remote Control Toys",
                "Puzzles",
                "Outdoor Toys",
              ],
            },
            {
              name: "Hobbies",
              segments: [
                "Model Building",
                "Collectibles",
                "Arts & Crafts",
                "Musical Instruments",
                "Party Supplies",
                "Magic & Novelty",
              ],
            },
            {
              name: "Sports & Outdoor",
              segments: [
                "Fitness Equipment",
                "Camping Gear",
                "Cycling",
                "Fishing",
                "Team Sports",
                "Water Sports",
              ],
            },
          ],
        },
        {
          id: 5,
          department: "Beauty & Health",
          categories: [
            {
              name: "Skincare",
              segments: [
                "Moisturizers",
                "Cleansers",
                "Face Masks",
                "Sunscreen",
                "Anti-Aging",
                "Toners & Mists",
              ],
            },
            {
              name: "Makeup",
              segments: [
                "Foundation",
                "Lipstick",
                "Eyeshadow",
                "Mascara",
                "Blush",
                "Makeup Tools",
              ],
            },
            {
              name: "Hair Care",
              segments: [
                "Shampoo & Conditioner",
                "Hair Styling Tools",
                "Hair Color",
                "Hair Extensions",
                "Hair Accessories",
              ],
            },
            {
              name: "Health & Wellness",
              segments: [
                "Vitamins & Supplements",
                "Medical Supplies",
                "Fitness Trackers",
                "Massage Devices",
                "Oral Care",
              ],
            },
          ],
        },
        {
          id: 6,
          department: "Automotive",
          categories: [
            {
              name: "Car Accessories",
              segments: [
                "Car Covers",
                "Car Mats",
                "Car Electronics",
                "Car Care",
                "Car Decor",
                "Car Safety",
              ],
            },
            {
              name: "Motorcycle Accessories",
              segments: [
                "Helmets",
                "Gloves",
                "Jackets",
                "Motorcycle Parts",
                "Motorcycle Care",
              ],
            },
          ],
        },
        {
          id: 7,
          department: "Groceries",
          categories: [
            {
              name: "Food & Beverages",
              segments: [
                "Snacks",
                "Canned Foods",
                "Pasta & Grains",
                "Breakfast Foods",
                "Baking Ingredients",
                "Cooking Oils",
                "Sauces & Condiments",
                "Beverages",
                "Tea & Coffee",
                "Health Foods",
              ],
            },
            {
              name: "Fresh Produce",
              segments: [
                "Fruits",
                "Vegetables",
                "Herbs",
                "Organic Produce",
                "Exotic Fruits",
              ],
            },
            {
              name: "Dairy & Eggs",
              segments: [
                "Milk",
                "Cheese",
                "Yogurt",
                "Butter",
                "Eggs",
                "Plant-Based Alternatives",
              ],
            },
            {
              name: "Meat & Seafood",
              segments: ["Beef", "Poultry", "Pork", "Lamb", "Seafood", "Frozen Meat"],
            },
            {
              name: "Frozen Foods",
              segments: [
                "Frozen Meals",
                "Frozen Vegetables",
                "Frozen Fruits",
                "Ice Cream & Desserts",
                "Frozen Snacks",
              ],
            },
            {
              name: "Household Essentials",
              segments: [
                "Cleaning Supplies",
                "Paper Products",
                "Laundry Supplies",
                "Trash Bags",
                "Air Fresheners",
              ],
            },
          ],
        },
        {
          id: 8,
          department: "Pet Supplies",
          categories: [
            {
              name: "Pet Food",
              segments: [
                "Dog Food",
                "Cat Food",
                "Bird Food",
                "Fish Food",
                "Small Animal Food",
                "Reptile Food",
              ],
            },
            {
              name: "Pet Accessories",
              segments: [
                "Collars & Leashes",
                "Pet Beds",
                "Pet Clothing",
                "Pet Toys",
                "Pet Carriers",
                "Pet Bowls & Feeders",
              ],
            },
            {
              name: "Pet Care",
              segments: [
                "Grooming Supplies",
                "Health & Wellness",
                "Litter & Waste Disposal",
                "Training Aids",
                "Pet Vitamins & Supplements",
              ],
            },
            {
              name: "Pet Furniture",
              segments: [
                "Cat Trees & Scratching Posts",
                "Dog Houses",
                "Pet Cages & Crates",
                "Pet Playpens",
              ],
            },
          ],
        },
        {
          id: 9,
          department: "Media",
          categories: [
            {
              name: "Books",
              segments: [
                "Fiction",
                "Non-Fiction",
                "Children's Books",
                "Educational Books",
                "Comics & Graphic Novels",
                "Audiobooks",
              ],
            },
            {
              name: "Movies & TV Shows",
              segments: [
                "DVDs & Blu-rays",
                "Streaming Devices",
                "Movie Merchandise",
                "TV Series Box Sets",
              ],
            },
            {
              name: "Music",
              segments: [
                "CDs & Vinyl",
                "Music Streaming Devices",
                "Instruments",
                "Music Accessories",
              ],
            },
            {
              name: "Video Games",
              segments: [
                "Console Games",
                "PC Games",
                "Gaming Accessories",
                "Virtual Reality Games",
              ],
            },
          ],
        },
        {
          id: 10,
          department: "Travel",
          categories: [
            {
              name: "Luggage & Bags",
              segments: [
                "Suitcases",
                "Backpacks",
                "Travel Duffle Bags",
                "Carry-On Bags",
                "Travel Organizers",
              ],
            },
            {
              name: "Travel Accessories",
              segments: [
                "Travel Pillows",
                "Travel Adapters",
                "Luggage Tags",
                "Travel Toiletries",
                "Passport Holders",
              ],
            },
            {
              name: "Outdoor Gear",
              segments: [
                "Camping Tents",
                "Sleeping Bags",
                "Hiking Backpacks",
                "Travel Water Bottles",
                "Portable Chairs",
              ],
            },
            {
              name: "Travel Clothing",
              segments: [
                "Travel Jackets",
                "Convertible Pants",
                "Travel Shoes",
                "Sun Hats",
                "Travel Scarves",
              ],
            },
          ],
        },
        {
          id: 11,
          department: "Art & Craft",
          categories: [
            {
              name: "Drawing & Painting",
              segments: [
                "Pencils & Charcoal",
                "Paints & Brushes",
                "Canvases & Paper",
                "Easels",
                "Palettes",
              ],
            },
            {
              name: "Craft Supplies",
              segments: [
                "Beads & Jewelry Making",
                "Sewing & Knitting",
                "Scrapbooking",
                "Clay & Modeling",
                "Stickers & Decals",
              ],
            },
            {
              name: "Stationery",
              segments: [
                "Notebooks & Journals",
                "Pens & Markers",
                "Stamps & Ink",
                "Sticky Notes",
                "Planners",
              ],
            },
            {
              name: "DIY Kits",
              segments: [
                "Painting Kits",
                "Candle Making Kits",
                "Embroidery Kits",
                "Soap Making Kits",
                "Model Building Kits",
              ],
            },
          ],
        },
        {
          id: 12,
          department: "Tools & Hardware",
          categories: [
            {
              name: "Hand Tools",
              segments: ["Screwdrivers", "Hammers", "Pliers", "Wrenches", "Saws"],
            },
            {
              name: "Power Tools",
              segments: [
                "Drills",
                "Sanders",
                "Grinders",
                "Power Saws",
                "Air Compressors",
              ],
            },
            {
              name: "Tool Storage",
              segments: ["Toolboxes", "Tool Cabinets", "Tool Belts", "Pegboards"],
            },
            {
              name: "Hardware",
              segments: [
                "Nails & Screws",
                "Bolts & Nuts",
                "Anchors",
                "Hinges",
                "Locks",
              ],
            },
          ],
        },
        {
          id: 13,
          department: "Baby & Kids",
          categories: [
            {
              name: "Baby Clothing",
              segments: [
                "Onesies",
                "Rompers",
                "Sleepwear",
                "Outerwear",
                "Socks & Shoes",
              ],
            },
            {
              name: "Baby Gear",
              segments: [
                "Strollers",
                "Car Seats",
                "High Chairs",
                "Baby Carriers",
                "Playpens",
              ],
            },
            {
              name: "Toys & Games",
              segments: [
                "Soft Toys",
                "Educational Toys",
                "Outdoor Toys",
                "Puzzles",
                "Board Games",
              ],
            },
            {
              name: "Nursery",
              segments: [
                "Cribs",
                "Changing Tables",
                "Nursery Decor",
                "Baby Bedding",
                "Night Lights",
              ],
            },
          ],
        },
        {
          id: 14,
          department: "Industrial & Scientific",
          categories: [
            {
              name: "Industrial Tools",
              segments: [
                "Welding Equipment",
                "Power Tools",
                "Measuring Tools",
                "Safety Equipment",
              ],
            },
            {
              name: "Lab Supplies",
              segments: [
                "Microscopes",
                "Lab Glassware",
                "Chemicals",
                "Lab Safety Gear",
              ],
            },
            {
              name: "Machinery",
              segments: [
                "CNC Machines",
                "3D Printers",
                "Industrial Robots",
                "Packaging Machines",
              ],
            },
            {
              name: "Scientific Instruments",
              segments: ["Telescopes", "Binoculars", "Thermometers", "Spectrometers"],
            },
          ],
        },
        {
          id: 15,
          department: "Office Supplies",
          categories: [
            {
              name: "Stationery",
              segments: [
                "Pens & Pencils",
                "Notebooks",
                "Sticky Notes",
                "Markers",
                "Planners",
              ],
            },
            {
              name: "Office Furniture",
              segments: [
                "Desks",
                "Chairs",
                "Filing Cabinets",
                "Bookshelves",
                "Office Tables",
              ],
            },
            {
              name: "Office Equipment",
              segments: [
                "Printers",
                "Scanners",
                "Shredders",
                "Projectors",
                "Whiteboards",
              ],
            },
            {
              name: "Office Supplies",
              segments: ["Paper", "Envelopes", "Binders", "Staplers", "Tape"],
            },
          ],
        },
        {
          id: 16,
          department: "Jewelry & Watches",
          categories: [
            {
              name: "Fine Jewelry",
              segments: ["Rings", "Necklaces", "Earrings", "Bracelets", "Pendants"],
            },
            {
              name: "Fashion Jewelry",
              segments: [
                "Costume Rings",
                "Costume Necklaces",
                "Costume Earrings",
                "Costume Bracelets",
              ],
            },
            {
              name: "Watches",
              segments: [
                "Men's Watches",
                "Women's Watches",
                "Smart Watches",
                "Luxury Watches",
              ],
            },
            {
              name: "Jewelry Care",
              segments: [
                "Cleaning Kits",
                "Jewelry Boxes",
                "Repair Tools",
                "Polishing Cloths",
              ],
            },
          ],
        },
        {
          id: 17,
          department: "Party & Events",
          categories: [
            {
              name: "Party Decorations",
              segments: ["Balloons", "Banners", "Tableware", "Streamers", "Confetti"],
            },
            {
              name: "Party Supplies",
              segments: [
                "Cake Toppers",
                "Party Hats",
                "Candles",
                "Goodie Bags",
                "Party Games",
              ],
            },
            {
              name: "Event Planning",
              segments: [
                "Invitations",
                "Guest Books",
                "Event Signage",
                "Photo Booths",
              ],
            },
            {
              name: "Themed Parties",
              segments: [
                "Birthday Themes",
                "Holiday Themes",
                "Seasonal Themes",
                "Cultural Themes",
              ],
            },
          ],
        },
        {
          id: 18,
          department: "Musical Instruments",
          categories: [
            {
              name: "String Instruments",
              segments: ["Guitars", "Violins", "Cellos", "Banjos", "Ukuleles"],
            },
            {
              name: "Percussion Instruments",
              segments: ["Drums", "Cymbals", "Tambourines", "Xylophones", "Maracas"],
            },
            {
              name: "Wind Instruments",
              segments: [
                "Flutes",
                "Clarinets",
                "Saxophones",
                "Trumpets",
                "Harmonicas",
              ],
            },
            {
              name: "Keyboard Instruments",
              segments: ["Pianos", "Keyboards", "Synthesizers", "MIDI Controllers"],
            },
          ],
        },
      ];
  try {
    return NextResponse.json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    return NextResponse.json({ error: 'Failed to fetch departments' }, { status: 500 });
  }
}