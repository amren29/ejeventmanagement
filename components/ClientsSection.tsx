"use client";

import ScrollAnimation from "./ScrollAnimation";

const clients = [
  "Corporate Brand 1",
  "Government Agency",
  "Retail Brand",
  "Hospitality Group",
  "Education Institute",
  "Financial Services",
  "Technology Corp",
  "FMCG Brand",
  "Healthcare Group",
  "Property Developer",
];

export default function ClientsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h2 className="mb-3">Our Clients</h2>
            <p className="text-textGray max-w-2xl mx-auto">
              Trusted by leading brands and organizations across East Malaysia.
            </p>
          </div>
        </ScrollAnimation>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 mx-6 flex items-center justify-center"
              >
                <div className="bg-secondary h-24 w-full rounded-lg flex items-center justify-center hover:shadow-md transition-shadow">
                  <span className="text-textGray font-medium text-center px-3 text-sm">
                    {client}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 mx-6 flex items-center justify-center"
              >
                <div className="bg-secondary h-24 w-full rounded-lg flex items-center justify-center hover:shadow-md transition-shadow">
                  <span className="text-textGray font-medium text-center px-3 text-sm">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
