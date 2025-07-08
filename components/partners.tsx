import { Card, CardContent } from "@/components/ui/card"

export default function Partners() {
  const partners = [
    {
      name: "IMDEX",
      description: "Experts in real-time mining data and drilling technology",
      logo: "/placeholder.svg?height=80&width=200",
      specialties: ["Real-time Mining Data", "Drilling Technology", "AMC Drilling Fluids", "REFLEX Systems"],
    },
    {
      name: "CR Powered by Epiroc",
      description: "Leaders in GET solutions and digital mining innovations",
      logo: "/placeholder.svg?height=80&width=200",
      specialties: ["GET Solutions", "Digital Mining", "Cast Lips", "Titan Software"],
    },
    {
      name: "Desco Drilling",
      description: "Renowned for high-performance drilling rigs",
      logo: "/placeholder.svg?height=80&width=200",
      specialties: ["Drilling Rigs", "Surface Equipment", "Underground Solutions", "Rig Accessories"],
    },
  ]

  return (
    <section className="py-20 bg-mining-gray/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-mining-blue mr-4" />
            <span className="text-mining-blue font-semibold uppercase tracking-wide">Our Partners</span>
            <div className="w-12 h-1 bg-mining-blue ml-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-mining-gray mb-6">Our Trusted Partners</h2>

          <p className="text-lg text-mining-gray/70 max-w-3xl mx-auto">
            AITC collaborates with world-class brands to deliver cutting-edge solutions and maintain our position as a
            leader in mining technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="h-16 mx-auto object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-mining-gray mb-3">{partner.name}</h3>

                <p className="text-mining-gray/70 mb-6 leading-relaxed">{partner.description}</p>

                <div className="space-y-2">
                  {partner.specialties.map((specialty, specIndex) => (
                    <div
                      key={specIndex}
                      className="bg-mining-blue/10 text-mining-blue px-3 py-1 rounded-full text-sm font-medium inline-block mr-2 mb-2"
                    >
                      {specialty}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infrastructure Section */}
        <div className="bg-mining-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-mining-gray mb-6 text-center">
            Our Infrastructure: Powering Your Operations
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-mining-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-mining-white font-bold">IR</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-mining-gray mb-2">IMDEX Tools Repair Center</h4>
                <p className="text-mining-gray/70">
                  Equipped with advanced technology and expert technicians, we provide fast, high-quality repairs to
                  minimize downtime.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-mining-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-mining-white font-bold">DF</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-mining-gray mb-2">Drilling Fluids Storage Facility</h4>
                <p className="text-mining-gray/70">
                  Our state-of-the-art facility ensures optimal storage and quick access to essential drilling fluids,
                  keeping your operations running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
