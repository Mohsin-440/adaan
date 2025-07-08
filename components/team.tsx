import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Award, Users, Cog, TrendingUp, Shield, Globe } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Ahmed Al-Rashid",
      nameArabic: "أحمد الراشد",
      position: "Chief Executive Officer",
      department: "Executive Leadership",
      experience: "15+ Years",
      specialties: ["Strategic Planning", "Business Development", "Vision 2030 Initiatives"],
      email: "ceo@addaaninternational.com",
      phone: "+966 12 XXX XXXX",
      image: "/placeholder.svg?height=300&width=300",
      icon: Users,
      description: "Leading AITC's strategic vision and growth initiatives across the Middle East mining sector.",
    },
    {
      name: "Abdul Basit Zaman",
      nameArabic: "عبدالباسط زمان",
      position: "Technical Sales Specialist",
      department: "Sales & Technical Support",
      experience: "8+ Years",
      specialties: ["Technical Sales", "Client Relations", "Product Consultation"],
      email: "zaman@addaaninternational.com",
      phone: "+966 56 769 1426",
      image: "/placeholder.svg?height=300&width=300",
      icon: Award,
      description:
        "Expert in mining equipment sales and technical consultation, ensuring optimal solutions for clients.",
      featured: true,
    },
    {
      name: "Eng. Khalid Al-Mutairi",
      nameArabic: "م. خالد المطيري",
      position: "Operations Manager",
      department: "Operations & Manufacturing",
      experience: "12+ Years",
      specialties: ["Manufacturing Operations", "Quality Control", "Process Optimization"],
      email: "operations@addaaninternational.com",
      phone: "+966 12 XXX XXXX",
      image: "/placeholder.svg?height=300&width=300",
      icon: Cog,
      description:
        "Overseeing core tray manufacturing and ensuring world-class quality standards at our Rabigh facility.",
    },
    {
      name: "Sarah Al-Zahra",
      nameArabic: "سارة الزهراء",
      position: "Business Development Manager",
      department: "Business Development",
      experience: "10+ Years",
      specialties: ["Partnership Development", "Market Analysis", "International Relations"],
      email: "business@addaaninternational.com",
      phone: "+966 12 XXX XXXX",
      image: "/placeholder.svg?height=300&width=300",
      icon: TrendingUp,
      description: "Driving strategic partnerships and expanding AITC's presence in global mining markets.",
    },
    {
      name: "Eng. Mohammed Al-Harbi",
      nameArabic: "م. محمد الحربي",
      position: "Engineering Manager",
      department: "Engineering & R&D",
      experience: "14+ Years",
      specialties: ["Product Development", "Technical Innovation", "Engineering Solutions"],
      email: "engineering@addaaninternational.com",
      phone: "+966 12 XXX XXXX",
      image: "/placeholder.svg?height=300&width=300",
      icon: Shield,
      description: "Leading product innovation and engineering excellence in mining technology solutions.",
    },
    {
      name: "Fatima Al-Qasimi",
      nameArabic: "فاطمة القاسمي",
      position: "International Relations Director",
      department: "Global Partnerships",
      experience: "11+ Years",
      specialties: ["Global Partnerships", "Export Operations", "International Compliance"],
      email: "international@addaaninternational.com",
      phone: "+966 12 XXX XXXX",
      image: "/placeholder.svg?height=300&width=300",
      icon: Globe,
      description: "Managing international partnerships with IMDEX, CR Powered by Epiroc, and Desco Drilling.",
    },
  ]

  return (
    <section id="team" className="py-20 bg-mining-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-mining-blue mr-4" />
            <span className="text-mining-blue font-semibold uppercase tracking-wide">Our Team</span>
            <div className="w-12 h-1 bg-mining-blue ml-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-mining-gray mb-6">Meet Our Expert Team</h2>

          <p className="text-lg text-mining-gray/70 max-w-3xl mx-auto">
            Our dedicated professionals bring decades of combined experience in mining, engineering, and business
            development to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 ${member.featured ? "ring-2 ring-mining-blue shadow-lg" : ""
                }`}
            >
              <CardContent className="p-6">
                {member.featured && (
                  <div className="bg-mining-blue text-mining-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Primary Contact
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-mining-blue/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-mining-blue rounded-full flex items-center justify-center">
                      <member.icon className="h-4 w-4 text-mining-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-mining-gray mb-1">{member.name}</h3>
                  <p className="text-mining-gray/60 text-sm mb-2">{member.nameArabic}</p>
                  <p className="text-mining-blue font-semibold mb-1">{member.position}</p>
                  <p className="text-mining-gray/70 text-sm mb-4">{member.department}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-mining-gray/70 text-sm leading-relaxed">{member.description}</p>

                  <div className="border-t border-mining-gray/20 pt-4">
                    <div className="flex items-center justify-between text-sm text-mining-gray/60 mb-3">
                      <span>Experience:</span>
                      <span className="font-semibold text-mining-blue">{member.experience}</span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-mining-gray/80 mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, specIndex) => (
                          <span
                            key={specIndex}
                            className="bg-mining-blue/10 text-mining-blue px-2 py-1 rounded text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-mining-gray/10">
                      <div className="flex space-x-3">
                        <Button size="sm" variant="outline" className="p-2">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-mining-gray to-mining-gray/80 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-mining-white">
            <div>
              <div className="text-3xl font-bold text-mining-blue mb-2">50+</div>
              <div className="text-sm text-mining-white/70">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mining-blue mb-2">120+</div>
              <div className="text-sm text-mining-white/70">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mining-blue mb-2">15+</div>
              <div className="text-sm text-mining-white/70">Engineering Specialists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mining-blue mb-2">24/7</div>
              <div className="text-sm text-mining-white/70">Technical Support</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-mining-gray mb-4">Ready to Work with Our Team?</h3>
          <p className="text-mining-gray/70 mb-6">
            Contact Abdul Basit Zaman, our Technical Sales Specialist, for personalized consultation and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-mining-blue hover:bg-mining-blue/80 text-mining-white">
              <Phone className="mr-2 h-5 w-5" />
              Call +966 56 769 1426
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-mining-blue text-mining-blue hover:bg-mining-blue hover:text-mining-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
