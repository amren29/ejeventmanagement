"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

const equipmentInventory = [
  // Audio Visual Equipment
  {
    id: 1,
    name: "PA System",
    type: "Audio Visual",
    description: "Professional public address system for events of all sizes",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Microphones (Wireless / Lapel / Headset)",
    type: "Audio Visual",
    description: "Various microphone types for speakers and performers",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Audio Mixer",
    type: "Audio Visual",
    description: "Professional audio mixing console for sound control",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    name: "LED Screen",
    type: "Audio Visual",
    description: "High-resolution LED display screens for visual presentations",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    name: "TV",
    type: "Audio Visual",
    description: "Flat screen TV for presentations and displays",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Vertical TV",
    type: "Audio Visual",
    description: "Portrait-oriented display for signage and digital menus",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    name: "Projector",
    type: "Audio Visual",
    description: "High-brightness projector for presentations and visuals",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
  },

  // Lighting & Effects
  {
    id: 8,
    name: "Lighting System",
    type: "Lighting & Effects",
    description: "Complete event lighting system for any venue",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    name: "Moving Head & Moving Wash Lights",
    type: "Lighting & Effects",
    description: "Dynamic intelligent lighting for stages and events",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
  },
  {
    id: 10,
    name: "Facelight",
    type: "Lighting & Effects",
    description: "Front lighting to illuminate speakers and performers",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
  },
  {
    id: 11,
    name: "Follow Spot Light",
    type: "Lighting & Effects",
    description: "Spotlight that follows performers on stage",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
  },
  {
    id: 12,
    name: "Decorative Lighting",
    type: "Lighting & Effects",
    description: "Fairy lights, uplights, and ambient lighting for decor",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
  },
  {
    id: 13,
    name: "Smoke Machine",
    type: "Lighting & Effects",
    description: "Haze and smoke effects for dramatic atmosphere",
    image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=800&h=600&fit=crop",
  },

  // Stage & Structure
  {
    id: 14,
    name: "Event Stage",
    type: "Stage & Structure",
    description: "Modular stage platforms for performances and presentations",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
  },
  {
    id: 15,
    name: "Truss System",
    type: "Stage & Structure",
    description: "Aluminium truss for lighting rigs and stage structures",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },
  {
    id: 16,
    name: "Rostrum / Podium",
    type: "Stage & Structure",
    description: "Speaker podium for speeches and formal events",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
  },
  {
    id: 17,
    name: "Backdrop System",
    type: "Stage & Structure",
    description: "Customizable backdrop frames and panels for branding",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
  },
  {
    id: 18,
    name: "Carpet & Flooring",
    type: "Stage & Structure",
    description: "Event carpeting and flooring solutions for any surface",
    image: "https://images.unsplash.com/photo-1504652517000-ae1068c4237f?w=800&h=600&fit=crop",
  },

  // Furniture Rental
  {
    id: 19,
    name: "Tables & Chairs",
    type: "Furniture",
    description: "Standard event tables and chairs for all occasions",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=600&fit=crop",
  },
  {
    id: 20,
    name: "VIP Sofa",
    type: "Furniture",
    description: "Premium lounge seating for VIP areas and guests",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
  },
  {
    id: 21,
    name: "Cocktail Tables",
    type: "Furniture",
    description: "High tables for networking events and cocktail receptions",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&h=600&fit=crop",
  },
  {
    id: 22,
    name: "Banquet Chairs",
    type: "Furniture",
    description: "Elegant chairs for formal dinners and banquets",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
  },

  // Tent & Outdoor Setup
  {
    id: 23,
    name: "Canopy",
    type: "Tent & Outdoor",
    description: "Weather-proof canopy tents for outdoor events",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
  },
  {
    id: 24,
    name: "Marquee Tent",
    type: "Tent & Outdoor",
    description: "Large marquee tents for grand outdoor celebrations",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
  },
  {
    id: 25,
    name: "Industrial Fan",
    type: "Tent & Outdoor",
    description: "High-powered fans for ventilation at outdoor events",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop",
  },
  {
    id: 26,
    name: "Cooler Fan",
    type: "Tent & Outdoor",
    description: "Portable cooling fans for guest comfort",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },

  // Power Supply
  {
    id: 27,
    name: "Power Point & Wiring",
    type: "Power Supply",
    description: "Electrical distribution and power point setup for events",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 28,
    name: "Generator Set",
    type: "Power Supply",
    description: "Portable generators for outdoor and remote event locations",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
  },

  // Event Add-Ons
  {
    id: 29,
    name: "Event Decoration",
    type: "Event Add-Ons",
    description: "Custom decorations including balloons, flowers, and themed setups",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
  },
  {
    id: 30,
    name: "Photobooth",
    type: "Event Add-Ons",
    description: "Interactive photo booth with props and instant prints",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
  },
  {
    id: 31,
    name: "Cue Pole",
    type: "Event Add-Ons",
    description: "Queue management poles and rope barriers for crowd control",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    id: 32,
    name: "Red Carpet Setup",
    type: "Event Add-Ons",
    description: "Red carpet with stanchions for VIP entrances and events",
    image: "https://images.unsplash.com/photo-1504652517000-ae1068c4237f?w=800&h=600&fit=crop",
  },
];

