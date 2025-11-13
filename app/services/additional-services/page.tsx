import ScrollAnimation from "@/components/ScrollAnimation";
import OurProcess from "@/components/OurProcess";
import GlobalCTA from "@/components/GlobalCTA";
import Link from "next/link";

export const metadata = {
  title: "Event Support Services & Rentals - KKC Event",
  description: "Comprehensive event support services including KOLs, event talent, equipment rental, printing, and installation across East Malaysia.",
};

const subservices = [
  {
    title: "KOLs & Influencer Network",
    description: "Access our extensive network of trusted Key Opinion Leaders and influencers across East Malaysia for authentic brand collaborations.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Event Talent & Emcees",
    description: "Professional emcees, hosts, performers, and event talent to elevate your events and engage your audience effectively.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Event Equipment Rental",
    description: "Complete inventory of event equipment including sound systems, lighting, staging, tents, canopies, tables, and chairs for any event size.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    link: "/event-equipment",
  },
  {
    title: "Game Equipment Rental",
    description: "Fun and engaging game equipment for events including arcade games, carnival games, sports equipment, and interactive activities.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "/game-rental",
  },
  {
    title: "Printing Services",
    description: "Complete printing solutions from business cards to large-format banners, posters, brochures, and all marketing materials.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    title: "Installation Services",
    description: "Professional installation services for signage, displays, banners, and branding materials across Sabah, Sarawak, and Labuan.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AdditionalServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Event Support Services & Rentals</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                Your one-stop solution for all event and marketing needs. We
                provide comprehensive support services to ensure seamless project
                execution.
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
              <h2 className="mb-6 text-center">What Are Event Support Services & Rentals?</h2>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                Beyond our core marketing and event management offerings, we
                provide a comprehensive range of event support services and rental
                solutions that ensure every aspect of your project is covered.
                These services are designed to support and enhance your marketing
                initiatives, making us your single point of contact for all your
                event and marketing needs.
              </p>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                Our extensive network across East Malaysia includes trusted
                partners, influencers, talent, and service providers who have been
                carefully vetted to meet our quality standards. Whether you need
                specialized equipment, professional talent, or technical services,
                we either provide it directly or connect you with the right
                partners to ensure seamless execution.
              </p>
              <p className="text-textGray leading-relaxed text-sm">
                Think of us as your one-stop solution: from KOLs and influencers to
                event equipment, printing services, and professional installation —
                whatever your project requires, we've got you covered across Sabah,
                Sarawak, and Labuan.
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
              <h2 className="mb-3">Our Event Support Services & Rentals</h2>
              <p className="text-textGray max-w-2xl mx-auto text-sm">
                Comprehensive support services to complement your marketing and
                event initiatives.
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
                <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="text-accent mb-4">{service.icon}</div>
                  <h3 className="mb-3 text-lg">{service.title}</h3>
                  <p className="text-textGray text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  {service.link && (
                    <Link
                      href={service.link}
                      className="text-accent hover:text-gray-800 transition-colors text-sm font-medium inline-flex items-center"
                    >
                      View Details
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Rental CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary p-8 rounded-lg text-center">
                  <div className="text-accent mb-4 flex justify-center">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg">Event Equipment</h3>
                  <p className="text-textGray text-sm mb-4">
                    Browse our complete inventory of event equipment including
                    canopies, stages, sound systems, and more.
                  </p>
                  <Link href="/event-equipment" className="btn-primary inline-block">
                    Browse Equipment
                  </Link>
                </div>

                <div className="bg-secondary p-8 rounded-lg text-center">
                  <div className="text-accent mb-4 flex justify-center">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg">Game Rental</h3>
                  <p className="text-textGray text-sm mb-4">
                    Make your event fun and engaging with our collection of arcade
                    games, carnival activities, and more.
                  </p>
                  <Link href="/game-rental" className="btn-primary inline-block">
                    Browse Games
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <OurProcess />

      {/* CTA */}
      <GlobalCTA />
    </>
  );
}
