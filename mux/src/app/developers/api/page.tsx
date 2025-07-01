"use client"

import { useEffect, useRef, useState } from "react"
import AnimatedHeader from "@/components/animated-header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Copy, Play, Terminal, Zap, Shield, Globe, BarChart3 } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function APIReferencePage() {
  const heroRef = useRef<HTMLElement>(null)
  const endpointsRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("javascript")

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation with typewriter effect
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 60, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", stagger: 0.2 },
        )
      }

      // Endpoints with slide-in effect
      if (endpointsRef.current) {
        gsap.fromTo(
          endpointsRef.current.children,
          { x: -100, opacity: 0, rotationY: -45 },
          {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: endpointsRef.current,
              start: "top 80%",
            },
          },
        )
      }

      // Code block animation
      if (codeRef.current) {
        gsap.fromTo(
          codeRef.current,
          { scale: 0.8, opacity: 0, rotationX: 45 },
          {
            scale: 1,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: codeRef.current,
              start: "top 80%",
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const endpoints = [
    {
      method: "POST",
      path: "/video/v1/assets",
      description: "Create a new video asset",
      color: "from-green-500 to-green-600",
      icon: <Play className="w-5 h-5" />,
    },
    {
      method: "GET",
      path: "/video/v1/assets/{id}",
      description: "Retrieve asset information",
      color: "from-blue-500 to-blue-600",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      method: "POST",
      path: "/video/v1/uploads",
      description: "Create direct upload URL",
      color: "from-purple-500 to-purple-600",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      method: "GET",
      path: "/data/v1/metrics",
      description: "Get video analytics data",
      color: "from-orange-500 to-orange-600",
      icon: <Globe className="w-5 h-5" />,
    },
  ]

  const codeExamples = {
    javascript: `import Mux from '@mux/mux-node';

const mux = new Mux(
  process.env.MUX_TOKEN_ID,
  process.env.MUX_TOKEN_SECRET
);

// Create a new video asset
const asset = await mux.video.assets.create({
  input: 'https://example.com/video.mp4',
  playback_policy: ['public'],
  mp4_support: 'standard'
});

console.log('Asset ID:', asset.id);
console.log('Playback ID:', asset.playback_ids[0].id);`,

    python: `import mux_python
from mux_python.rest import ApiException

# Configure API credentials
configuration = mux_python.Configuration()
configuration.username = 'MUX_TOKEN_ID'
configuration.password = 'MUX_TOKEN_SECRET'

# Create API client
api_client = mux_python.ApiClient(configuration)
assets_api = mux_python.AssetsApi(api_client)

# Create asset
create_asset_request = mux_python.CreateAssetRequest(
    input='https://example.com/video.mp4',
    playback_policy=['public']
)

try:
    api_response = assets_api.create_asset(create_asset_request)
    print(f"Asset ID: {api_response.data.id}")
except ApiException as e:
    print(f"Exception: {e}")`,

    curl: `curl -X POST https://api.mux.com/video/v1/assets \\
  -H "Content-Type: application/json" \\
  -u MUX_TOKEN_ID:MUX_TOKEN_SECRET \\
  -d '{
    "input": "https://example.com/video.mp4",
    "playback_policy": ["public"],
    "mp4_support": "standard"
  }'`,
  }

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
              API Reference
            </h1>
            <p className="text-xl lg:text-2xl text-amber-800 dark:text-amber-200 leading-relaxed max-w-3xl mx-auto">
              Complete API documentation with interactive examples. Everything you need to integrate Mux into your
              application.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Terminal className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                Try API
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                Download Postman
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Core Endpoints</h2>
            <p className="text-xl text-amber-700 dark:text-amber-300">
              Essential API endpoints for video management and analytics
            </p>
          </div>

          <div ref={endpointsRef} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {endpoints.map((endpoint, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${endpoint.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                    >
                      {endpoint.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        endpoint.method === "GET"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                          : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                  </div>
                  <CardTitle className="text-amber-900 dark:text-amber-100 font-mono text-lg">
                    {endpoint.path}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 dark:text-amber-300 mb-4">{endpoint.description}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent group-hover:scale-105 transition-transform"
                  >
                    <Code className="mr-2 w-4 h-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Code Examples
            </h2>
            <p className="text-xl text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
              Ready-to-use code snippets in your favorite programming language
            </p>
          </div>

          <div ref={codeRef} className="max-w-4xl mx-auto">
            {/* Language Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {Object.keys(codeExamples).map((lang) => (
                <Button
                  key={lang}
                  variant={activeTab === lang ? "default" : "outline"}
                  onClick={() => setActiveTab(lang)}
                  className={`capitalize ${
                    activeTab === lang
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white"
                      : "border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                  }`}
                >
                  {lang === "javascript" ? "JavaScript" : lang === "python" ? "Python" : "cURL"}
                </Button>
              ))}
            </div>

            {/* Code Block */}
            <Card className="bg-gray-900 border-amber-800 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-amber-400 font-mono">
                    {activeTab === "javascript" ? "app.js" : activeTab === "python" ? "main.py" : "terminal"}
                  </CardTitle>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-700">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <pre className="text-green-400 p-6 overflow-x-auto text-sm leading-relaxed">
                  <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">API Features</h2>
            <p className="text-xl text-amber-700 dark:text-amber-300">Built for developers, designed for scale</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">Secure</h3>
              <p className="text-amber-700 dark:text-amber-300">
                Enterprise-grade security with API key authentication and HTTPS encryption.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">Fast</h3>
              <p className="text-amber-700 dark:text-amber-300">
                Lightning-fast response times with global CDN and optimized infrastructure.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">Global</h3>
              <p className="text-amber-700 dark:text-amber-300">
                Worldwide availability with 99.9% uptime SLA and 24/7 monitoring.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">Developer-Friendly</h3>
              <p className="text-amber-700 dark:text-amber-300">
                RESTful design with comprehensive documentation and SDKs for all major languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
