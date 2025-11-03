import ScrollAnimation from "./ScrollAnimation";

export default function VisionMission() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Vision */}
          <ScrollAnimation animation="fade-in-left">
            <div className="bg-white p-8 rounded-lg h-full">
              <div className="flex items-start mb-4">
                <div className="bg-accent text-white p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl">Our Vision</h3>
                </div>
              </div>
              <p className="text-textGray text-sm leading-relaxed">
                To be East Malaysia's most trusted and innovative 360° marketing
                agency, recognized for creating impactful campaigns that connect
                brands with their audiences and drive measurable success. We aspire
                to set the standard for excellence in marketing across Sabah,
                Sarawak, and Labuan, empowering businesses to reach their full
                potential through creative and strategic solutions.
              </p>
            </div>
          </ScrollAnimation>

          {/* Mission */}
          <ScrollAnimation animation="fade-in-right">
            <div className="bg-white p-8 rounded-lg h-full">
              <div className="flex items-start mb-4">
                <div className="bg-accent text-white p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl">Our Mission</h3>
                </div>
              </div>
              <p className="text-textGray text-sm leading-relaxed mb-4">
                Our mission is to deliver exceptional marketing solutions that are:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-textGray">
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Creative:</strong> Innovative ideas that capture
                    attention and stand out
                  </span>
                </li>
                <li className="flex items-start text-sm text-textGray">
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Strategic:</strong> Data-driven approaches aligned with
                    business objectives
                  </span>
                </li>
                <li className="flex items-start text-sm text-textGray">
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Impactful:</strong> Measurable results that drive real
                    business growth
                  </span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
