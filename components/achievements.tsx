import { Card, CardContent } from "@/components/ui/card"
import { Award, TrendingUp, Users, Factory, Globe } from "lucide-react"

export default function Achievements() {
  const milestones = [
    {
      year: "2015",
      title: "Establishing First Impressions",
      description:
        "Addaan International Trading Company (AITC) was founded, embarking on a mission to revolutionize the mining sector with innovative solutions.",
      icon: Factory,
      color: "bg-mining-blue",
    },
    {
      year: "2016",
      title: "Market Analysis and Vision",
      description:
        "Initiated market research to identify gaps in the mining industry, aligning efforts with Saudi Vision 2030 to drive growth and sustainability.",
      icon: TrendingUp,
      color: "bg-mining-blue/80",
    },
    {
      year: "2017",
      title: "Strategic Partnerships",
      description:
        "Secured partnerships with leading drilling brands and charted a clear roadmap to become a comprehensive provider of mining technology solutions.",
      icon: Users,
      color: "bg-mining-blue/60",
    },
    {
      year: "2018",
      title: "Smart Solutions",
      description:
        "Formed a strategic alliance with IMDEX, delivering cutting-edge logging and data solutions for the mining and exploration industries.",
      icon: Globe,
      color: "bg-mining-blue/70",
    },
    {
      year: "2019",
      title: "Resilience During COVID-19",
      description:
        "Successfully navigated the challenges of the pandemic, maintaining robust business operations and delivering exceptional client support.",
      icon: Award,
      color: "bg-mining-blue/90",
    },
    {
      year: "2020",
      title: "Saudi-Made Innovations",
      description:
        "Pioneered the first Saudi-made core boxes, reducing reliance on imports and championing local manufacturing in line with Vision 2030.",
      icon: Factory,
      color: "bg-mining-blue",
    },
    {
      year: "2021",
      title: "Rapid Expansion",
      description:
        "Expanded significantly, deploying over 18 DESCO rigs across Saudi Arabia, reinforcing AITC's position as a market leader.",
      icon: TrendingUp,
      color: "bg-mining-blue/80",
    },
    {
      year: "2022",
      title: "Core Tray Milestone",
      description:
        "Achieved sales of more than 200,000 core trays nationwide, while focusing on product enhancements and raw material development.",
      icon: Award,
      color: "bg-mining-blue/70",
    },
    {
      year: "2023",
      title: "Record-Breaking Year",
      description:
        "Celebrated the company's most successful year, setting new records in growth, client satisfaction, and industry impact.",
      icon: TrendingUp,
      color: "bg-mining-blue/90",
    },
    {
      year: "2024",
      title: "The Bronze Year",
      description:
        "Surpassed 250,000 core boxes sold. Established Saudi Arabia's first IMDEX repair centre, enhancing service efficiency and strengthening client relationships.",
      icon: Award,
      color: "bg-mining-blue",
    },
    {
      year: "2025",
      title: "The Silver Year",
      description:
        "Continuing a legacy of innovation and excellence with anticipated achievements in technology and market expansion.",
      icon: Globe,
      color: "bg-mining-blue/80",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-mining-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-mining-blue mr-4" />
            <span className="text-mining-blue font-semibold uppercase tracking-wide">Our Journey</span>
            <div className="w-12 h-1 bg-mining-blue ml-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-mining-gray mb-6">AITC Milestone Timeline</h2>

          <p className="text-lg text-mining-gray/70 max-w-3xl mx-auto">
            A decade of innovation, growth, and excellence in the mining industry, supporting Saudi Vision 2030 and
            driving technological advancement.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-mining-blue/20 hidden md:block" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-mining-blue rounded-full border-4 border-mining-white shadow-lg z-10" />

                {/* Content Card */}
                <Card className="w-full md:ml-16 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${milestone.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <milestone.icon className="h-6 w-6 text-mining-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl font-bold text-mining-blue">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-mining-gray">{milestone.title}</h3>
                        </div>
                        <p className="text-mining-gray/70 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Driving Force Section */}
        <div className="mt-16 bg-gradient-to-r from-mining-gray to-mining-gray/80 rounded-2xl p-8 text-center text-mining-white">
          <h3 className="text-3xl font-bold mb-4 text-mining-blue">Our Driving Force</h3>
          <p className="text-lg mb-4">
            AITC's journey is powered by the dedication of its talented team and the visionary support of its
            management, fostering a culture of relentless progress and excellence.
          </p>
          <p className="text-mining-blue/80">
            This timeline highlights AITC's unwavering commitment to innovation, client satisfaction, and contributions
            to Saudi Vision 2030.
          </p>
        </div>
      </div>
    </section>
  )
}
