import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Globe, Award, Heart } from "lucide-react"

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Mux</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're building the infrastructure that powers the world's video experiences. From startups to Fortune 500
            companies, developers trust Mux to deliver video at scale.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To make it easy for every developer to build beautiful video experiences. We believe video is the future
              of communication, and we're committed to providing the tools and infrastructure that make high-quality
              video accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <p className="text-gray-600">Developers</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold mb-2">50B+</div>
              <p className="text-gray-600">Minutes Streamed</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <p className="text-gray-600">Uptime SLA</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team combines decades of experience in video technology, infrastructure, and developer tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Jon Dahl</h3>
              <p className="text-gray-600 mb-2">Co-founder & CEO</p>
              <p className="text-sm text-gray-500">Former Zencoder founder, video technology veteran</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Matt McClure</h3>
              <p className="text-gray-600 mb-2">Co-founder & CTO</p>
              <p className="text-sm text-gray-500">Infrastructure expert, former Brightcove engineer</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Adam Brown</h3>
              <p className="text-gray-600 mb-2">VP of Engineering</p>
              <p className="text-sm text-gray-500">Scaling video systems for millions of users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do at Mux.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Developer First</h3>
              <p className="text-gray-600">
                We build tools that developers love to use. Every decision is made with the developer experience in
                mind.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-600">
                Your video infrastructure should just work. We obsess over uptime, performance, and consistency.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-600">
                Clear pricing, honest communication, and open documentation. No surprises, ever.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We're constantly pushing the boundaries of what's possible with video technology.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                Building a supportive community of developers who help each other succeed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Scale</h3>
              <p className="text-gray-600">
                From prototype to production, we help you scale from zero to billions of video minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who share our passion for video technology and developer tools.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">View Open Positions</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
