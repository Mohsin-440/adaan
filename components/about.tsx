import { CheckCircle, Target, Eye } from "lucide-react"
import AnimatedSection from "./animated-section"
import ParallaxElement from "./parallax-element"

export default function About() {
  const features = [
    "Nearly a decade of leadership in mining solutions",
    "Global partnerships with IMDEX, CR Powered by Epiroc, and Desco",
    "State-of-the-art Rabigh facility producing core trays",
    "Tailored solutions maximizing operational success",
    "Saudi Vision 2030 alignment",
    "Local manufacturing expertise",
  ]

  return (
    <section id="about" className="py-20 bg-mining-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxElement speed={0.2} className="absolute top-40 right-20">
          <div className="w-64 h-64 bg-mining-blue/8 rounded-full blur-3xl"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.4} direction="down" className="absolute bottom-20 left-10">
          <div className="w-80 h-80 bg-mining-blue/10 rounded-full blur-2xl"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.3} direction="right" className="absolute top-1/3 left-1/4">
          <div className="w-40 h-40 bg-gradient-to-r from-mining-blue/15 to-transparent rounded-full blur-xl"></div>
        </ParallaxElement>

        {/* Geometric parallax shapes */}
        <ParallaxElement speed={0.5} className="absolute top-20 left-1/3">
          <div className="w-20 h-20 border border-mining-blue/40 rotate-45 rounded-lg"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.6} direction="left" className="absolute bottom-1/3 right-1/4">
          <div className="w-16 h-16 bg-mining-blue/20 rotate-12 rounded-lg"></div>
        </ParallaxElement>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-mining-blue mr-4" />
              <span className="text-mining-blue font-semibold uppercase tracking-wide">About AITC</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-mining-gray mb-6">Partnering with Global Leaders, Empowering Saudi Mining</h2>

            <p className="text-lg text-mining-gray/70 mb-6 leading-relaxed">
              Founded in 2015, Addaan International Trading Company (AITC) is a leading provider of mining and exploration solutions in Saudi Arabia. We combine local manufacturing expertise with strong global partnerships to deliver innovative, high-quality products and technical services tailored to the mining industry.
            </p>

            <p className="text-lg text-mining-gray/70 mb-6 leading-relaxed">
              We began our journey as the sole agent for Desco rigs in 2017, supplying reliable and advanced drilling equipment. In 2019, we expanded our portfolio by becoming a trusted distributor of IMDEX — a global leader in drilling fluids, downhole tools, and data solutions.
            </p>

            <p className="text-lg text-mining-gray/70 mb-8 leading-relaxed">
              Between 2020 and 2021, we pioneered the launch of locally manufactured core trays, proudly approved by Ma'aden, reflecting our commitment to Saudi Vision 2030 and local content development. Most recently, in 2025, AITC partnered with CR Mining to provide high-performance GET, cast lips, and digital solutions, further strengthening Saudi Arabia's mining sector.
            </p>

            <p className="text-lg text-mining-gray/70 mb-8 leading-relaxed">
              Through strong collaborations with industry leaders such as Ma'aden and SGS, we continue to drive sustainable growth, operational excellence, and reliability across mining operations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 100} animation="fadeInUp">
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-mining-blue mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-mining-gray/80 text-sm transition-colors group-hover:text-mining-blue">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={800}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-mining-gray/20">
                {[
                  { number: "250K+", label: "Core Boxes Sold" },
                  { number: "9+", label: "Years Experience" },
                  { number: "18+", label: "DESCO Rigs Deployed" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-bold text-mining-blue mb-2 transition-all duration-300 group-hover:scale-110">
                      {stat.number}
                    </div>
                    <div className="text-sm text-mining-gray/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection animation="fadeInRight">
              <div className="relative">
                {/* Parallax elements around image */}
                <ParallaxElement speed={0.3} className="absolute -top-6 -left-6">
                  <div className="w-20 h-20 bg-mining-blue/20 rounded-full blur-xl"></div>
                </ParallaxElement>

                <ParallaxElement speed={0.5} direction="down" className="absolute -bottom-6 -right-6">
                  <div className="w-16 h-16 bg-mining-blue/30 rounded-full blur-lg"></div>
                </ParallaxElement>

                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="AITC Manufacturing Facility"
                  className="rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 relative z-10"
                />

                <ParallaxElement speed={0.2} className="absolute -bottom-6 -left-6">
                  <div className="bg-mining-blue text-mining-white p-6 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-xl">
                    <div className="text-xl font-bold">Saudi Made</div>
                    <div className="text-sm">Vision 2030</div>
                  </div>
                </ParallaxElement>
              </div>
            </AnimatedSection>

            {/* Mission & Vision with Parallax */}
            <div className="grid gap-6">
              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="bg-mining-gray/5 p-6 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden">
                  {/* Subtle parallax background */}
                  <ParallaxElement speed={0.1} className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-gradient-to-r from-mining-blue/20 to-transparent"></div>
                  </ParallaxElement>

                  <div className="flex items-center mb-3 relative z-10">
                    <Target className="h-6 w-6 text-mining-blue mr-3 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-xl font-bold text-mining-gray">Our Mission</h3>
                  </div>
                  <p className="text-mining-gray/70 relative z-10">
                    Deliver cutting-edge mining solutions that drive efficiency, sustainability, and industrial growth
                    in alignment with Saudi Vision 2030.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="bg-mining-gray/5 p-6 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden">
                  {/* Subtle parallax background */}
                  <ParallaxElement speed={0.15} className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-gradient-to-l from-mining-blue/20 to-transparent"></div>
                  </ParallaxElement>

                  <div className="flex items-center mb-3 relative z-10">
                    <Eye className="h-6 w-6 text-mining-blue mr-3 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-xl font-bold text-mining-gray">Our Vision</h3>
                  </div>
                  <p className="text-mining-gray/70 relative z-10">
                    To lead the mining sector in technology, sustainability, and local manufacturing.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
