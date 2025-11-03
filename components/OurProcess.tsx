import ScrollAnimation from "./ScrollAnimation";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your brand, objectives, target audience, and project requirements through detailed discussions and research.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our team develops a comprehensive strategy tailored to your goals, including timelines, budgets, and detailed action plans.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Creative Development",
    description:
      "We bring ideas to life through creative design, content production, and innovative solutions that capture your brand essence.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Execution & Implementation",
    description:
      "We execute the plan with precision, managing every detail from setup and installation to event coordination and campaign launch.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Monitoring & Optimization",
    description:
      "Throughout the campaign or event, we monitor performance, make real-time adjustments, and ensure everything runs smoothly.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Analysis & Reporting",
    description:
      "After completion, we provide detailed reports with insights, results, and recommendations for future campaigns and continuous improvement.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function OurProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h2 className="mb-3">Our Process</h2>
            <p className="text-textGray max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project delivers
              exceptional results from start to finish.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-in"
              delay={index * 100}
            >
              <div className="relative bg-secondary p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-accent mb-4 mt-4">{step.icon}</div>

                {/* Content */}
                <h3 className="mb-3 text-lg">{step.title}</h3>
                <p className="text-textGray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
