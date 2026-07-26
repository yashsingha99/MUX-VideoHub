import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Video Streaming: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the video streaming industry, from AI-powered optimization to immersive viewing experiences.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      category: "Industry Insights",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Scalable Video Infrastructure: Best Practices",
      excerpt:
        "Learn how to architect video systems that can handle millions of concurrent viewers without breaking a sweat.",
      author: "Mike Rodriguez",
      date: "March 12, 2024",
      category: "Engineering",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Video Analytics: Understanding Your Audience Better",
      excerpt:
        "Dive deep into video analytics and discover how data-driven insights can improve your content strategy.",
      author: "Emily Johnson",
      date: "March 10, 2024",
      category: "Analytics",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Live Streaming at Scale: Lessons from Major Events",
      excerpt:
        "Case studies from handling massive live streaming events and the infrastructure decisions that made them successful.",
      author: "David Park",
      date: "March 8, 2024",
      category: "Case Study",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "Optimizing Video Quality: Balancing Size and Fidelity",
      excerpt: "Technical deep-dive into video encoding techniques and how to achieve the best quality-to-size ratio.",
      author: "Alex Thompson",
      date: "March 5, 2024",
      category: "Technical",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "The Rise of Interactive Video Experiences",
      excerpt: "How interactive elements are transforming video content and creating new engagement opportunities.",
      author: "Lisa Wang",
      date: "March 3, 2024",
      category: "Innovation",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Mux Blog</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Insights, tutorials, and updates from the world of video technology. Stay ahead with the latest trends and
            best practices.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-16">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Featured</span>
                <span className="text-blue-200">Engineering</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">How We Built the World's Most Reliable Video API</h2>
              <p className="text-blue-100 mb-6 text-lg">
                A behind-the-scenes look at the architecture and engineering decisions that power billions of video
                minutes every day.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-blue-200">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Engineering Team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>March 18, 2024</span>
                  </div>
                </div>
                <Link href="/blog/reliable-video-api" className="flex items-center space-x-2 hover:text-blue-200">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 hover:text-blue-600">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights, tutorials, and product updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
