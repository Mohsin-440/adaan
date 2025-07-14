import { CheckCircle, Target, Eye } from "lucide-react"
import AnimatedSection from "./animated-section"
import ParallaxElement from "./parallax-element"
import Image from "next/image"

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
    <section id="about" className="py-24 bg-gradient-to-b from-mining-white to-mining-gray/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-mining-blue/20 to-transparent transform -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-mining-blue/10 to-transparent transform translate-y-1/4 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fadeInLeft">
            <div className="flex items-center mb-6 group">
              <div className="w-16 h-1 bg-gradient-to-r from-mining-blue to-mining-blue/50 mr-4 transform transition-all duration-300 group-hover:scale-x-110 origin-left" />
              <span className="text-mining-blue font-semibold uppercase tracking-wider text-sm">About AITC</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mining-gray to-mining-gray/90 bg-clip-text text-transparent mb-8 leading-tight">
              Partnering with Global Leaders, Empowering Saudi Mining
            </h2>

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
            </div>              <AnimatedSection delay={800}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-mining-gray/20">
                {[
                  { number: "250K+", label: "Core Boxes Sold" },
                  { number: "9+", label: "Years Experience" },
                  { number: "18+", label: "DESCO Rigs Deployed" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group relative">
                    <div className="absolute inset-0 bg-mining-blue/5 rounded-lg scale-0 transition-transform duration-300 group-hover:scale-100"></div>
                    <div className="relative p-4">
                      <div className="text-4xl font-bold bg-gradient-to-r from-mining-blue to-mining-blue/80 bg-clip-text text-transparent mb-3 transition-all duration-300 group-hover:scale-110">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-mining-gray/70 transition-all duration-300 group-hover:text-mining-gray">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection animation="fadeInRight">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-mining-blue/20 to-mining-blue/10 rounded-lg blur-xl transition-all duration-500 group-hover:blur-2xl opacity-75 group-hover:opacity-100"></div>
                <div className="relative">
                  <Image
                    width={800}
                    height={300}
                    src="/images/crain.jpeg"
                    alt="AITC Manufacturing Facility"
                    className="rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mining-gray/50 to-transparent rounded-lg"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mission & Vision with Parallax */}
            <div className="grid gap-6">
              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="bg-gradient-to-br from-mining-gray/5 to-mining-gray/10 backdrop-blur-sm p-8 rounded-xl transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group relative overflow-hidden border border-mining-blue/10">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-mining-blue/10 via-transparent to-mining-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <ParallaxElement speed={0.1} className="absolute inset-0">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-mining-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
