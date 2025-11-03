import ScrollAnimation from "@/components/ScrollAnimation";
import OurProcess from "@/components/OurProcess";
import ServiceProjects from "@/components/ServiceProjects";
import GlobalCTA from "@/components/GlobalCTA";

export const metadata = {
  title: "Creative Production - KK Creative Event",
  description: "Professional creative production services including videography, photography, graphic design, exhibition booth design, and content creation across East Malaysia.",
};

const subservices = [
  {
    title: "Video & Commercial Production",
    description: "Full-service video production from concept to final edit, including TV commercials, corporate videos, documentaries, and promotional content with professional crews.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Photography (Product, Event, Corporate)",
    description: "High-quality professional photography for product shoots, event coverage, corporate portraits, and commercial projects with expert equipment and lighting.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Graphic Design & Branding Materials",
    description: "Creative graphic design solutions for brand identity, marketing collaterals, packaging, posters, and print materials that capture attention.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Social Media Content (Graphics, Reels, Stories)",
    description: "Platform-optimized social media content including eye-catching graphics, engaging reels, interactive stories, and short-form videos for all major platforms.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Copywriting & Scriptwriting",
    description: "Compelling copy and scripts for advertisements, videos, social media campaigns, websites, and marketing materials that drive engagement and conversions.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Motion Graphics & Animation",
    description: "Dynamic motion graphics and animations for explainer videos, logo animations, social media content, presentations, and advertising campaigns.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Exhibition Booth Design",
    description: "Creative booth design and visual concepts for exhibitions, trade shows, and events that attract visitors and showcase your brand effectively.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
  },
];

export default function CreativeProductionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Creative Production</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                Bring your brand story to life with stunning visuals and creative content.
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
              <h2 className="mb-6 text-center">What is Creative Production?</h2>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                Creative production is the process of bringing ideas to life through
                visual storytelling. It encompasses everything from photography and
                videography to graphic design and animation. In today's digital
                age, compelling visual content is essential for capturing attention,
                conveying messages, and building emotional connections with your
                audience.
              </p>
              <p className="text-textGray leading-relaxed mb-4 text-sm">
                At KK Creative Event, our in-house team of creative professionals
                combines artistic vision with strategic thinking to produce content
                that not only looks stunning but also serves your marketing
                objectives. We handle projects of all scales — from quick social
                media content to full-scale commercial productions — with the same
                level of quality and attention to detail.
              </p>
              <p className="text-textGray leading-relaxed text-sm">
                Our creative approach blends local cultural insights with
                international production standards, ensuring your content resonates
                with East Malaysian audiences while maintaining professional quality
                that stands out in any market.
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
              <h2 className="mb-3">Our Creative Production Services</h2>
              <p className="text-textGray max-w-2xl mx-auto text-sm">
                Comprehensive creative solutions that elevate your brand through
                stunning visual content.
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
      <ServiceProjects category="Creative Production" />

      {/* CTA */}
      <GlobalCTA />
    </>
  );
}
