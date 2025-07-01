import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Users, Globe } from "lucide-react"

export default function MuxDataPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Mux Data</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Real-time video analytics and monitoring. Get deep insights into your video performance, viewer behavior,
              and streaming quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8">
                View Demo Dashboard
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 bg-transparent"
              >
                Explore Metrics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Total Views</h3>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold">1.2M</div>
                  <div className="text-sm text-green-600">+12% from last month</div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Avg Quality Score</h3>
                    <BarChart3 className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold">94.2</div>
                  <div className="text-sm text-blue-600">Excellent</div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Active Viewers</h3>
                    <Users className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold">8,432</div>
                  <div className="text-sm text-purple-600">Live now</div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Global Reach</h3>
                    <Globe className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-sm text-orange-600">Countries</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-semibold mb-4">Video Performance Over Time</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500">Interactive Chart Visualization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Monitor What Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track every aspect of your video performance with real-time analytics and detailed reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Quality of Experience</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rebuffering events</li>
                <li>• Startup time</li>
                <li>• Video quality metrics</li>
                <li>• Error tracking</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Viewer Engagement</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Watch time analytics</li>
                <li>• Audience retention</li>
                <li>• Geographic distribution</li>
                <li>• Device breakdown</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Performance Insights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• CDN performance</li>
                <li>• Bandwidth usage</li>
                <li>• Peak concurrent viewers</li>
                <li>• Custom dimensions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
