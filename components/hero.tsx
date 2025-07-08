"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import ParallaxElement from "./parallax-element"
import { useParallax } from "@/hooks/use-parallax"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
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
          className="w-full h-full object-cover scale-110"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
        >
          <source src="/bannervideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback image if video fails to load */}
        {!videoLoaded && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            }}
          />
        )}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-mining-gray/50" />
      </ParallaxElement>

      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes with different parallax speeds */}
        <ParallaxElement speed={0.2} className="absolute top-20 left-10">
          <div className="w-96 h-96 bg-mining-blue/10 rounded-full blur-3xl"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.4} direction="down" className="absolute top-40 right-20">
          <div className="w-72 h-72 bg-mining-blue/15 rounded-full blur-2xl"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.6} direction="left" className="absolute bottom-20 left-1/4">
          <div className="w-64 h-64 bg-mining-blue/20 rounded-full blur-xl"></div>
        </ParallaxElement>

        {/* Geometric shapes */}
        <ParallaxElement speed={0.8} className="absolute top-1/3 right-1/4">
          <div className="w-32 h-32 border border-mining-blue/30 rotate-45 transform"></div>
        </ParallaxElement>

        <ParallaxElement speed={0.3} direction="right" className="absolute bottom-1/3 left-1/3">
          <div className="w-24 h-24 bg-gradient-to-r from-mining-blue/20 to-transparent rounded-lg rotate-12"></div>
        </ParallaxElement>

        {/* Floating particles with parallax */}
        {[...Array(15)].map((_, i) => (
          <ParallaxElement
            key={i}
            speed={0.1 + i * 0.05}
            direction={i % 2 === 0 ? "up" : "down"}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div
              className="w-2 h-2 bg-mining-blue/30 rounded-full animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          </ParallaxElement>
        ))}
      </div>

      {/* Content with subtle parallax */}
      <ParallaxElement
        speed={0.1}
        className={`relative z-10 text-center text-mining-white px-4 max-w-5xl mx-auto transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span
            className={`inline-block text-mining-blue transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            AITC CORE TRAYS
          </span>
          <br />
          <span
            className={`inline-block text-mining-blue transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            DURABLE, SAUDI-MADE
          </span>
          <br />
          <span
            className={`inline-block text-mining-blue transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            SOLUTIONS
          </span>
        </h1>

        <p
          className={`text-2xl md:text-3xl mb-4 text-mining-blue/80 font-semibold transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          Engineered for Precision and Reliability
        </p>

        <p
          className={`text-xl md:text-2xl mb-12 text-mining-white/80 max-w-3xl mx-auto transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          From exploration through to production, the more reliable your data, the better your output.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-mining-blue text-mining-blue hover:bg-mining-blue hover:text-mining-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="#core-trays">Read More</Link>
          </Button>
          <Button
            size="lg"
            className="bg-mining-blue hover:bg-mining-blue/80 text-mining-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link href="#contact">Become Partner</Link>
          </Button>
        </div>
      </ParallaxElement>

      {/* Parallax scroll indicator */}
      <ParallaxElement
        speed={-0.2}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="flex flex-col items-center animate-bounce">
          <ChevronDown className="h-8 w-8 text-mining-blue mb-2" />
          <div className="w-6 h-10 border-2 border-mining-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-mining-blue rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </ParallaxElement>

      {/* Parallax overlay gradient */}
      <ParallaxElement
        speed={0.15}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-mining-gray/20 to-mining-gray/40 pointer-events-none"
      />

      {/* Video loading indicator (optional) */}
      {!videoLoaded && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-mining-gray/50 text-mining-white px-3 py-1 rounded-full text-sm">Loading video...</div>
        </div>
      )}
    </section>
  )
}
