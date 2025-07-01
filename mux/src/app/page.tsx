import AnimatedHeader from "@/components/animated-header"
import EnhancedHero from "@/components/enhanced-hero"
import BrandsSection from "@/components/brands-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnimatedHeader />
      <EnhancedHero />
      <BrandsSection />
      <Footer />
    </div>
  )
}