export default function EventEquipmentPage() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const equipmentTypes = [
    "All",
    "Audio Visual",
    "Lighting & Effects",
    "Stage & Structure",
    "Furniture",
    "Tent & Outdoor",
    "Power Supply",
    "Event Add-Ons",
  ];

  const filteredEquipment = equipmentInventory.filter((item) => {
    const typeMatch = selectedType === "All" || item.type === selectedType;
    const searchMatch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && searchMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Event Equipment Rental</h1>
              <p className="text-textGray max-w-2xl mx-auto mb-6">
                Explore our comprehensive range of event equipment available for
                rent. From canopies and furniture to stages, LED screens, and
                sound systems — everything you need for a successful event.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
              <Link
                href="/event-equipment/packages"
                className="btn-primary inline-block"
              >
                View Package Pricing
              </Link>
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
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Search Equipment
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by name or type..."
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

                {/* Equipment Type Dropdown */}
                <div>
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Equipment Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    {equipmentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4">
                <div className="text-sm text-textGray font-medium">
                  Showing {filteredEquipment.length} items
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
                  <div className="relative bg-gray-200 h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Type Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-accent text-white text-xs px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2 text-accent group-hover:text-gray-900 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-textGray mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-end">
                      <Link
                        href="/contact"
                        className="text-xs bg-accent text-white px-3 py-1.5 rounded hover:bg-gray-800 transition-colors"
                      >
                        Inquire
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
                No equipment found matching your search.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Equipment Packages */}
            <ScrollAnimation delay={100}>
              <div className="bg-accent text-white p-8 rounded-lg h-full">
                <h3 className="mb-3 text-white">Event Packages</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Save time and money with our bundled event packages. Perfect
                  for various event types and budgets.
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
                    <span>Basic Event Package: Canopy + Tables + Chairs</span>
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
                    <span>Premium Package: Stage + Sound + Lighting</span>
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
                    <span>Complete Event Setup: All equipment included</span>
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
                    <span>Custom Packages: Mix and match your needs</span>
                  </li>
                </ul>
                <Link
                  href="/event-equipment/packages"
                  className="inline-block bg-white text-accent px-6 py-2.5 text-sm rounded-md hover:bg-gray-100 transition-all duration-300 font-medium"
                >
                  View Package Pricing
                </Link>
              </div>
            </ScrollAnimation>

            {/* Need Help */}
            <ScrollAnimation delay={200}>
              <div className="bg-secondary p-8 rounded-lg h-full">
                <h3 className="mb-3">Need Expert Assistance?</h3>
                <p className="text-textGray mb-6 text-sm">
                  Our experienced team can help you plan and execute your event
                  perfectly. Contact us for personalized recommendations and
                  full event support.
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
                    <span>Free consultation on equipment selection</span>
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
                    <span>Professional setup and installation</span>
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
                    <span>On-site technical support available</span>
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
                    <span>Flexible rental terms and delivery</span>
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
