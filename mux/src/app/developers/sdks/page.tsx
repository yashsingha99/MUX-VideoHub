"use client"

import { useEffect, useRef } from "react"
import AnimatedHeader from "@/components/animated-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Code, Star, GitBranch, Package } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SDKsPage() {
  const heroRef = useRef<HTMLElement>(null)
  const sdksRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero with floating effect
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 100, opacity: 0, rotationX: 30 },
          { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
        )
      }

      // SDKs with 3D card flip
      if (sdksRef.current) {
        gsap.fromTo(
          sdksRef.current.children,
          { rotationY: 180, opacity: 0, scale: 0.5 },
          {
            rotationY: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sdksRef.current,
              start: "top 80%",
            },
          }
        )
      }

      // Features with wave animation
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.children,
          { y: 80, opacity: 0, skewY: 5 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const sdks = [
    {
      name: "Node.js",
      description: "Official Node.js SDK with TypeScript support and comprehensive video management features.",
      version: "v7.3.2",
      downloads: "50K+",
      stars: "1.2K",
      color: "from-green-500 to-green-600",
      logo: "🟢",
      installCmd: "npm install @mux/mux-node",
    },
    {
      name: "Python",
      description: "Pythonic SDK with async support, perfect for Django and Flask applications.",
      version: "v3.15.0",
      downloads: "35K+",
      stars: "890",
      color: "from-blue-500 to-blue-600",
      logo: "🐍",
      installCmd: "pip install mux-python",
    },
    {
      name: "Ruby",
      description: "Ruby gem with Rails integration and comprehensive video API coverage.",
      version: "v3.8.1",
      downloads: "25K+",
      stars: "650",
      color: "from-red-500 to-red-600",
      logo: "💎",
      installCmd: "gem install mux_ruby",
    },
    {
      name: "PHP",
      description: "Modern PHP SDK with Composer support and Laravel service provider.",
      version: "v2.7.0",
      downloads: "20K+",
      stars: "420",
      color: "from-purple-500 to-purple-600",
      logo: "🐘",
      installCmd: "composer require muxinc/mux-php",
    },
    {
      name: "Go",
      description: "High-performance Go SDK with context support and comprehensive error handling.",
      version: "v1.12.0",
      downloads: "15K+",
      stars: "380",
      color: "from-cyan-500 to-cyan-600",
      logo: "🐹",
      installCmd: "go get github.com/muxinc/mux-go",
    },
    {
      name: "Java",
      description: "Enterprise-ready Java SDK with Spring Boot integration and reactive support.",
      version: "v1.9.0",
      downloads: "18K+",
      stars: "290",
      color: "from-orange-500 to-orange-600",
      logo: "☕",
      installCmd: "implementation 'com.mux:mux-java:1.9.0'",
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
              Official SDKs
            </h1>
            <p className="text-xl lg:text-2xl text-amber-800 dark:text-amber-200 leading-relaxed max-w-3xl mx-auto">
              Native SDKs for your favorite programming language. Get started quickly with idiomatic code and
              comprehensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Package className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Browse SDKs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                <GitBranch className="mr-2 w-5 h-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Choose Your Language</h2>
            <p className="text-xl text-amber-700 dark:text-amber-300">
              Official SDKs maintained by the Mux team with regular updates and community support
            </p>
          </div>

          <div ref={sdksRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${sdk.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                      {sdk.logo}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-amber-600 dark:text-amber-400 font-medium">{sdk.version}</div>
                      <div className="flex items-center space-x-3 text-xs text-amber-500 dark:text-amber-500 mt-1">
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{sdk.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>{sdk.stars}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-amber-900 dark:text-amber-100 text-2xl group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {sdk.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-amber-700 dark:text-amber-300 line-clamp-3">{sdk.description}</p>
                  
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                    <div className="text-gray-400 mb-1">$</div>
                    <div className="text-green-400">{sdk.installCmd}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${sdk.color} hover:opacity-90 text-white`}
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Install
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                    >
                      <Code className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Why Use Our SDKs?
            </h2>
            <p className="text-xl text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
              Built with developer experience in mind, our SDKs make video integration effortless
            \
