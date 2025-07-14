"use client"
import { Award, TrendingUp, Users, Factory, Globe } from "lucide-react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { useRef } from "react"

export default function Achievements() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const milestones = [
    {
      year: "2015",
      title: "Establishing First Impressions",
      description:
        "Addaan International Trading Company (AITC) was founded, embarking on a mission to revolutionize the mining sector with innovative solutions.",
      icon: Factory,
      color: "#219AD3",
      align: "left",
    },
    {
      year: "2016",
      title: "Market Analysis and Vision",
      description:
        "Initiated market research to identify gaps in the mining industry, aligning efforts with Saudi Vision 2030 to drive growth and sustainability.",
      icon: TrendingUp,
      color: "#515250",
      align: "right",
    },
    {
      year: "2017",
      title: "Strategic Partnerships",
      description:
        "Secured partnerships with leading drilling brands and charted a clear roadmap to become a comprehensive provider of mining technology solutions.",
      icon: Users,
      color: "#219AD3",
      align: "left",
    },
    {
      year: "2018",
      title: "Smart Solutions",
      description:
        "Formed a strategic alliance with IMDEX, delivering cutting-edge logging and data solutions for the mining and exploration industries.",
      icon: Globe,
      color: "#515250",
      align: "right",
    },
    {
      year: "2019",
      title: "Resilience During COVID-19",
      description:
        "Successfully navigated the challenges of the pandemic, maintaining robust business operations and delivering exceptional client support.",
      icon: Award,
      color: "#219AD3",
      align: "left",
    },
    {
      year: "2020",
      title: "Saudi-Made Innovations",
      description:
        "Pioneered the first Saudi-made core boxes, reducing reliance on imports and championing local manufacturing in line with Vision 2030.",
      icon: Factory,
      color: "#515250",
      align: "right",
    },
    {
      year: "2021",
      title: "Rapid Expansion",
      description:
        "Expanded significantly, deploying over 18 DESCO rigs across Saudi Arabia, reinforcing AITC's position as a market leader.",
      icon: TrendingUp,
      color: "#219AD3",
      align: "left",
    },
    {
      year: "2022",
      title: "Core Tray Milestone",
      description:
        "Achieved sales of more than 200,000 core trays nationwide, while focusing on product enhancements and raw material development.",
      icon: Award,
      color: "#515250",
      align: "right",
    },
    {
      year: "2023",
      title: "Record-Breaking Year",
      description:
        "Celebrated the company's most successful year, setting new records in growth, client satisfaction, and industry impact.",
      icon: TrendingUp,
      color: "#219AD3",
      align: "left",
    },
    {
      year: "2024",
      title: "The Bronze Year",
      description:
        "Surpassed 250,000 core boxes sold. Established Saudi Arabia's first IMDEX repair centre, enhancing service efficiency and strengthening client relationships.",
      icon: Award,
      color: "#515250",
      align: "right",
    },
    {
      year: "2025",
      title: "The Silver Year",
      description:
        "Continuing a legacy of innovation and excellence with anticipated achievements in technology and market expansion.",
      icon: Globe,
      color: "#219AD3",
      align: "left",
    },
  ]

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-white to-mining-gray/5 relative overflow-hidden">
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
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-mining-blue to-transparent mr-6 transform transition-all duration-300 group-hover:scale-x-110" />
            <span className="text-mining-blue font-semibold uppercase tracking-wider text-sm bg-gradient-to-r from-mining-blue to-mining-blue/80 text-transparent bg-clip-text">Our Journey</span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-mining-blue to-transparent ml-6 transform transition-all duration-300 group-hover:scale-x-110" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mining-gray to-mining-gray/90 bg-clip-text text-transparent mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-mining-gray/70">
            A decade of innovation and excellence in the mining industry
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2">
            {/* Main line */}
            <motion.div
              className="relative w-1 h-full origin-top"
              style={{ scaleY }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mining-blue/50 to-transparent"></div>
              <div className="absolute inset-0 bg-mining-blue/20 blur-sm"></div>
              <div className="absolute inset-0 bg-mining-blue/30 animate-pulse blur-md"></div>
            </motion.div>
          </div>

          <div className="relative flex flex-col space-y-12 md:space-y-32">
            {milestones.map((milestone, index) => {
              const cardRef = useRef(null)
              const isInView = useInView(cardRef, { once: true, margin: "-100px" })
              const isLeftCard = index % 2 === 0

              return (
                <div key={index} className="relative">
                  <div className={`flex justify-start md:justify-between items-center w-full ${isLeftCard ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                    <motion.div
                      ref={cardRef}
                      initial={{
                        opacity: 0,
                        x: 50
                      }}
                      animate={isInView ? {
                        opacity: 1,
                        x: 0
                      } : {}}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2
                      }}
                      className="w-[85%] md:w-[45%] ml-8 md:ml-0 relative group"
                    >
                      {/* Glow effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -inset-1 bg-gradient-to-r from-mining-blue/20 to-transparent rounded-xl blur"
                      />

                      <motion.div
                        whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative bg-gradient-to-br from-white to-mining-gray/5 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-sm border border-mining-blue/10"
                      >
                        {/* Connection line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className={`absolute top-1/2 h-0.5 transform -translate-y-1/2
                            ${isLeftCard
                              ? 'right-0 w-8 md:w-16 bg-gradient-to-r from-transparent to-mining-blue'
                              : 'left-0 w-8 md:w-16 bg-gradient-to-l from-transparent to-mining-blue'
                            }`}
                        />

                        {/* Content */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="flex items-center justify-between mb-4"
                        >
                          <div className="flex items-center space-x-3">
                            <milestone.icon className="h-6 w-6 text-mining-blue" />
                            <h3 className="text-2xl font-semibold bg-gradient-to-r from-mining-gray to-mining-gray/90 bg-clip-text text-transparent">
                              {milestone.title}
                            </h3>
                          </div>
                          <span className="text-2xl font-bold text-mining-blue">
                            {milestone.year}
                          </span>
                        </motion.div>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-mining-gray/70 leading-relaxed"
                        >
                          {milestone.description}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
