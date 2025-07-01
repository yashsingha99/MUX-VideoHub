"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Eye, BarChart3, ArrowRight, Zap, Globe } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ThreeHero from "./three-hero"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EnhancedHero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 },
        )
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 },
        )
      }

      // Buttons animation
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 1.1, stagger: 0.2 },
        )
      }

      // Features animation
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.children,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 1.4, stagger: 0.1 },
        )
      }

      // Stats animation with scroll trigger
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          },
        )
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-amber-950 dark:to-orange-950 text-amber-900 dark:text-amber-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.3),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1
              ref={titleRef}
              className="text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent"
            >
              THE INTERNET'S
              <br />
              <span className="relative">
                VIDEO API
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl lg:text-2xl text-amber-800 dark:text-amber-200 leading-relaxed max-w-2xl"
            >
              Build powerful video experiences with our comprehensive API platform. From live streaming to on-demand
              content, we provide the infrastructure that scales with your vision. Trusted by developers worldwide to
              deliver exceptional video quality and performance.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                START BUILDING
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                GET A DEMO
              </Button>
            </div>

            {/* Enhanced Features */}
            <div ref={featuresRef} className="space-y-6 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mux Video</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-300">Encoding & Storage</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mux Player</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-300">HTML5 Player</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mux Data</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-300">Real-time Analytics</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Live Streaming</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-300">Real-time Broadcasting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Scene */}
          <div className="relative h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-amber-900 rounded-3xl shadow-2xl overflow-hidden">
              <ThreeHero />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Analytics</span>
              </div>
              <div className="text-2xl font-bold text-green-600">94.2%</div>
              <div className="text-xs text-gray-500">Quality Score</div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">Global CDN</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-xs text-gray-500">Edge Locations</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-amber-200 dark:border-amber-800"
        >
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
              50B+
            </div>
            <p className="text-amber-700 dark:text-amber-300 font-medium">Minutes Streamed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <p className="text-amber-700 dark:text-amber-300 font-medium">Developers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <p className="text-amber-700 dark:text-amber-300 font-medium">Uptime SLA</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
              150+
            </div>
            <p className="text-amber-700 dark:text-amber-300 font-medium">Countries</p>
          </div>
        </div>
      </div>
    </section>
  )
}
