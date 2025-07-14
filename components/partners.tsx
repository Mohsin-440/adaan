"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Partners() {
  const containerRef = useRef(null)

  const partners = [
    {
      name: "IMDEX",
      description: "Experts in real-time mining data and drilling technology",
      logo: "/placeholder.svg?height=80&width=200",
      specialties: ["Real-time Mining Data", "Drilling Technology", "AMC Drilling Fluids", "REFLEX Systems"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "CR Powered by Epiroc",
      description: "Leaders in GET solutions and digital mining innovations",
      logo: "/placeholder.svg?height=80&width=200",
      specialties: ["GET Solutions", "Digital Mining", "Cast Lips", "Titan Software"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Desco Drilling",
      description: "Renowned for high-performance drilling rigs",
      logo: "/placeholder.svg?height=80&width=200",
      specialties: ["Drilling Rigs", "Surface Equipment", "Underground Solutions", "Rig Accessories"],
      color: "from-emerald-500/20 to-teal-500/20"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-mining-gray/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mining-blue/5 via-transparent to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6 group">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-20 h-0.5 bg-gradient-to-r from-transparent via-mining-blue to-transparent mr-6"
            />
            <span className="text-mining-blue font-semibold uppercase tracking-wider text-sm bg-gradient-to-r from-mining-blue to-mining-blue/80 text-transparent bg-clip-text">
              Our Partners
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-20 h-0.5 bg-gradient-to-r from-transparent via-mining-blue to-transparent ml-6"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mining-gray to-mining-gray/90 bg-clip-text text-transparent mb-6">
            Our Trusted Partners
          </h2>

          <p className="text-xl text-mining-gray/70 max-w-3xl mx-auto">
            AITC collaborates with world-class brands to deliver cutting-edge solutions and maintain our position as a
            leader in mining technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {partners.map((partner, index) => {
            const cardRef = useRef(null)
            const isInView = useInView(cardRef, { once: true })

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                ref={cardRef}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="h-full relative group"
                >
                  {/* Ambient glow effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute -inset-2 bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-75 blur-xl rounded-xl`}
                  />

                  {/* Animated border glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -inset-[2px] bg-gradient-to-r from-mining-blue via-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-50"
                  >
                    <motion.div
                      animate={{
                        background: [
                          "linear-gradient(0deg, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.5) 100%)",
                          "linear-gradient(90deg, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.5) 100%)",
                          "linear-gradient(180deg, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.5) 100%)",
                          "linear-gradient(270deg, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.5) 100%)",
                          "linear-gradient(0deg, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.5) 100%)",
                        ]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear"
                      }}
                      className="w-full h-full rounded-xl"
                    />
                  </motion.div>

                  <Card className="relative group h-full bg-gradient-to-br from-white/80 to-mining-gray/5 border-0 shadow-lg backdrop-blur-sm">
                    <CardContent className="p-8 text-center relative overflow-hidden">
                      {/* Inner glow effect */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-20`}
                      />

                      {/* Floating orbs effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 overflow-hidden"
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{
                              x: "50%",
                              y: "50%",
                              opacity: 0
                            }}
                            animate={{
                              x: [
                                `${50 + Math.sin(i * (Math.PI * 2 / 3)) * 40}%`,
                                `${50 + Math.sin((i * (Math.PI * 2 / 3)) + Math.PI) * 40}%`
                              ],
                              y: [
                                `${50 + Math.cos(i * (Math.PI * 2 / 3)) * 40}%`,
                                `${50 + Math.cos((i * (Math.PI * 2 / 3)) + Math.PI) * 40}%`
                              ],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 3,
                              delay: i * 0.2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                            className={`absolute w-20 h-20 rounded-full bg-gradient-to-r ${partner.color} blur-xl`}
                          />
                        ))}
                      </motion.div>

                      <div className="relative z-10">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          whileHover={{
                            scale: 1.05,
                            filter: "drop-shadow(0 0 0.5rem rgba(59, 130, 246, 0.5))"
                          }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="mb-6"
                        >
                          <img
                            src={partner.logo || "/placeholder.svg"}
                            alt={`${partner.name} logo`}
                            className="h-16 mx-auto object-contain filter drop-shadow-lg"
                          />
                        </motion.div>

                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="text-2xl font-bold bg-gradient-to-r from-mining-gray to-mining-gray/90 bg-clip-text text-transparent mb-3"
                        >
                          {partner.name}
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-mining-gray/70 mb-6 leading-relaxed"
                        >
                          {partner.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex flex-wrap justify-center gap-2"
                        >
                          {partner.specialties.map((specialty, specIndex) => (
                            <motion.div
                              key={specIndex}
                              whileHover={{ scale: 1.05 }}
                              className="bg-gradient-to-r from-mining-blue/10 to-mining-blue/20 text-mining-blue px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm"
                            >
                              {specialty}
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Infrastructure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-mining-gray/5 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-mining-blue/10"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-mining-gray to-mining-gray/90 bg-clip-text text-transparent mb-8 text-center">
            Our Infrastructure: Powering Your Operations
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "IR",
                title: "IMDEX Tools Repair Center",
                description: "Equipped with advanced technology and expert technicians, we provide fast, high-quality repairs to minimize downtime.",
                color: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: "DF",
                title: "Drilling Fluids Storage Facility",
                description: "Our state-of-the-art facility ensures optimal storage and quick access to essential drilling fluids, keeping your operations running smoothly.",
                color: "from-purple-500/20 to-pink-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="flex items-start space-x-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <span className="text-mining-blue font-bold">{item.icon}</span>
                </motion.div>
                <div>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + 0.2 * index }}
                    className="text-xl font-bold bg-gradient-to-r from-mining-gray to-mining-gray/90 bg-clip-text text-transparent mb-2"
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + 0.2 * index }}
                    className="text-mining-gray/70"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
