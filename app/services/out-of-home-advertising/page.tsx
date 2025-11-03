import ScrollAnimation from "@/components/ScrollAnimation";
import OurProcess from "@/components/OurProcess";
import ServiceProjects from "@/components/ServiceProjects";
import GlobalCTA from "@/components/GlobalCTA";
import Link from "next/link";

export const metadata = {
  title: "Out-of-home Advertising - KK Creative Event",
  description: "Strategic outdoor advertising solutions including billboards, LED displays, transit ads, and street buntings across Sabah, Sarawak, and Labuan.",
};

const subservices = [
  {
    title: "Billboard Advertising",
    description: "Premium static billboard locations across East Malaysia in high-traffic areas with maximum visibility and reach for your brand message.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Digital LED Billboards",
    description: "Dynamic digital advertising on programmable LED billboards and screens in prime locations, offering flexibility to update content and rotate multiple campaigns.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Bus Shelter & Transit Ads",
    description: "Advertising at bus shelters, bus stops, and on public transport vehicles including buses and taxis, reaching commuters and pedestrians daily.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Building Wraps & Facade Branding",
    description: "Large-scale building wraps and facade advertising that transform entire buildings into massive brand statements with unforgettable visual impact.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Street Furniture Advertising",
    description: "Branding on street furniture including benches, kiosks, trash bins, and other urban fixtures in strategic locations for consistent brand exposure.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Custom Outdoor Installations",
    description: "Unique and creative outdoor advertising installations including 3D displays, interactive installations, and innovative structures that capture attention.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function OutOfHomeAdvertisingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Out-of-home Advertising</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                Maximize brand visibility with strategic outdoor advertising placements.
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
              <h2 className="mb-6 text-center">What is Out-of-home Advertising?</h2>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                Out-of-home (OOH) advertising is any advertising that reaches
                consumers while they are outside their homes. From traditional
                billboards and transit ads to modern digital displays, OOH
                advertising creates brand awareness through high-visibility
                placements in strategic locations.
              </p>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                At KK Creative Event, we manage an extensive inventory of premium
                advertising locations across East Malaysia. Our strategic approach
                combines location analysis, audience demographics, and traffic
                patterns to maximize your advertising ROI. We handle everything
                from creative design and production to installation and maintenance.
              </p>
              <p className="text-textGray leading-relaxed text-sm">
                With our deep knowledge of local markets and prime advertising
                spots throughout Sabah, Sarawak, and Labuan, we help you select the
                perfect locations to reach your target audience effectively and
                create lasting brand impressions.
              </p>
            </ScrollAnimation>

            {/* Browse Media CTA */}
            <ScrollAnimation delay={100}>
              <div className="mt-8 p-6 bg-secondary rounded-lg text-center">
                <h3 className="mb-3 text-lg">Explore Our Media Locations</h3>
                <p className="text-textGray text-sm mb-4">
                  Browse our extensive inventory of billboards, LED displays, and
                  outdoor advertising locations across East Malaysia.
                </p>
                <Link href="/media" className="btn-primary inline-block">
                  Browse Media Locations
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Subservices */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-10">
              <h2 className="mb-3">Our Out-of-home Advertising Services</h2>
              <p className="text-textGray max-w-2xl mx-auto text-sm">
                Comprehensive outdoor advertising solutions designed to maximize
                visibility and reach.
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
      <ServiceProjects category="Out-of-home Advertising" />

      {/* CTA */}
      <GlobalCTA />
    </>
  );
}
