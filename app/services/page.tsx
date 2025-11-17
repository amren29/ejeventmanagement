import GlobalCTA from "@/components/GlobalCTA";
import ScrollAnimation from "@/components/ScrollAnimation";
import Link from "next/link";

export const metadata = {
  title: "Our Services - Pentas Wijaya",
  description: "Comprehensive 360° marketing solutions including event management, branding, digital marketing, creative production, and activations across Malaysia.",
};

const services = [
  {
    title: "Event Management & Activations",
    link: "/services/event-management",
    description:
      "Bring your brand to life through expertly curated events and activations that create lasting impressions. We handle everything from concept development to on-ground execution, ensuring every detail aligns with your brand objectives. Our team specializes in product launches, roadshows, corporate events, festival activations, and experiential marketing campaigns across Malaysia. With our extensive network and experience managing events of all scales, we transform your vision into memorable brand experiences. From venue selection and logistics to talent coordination and post-event analysis, we've got you covered.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Branding & Installation",
    link: "/services/branding-production",
    description:
      "Establish a powerful brand presence with comprehensive branding solutions that make you stand out. We produce high-quality branding materials including corporate identity systems, packaging design, marketing collaterals, and branded merchandise. Our production capabilities extend to large-format installations, exhibition booths, retail displays, and point-of-sale materials that capture attention and drive engagement. Whether you're launching a new brand or refreshing an existing one, our team ensures consistency and quality across all touchpoints. We work with trusted manufacturers and suppliers to deliver exceptional results on time and within budget.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Creative Production",
    link: "/services/creative-production",
    description:
      "Transform your brand story into compelling visual content through our comprehensive creative production services. Our in-house team of designers, videographers, and photographers bring ideas to life with stunning clarity and creativity. We produce everything from commercial videos and corporate documentaries to product photography, promotional graphics, and social media content. Whether you need a full-scale video production with professional crews and equipment or quick-turnaround social media visuals, we deliver quality that elevates your brand. Our creative approach combines artistic vision with strategic messaging to ensure every piece of content serves your marketing objectives and captivates your target audience.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    link: "/services/digital-marketing",
    description:
      "Accelerate your online presence with data-driven digital marketing strategies tailored for the Malaysian market. Our digital services encompass social media management, content creation, paid advertising (Facebook, Instagram, Google Ads), SEO optimization, and influencer collaborations. We understand the unique digital behavior of audiences in Malaysia, allowing us to craft campaigns that resonate locally while maintaining professional standards. From building your social media community to driving website traffic and online conversions, we leverage the latest digital tools and analytics to deliver measurable results. Let us help you connect with your audience where they spend most of their time — online.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Event Support Services & Rentals",
    link: "/services/additional-services",
    description:
      "Beyond our core offerings, we provide a comprehensive range of event support services and rental solutions to support your event needs. Our network includes trusted KOLs (Key Opinion Leaders) and influencers across Malaysia, professional emcees and event talents, and a full inventory of event equipment for rental — including sound systems, lighting, staging, tents, and more. We also offer complete printing services (from business cards to large-format banners) with professional installation across Malaysia. Think of us as your one-stop solution: whatever your project requires, we either provide it directly or connect you with our vetted partners to ensure seamless execution.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Our Services</h1>
              <p className="text-textGray">
                Comprehensive 360° marketing solutions designed for Malaysia's
                dynamic market.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
                delay={100}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div className="bg-secondary p-10 rounded-lg flex items-center justify-center">
                      <div className="text-accent">{service.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-3">{service.title}</h2>
                    <p className="text-textGray leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    {service.link && (
                      <Link href={service.link} className="btn-primary inline-block">
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
