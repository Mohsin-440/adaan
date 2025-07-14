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
      description: "Local manufacturing with strategic high-tech imports.",
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
    <section className="pt-24 bg-gradient-to-b from-mining-white via-mining-white to-mining-gray/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-mining-blue/10 via-transparent to-transparent opacity-40"></div>
        <ParallaxElement speed={0.3} className="absolute -top-20 -left-20">
          <div className="w-[40rem] h-[40rem] bg-mining-blue/5 rounded-full blur-3xl animate-pulse"></div>
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
            <div className="flex items-center justify-center mb-6 group">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-mining-blue to-transparent mr-6 transform transition-all duration-300 group-hover:scale-x-110" />
              <span className="text-mining-blue font-semibold uppercase tracking-wider text-sm bg-gradient-to-r from-mining-blue to-mining-blue/80 text-transparent bg-clip-text">Why Choose AITC?</span>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-mining-blue to-transparent ml-6 transform transition-all duration-300 group-hover:scale-x-110" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-mining-gray to-mining-gray/90 bg-clip-text text-transparent leading-tight">
              Addaan International Trading Company
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 100} animation="fadeInUp">
              <Card className="text-center relative overflow-hidden group backdrop-blur-sm border-mining-blue/10 bg-gradient-to-br from-white to-mining-gray/5 h-full">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-mining-blue/10 via-mining-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-mining-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Glowing border effect */}
                <div className="absolute inset-[1px] bg-gradient-to-r from-mining-blue/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="relative mb-6 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-mining-blue/20 to-transparent rounded-full blur-lg transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-mining-blue/10 to-mining-blue/5 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <reason.icon className="h-8 w-8 text-mining-blue transition-all duration-300 group-hover:rotate-6" />
                    </div>
                  </div>
                  <div className="h-[120px] flex flex-col">
                    <h3 className="text-xl font-bold text-mining-gray mb-3 transition-all duration-300 group-hover:text-mining-blue">{reason.title}</h3>
                    <p className="text-mining-gray/70 leading-relaxed transition-all duration-300 group-hover:text-mining-gray/90 text-sm">{reason.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
