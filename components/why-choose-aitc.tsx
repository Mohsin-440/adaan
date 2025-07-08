import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Globe, Factory, Heart } from "lucide-react"
import AnimatedSection from "./animated-section"
import ParallaxElement from "./parallax-element"

export default function WhyChooseAITC() {
  const reasons = [
    {
      title: "Proven Expertise",
      description: "Nearly a decade of leadership in mining solutions, drilling, and automation.",
      icon: Users,
    },
    {
      title: "Global Partnerships",
      description: "Collaborations with IMDEX, CR Mining powered by Epiroc, and Desco Drilling.",
      icon: Globe,
    },
    {
      title: "Local Manufacturing",
      description: "State-of-the-art Rabigh facility producing HQ, PQ, and NQ core trays.",
      icon: Factory,
    },
    {
      title: "Strategic Warehouse Facilities",
      description: "Ensuring fast dispatch and inventory availability.",
      icon: Heart,
    },
    {
      title: "Balanced Approach",
      description: "Reducing import dependency through local manufacturing while managing essential high-tech imports.",
      icon: Users,
    },
    {
      title: "Vision 2030 Aligned",
      description: "Supporting local content, industrial growth, and sustainability.",
      icon: Globe,
    },
    {
      title: "Tailored Mining Solutions",
      description: "Data-driven solutions that boost productivity, safety, and reduce maintenance.",
      icon: Factory,
    },
    {
      title: "One-Stop Provider",
      description: "Drilling Rigs, Drilling Optimizations, and core handling systems.",
      icon: Heart,
    },
    {
      title: "High Safety & Quality Standards",
      description: "Durable products built for harsh field conditions.",
      icon: Users,
    },
    {
      title: "Comprehensive Support",
      description: "From technical consulting to after-sales service.",
      icon: Globe,
    },
  ]

  const partners = [
    {
      name: "IMDEX",
      description: "Experts in real-time mining data and drilling technology.",
    },
    {
      name: "CR Powered by Epiroc",
      description: "Leaders in GET solutions and digital mining innovations.",
    },
    {
      name: "Desco Drilling",
      description: "Renowned for high-performance drilling rigs.",
    },
  ]

  return (
    <section className="py-20 bg-mining-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxElement speed={0.3} className="absolute top-10 left-20">
          <div className="w-60 h-60 bg-mining-blue/8 rounded-full blur-3xl"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.4} direction="down" className="absolute bottom-10 right-20">
          <div className="w-80 h-80 bg-mining-blue/8 rounded-full blur-2xl"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.2} direction="right" className="absolute top-1/2 left-1/3">
          <div className="w-32 h-32 bg-gradient-to-r from-mining-blue/10 to-transparent rounded-full blur-xl"></div>
        </ParallaxElement>

        {/* Geometric shapes */}
        <ParallaxElement speed={0.5} className="absolute top-1/4 right-1/4">
          <div className="w-24 h-24 border border-mining-blue/30 rotate-45 rounded-lg"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.6} direction="left" className="absolute bottom-1/4 left-1/4">
          <div className="w-20 h-20 bg-mining-blue/20 rotate-12 rounded-lg"></div>
        </ParallaxElement>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Why Choose AITC */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-mining-blue mr-4" />
              <span className="text-mining-blue font-semibold uppercase tracking-wide">Why Choose AITC?</span>
              <div className="w-12 h-1 bg-mining-blue ml-4" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-mining-gray mb-12">
              Addaan International Trading Company
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 100} animation="fadeInUp">
              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                {/* Subtle parallax background in card */}
                <ParallaxElement speed={0.05} className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-mining-blue/20 to-transparent"></div>
                </ParallaxElement>

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-mining-blue rounded-full flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle className="h-4 w-4 text-mining-white" />
                    </div>
                    <reason.icon className="h-8 w-8 text-mining-blue transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-bold text-mining-gray mb-3">{reason.title}</h3>
                  <p className="text-mining-gray/70 text-sm leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Our Trusted Partners */}
        <div className="mb-16">
          <AnimatedSection>
            <h3 className="text-3xl font-bold text-mining-gray mb-8 text-center">Our Trusted Partners</h3>
            <p className="text-lg text-mining-gray/70 text-center mb-8">
              AITC collaborates with world-class brands to deliver cutting-edge solutions:
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 200} animation="fadeInUp">
                <div className="text-center transform transition-all duration-300 hover:scale-105">
                  <h4 className="text-xl font-bold text-mining-blue mb-2">{partner.name}</h4>
                  <p className="text-mining-gray/70">{partner.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
