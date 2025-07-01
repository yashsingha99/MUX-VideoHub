import AnimatedHeader from "@/components/animated-header"
import ProfileDashboard from "@/components/profile-dashboard"
import Footer from "@/components/footer"

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <AnimatedHeader />
      <ProfileDashboard />
      <Footer />
    </div>
  )
}
