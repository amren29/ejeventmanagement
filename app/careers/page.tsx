import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
  title: "Careers - KKC Event",
  description: "Join our team at KKC Event. We're looking for creative and passionate individuals to grow with us.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Join Our Team</h1>
              <p className="text-textGray text-base">
                Be part of East Malaysia's leading 360° marketing agency. We're
                always looking for talented and passionate individuals to join our
                creative team.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation>
              <div className="bg-secondary p-8 md:p-12 rounded-lg text-center">
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-accent mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h2 className="mb-4">We're Hiring!</h2>

                <p className="text-textGray mb-6 text-sm leading-relaxed">
                  At KKC Event, we believe in nurturing talent and creating
                  opportunities for growth. Whether you're a creative designer, event
                  coordinator, digital marketer, or videographer, we'd love to hear
                  from you.
                </p>

                <div className="bg-white p-6 rounded-lg mb-6">
                  <h3 className="mb-3 text-lg">Send Your Resume</h3>
                  <p className="text-textGray text-sm mb-4">
                    Interested in joining our team? Send your resume and portfolio to:
                  </p>
                  <a
                    href="mailto:careers@kkcreativeevent.com"
                    className="text-accent hover:text-gray-800 transition-colors font-semibold text-base inline-flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    careers@kkcreativeevent.com
                  </a>
                </div>

                <p className="text-textGray text-xs">
                  We review all applications and will reach out to qualified
                  candidates. Thank you for your interest in KKC Event!
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
