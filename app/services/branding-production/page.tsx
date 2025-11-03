import ScrollAnimation from "@/components/ScrollAnimation";
import OurProcess from "@/components/OurProcess";
import ServiceProjects from "@/components/ServiceProjects";
import GlobalCTA from "@/components/GlobalCTA";

export const metadata = {
  title: "Branding & Installation - KK Creative Event",
  description: "Complete branding and installation services including brand identity design, signage fabrication, billboard installation, and display setup across East Malaysia.",
};

const subservices = [
  {
    title: "Logo & Brand Identity Design",
    description: "Complete brand identity development including logo design, color palettes, typography, brand guidelines, and visual identity systems.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Signage & Display Fabrication",
    description: "Professional design and fabrication of all types of signage including storefront signs, directional signage, illuminated signs, and custom displays.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Billboard & Hoarding Installation",
    description: "Complete billboard and hoarding services including design, printing, fabrication, and professional installation across East Malaysia.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Booth & Exhibition Setup",
    description: "End-to-end exhibition booth services including design, fabrication, setup, logistics, and dismantling for trade shows and events.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Vehicle Wrapping & Decals",
    description: "Transform your vehicles into mobile advertisements with professional vehicle wraps, decals, graphics, and fleet branding solutions.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Retail & POS Material Installation",
    description: "Professional installation of retail displays, point-of-sale materials, promotional stands, shelf branding, and in-store marketing materials.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

export default function BrandingProductionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Branding & Installation</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                Establish a strong brand identity and bring it to life across all platforms.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* What is This Service */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <h2 className="mb-6 text-center">What is Branding & Installation?</h2>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                Branding production is the process of transforming your brand
                identity into tangible materials and installations that customers
                can see, touch, and experience. It's where design meets reality,
                ensuring your brand is consistently represented across all physical
                and visual touchpoints.
              </p>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                At KK Creative Event, we handle everything from initial design
                concepts to final production and installation. Our comprehensive
                approach ensures quality, consistency, and attention to detail at
                every stage. We work with trusted manufacturers and suppliers
                throughout East Malaysia to deliver exceptional results on time and
                within budget.
              </p>
              <p className="text-textGray leading-relaxed text-sm">
                Whether you're launching a new brand, refreshing an existing one,
                or expanding your presence, our production capabilities cover
                everything from small-format printing to large-scale installations,
                ensuring your brand makes the right impact.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Subservices */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-10">
              <h2 className="mb-3">Our Branding & Installation Services</h2>
              <p className="text-textGray max-w-2xl mx-auto text-sm">
                Complete branding solutions from design to installation, ensuring
                consistency across all brand touchpoints.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subservices.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in"
                delay={index * 100}
              >
                <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-accent mb-4">{service.icon}</div>
                  <h3 className="mb-3 text-lg">{service.title}</h3>
                  <p className="text-textGray text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <OurProcess />

      {/* Our Projects */}
      <ServiceProjects category="Branding & Installation" />

      {/* CTA */}
      <GlobalCTA />
    </>
  );
}
