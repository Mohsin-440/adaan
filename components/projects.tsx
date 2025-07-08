import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Copper Mine Expansion",
      location: "Nevada, USA",
      description:
        "Large-scale copper mining operation with sustainable extraction methods and environmental protection measures.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Copper Mining",
    },
    {
      title: "Gold Processing Plant",
      location: "Western Australia",
      description:
        "State-of-the-art gold processing facility with advanced recovery technology and minimal environmental impact.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Gold Mining",
    },
    {
      title: "Iron Ore Operations",
      location: "Brazil",
      description:
        "Comprehensive iron ore mining project including extraction, processing, and transportation infrastructure.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Iron Ore",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-amber-500 mr-4" />
            <span className="text-amber-500 font-semibold uppercase tracking-wide">Our Projects</span>
            <div className="w-12 h-1 bg-amber-500 ml-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Featured Mining Projects</h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful mining projects that showcase our expertise, innovation, and commitment
            to sustainable mining practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>

                <p className="text-amber-500 font-semibold mb-3">{project.location}</p>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <Button variant="ghost" className="text-amber-500 hover:text-amber-600 p-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
