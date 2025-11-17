import ScrollAnimation from "./ScrollAnimation";

const testimonials = [
  {
    quote:
      "Pentas Wijaya transformed our product launch into an unforgettable experience. Their attention to detail exceeded expectations.",
    author: "Sarah Lim",
    position: "Marketing Director",
    company: "FMCG Brand",
    rating: 5,
  },
  {
    quote:
      "Working with Pentas Wijaya was a game-changer. They delivered a social media campaign that tripled our engagement.",
    author: "Ahmad Rosli",
    position: "CEO",
    company: "Hospitality Group",
    rating: 5,
  },
  {
    quote:
      "From concept to execution, they delivered excellence. Our billboard campaign generated incredible visibility.",
    author: "Jennifer Wong",
    position: "Brand Manager",
    company: "Retail Chain",
    rating: 5,
  },
  {
    quote:
      "The creative production quality was outstanding. They produced stunning video content that captured our brand story.",
    author: "David Tan",
    position: "Operations Manager",
    company: "Tourism Board",
    rating: 5,
  },
  {
    quote:
      "Professional, reliable, and creative. Pentas Wijaya made our corporate event seamless and memorable for all attendees.",
    author: "Lisa Chen",
    position: "HR Director",
    company: "Tech Company",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h2 className="mb-3">Client Testimonials</h2>
            <p className="text-textGray max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
        </ScrollAnimation>

        {/* Testimonials Grid - 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="bg-secondary p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs text-textGray leading-relaxed mb-4 italic flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-bold text-accent text-sm mb-0.5">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
