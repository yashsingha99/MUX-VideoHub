import { Button } from "@/components/ui/button"
import { Play, Eye, BarChart3, Target } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              THE INTERNET'S
              <br />
              VIDEO API
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Cost-effective video infrastructure for businesses of all scale. Mux streams billions of minutes of video
              every day, from live and on-demand platforms to gen AI products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8">
                START BUILDING
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 bg-transparent"
              >
                GET A DEMO
              </Button>
            </div>

            {/* Product Features */}
            <div className="space-y-6 pt-8">
              <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors cursor-pointer">
                  <Eye className="w-6 h-6 text-gray-400" />
                  <span className="text-lg">Mux Video</span>
                </div>

                <div className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors cursor-pointer">
                  <BarChart3 className="w-6 h-6 text-gray-400" />
                  <span className="text-lg">Mux Player</span>
                </div>

                <div className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors cursor-pointer">
                  <Target className="w-6 h-6 text-gray-400" />
                  <span className="text-lg">Mux Data</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Player Mockup */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 transform rotate-3 shadow-2xl">
              {/* Analytics Dashboard */}
              <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-800 font-semibold">Analytics</h3>
                  <div className="text-gray-600 text-sm">83/100</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Player */}
              <div className="bg-black rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <div className="absolute inset-4 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-black ml-1" />
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black bg-opacity-50 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <Play className="w-4 h-4 text-white" />
                        <div className="flex-1 bg-gray-600 rounded-full h-1">
                          <div className="bg-white h-1 rounded-full w-1/3"></div>
                        </div>
                        <span className="text-white text-xs">2:34 / 7:42</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
