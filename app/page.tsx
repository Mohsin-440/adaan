import Header from "@/components/header"
import Hero from "@/components/hero"
import CoreTraysHighlight from "@/components/core-trays-highlight"
import About from "@/components/about"
import WhyChooseAITC from "@/components/why-choose-aitc"
import Products from "@/components/products"
import Team from "@/components/team"
import Achievements from "@/components/achievements"
import Partners from "@/components/partners"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CoreTraysHighlight />
      <About />
      <WhyChooseAITC />
      <Products />
      <Team />
      <Achievements />
      <Partners />
      <ContactSection />
      <Footer />
    </main>
  )
}
