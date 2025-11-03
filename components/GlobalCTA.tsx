import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function GlobalCTA() {
  return (
    <section className="bg-accent text-white section-padding">
      <div className="container-custom text-center">
        <ScrollAnimation>
          <h2 className="mb-3 text-white">Ready to Create Impact?</h2>
          <p className="mb-6 text-gray-200 max-w-2xl mx-auto">
            Let's collaborate to make your brand stand out across East Malaysia.
          </p>
          <Link href="/contact" className="inline-block bg-white text-accent px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium">
            Contact Us Today
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
