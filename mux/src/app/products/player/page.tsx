import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play, Smartphone, Monitor, Settings } from "lucide-react"

export default function MuxPlayerPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Mux Player</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The world's most advanced HTML5 video player. Built for performance, customization, and seamless
              integration with Mux Video.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8">
                Try the Player
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 bg-transparent"
              >
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Player */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>

                {/* Player Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="flex items-center space-x-4">
                    <Play className="w-6 h-6 text-white" />
                    <div className="flex-1 bg-gray-600 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-white text-sm">2:34 / 7:42</span>
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for Every Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mux Player works seamlessly across all devices and platforms with automatic optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Desktop Optimized</h3>
              <p className="text-gray-600">Full-featured player with keyboard shortcuts and advanced controls.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Ready</h3>
              <p className="text-gray-600">Touch-optimized controls with native mobile video behavior.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Customizable</h3>
              <p className="text-gray-600">Theme, brand, and customize every aspect of the player experience.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
