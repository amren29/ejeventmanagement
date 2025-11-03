import Link from "next/link";
import GlobalCTA from "@/components/GlobalCTA";
import CertificationsSection from "@/components/CertificationsSection";
import VisionMission from "@/components/VisionMission";
import OurProcess from "@/components/OurProcess";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
  title: "About Us - KK Creative Event",
  description: "Learn about KK Creative Event, a leading 360° marketing agency in East Malaysia since 2018.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">About KK Creative Event</h1>
              <div className="w-16 h-1 bg-accent mx-auto"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation>
              <p className="text-textGray leading-relaxed mb-4">
                Founded in 2018, KK Creative Event has been at the forefront of
                delivering creative, strategic, and impactful marketing
                solutions across East Malaysia. Based in Kota Kinabalu, Sabah,
                we've built our reputation on understanding the unique landscape
                of the East Malaysian market and crafting campaigns that truly
                resonate with local and regional audiences.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <p className="text-textGray leading-relaxed mb-4">
                As a full-service 360° marketing agency, we bridge the gap
                between traditional and digital marketing. Whether you're
                launching a new product, building brand awareness, or creating
                unforgettable experiences, our team brings together strategic
                thinking, creative excellence, and flawless execution.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-textGray leading-relaxed mb-4">
                From intimate corporate events to large-scale activations, from
                billboard campaigns to viral social media content — we handle it
                all. Our comprehensive approach means you get a single, trusted
                partner for all your marketing needs across Sabah, Sarawak, and
                Labuan.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <p className="text-textGray leading-relaxed mb-8">
                We believe in the power of creativity backed by strategy, and we
                measure our success by the impact we create for our clients.
              </p>
            </ScrollAnimation>

            {/* CTA */}
            <ScrollAnimation delay={400}>
              <div className="text-center">
                <Link href="/services" className="btn-primary inline-block">
                  Explore Our Services
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <VisionMission />

      <OurProcess />

      <CertificationsSection />

      <GlobalCTA />
    </>
  );
}
