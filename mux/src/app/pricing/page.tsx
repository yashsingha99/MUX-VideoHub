import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Pay only for what you use. No hidden fees, no minimum commitments. Scale from prototype to production
            seamlessly.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-2">Free</div>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>1,000 minutes of encoding</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>10GB of storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Community support</span>
                </li>
              </ul>

              <Button className="w-full bg-transparent" variant="outline">
                Get Started Free
              </Button>
            </div>

            {/* Growth */}
            <div className="border-2 border-blue-500 rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <div className="text-4xl font-bold mb-2">Pay as you go</div>
              <p className="text-gray-600 mb-6">Scale with your business</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>$0.0045 per minute encoded</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>$0.0025 per GB delivered</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>99.9% uptime SLA</span>
                </li>
              </ul>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Building</Button>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-2">Custom</div>
              <p className="text-gray-600 mb-6">For large-scale applications</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Volume discounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>99.95% uptime SLA</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Priority feature requests</span>
                </li>
              </ul>

              <Button className="w-full bg-transparent" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How does billing work?</h3>
                <p className="text-gray-600">
                  You're only charged for what you use. Encoding is billed per minute of video processed, and delivery
                  is billed per GB of data transferred.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Is there a free tier?</h3>
                <p className="text-gray-600">
                  Yes! Our Starter plan includes 1,000 minutes of encoding and 10GB of storage completely free every
                  month.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600">
                  Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards and can arrange invoicing for enterprise customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
