import ScrollAnimation from "./ScrollAnimation";

const certifications = [
  {
    title: "PMS Certified",
    description: "Project Management Specialist",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "ISO Certified",
    description: "Quality Management System",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "CIDB Registered",
    description: "Construction Industry Development Board",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Bumiputera Sabah",
    description: "Certified Bumiputera Enterprise",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function CertificationsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h2 className="mb-3">Our Certifications & Credentials</h2>
            <p className="text-textGray max-w-2xl mx-auto">
              Trusted, certified, and committed to excellence. Our accreditations
              reflect our dedication to quality, safety, and professional standards.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <ScrollAnimation
              key={index}
              animation="scale-in"
              delay={index * 80}
            >
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group">
                <div className="text-accent mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h3 className="mb-2 text-sm">{cert.title}</h3>
                <p className="text-xs text-gray-600">{cert.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollAnimation delay={400}>
          <div className="mt-10 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
              <h3 className="mb-2">Commitment to Excellence</h3>
              <p className="text-textGray leading-relaxed">
                Our certifications demonstrate our unwavering commitment to maintaining
                the highest industry standards. We continuously invest in training,
                compliance, and quality assurance to deliver exceptional results for
                every project across East Malaysia.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
