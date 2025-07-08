"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "PRODUCTS", href: "#products" },
    { name: "CONTACT", href: "#contact" },
    { name: "ACHIEVEMENTS", href: "#achievements" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-mining-gray/95 backdrop-blur-md shadow-2xl" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo with animation */}
          <div className="flex items-center transform transition-all duration-300 hover:scale-105">
            <img
              src="/images/aitc-logo.png"
              alt="AITC - Addaan International Trading Company"
              className="h-16 w-auto md:h-20 lg:h-24 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-mining-white hover:text-mining-blue transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mining-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Language & Social Icons - Square boxes like Golden Compass */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-mining-white">
              <span className="text-mining-blue font-semibold">EN</span>
              <span>/</span>
              <span className="hover:text-mining-blue transition-colors cursor-pointer">AR</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link
                href="#"
                className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Linkedin className="h-5 w-5 text-mining-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Twitter className="h-5 w-5 text-mining-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Instagram className="h-5 w-5 text-mining-white" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-mining-white hover:text-mining-blue">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-mining-gray/95 backdrop-blur-md text-mining-white border-mining-gray">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="mb-4">
                  <img
                    src="/images/aitc-logo.png"
                    alt="AITC - Addaan International Trading Company"
                    className="h-16 w-auto"
                  />
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-mining-blue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-mining-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300"
                  >
                    <Twitter className="h-5 w-5 text-mining-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5 text-mining-white" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
