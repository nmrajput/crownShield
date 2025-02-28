'use client'
import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import Stats from "@/components/Stats"
import CallToAction from "@/components/CallToAction"
import FaqSection from "@/components/FaqSection"
import Leadership from "@/components/Leadership"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <FaqSection />
      <CallToAction />
      <Leadership />
    </>
  )
}

