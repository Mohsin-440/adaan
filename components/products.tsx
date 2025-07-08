"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Package, Wrench, Cpu, Drill, Box, Globe, Settings } from "lucide-react"
import { useState } from "react"

export default function Products() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const productCategories = [
    {
      id: "imdex",
      title: "IMDEX",
      icon: Globe,
      description: "Innovative Mining Technology Company",
      banner: "Empowering Mining with Real-Time Data and Advanced Drilling Technologies",
      fullDescription: "IMDEX is a global mining technology company headquartered in Perth. With a focus on drilling optimization, rock knowledge, and digital transformation, IMDEX provides advanced drilling fluids, state-of-the-art downhole instrumentation, and robust data management software. These technologies enable clients to safely and accurately find, define, and mine orebodies with precision and speed, improving operational outcomes and ensuring increased accuracy, productivity, and sustainability throughout the mining value chain.",
      subcategories: [
        {
          name: "REFLEX – Downhole Survey & Structural Geology Tools",
          description: "Reflex provides high-performance tools for downhole survey, orientation, and structural geology, enabling accurate borehole mapping and geotechnical insight in real time.",
          products: [
            { name: "ACT III", description: "Advanced downhole survey tool for precise borehole mapping" },
            { name: "ACT X", description: "Next-generation orientation and structural geology tool" },
            { name: "EZ-Trac", description: "Easy-to-use tracking system for borehole navigation" },
            { name: "Sprint IQ", description: "Intelligent survey tool for rapid data collection" },
            { name: "LogrX", description: "Comprehensive logging and data management solution" },
          ],
        },
        {
          name: "AMC – Drilling Fluids",
          description: "AMC offers a comprehensive range of drilling fluids and additives designed to improve hole stability, reduce environmental impact, and optimize drilling performance across all ground conditions.",
          products: [
            { name: "AMC CR 650", description: "Advanced drilling fluid for challenging formations" },
            { name: "AMC LIQUIPOL", description: "High-performance lubricant for improved drilling efficiency" },
            { name: "AMC BOS FIX", description: "Borehole stabilization solution for complex geology" },
            { name: "AMC CORE WELL", description: "Core preservation fluid for optimal sample recovery" },
            { name: "AMC FLOCK DD", description: "Flocculant for drilling waste management" },
            { name: "AMC PLUG", description: "Borehole plugging solution for well control" },
            { name: "AMC WATER CONDITIONER", description: "Water treatment for optimal drilling performance" },
          ],
        },
        {
          name: "DEVICO – Borehole Survey & Rig Alignment Tools",
          description: "Devico specializes in precision borehole surveying and rig alignment solutions, helping drillers enhance accuracy, reduce deviation, and improve operational control from the surface.",
          products: [
            { name: "Devi Aligner", description: "Precision rig alignment system for accurate drilling" },
            { name: "Devi Gyro", description: "Advanced gyroscopic survey tool for deep boreholes" },
            { name: "Devi Health", description: "Real-time monitoring system for equipment health" },
          ],
        },
      ],
    },
    {
      id: "desco",
      title: "DESCO",
      icon: Drill,
      description: "Precision Engineered Drill Rigs",
      banner: "Precision Engineered Drill Rigs Built to Perform in the Toughest Environments",
      fullDescription: "Desco Drilling Rigs provide reliable and advanced drilling equipment for demanding mining operations.",
      subcategories: [
        {
          name: "Drilling Rigs",
          description: "High-performance drilling rigs designed for the most challenging mining environments.",
          products: [
            { name: "Surface Drilling Rigs", description: "Robust surface drilling solutions for open-pit operations" },
            { name: "Underground Drilling Equipment", description: "Specialized equipment for underground mining applications" },
            { name: "Rig Accessories", description: "Comprehensive range of accessories and spare parts" },
          ],
        },
      ],
    },
    {
      id: "cr-epiroc",
      title: "CR POWERED BY EPIROC",
      icon: Wrench,
      description: "Next-Generation Mining Productivity",
      banner: "Delivering next-generation mining productivity with advanced lips, GET, dragline buckets, and digital solutions",
      fullDescription: "Waiting to get content from our suppliers.",
      subcategories: [
        {
          name: "Digital Solutions",
          description: "Advanced digital solutions for enhanced mining operations.",
          products: [
            { name: "Lips & GET Systems", description: "High-performance ground engaging tools" },
            { name: "Cast Lips", description: "Durable cast lip solutions for extreme conditions" },
            { name: "Titan Software", description: "Advanced software for operational optimization" },
          ],
        },
      ],
    },
    {
      id: "drilling-tools",
      title: "DRILLING TOOLS",
      icon: Package,
      description: "Comprehensive Drilling Solutions",
      banner: "Complete range of drilling tools for all mining applications",
      fullDescription: "Professional drilling tools and accessories for all mining operations.",
      subcategories: [
        {
          name: "Diamond Tools",
          description: "High-quality diamond drilling tools for precision operations.",
          products: [
            { name: "Diamond Bits", description: "Premium diamond bits for core drilling" },
            { name: "Diamond Reamers", description: "Precision reaming tools for hole enlargement" },
            { name: "Diamond Stabilizers", description: "Stabilization tools for straight hole drilling" },
          ],
        },
        {
          name: "RC Tools",
          description: "Reverse circulation tools for efficient sample collection.",
          products: [
            { name: "RC Bits", description: "Specialized bits for reverse circulation drilling" },
            { name: "RC Hammers", description: "High-performance hammers for RC operations" },
            { name: "RC Rods", description: "Durable rods for reverse circulation systems" },
          ],
        },
      ],
    },
    {
      id: "aitc-core-trays",
      title: "AITC CORE TRAYS",
      icon: Box,
      description: "Durable, Saudi-Made Solutions",
      banner: "Durable, Saudi-Made Solutions Engineered for Precision and Reliability",
      fullDescription: "Locally manufactured HQ, PQ, and NQ core boxes - Saudi Made excellence supporting Vision 2030.",
      subcategories: [
        {
          name: "Core Solutions",
          description: "Complete core handling solutions for mining operations.",
          products: [
            { name: "Core Boxes", description: "HQ, PQ, and NQ core boxes for all drilling applications" },
            { name: "Core Covers", description: "Protective covers for core sample preservation" },
            { name: "Run Markers", description: "Precision markers for core run identification" },
          ],
        },
      ],
    },
  ]

  return (
    <section id="products" className="py-20 bg-mining-gray/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-mining-blue mr-4" />
            <span className="text-mining-blue font-semibold uppercase tracking-wide">Products & Partners Overview</span>
            <div className="w-12 h-1 bg-mining-blue ml-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-mining-gray mb-6">Comprehensive Mining Solutions</h2>
        </div>

        <div className="space-y-8">
          {productCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 ease-in-out">
              <CardContent className="p-0">
                <div
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-mining-gray/5 transition-all duration-300 ease-in-out"
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-mining-blue/10 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 ease-in-out group-hover:bg-mining-blue/20">
                      <category.icon className="h-6 w-6 text-mining-blue transition-all duration-300 ease-in-out" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mining-gray transition-all duration-300 ease-in-out">{category.title}</h3>
                      <p className="text-mining-gray/70 transition-all duration-300 ease-in-out">{category.description}</p>
                      {category.banner && (
                        <p className="text-mining-blue/80 text-sm mt-1 italic transition-all duration-300 ease-in-out">{category.banner}</p>
                      )}
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-6 w-6 text-mining-blue transition-all duration-500 ease-in-out transform ${expandedCategory === category.id ? "rotate-90" : "rotate-0"
                      }`}
                  />
                </div>

                {/* Smooth expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedCategory === category.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="border-t border-mining-gray/20 bg-mining-white">
                    {/* Full Description with fade-in animation */}
                    <div
                      className={`p-6 border-b border-mining-gray/10 transition-all duration-500 ease-in-out ${expandedCategory === category.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                      style={{ transitionDelay: expandedCategory === category.id ? "100ms" : "0ms" }}
                    >
                      <p className="text-mining-gray/80 leading-relaxed">{category.fullDescription}</p>
                    </div>

                    {/* Subcategories with staggered animation */}
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div
                        key={subIndex}
                        className={`p-6 border-b border-mining-gray/10 last:border-b-0 transition-all duration-500 ease-in-out ${expandedCategory === category.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                          }`}
                        style={{ transitionDelay: expandedCategory === category.id ? `${200 + subIndex * 100}ms` : "0ms" }}
                      >
                        <h4 className="text-lg font-semibold text-mining-gray mb-2 transition-all duration-300 ease-in-out">{subcategory.name}</h4>
                        <p className="text-mining-gray/70 mb-4 text-sm transition-all duration-300 ease-in-out">{subcategory.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {subcategory.products.map((product, productIndex) => (
                            <div
                              key={productIndex}
                              className={`bg-mining-gray/5 p-4 rounded-lg hover:bg-mining-blue/10 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${expandedCategory === category.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                              style={{ transitionDelay: expandedCategory === category.id ? `${300 + subIndex * 100 + productIndex * 50}ms` : "0ms" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-3 h-3 bg-mining-blue rounded-full mr-3 transition-all duration-300 ease-in-out group-hover:scale-110"></div>
                                <h5 className="font-semibold text-mining-gray group-hover:text-mining-blue transition-all duration-300 ease-in-out">
                                  {product.name}
                                </h5>
                              </div>
                              <p className="text-mining-gray/70 text-sm transition-all duration-300 ease-in-out">{product.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight AITC Core Trays */}
        <div className="mt-16 bg-gradient-to-r from-mining-blue to-mining-blue/80 rounded-2xl p-8 text-center text-mining-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 transition-all duration-300 ease-in-out">AITC CORE TRAYS - Saudi Made Excellence</h3>
          <p className="text-lg mb-6 transition-all duration-300 ease-in-out">
            Locally manufactured in our state-of-the-art Rabigh facility • HQ, PQ, and NQ core boxes • Supporting Vision
            2030
          </p>
          <div className="flex justify-center space-x-4">
            {[
              { number: "250,000+", label: "Core Boxes Sold" },
              { number: "100%", label: "Saudi Made" },
              { number: "2030", label: "Vision Aligned" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-mining-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-mining-white/20 hover:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="font-bold text-xl transition-all duration-300 ease-in-out">{stat.number}</div>
                <div className="text-sm transition-all duration-300 ease-in-out">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
