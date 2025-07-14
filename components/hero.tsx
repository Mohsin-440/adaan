"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import ParallaxElement from "./parallax-element"
import { useParallax } from "@/hooks/use-parallax"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollY = useParallax()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Video Background */}
      <ParallaxElement speed={0.3} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/adaan_optamized_hero_video.webm" type="video/webm" />
          <source src="/videos/adaan_optamized_hero_video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-mining-gray/50" />
      </ParallaxElement>

      {/* Content with subtle parallax */}
      <ParallaxElement
        speed={0.1}
        className={`relative z-10 text-center text-mining-white px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-7xl font-bold mb-6 leading-tight">
          <span className={`inline-block text-mining-blue transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            ADAAN MINING
          </span>
        </h1>

        <p className={`text-2xl mb-8 text-white font-medium max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Leading Provider of Mining Solutions and Core Trays in Saudi Arabia
        </p>

        <div className={`flex gap-6 justify-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-mining-blue text-mining-blue hover:bg-mining-blue hover:text-mining-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="#products">Our Products</Link>
          </Button>
          <Button
            size="lg"
            className="bg-mining-blue hover:bg-mining-blue/90 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </ParallaxElement>

      {/* Parallax scroll indicator */}
      <ParallaxElement
        speed={-0.3}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <button
          onClick={() => {
            const viewportHeight = window.innerHeight;
            window.scrollTo({
              top: viewportHeight * 0.85, // Scroll to 85% of viewport height
              behavior: "smooth"
            });
          }}
          className="flex flex-col items-center animate-bounce cursor-pointer hover:scale-110 transition-transform duration-1000 group"
        >
          <ChevronDown className="h-8 w-8 text-mining-blue mb-2 group-hover:text-mining-blue/80" />
          <div className="w-6 h-10 border-2 border-mining-blue rounded-full flex justify-center group-hover:border-mining-blue/80">
            <div className="w-1 h-3 bg-mining-blue rounded-full mt-2 animate-pulse group-hover:bg-mining-blue/80" />
          </div>
        </button>
      </ParallaxElement>

    </section>
  )
}
