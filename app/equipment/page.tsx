"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

const equipmentInventory = [
  // Interactive Games
  {
    id: 1,
    name: "Giant Jenga",
    category: "Interactive Games",
    capacity: "2-6 players",
    setupTime: "15 minutes",
    price: "RM 150/day",
    image: "/placeholder-equipment.jpg",
    description: "Classic stacking game in giant size",
  },
  {
    id: 2,
    name: "Giant Connect Four",
    category: "Interactive Games",
    capacity: "2 players",
    setupTime: "10 minutes",
    price: "RM 120/day",
    image: "/placeholder-equipment.jpg",
    description: "Oversized version of the classic game",
  },
  {
    id: 3,
    name: "Cornhole Toss Game",
    category: "Interactive Games",
    capacity: "2-4 players",
    setupTime: "10 minutes",
    price: "RM 100/day",
    image: "/placeholder-equipment.jpg",
    description: "Bean bag toss game set with boards",
  },
  {
    id: 4,
    name: "Ring Toss Game",
    category: "Interactive Games",
    capacity: "Unlimited",
    setupTime: "5 minutes",
    price: "RM 80/day",
    image: "/placeholder-equipment.jpg",
    description: "Classic carnival ring toss",
  },
  {
    id: 5,
    name: "Giant Tic Tac Toe",
    category: "Interactive Games",
    capacity: "2 players",
    setupTime: "5 minutes",
    price: "RM 90/day",
    image: "/placeholder-equipment.jpg",
    description: "Oversized tic tac toe board",
  },

  // Arcade Games
  {
    id: 6,
    name: "Air Hockey Table",
    category: "Arcade Games",
    capacity: "2 players",
    setupTime: "20 minutes",
    price: "RM 300/day",
    image: "/placeholder-equipment.jpg",
    description: "Professional air hockey table",
  },
  {
    id: 7,
    name: "Foosball Table",
    category: "Arcade Games",
    capacity: "2-4 players",
    setupTime: "15 minutes",
    price: "RM 250/day",
    image: "/placeholder-equipment.jpg",
    description: "Tournament-grade foosball table",
  },
  {
    id: 8,
    name: "Arcade Basketball",
    category: "Arcade Games",
    capacity: "1-2 players",
    setupTime: "30 minutes",
    price: "RM 400/day",
    image: "/placeholder-equipment.jpg",
    description: "Electronic basketball shooting game",
  },
  {
    id: 9,
    name: "Pinball Machine",
    category: "Arcade Games",
    capacity: "1 player",
    setupTime: "25 minutes",
    price: "RM 500/day",
    image: "/placeholder-equipment.jpg",
    description: "Classic pinball machine",
  },
  {
    id: 10,
    name: "Racing Simulator",
    category: "Arcade Games",
    capacity: "1 player",
    setupTime: "45 minutes",
    price: "RM 800/day",
    image: "/placeholder-equipment.jpg",
    description: "Full racing simulator with wheel and pedals",
  },

  // Outdoor Games
  {
    id: 11,
    name: "Inflatable Soccer Darts",
    category: "Outdoor Games",
    capacity: "Unlimited",
    setupTime: "30 minutes",
    price: "RM 350/day",
    image: "/placeholder-equipment.jpg",
    description: "Velcro soccer ball dart game",
  },
  {
    id: 12,
    name: "Giant Inflatable Bowling",
    category: "Outdoor Games",
    capacity: "Unlimited",
    setupTime: "20 minutes",
    price: "RM 280/day",
    image: "/placeholder-equipment.jpg",
    description: "Oversized inflatable bowling set",
  },
  {
    id: 13,
    name: "Bubble Soccer Set (10 suits)",
    category: "Outdoor Games",
    capacity: "10 players",
    setupTime: "45 minutes",
    price: "RM 1,200/day",
    image: "/placeholder-equipment.jpg",
    description: "Complete bubble soccer equipment",
  },
  {
    id: 14,
    name: "Human Foosball Arena",
    category: "Outdoor Games",
    capacity: "10-12 players",
    setupTime: "60 minutes",
    price: "RM 1,500/day",
    image: "/placeholder-equipment.jpg",
    description: "Full human foosball setup",
  },
  {
    id: 15,
    name: "Inflatable Obstacle Course",
    category: "Outdoor Games",
    capacity: "Unlimited",
    setupTime: "90 minutes",
    price: "RM 2,000/day",
    image: "/placeholder-equipment.jpg",
    description: "Large inflatable obstacle course",
  },

  // VR & Tech Games
  {
    id: 16,
    name: "VR Gaming Station",
    category: "VR & Tech Games",
    capacity: "1 player",
    setupTime: "30 minutes",
    price: "RM 600/day",
    image: "/placeholder-equipment.jpg",
    description: "Complete VR headset and gaming setup",
  },
  {
    id: 17,
    name: "PlayStation 5 Gaming Console",
    category: "VR & Tech Games",
    capacity: "1-4 players",
    setupTime: "20 minutes",
    price: "RM 400/day",
    image: "/placeholder-equipment.jpg",
    description: "Latest PS5 with controllers and games",
  },
  {
    id: 18,
    name: "Xbox Series X Console",
    category: "VR & Tech Games",
    capacity: "1-4 players",
    setupTime: "20 minutes",
    price: "RM 400/day",
    image: "/placeholder-equipment.jpg",
    description: "Xbox Series X with controllers and games",
  },
  {
    id: 19,
    name: "Nintendo Switch Setup",
    category: "VR & Tech Games",
    capacity: "1-4 players",
    setupTime: "15 minutes",
    price: "RM 300/day",
    image: "/placeholder-equipment.jpg",
    description: "Nintendo Switch with popular games",
  },
  {
    id: 20,
    name: "Gaming Projector Setup",
    category: "VR & Tech Games",
    capacity: "Unlimited viewers",
    setupTime: "40 minutes",
    price: "RM 500/day",
    image: "/placeholder-equipment.jpg",
    description: "High-definition gaming projector with screen",
  },

  // Party Games
  {
    id: 21,
    name: "Karaoke Machine",
    category: "Party Games",
    capacity: "Unlimited",
    setupTime: "25 minutes",
    price: "RM 350/day",
    image: "/placeholder-equipment.jpg",
    description: "Professional karaoke system with microphones",
  },
  {
    id: 22,
    name: "Photo Booth Package",
    category: "Party Games",
    capacity: "Unlimited",
    setupTime: "45 minutes",
    price: "RM 800/day",
    image: "/placeholder-equipment.jpg",
    description: "Complete photo booth with props and printer",
  },
  {
    id: 23,
    name: "Dart Board Electronic",
    category: "Party Games",
    capacity: "1-8 players",
    setupTime: "15 minutes",
    price: "RM 200/day",
    image: "/placeholder-equipment.jpg",
    description: "Electronic scoring dart board",
  },
  {
    id: 24,
    name: "Casino Table Set",
    category: "Party Games",
    capacity: "6-10 players",
    setupTime: "30 minutes",
    price: "RM 600/day",
    image: "/placeholder-equipment.jpg",
    description: "Blackjack and poker tables with chips",
  },
  {
    id: 25,
    name: "Mechanical Bull",
    category: "Party Games",
    capacity: "1 player at a time",
    setupTime: "60 minutes",
    price: "RM 1,800/day",
    image: "/placeholder-equipment.jpg",
    description: "Mechanical bull with safety mat",
  },

  // Team Building Games
  {
    id: 26,
    name: "Human Claw Machine",
    category: "Team Building",
    capacity: "1 player at a time",
    setupTime: "40 minutes",
    price: "RM 900/day",
    image: "/placeholder-equipment.jpg",
    description: "Life-size claw machine experience",
  },
  {
    id: 27,
    name: "Escape Room Kit",
    category: "Team Building",
    capacity: "4-8 players",
    setupTime: "90 minutes",
    price: "RM 1,200/day",
    image: "/placeholder-equipment.jpg",
    description: "Portable escape room puzzle set",
  },
  {
    id: 28,
    name: "Laser Tag Set (20 guns)",
    category: "Team Building",
    capacity: "20 players",
    setupTime: "45 minutes",
    price: "RM 1,500/day",
    image: "/placeholder-equipment.jpg",
    description: "Complete laser tag equipment",
  },
  {
    id: 29,
    name: "Giant Board Games Bundle",
    category: "Team Building",
    capacity: "Variable",
    setupTime: "20 minutes",
    price: "RM 400/day",
    image: "/placeholder-equipment.jpg",
    description: "Collection of oversized board games",
  },
  {
    id: 30,
    name: "Tug of War Rope",
    category: "Team Building",
    capacity: "10-20 players",
    setupTime: "5 minutes",
    price: "RM 100/day",
    image: "/placeholder-equipment.jpg",
    description: "Professional tug of war rope",
  },
];

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Interactive Games",
    "Arcade Games",
    "Outdoor Games",
    "VR & Tech Games",
    "Party Games",
    "Team Building",
  ];

  const filteredEquipment = equipmentInventory.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    const searchMatch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Game Equipment Rental</h1>
              <p className="text-textGray max-w-2xl mx-auto mb-6">
                Elevate your events with our extensive collection of game
                equipment. From interactive games to VR experiences, we have
                everything you need to create unforgettable entertainment.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filters & Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <ScrollAnimation>
            <div className="mb-8 bg-secondary p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search Bar */}
                <div className="md:col-span-3">
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Search Equipment
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by name or description..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2.5 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    <svg
                      className="absolute left-3 top-3 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Category Dropdown */}
                <div>
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Results Count */}
                <div className="flex items-end md:col-span-2">
                  <div className="text-sm text-textGray font-medium">
                    Showing {filteredEquipment.length} items
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEquipment.map((item, index) => (
              <ScrollAnimation
                key={item.id}
                animation="scale-in"
                delay={index * 50}
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
                    <div className="text-gray-400 text-center p-4">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-xs">{item.category}</p>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-accent text-white text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2 text-accent group-hover:text-gray-900 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-textGray mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="space-y-1 mb-3">
                      <p className="text-xs text-textGray flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        {item.capacity}
                      </p>
                      <p className="text-xs text-textGray flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Setup: {item.setupTime}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold text-sm">
                        {item.price}
                      </span>
                      <Link
                        href="/contact"
                        className="text-xs bg-accent text-white px-3 py-1.5 rounded hover:bg-gray-800 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* No Results */}
          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <p className="text-textGray">
                No equipment found matching your filters.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Equipment Packages */}
            <ScrollAnimation delay={100}>
              <div className="bg-accent text-white p-8 rounded-lg h-full">
                <h3 className="mb-3 text-white">Equipment Packages</h3>
                <p className="text-white/90 mb-6">
                  Save more with our bundled equipment packages. Perfect for
                  events, parties, and team building activities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Birthday Party Package: Games + Photo Booth</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Corporate Event Package: Mix of team building games</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Festival Package: Multiple outdoor games</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Gaming Lounge Package: All gaming consoles</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-accent px-6 py-2.5 text-sm rounded-md hover:bg-gray-100 transition-all duration-300 font-medium"
                >
                  View Package Pricing
                </Link>
              </div>
            </ScrollAnimation>

            {/* Need Help */}
            <ScrollAnimation delay={200}>
              <div className="bg-secondary p-8 rounded-lg h-full">
                <h3 className="mb-3">Need Help Choosing Equipment?</h3>
                <p className="text-textGray mb-6">
                  Our event specialists can help you select the perfect
                  equipment for your occasion. We provide setup, operation
                  support, and collection services.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-textGray">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Free consultation and recommendations</span>
                  </li>
                  <li className="flex items-start text-sm text-textGray">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Professional setup and testing</span>
                  </li>
                  <li className="flex items-start text-sm text-textGray">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>On-site support during your event</span>
                  </li>
                  <li className="flex items-start text-sm text-textGray">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Flexible rental periods available</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary inline-block">
                  Contact Our Team
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
