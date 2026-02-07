import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoMarquee from '@/components/LogoMarquee'
import Flowcharts from '@/components/Flowcharts'
import Metrics from '@/components/Metrics'
import HubSection from '@/components/HubSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      {/* Seamless gradient background that flows through all sections */}
      <div className="relative">
        {/* Global gradient overlay for seamless transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F1FF] via-[#F0F7FF] via-[40%] via-[#FFFFFF] via-[50%] via-[#F8FBFF] via-[70%] to-[#EEF5FF] pointer-events-none" />

        {/* Gradient transition overlays for smoother blending */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[100vh] bg-gradient-to-b from-[#E8F1FF] to-transparent" />
          <div className="absolute top-[90vh] left-0 right-0 h-[50vh] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>

        <Hero />
        <LogoMarquee />
        <HubSection />
        <Flowcharts />
        <Metrics />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}
