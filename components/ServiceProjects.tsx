"use client";

import ScrollAnimation from "./ScrollAnimation";

const allProjects = [
  {
    title: "Product Launch Event",
    category: "Event Management",
    description: "Large-scale product launch for leading FMCG brand across major cities in Sabah",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    title: "Festival Activation",
    category: "Event Management",
    description: "Multi-day festival activation engaging thousands of attendees",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
  },
  {
    title: "Corporate Annual Dinner",
    category: "Event Management",
    description: "Elegant corporate event with stage design and full production management",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
  },
  {
    title: "Corporate Branding",
    category: "Branding Production",
    description: "Complete brand identity and installation for hospitality group",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  },
  {
    title: "Retail Signage Installation",
    category: "Branding Production",
    description: "Large-scale retail signage and wayfinding system for shopping complex",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop",
  },
  {
    title: "Vehicle Fleet Branding",
    category: "Branding Production",
    description: "Complete vehicle wrap branding for logistics company fleet",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
  },
  {
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    description: "Comprehensive social media campaign driving 300% engagement increase",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "E-commerce Launch",
    category: "Digital Marketing",
    description: "Full digital marketing strategy for online store launch with paid ads",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop",
  },
  {
    title: "Influencer Campaign",
    category: "Digital Marketing",
    description: "Multi-influencer campaign across Sabah and Sarawak reaching 2M+ audience",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
  },
  {
    title: "Video Production",
    category: "Creative Production",
    description: "High-impact commercial video production for tourism campaign",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
  },
  {
    title: "Product Photography",
    category: "Creative Production",
    description: "Professional product photography session for F&B brand catalog",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop",
  },
  {
    title: "Social Media Content",
    category: "Creative Production",
    description: "Monthly social media content creation for multiple brand accounts",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
];

interface ServiceProjectsProps {
  category: string;
  limit?: number;
}

export default function ServiceProjects({ category, limit = 6 }: ServiceProjectsProps) {
  const filteredProjects = allProjects
    .filter((project) => project.category === category)
    .slice(0, limit);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h2 className="mb-3">Our Projects</h2>
            <p className="text-textGray max-w-2xl mx-auto text-sm">
              Explore some of our successful {category.toLowerCase()} projects
              across East Malaysia.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full border border-gray-200">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-accent bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white text-accent px-2.5 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 group-hover:text-accent transition-colors text-base">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
