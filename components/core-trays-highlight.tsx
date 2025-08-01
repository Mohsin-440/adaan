import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Factory, Globe } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "./animated-section"
import ParallaxElement from "./parallax-element"
import Image from "next/image"

export default function CoreTraysHighlight() {
  const highlights = ["Saudi Made Product", "Locally Manufactured in the Kingdom", "Align with the Vision 2030"]

  return (
    <section id="core-trays" className="py-20 bg-gradient-to-br from-mining-white to-mining-gray/10 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection animation="fadeInLeft">
            <div className="flex items-center mb-6">
              <div className="w-16 h-1 bg-mining-blue mr-4 transform origin-left transition-all duration-1000"></div>
              <span className="text-mining-blue font-bold uppercase tracking-wide text-lg">AITC CORE TRAYS</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-mining-gray mb-8 leading-tight">
              <span className="text-mining-blue inline-block transform transition-all duration-500 hover:scale-105">
                DURABLE, SAUDI-MADE
              </span>
              <br />
              <span className="text-mining-gray inline-block transform transition-all duration-500 hover:scale-105">
                SOLUTIONS
              </span>
            </h2>

            <p className="text-xl text-mining-blue/80 font-semibold mb-6">
              Engineered for Precision and Reliability
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <AnimatedSection key={index} delay={index * 200} animation="fadeInLeft">
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-mining-blue rounded-full flex items-center justify-center mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <CheckCircle className="h-5 w-5 text-mining-white" />
                    </div>
                    <span className="text-xl font-semibold text-mining-gray transition-colors group-hover:text-mining-blue">
                      {highlight}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={600}>
              <p className="text-lg text-mining-gray/70 mb-8 leading-relaxed">
                Locally manufactured HQ, PQ, and NQ core boxes produced at our state-of-the-art Rabigh facility.
                Supporting Saudi Vision 2030 through local manufacturing excellence and commitment to quality.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: "250K+", label: "Core Boxes Sold" },
                  { number: "100%", label: "Saudi Made" },
                  { number: "2030", label: "Vision Aligned" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-mining-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <div className="text-3xl font-bold text-mining-blue mb-2 transition-colors group-hover:text-mining-blue/80">
                      {stat.number}
                    </div>
                    <div className="text-sm text-mining-gray/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1000}>
              <Button
                size="lg"
                className="bg-mining-blue hover:bg-mining-blue/80 text-mining-white px-8 py-3 text-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="#contact">Get Quote for Core Trays</Link>
              </Button>
            </AnimatedSection>
          </AnimatedSection>

          {/* Visual with Parallax */}
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="relative">
              <div className="bg-gradient-to-br from-mining-blue to-mining-blue/80 rounded-2xl p-8 text-center text-mining-white transform transition-all duration-500 hover:scale-105 shadow-2xl relative overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  src="/images/aitc-logo.png"
                  alt="AITC Logo"
                  className="mx-auto mb-4 rounded-md transition-transform duration-300 hover:scale-110 relative z-10"
                />
                <h3 className="text-2xl font-bold mb-2 relative z-10">A PRODUCT OF ADDAAN</h3>
                <h3 className="text-2xl font-bold mb-4 relative z-10">INTERNATIONAL TRADING</h3>
                <h3 className="text-2xl font-bold relative z-10">COMPANY LTD.</h3>

                <div className="mt-8 grid grid-cols-3 gap-4 relative z-10">
                  {[
                    { icon: Factory, label: "Local Manufacturing" },
                    { icon: Award, label: "Quality Assured" },
                    { icon: Globe, label: "Vision 2030" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-mining-white/10 p-3 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-mining-white/20 group"
                    >
                      <item.icon className="h-8 w-8 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                      <div className="text-sm font-semibold">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
