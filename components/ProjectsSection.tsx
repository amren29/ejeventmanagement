"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const projects = [
  {
    title: "Product Launch Event",
    category: "Event Management",
    description: "Large-scale product launch for leading FMCG brand across major cities in Sabah",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    description: "Comprehensive social media campaign driving 300% engagement increase",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Billboard Campaign",
    category: "Outdoor Advertising",
    description: "Strategic billboard placements across prime locations in Kota Kinabalu",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    title: "Corporate Branding",
    category: "Branding Production",
    description: "Complete brand identity and installation for hospitality group",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  },
  {
    title: "Festival Activation",
    category: "Event Management",
    description: "Multi-day festival activation engaging thousands of attendees",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
  },
  {
    title: "Video Production",
    category: "Creative Production",
    description: "High-impact commercial video production for tourism campaign",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Event Management", "Digital Marketing", "Outdoor Advertising", "Branding Production", "Creative Production"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h2 className="mb-3">What We Can Do</h2>
            <p className="text-textGray max-w-2xl mx-auto mb-6">
              Explore our portfolio of successful campaigns and events across East
              Malaysia. From concept to execution, we deliver excellence.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                  filter === category
                    ? "bg-accent text-white"
                    : "bg-white text-textGray hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-accent bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white text-accent px-2.5 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
