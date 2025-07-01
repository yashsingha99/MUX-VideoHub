import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Book, Code, Zap, Shield } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Developer Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Everything you need to integrate Mux into your application. From quick start guides to advanced API
            references.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Started in Minutes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Create an Account</h3>
                </div>
                <p className="text-gray-600 mb-4">Sign up for a free Mux account and get your API credentials.</p>
                <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
                  curl -X POST https://api.mux.com/video/v1/uploads
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Upload Your First Video</h3>
                </div>
                <p className="text-gray-600 mb-4">Use our API to upload and process your first video file.</p>
                <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
                  {"const asset = await mux.video.assets.create({...})"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/developers/guides"
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Guides</h3>
              <p className="text-gray-600">Step-by-step tutorials for common use cases and integrations.</p>
            </Link>

            <Link href="/developers/api" className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">API Reference</h3>
              <p className="text-gray-600">Complete API documentation with examples and response schemas.</p>
            </Link>

            <Link href="/developers/sdks" className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">SDKs</h3>
              <p className="text-gray-600">Official SDKs for popular programming languages and frameworks.</p>
            </Link>

            <Link
              href="/developers/security"
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p className="text-gray-600">Best practices for securing your video content and API access.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Simple Integration</h2>

            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">JavaScript</span>
                <button className="text-gray-400 hover:text-white">Copy</button>
              </div>
              <pre className="text-green-400 overflow-x-auto">
                {`import Mux from '@mux/mux-node';

const mux = new Mux(
  process.env.MUX_TOKEN_ID,
  process.env.MUX_TOKEN_SECRET
);

// Create a new video asset
const asset = await mux.video.assets.create({
  input: 'https://example.com/video.mp4',
  playback_policy: ['public']
});

console.log('Asset created:', asset.id);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
