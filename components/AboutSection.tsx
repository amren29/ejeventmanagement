import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <ScrollAnimation animation="fade-in-left">
            <div className="relative h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop')",
                }}
              >
                <div className="absolute inset-0 bg-accent bg-opacity-20" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Content Side */}
          <ScrollAnimation animation="fade-in-right">
            <div>
              <h2 className="mb-4 text-2xl md:text-3xl">KKC Event</h2>
              <div className="w-16 h-1 bg-accent mb-4"></div>

              <p className="text-textGray mb-3 leading-relaxed text-sm">
                Since 2018, we've been delivering creative, strategic, and
                impactful marketing solutions across East Malaysia. Based in Kota
                Kinabalu, Sabah, we understand the unique landscape of our region
                and craft campaigns that truly resonate.
              </p>

              <p className="text-textGray mb-5 leading-relaxed text-sm">
                As a full-service 360° marketing agency, we bridge traditional
                and digital marketing — from intimate corporate events to
                large-scale activations, from billboard campaigns to viral social
                media content.
              </p>

              <div className="mb-6">
                <h3 className="mb-2 text-lg">Creative. Strategic. Impactful.</h3>
                <p className="text-textGray text-xs">
                  This is more than our tagline — it's our commitment to every
                  project we undertake across Sabah, Sarawak, and Labuan.
                </p>
              </div>

              <Link href="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
