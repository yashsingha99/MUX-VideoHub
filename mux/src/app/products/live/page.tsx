"use client"

import { useEffect, useRef } from "react"
import AnimatedHeader from "@/components/animated-header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Users, AirplayIcon as Broadcast, Zap, Globe, Shield, BarChart3, Clock } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LiveStreamingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const demoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2 },
        )
      }

      // Features animation
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.children,
          { x: -100, opacity: 0, rotation: -5 },
          {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
            },
          },
        )
      }

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          },
        )
      }

      // Demo animation
      if (demoRef.current) {
        gsap.fromTo(
          demoRef.current,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: demoRef.current,
              start: "top 80%",
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [])

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
              Live Streaming
            </h1>
            <p className="text-xl lg:text-2xl text-amber-800 dark:text-amber-200 leading-relaxed max-w-3xl mx-auto">
              Broadcast to millions with ultra-low latency. Our live streaming infrastructure scales automatically to
              handle any audience size while maintaining crystal-clear quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Broadcast className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                Start Streaming
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div ref={demoRef} className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-r from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 flex items-center justify-center relative">
                  {/* Live indicator */}
                  <div className="absolute top-6 left-6 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm bg-red-600 px-3 py-1 rounded-full">LIVE</span>
                  </div>

                  {/* Viewer count */}
                  <div className="absolute top-6 right-6 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <Users className="w-4 h-4 text-white" />
                    <span className="text-white font-bold">12,847 viewers</span>
                  </div>

                  {/* Play button */}
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>

                  {/* Stream controls */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                          <div>
                            <div className="text-white font-semibold">Tech Conference 2024</div>
                            <div className="text-gray-300 text-sm">Live from San Francisco</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">2:34:12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Professional Live Streaming
            </h2>
            <p className="text-xl text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
              Everything you need to deliver exceptional live experiences to your audience.
            </p>
          </div>

          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-amber-900 dark:text-amber-100">Ultra-Low Latency</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-amber-700 dark:text-amber-300">
                  Sub-second latency for real-time interaction with your audience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-amber-900 dark:text-amber-100">Global Distribution</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-amber-700 dark:text-amber-300">
                  Worldwide CDN ensures smooth streaming anywhere on the planet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-amber-900 dark:text-amber-100">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-amber-700 dark:text-amber-300">
                  Advanced encryption and access controls for secure broadcasting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-amber-900 dark:text-amber-100">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-amber-700 dark:text-amber-300">
                  Monitor viewer engagement and stream quality in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Trusted by Millions</h2>
            <p className="text-xl text-amber-700 dark:text-amber-300">
              Our live streaming platform powers events of all sizes.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <p className="text-amber-700 dark:text-amber-300 font-medium">Concurrent Viewers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {"<"}1s
              </div>
              <p className="text-amber-700 dark:text-amber-300 font-medium">Average Latency</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <p className="text-amber-700 dark:text-amber-300 font-medium">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-amber-700 dark:text-amber-300 font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
