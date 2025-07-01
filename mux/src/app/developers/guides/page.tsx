"use client"

import { useEffect, useRef } from "react"
import AnimatedHeader from "@/components/animated-header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Code, Zap, Users, ArrowRight, Clock, Star, Download } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function GuidesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const guidesRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation with staggered text
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 80, opacity: 0, rotationX: 45 },
          { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "power3.out", stagger: 0.2 },
        )
      }

      // Guides cards with 3D flip effect
      if (guidesRef.current) {
        gsap.fromTo(
          guidesRef.current.children,
          { rotationY: 90, opacity: 0, scale: 0.8 },
          {
            rotationY: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: guidesRef.current,
              start: "top 80%",
            },
          },
        )
      }

      // Categories with bounce effect
      if (categoriesRef.current) {
        gsap.fromTo(
          categoriesRef.current.children,
          { y: 100, opacity: 0, scale: 0.5 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "bounce.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 80%",
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const guides = [
    {
      title: "Getting Started with Mux Video",
      description: "Learn the basics of video encoding, storage, and playback with our comprehensive starter guide.",
      category: "Beginner",
      readTime: "10 min",
      difficulty: "Easy",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Building a Video Platform",
      description: "Step-by-step tutorial for creating a complete video streaming platform from scratch.",
      category: "Advanced",
      readTime: "45 min",
      difficulty: "Hard",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Live Streaming Implementation",
      description: "Implement real-time live streaming with ultra-low latency and interactive features.",
      category: "Intermediate",
      readTime: "30 min",
      difficulty: "Medium",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Video Analytics Deep Dive",
      description: "Master video analytics to understand viewer behavior and optimize your content strategy.",
      category: "Intermediate",
      readTime: "25 min",
      difficulty: "Medium",
      icon: <Book className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Mobile Video Optimization",
      description: "Optimize video delivery for mobile devices with adaptive bitrate streaming.",
      category: "Advanced",
      readTime: "35 min",
      difficulty: "Hard",
      icon: <Download className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Security Best Practices",
      description: "Implement robust security measures for your video content and API access.",
      category: "Advanced",
      readTime: "40 min",
      difficulty: "Hard",
      icon: <Star className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950">
      <AnimatedHeader />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 dark:from-gray-800 dark:via-amber-900 dark:to-orange-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Developer Guides
            </h1>
            <p className="text-xl lg:text-2xl text-amber-800 dark:text-amber-200 leading-relaxed max-w-3xl mx-auto">
              Master video development with our comprehensive tutorials and best practices. From beginner basics to
              advanced implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Book className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Learning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                Browse All Guides
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Browse by Category</h2>
            <p className="text-xl text-amber-700 dark:text-amber-300">Find guides tailored to your skill level</p>
          </div>

          <div ref={categoriesRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-800 dark:text-green-200">Beginner</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-green-700 dark:text-green-300 mb-4">
                  Perfect for developers new to video technology
                </p>
                <div className="text-2xl font-bold text-green-600 mb-2">12 Guides</div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent group-hover:scale-105 transition-transform"
                >
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-800 dark:text-blue-200">Intermediate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 dark:text-blue-300 mb-4">
                  Build upon your knowledge with advanced concepts
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-2">18 Guides</div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent group-hover:scale-105 transition-transform"
                >
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-red-800 dark:text-red-200">Advanced</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-red-700 dark:text-red-300 mb-4">Master complex implementations and optimizations</p>
                <div className="text-2xl font-bold text-red-600 mb-2">24 Guides</div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent group-hover:scale-105 transition-transform"
                >
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Featured Guides
            </h2>
            <p className="text-xl text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
              Hand-picked tutorials to accelerate your video development journey
            </p>
          </div>

          <div ref={guidesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${guide.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      {guide.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          guide.difficulty === "Easy"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                            : guide.difficulty === "Medium"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                        }`}
                      >
                        {guide.difficulty}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-amber-900 dark:text-amber-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 dark:text-amber-300 mb-4 line-clamp-3">{guide.description}</p>
                  <div className="flex items-center justify-between text-sm text-amber-600 dark:text-amber-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/20 rounded-full text-xs">
                        {guide.category}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing video experiences with Mux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg transition-all duration-300 bg-transparent"
            >
              <Link href="/developers/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
