"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

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
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "#about" },
    { name: "PRODUCTS", href: "#products" },
    { name: "CONTACT", href: "/contact" },
    { name: "ACHIEVEMENTS", href: "#achievements" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-gradient-to-r from-mining-gray/95 via-mining-gray/90 to-mining-gray/95 backdrop-blur-md border-b border-mining-blue/10 shadow-lg shadow-mining-blue/5"
          : "bg-gradient-to-r from-mining-gray/20 via-mining-gray/30 to-mining-gray/20 backdrop-blur-sm"
        }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mining-blue/10 via-transparent to-transparent opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-24">
          {/* Logo with animation */}
          <Link href={"/"} className="flex items-center transform transition-all duration-300 hover:scale-105">
            <Image
              width={100}
              height={100}
              src="/images/aitc-logo.png"
              alt="AITC - Addaan International Trading Company"
              className="h-16 w-auto md:h-20 lg:h-24 transition-all duration-300 rounded-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-mining-white hover:text-mining-blue transition-all duration-300 relative group px-4 py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-mining-blue/10 rounded-lg scale-0 transition-transform duration-300 ease-out group-hover:scale-100"></span>
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
                className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 rounded-md"
              >
                <Linkedin className="h-5 w-5 text-mining-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 rounded-md"
              >
                <Twitter className="h-5 w-5 text-mining-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 rounded-md"
              >
                <Instagram className="h-5 w-5 text-mining-white" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-mining-white ">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-mining-gray/95 backdrop-blur-md text-mining-white">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="mb-4 ">
                  <Image
                    width={100}
                    height={100}
                    src="/images/aitc-logo.png"
                    alt="AITC - Addaan International Trading Company"
                    className="h-16 w-auto rounded-md"
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
                    className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 rounded-md"
                  >
                    <Linkedin className="h-5 w-5 text-mining-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 rounded-md"
                  >
                    <Twitter className="h-5 w-5 text-mining-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-mining-blue hover:bg-mining-blue/80 flex items-center justify-center transition-all duration-300 rounded-md"
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
