"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  {
    question: "What areas do you cover in East Malaysia?",
    answer:
      "We proudly serve the entire East Malaysian region, including Sabah, Sarawak, and Labuan. Our local expertise and network ensure seamless project execution across all locations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. Event activations may take 2-4 weeks, while comprehensive branding campaigns can span 1-3 months. We'll provide a detailed timeline during consultation.",
  },
  {
    question: "Can you customize services to fit our budget?",
    answer:
      "Absolutely. We work with businesses of all sizes and create tailored solutions that align with your objectives and budget. Let's discuss what's possible for your brand.",
  },
  {
    question: "Do you handle both traditional and digital marketing?",
    answer:
      "Yes! As a 360° marketing agency, we seamlessly integrate traditional methods (events, branding, print) with digital strategies (social media, SEO, online campaigns) for maximum impact.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We've partnered with clients across retail, hospitality, government, technology, FMCG, real estate, and more. Our diverse portfolio allows us to bring fresh perspectives to every industry.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <h2 className="mb-3">Frequently Asked Questions</h2>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-in"
              delay={index * 50}
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-accent pr-6 text-sm">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 text-accent flex-shrink-0 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
