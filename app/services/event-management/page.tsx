import ScrollAnimation from "@/components/ScrollAnimation";
import OurProcess from "@/components/OurProcess";
import ServiceProjects from "@/components/ServiceProjects";
import GlobalCTA from "@/components/GlobalCTA";

export const metadata = {
  title: "Event Management - EJ Event Management",
  description: "Professional event management and activations across Malaysia. From product launches to large-scale festivals.",
};

const subservices = [
  {
    title: "Corporate Events & Conferences",
    description: "Professional management of corporate gatherings, conferences, annual dinners, and business meetings with seamless execution.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Product Launches & Roadshows",
    description: "Create buzz and excitement with professionally managed product launches and nationwide roadshows that drive brand awareness.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Experiential & Promotional Activations",
    description: "Engage audiences with immersive brand experiences and promotional activations that create lasting impressions.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Exhibition Booth Setup & Coordination",
    description: "Complete exhibition booth design, fabrication, setup, and coordination for trade shows and events.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Stage Setup & Event Logistics",
    description: "Professional stage construction, technical setup, and comprehensive logistics management for events of all sizes.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Crew & Manpower Management",
    description: "Skilled event crew coordination, manpower deployment, and on-ground team management for seamless event execution.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Registration & Guest Management",
    description: "Efficient registration systems, guest list management, and attendee coordination for professional event flow.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Post-Event Report & Analytics",
    description: "Comprehensive post-event analysis, detailed reporting, and insights to measure success and inform future strategies.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function EventManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Event Management & Activations</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                From brand launches to nationwide roadshows — we handle every
                detail seamlessly across Malaysia.
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
              <h2 className="mb-6 text-center">What is Event Management?</h2>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                Event management is the comprehensive planning, coordination, and
                execution of events that create meaningful brand experiences. At EJ Event Management, we specialize in transforming your objectives into
                memorable occasions that engage audiences and deliver measurable
                results.
              </p>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                Our full-service approach covers everything from initial concept
                development and venue selection to on-ground execution and
                post-event analysis. We manage all the moving parts — logistics,
                vendor coordination, technical production, talent management, and
                more — so you can focus on connecting with your audience.
              </p>
              <p className="text-textGray leading-relaxed text-sm">
                With our extensive network and deep understanding of the Malaysian market, we deliver events that not only meet but exceed
                expectations, whether you're launching a product, celebrating a
                milestone, or creating brand awareness.
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
              <h2 className="mb-3">Our Event Management Services</h2>
              <p className="text-textGray max-w-2xl mx-auto text-sm">
                From corporate events to nationwide activations, we deliver seamless
                execution at every stage.
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
      <ServiceProjects category="Event Management" />

      {/* CTA */}
      <GlobalCTA />
    </>
  );
}
