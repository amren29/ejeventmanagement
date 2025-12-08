import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlobalCTA from "@/components/GlobalCTA";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found - EJ Event Management",
    };
  }

  return {
    title: `${blog.title} - EJ Event Management Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs from the same category
  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-4">
                <Link
                  href="/blogs"
                  className="text-accent hover:underline text-sm"
                >
                  ← Back to Blog
                </Link>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-white text-accent text-sm font-medium rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-4">{blog.title}</h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-textGray text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-accent to-gray-800 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-9xl opacity-20">📝</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                {/* Excerpt */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  {blog.excerpt}
                </p>

                {/* Content */}
                <div className="text-gray-700 leading-relaxed space-y-6">
                  {blog.content.split("\n\n").map((block, index) => {
                    // Check if it's a heading
                    if (block.startsWith("## ")) {
                      return (
                        <h2
                          key={index}
                          className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                        >
                          {block.replace("## ", "")}
                        </h2>
                      );
                    }
                    // Check if it's a bold paragraph (starts with **)
                    if (block.includes("**")) {
                      const parts = block.split("**");
                      return (
                        <p key={index} className="mb-4">
                          {parts.map((part, i) =>
                            i % 2 === 1 ? (
                              <strong key={i} className="font-bold">
                                {part}
                              </strong>
                            ) : (
                              <span key={i}>{part}</span>
                            )
                          )}
                        </p>
                      );
                    }
                    // Regular paragraph
                    return (
                      <p key={index} className="mb-4">
                        {block}
                      </p>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>

            {/* Share Section */}
            <ScrollAnimation delay={100}>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Facebook
                  </button>
                  <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                    LinkedIn
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    WhatsApp
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <ScrollAnimation>
              <div className="text-center mb-10">
                <h2 className="mb-3">Related Articles</h2>
                <p className="text-textGray max-w-2xl mx-auto text-sm">
                  Continue reading more insights from the same category.
                </p>
                <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <ScrollAnimation
                  key={relatedBlog.slug}
                  animation="fade-in"
                  delay={index * 100}
                >
                  <Link
                    href={`/blogs/${relatedBlog.slug}`}
                    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Blog Image */}
                    <div className="h-40 bg-gradient-to-br from-accent to-gray-800 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-5xl opacity-20">
                          📝
                        </span>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-secondary text-accent text-xs font-medium rounded-full">
                          {relatedBlog.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900">
                        {relatedBlog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-textGray text-sm mb-4 line-clamp-2 flex-grow">
                        {relatedBlog.excerpt}
                      </p>

                      {/* Read Time */}
                      <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
                        {relatedBlog.readTime}
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <GlobalCTA />
    </>
  );
}
