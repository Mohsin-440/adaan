"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, User, Building, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export const locations = [
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

interface ContactSectionProps {
    showHeader?: boolean
    className?: string
    variant?: 'default' | 'full'
}

export default function ContactSection({ showHeader = true, className = "", variant = 'default' }: ContactSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section id="contact" className={`py-20 bg-mining-gray text-mining-white ${className}`}>
            <div className={`container mx-auto px-4 ${variant === 'full' ? 'max-w-none' : ''}`}>
                {showHeader && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
                            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-mining-blue to-transparent mr-6" />
                            <span className="text-mining-blue font-semibold uppercase tracking-wider text-sm">Contact Us</span>
                            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-mining-blue to-transparent ml-6" />
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
                            Partner with Addaan - Contact Us Today!
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-mining-white/80 max-w-3xl mx-auto">
                            Whether you need core trays, mining equipment, or customized solutions, AITC is your trusted partner. Let's
                            shape the future of mining together!
                        </motion.p>
                    </motion.div>
                )}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid lg:grid-cols-2 gap-12 mb-16"
                >
                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-mining-gray/80 border-mining-gray/60 overflow-hidden group shadow-xl">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-gradient-to-r from-mining-blue/10 to-transparent opacity-0 transition-opacity duration-300"
                            />
                            <CardContent className="p-8 relative">
                                <h3 className="text-2xl font-bold text-mining-white mb-8 bg-gradient-to-r from-mining-blue to-mining-blue/70 inline-block text-transparent bg-clip-text">Send us a Message</h3>

                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium text-mining-blue/90">First Name</label>
                                            <Input
                                                id="firstName"
                                                placeholder="Enter your first name"
                                                className="bg-mining-gray border-mining-blue/20 text-mining-white placeholder:text-mining-white/40 focus:border-mining-blue/60 hover:border-mining-blue/40 transition-all duration-300 h-11 shadow-inner shadow-mining-blue/5"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium text-mining-blue/90">Last Name</label>
                                            <Input
                                                id="lastName"
                                                placeholder="Enter your last name"
                                                className="bg-mining-gray border-mining-blue/20 text-mining-white placeholder:text-mining-white/40 focus:border-mining-blue/60 hover:border-mining-blue/40 transition-all duration-300 h-11 shadow-inner shadow-mining-blue/5"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-mining-blue/90">Email Address</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="bg-mining-gray border-mining-blue/20 text-mining-white placeholder:text-mining-white/40 focus:border-mining-blue/60 hover:border-mining-blue/40 transition-all duration-300 h-11 shadow-inner shadow-mining-blue/5"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-mining-blue/90">Subject</label>
                                        <Input
                                            id="subject"
                                            placeholder="What is your message about?"
                                            className="bg-mining-gray border-mining-blue/20 text-mining-white placeholder:text-mining-white/40 focus:border-mining-blue/60 hover:border-mining-blue/40 transition-all duration-300 h-11 shadow-inner shadow-mining-blue/5"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-mining-blue/90">Message</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Type your message here..."
                                            rows={5}
                                            className="bg-mining-gray border-mining-blue/20 text-mining-white placeholder:text-mining-white/40 focus:border-mining-blue/60 hover:border-mining-blue/40 transition-all duration-300 resize-none shadow-inner shadow-mining-blue/5"
                                        />
                                    </div>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button className="w-full bg-mining-blue hover:bg-mining-blue/80 text-mining-white font-semibold transition-all duration-300">
                                            Send Message
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Quick Contact */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <p className="text-mining-white/80 mb-8">
                                Our team is available to discuss your mining project requirements and provide expert consultation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Contact Info Items */}
                            {[
                                {
                                    icon: User,
                                    title: "Primary Contact",
                                    content: [
                                        "Abdul Basit Zaman",
                                        "Technical Sales Specialist",
                                        "Mobile: +966 56 769 1426",
                                        "Office: +966 12 661 0243"
                                    ]
                                },
                                {
                                    icon: Mail,
                                    title: "Email",
                                    content: [
                                        "zaman@addaaninternational.com",
                                        "www.addaaninternational.com"
                                    ]
                                },
                                {
                                    icon: MapPin,
                                    title: "Head Office",
                                    content: [
                                        "Al Massa Center, II Floor, Office No. 103",
                                        "Al Marwa District, Jeddah 23545, Saudi Arabia"
                                    ]
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start group"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-12 h-12 bg-mining-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300"
                                    >
                                        <item.icon className="h-6 w-6 text-mining-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-mining-white mb-1 group-hover:text-mining-blue transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        {item.content.map((line, i) => (
                                            <p key={i} className="text-mining-white/80 text-sm">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-4 pt-6">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button size="lg" className="w-full bg-mining-blue hover:bg-mining-blue/80 text-mining-white font-semibold transition-all duration-300">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call +966 56 769 1426
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full border-mining-blue text-mining-blue hover:bg-mining-blue hover:text-mining-white transition-all duration-300"
                                >
                                    Explore Our Core Boxes
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Our Locations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
                        Our Locations
                    </motion.h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {locations.map((location, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="h-full"
                                >
                                    <Card className="bg-mining-gray/80 border-mining-gray/60 h-full group hover:border-mining-blue/40 transition-colors duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex items-start">
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    className="w-12 h-12 bg-mining-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                                                >
                                                    <Building className="h-6 w-6 text-mining-white" />
                                                </motion.div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-mining-white mb-2 group-hover:text-mining-blue transition-colors duration-300">
                                                        {location.name}
                                                    </h4>
                                                    <p className="text-mining-white/80 text-sm mb-3 leading-relaxed">
                                                        {location.address}
                                                    </p>
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
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

