import { Card, CardContent } from "@/components/ui/card"
import { Building, Factory, Globe, Award } from "lucide-react"

export default function Services() {
  const partners = [
    {
      icon: Globe,
      title: "IMDEX",
      description: "Empowering Mining with Real-Time Data and Advanced Drilling Technologies",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Global Partner",
    },
    {
      icon: Building,
      title: "CR Powered by Epiroc",
      description: "Delivering next-generation mining productivity with advanced lips, GET, dragline buckets, and digital solutions",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Technology Partner",
    },
    {
      icon: Factory,
      title: "Desco Drilling",
      description: "Precision Engineered Drill Rigs Built to Perform in the Toughest Environments",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Equipment Partner",
    },
  ]

  const facilities = [
    {
      icon: Building,
      title: "Jeddah Head Office",
      description: "Al Massa Center, II Floor, Office No. 103, Al Marwa District, Jeddah 23545, Saudi Arabia",
      image: "/placeholder.svg?height=200&width=300",
      type: "Corporate HQ",
    },
    {
      icon: Factory,
      title: "Rabigh Manufacturing Facility",
      description: "State-of-the-art facility producing HQ, PQ, and NQ core trays with advanced manufacturing technology",
      image: "/placeholder.svg?height=200&width=300",
      type: "Manufacturing",
    },
    {
      icon: Award,
      title: "Warehouse & Distribution",
      description: "Strategic warehouse facilities ensuring fast dispatch and inventory availability across Saudi Arabia",
      image: "/placeholder.svg?height=200&width=300",
      type: "Logistics",
    },
  ]

  return (
    <section id="services" className="py-20 bg-mining-gray/5">
      <div className="container mx-auto px-4">
        {/* Partner Logos Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-mining-blue mr-4" />
            <span className="text-mining-blue font-semibold uppercase tracking-wide">Our Partners</span>
            <div className="w-12 h-1 bg-mining-blue ml-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-mining-gray mb-6">Global Partnerships</h2>

          <p className="text-lg text-mining-gray/70 max-w-3xl mx-auto">
            Collaborating with world-class brands to deliver cutting-edge mining solutions and maintain our position as a
            leader in mining technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.title} logo`}
                    className="h-16 mx-auto object-contain mb-4"
                  />
                  <div className="w-16 h-16 bg-mining-blue/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-mining-blue transition-colors duration-300">
                    <partner.icon className="h-8 w-8 text-mining-blue group-hover:text-mining-white transition-colors duration-300" />
                  </div>
                </div>

                <div className="mb-3">
                  <span className="bg-mining-blue/10 text-mining-blue px-3 py-1 rounded-full text-xs font-medium">
                    {partner.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-mining-gray mb-4">{partner.title}</h3>

                <p className="text-mining-gray/70 leading-relaxed">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* HQ Pictures Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-mining-blue mr-4" />
            <span className="text-mining-blue font-semibold uppercase tracking-wide">Our Facilities</span>
            <div className="w-12 h-1 bg-mining-blue ml-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-mining-gray mb-6">Strategic Infrastructure</h2>

          <p className="text-lg text-mining-gray/70 max-w-3xl mx-auto">
            State-of-the-art facilities across Saudi Arabia supporting local manufacturing and efficient service delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-mining-blue text-mining-white px-3 py-1 rounded-full text-xs font-medium">
                      {facility.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-mining-blue/10 rounded-lg flex items-center justify-center mr-3">
                      <facility.icon className="h-5 w-5 text-mining-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-mining-gray">{facility.title}</h3>
                  </div>
                  <p className="text-mining-gray/70 leading-relaxed">{facility.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
