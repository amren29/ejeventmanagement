"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import ScrollAnimation from "@/components/ScrollAnimation";

const categories = [
  "All",
  "Event Management & Activations",
  "Digital Marketing",
  "Creative Production",
  "Branding & Installation",
  "Out-of-Home Advertising",
  "Event Support Services & Rentals",
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Our Blog</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                Insights, tips, and industry trends from East Malaysia's leading
                marketing agency.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search Bar */}
          <ScrollAnimation>
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md mx-auto block px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </ScrollAnimation>

          {/* Category Filter */}
          <ScrollAnimation delay={100}>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollAnimation>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-textGray text-sm text-center">
              Showing {filteredBlogs.length} article
              {filteredBlogs.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <ScrollAnimation
                  key={blog.slug}
                  animation="fade-in"
                  delay={index * 50}
                >
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Blog Image */}
                    <div className="h-48 bg-gradient-to-br from-accent to-gray-800 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-6xl opacity-20">
                          📝
                        </span>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-secondary text-accent text-xs font-medium rounded-full">
                          {blog.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-textGray text-sm mb-4 line-clamp-3 flex-grow">
                        {blog.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                          <span>{blog.author}</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <span>
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-textGray text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
