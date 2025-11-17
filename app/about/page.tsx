import Link from "next/link";
import GlobalCTA from "@/components/GlobalCTA";
import CertificationsSection from "@/components/CertificationsSection";
import VisionMission from "@/components/VisionMission";
import OurProcess from "@/components/OurProcess";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
  title: "About Us - Pentas Wijaya",
  description: "Learn about Pentas Wijaya, a premier event management and marketing agency in Malaysia.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">About Pentas Wijaya</h1>
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
                Pentas Wijaya is at the forefront of delivering creative,
                strategic, and impactful event management and marketing
                solutions across Malaysia. We've built our reputation on
                understanding the unique needs of our clients and crafting
                campaigns and events that truly resonate with audiences.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <p className="text-textGray leading-relaxed mb-4">
                As a premier event management and marketing agency, we excel at
                creating memorable experiences. Whether you're launching a new
                product, building brand awareness, or creating unforgettable
                events, our team brings together strategic thinking, creative
                excellence, and flawless execution.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-textGray leading-relaxed mb-4">
                From intimate corporate gatherings to large-scale events, from
                digital campaigns to comprehensive brand activations — we handle
                it all. Our comprehensive approach means you get a single,
                trusted partner for all your event and marketing needs across
                Malaysia.
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
