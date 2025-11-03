"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Event Management Excellence",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop",
  },
  {
    title: "Digital Marketing Innovation",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1920&h=800&fit=crop",
  },
  {
    title: "Creative Production Mastery",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1920&h=800&fit=crop",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white z-10">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 text-white">
            Creating Impactful Brand Experiences
            <br />
            Across East Malaysia
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-200 max-w-2xl mx-auto">
            From events to digital campaigns — we deliver 360° creative
            marketing solutions.
          </p>
          <Link href="/contact" className="inline-block bg-white text-accent px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium">
            Start Your Project
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
