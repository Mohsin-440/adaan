import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, User, Building, MapPin } from "lucide-react"

export default function Contact() {
  const locations = [
    {
      name: "Jeddah Head Office",
      address: "Al Massa Center, II Floor, Office No. 103, Al Marwa District, Jeddah 23545, Saudi Arabia",
      phone: "+966 12 661 0243",
      mobile: "+966 56 769 1426",
      email: "zaman@addaaninternational.com",
      contact: "Abdul Basit Zaman - Technical Sales Specialist",
    },
    {
      name: "Warehouse & Manufacturing",
      address:
        "Addaan International Trading Company – Warehouse, Al Khumrah, 2966 Al Zahed, Ad Dahiah, Jeddah 22529, Saudi Arabia",
      phone: "+966 12 XXX XXXX",
      email: "operations@addaaninternational.com",
      contact: "Operations Team",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-mining-gray text-mining-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-mining-blue mr-4" />
            <span className="text-mining-blue font-semibold uppercase tracking-wide">Contact Us</span>
            <div className="w-12 h-1 bg-mining-blue ml-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner with Addaan - Contact Us Today!</h2>

          <p className="text-lg text-mining-white/80 max-w-3xl mx-auto">
            Whether you need core trays, mining equipment, or customized solutions, AITC is your trusted partner. Let's
            shape the future of mining together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-mining-gray/80 border-mining-gray/60">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-mining-white mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First Name"
                      className="bg-mining-gray/60 border-mining-gray/40 text-mining-white placeholder:text-mining-white/60"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className="bg-mining-gray/60 border-mining-gray/40 text-mining-white placeholder:text-mining-white/60"
                    />
                  </div>
                </div>

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-mining-gray/60 border-mining-gray/40 text-mining-white placeholder:text-mining-white/60"
                />

                <Input
                  placeholder="Subject"
                  className="bg-mining-gray/60 border-mining-gray/40 text-mining-white placeholder:text-mining-white/60"
                />

                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-mining-gray/60 border-mining-gray/40 text-mining-white placeholder:text-mining-white/60"
                />

                <Button className="w-full bg-mining-blue hover:bg-mining-blue/80 text-mining-white font-semibold">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-mining-white/80 mb-8">
                Our team is available to discuss your mining project requirements and provide expert consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-mining-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <User className="h-6 w-6 text-mining-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-mining-white mb-1">Primary Contact</h4>
                  <p className="text-mining-white/80">Abdul Basit Zaman</p>
                  <p className="text-mining-white/80 text-sm">Technical Sales Specialist</p>
                  <p className="text-mining-blue/80 text-sm">Mobile: +966 56 769 1426</p>
                  <p className="text-mining-blue/80 text-sm">Office: +966 12 661 0243</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-mining-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-mining-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-mining-white mb-1">Email</h4>
                  <p className="text-mining-white/80">zaman@addaaninternational.com</p>
                  <p className="text-mining-white/80 text-sm">www.addaaninternational.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-mining-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-mining-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-mining-white mb-1">Head Office</h4>
                  <p className="text-mining-white/80 text-sm">
                    Al Massa Center, II Floor, Office No. 103
                    <br />
                    Al Marwa District, Jeddah 23545, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-6">
              <Button size="lg" className="w-full bg-mining-blue hover:bg-mining-blue/80 text-mining-white font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call +966 56 769 1426
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-mining-blue text-mining-blue hover:bg-mining-blue hover:text-mining-white"
              >
                Explore Our Core Boxes
              </Button>
            </div>
          </div>
        </div>

        {/* Our Locations */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Locations</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="bg-mining-gray/80 border-mining-gray/60">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-mining-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Building className="h-6 w-6 text-mining-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-mining-white mb-2">{location.name}</h4>
                      <p className="text-mining-white/80 text-sm mb-3 leading-relaxed">{location.address}</p>
                      <div className="space-y-1 text-sm">
                        <p className="text-mining-white/80">📞 {location.phone}</p>
                        {location.mobile && <p className="text-mining-white/80">📱 {location.mobile}</p>}
                        <p className="text-mining-white/80">✉️ {location.email}</p>
                        <p className="text-mining-blue/80">{location.contact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
