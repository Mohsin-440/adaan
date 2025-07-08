import Link from "next/link"
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-mining-gray text-mining-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/images/aitc-logo.png"
              alt="AITC - Addaan International Trading Company"
              className="h-20 w-auto mb-4"
            />
            <p className="text-mining-white/80 mb-6 leading-relaxed">
              Leading the mining industry with innovative solutions, sustainable practices, and Saudi-made excellence
              since 2015.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-mining-blue hover:text-mining-blue/80 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-mining-blue hover:text-mining-blue/80 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-mining-blue hover:text-mining-blue/80 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  AITC Core Trays
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  IMDEX Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  DESCO Drilling Rigs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  CR Powered by Epiroc
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mining-white/80 hover:text-mining-blue transition-colors">
                  Drilling Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-mining-blue mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-mining-white/80 text-sm font-semibold">Head Office:</p>
                  <p className="text-mining-white/80 text-sm">Al Massa Center, Al Marwa District</p>
                  <p className="text-mining-white/80 text-sm">Jeddah 23545, KSA</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-mining-blue mr-3 flex-shrink-0" />
                <div>
                  <p className="text-mining-white/80 text-sm">+966 12 661 0243</p>
                  <p className="text-mining-white/80 text-sm">+966 56 769 1426</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-mining-blue mr-3 flex-shrink-0" />
                <span className="text-mining-white/80 text-sm">zaman@addaaninternational.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-mining-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-mining-white/60 text-sm">
              © 2024 Addaan International Trading Company (AITC). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-mining-white/60 hover:text-mining-blue text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-mining-white/60 hover:text-mining-blue text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-mining-white/60 hover:text-mining-blue text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
