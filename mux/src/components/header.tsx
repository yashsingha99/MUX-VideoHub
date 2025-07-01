"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:text-gray-300">
            MUX
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/products/video" className="block px-4 py-2 hover:bg-gray-700">
                    Mux Video
                  </Link>
                  <Link href="/products/player" className="block px-4 py-2 hover:bg-gray-700">
                    Mux Player
                  </Link>
                  <Link href="/products/data" className="block px-4 py-2 hover:bg-gray-700">
                    Mux Data
                  </Link>
                  <Link href="/products/live" className="block px-4 py-2 hover:bg-gray-700">
                    Live Streaming
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <span>Developers</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/developers/docs" className="block px-4 py-2 hover:bg-gray-700">
                    Documentation
                  </Link>
                  <Link href="/developers/guides" className="block px-4 py-2 hover:bg-gray-700">
                    Guides
                  </Link>
                  <Link href="/developers/api" className="block px-4 py-2 hover:bg-gray-700">
                    API Reference
                  </Link>
                  <Link href="/developers/sdks" className="block px-4 py-2 hover:bg-gray-700">
                    SDKs
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/solutions/streaming" className="block px-4 py-2 hover:bg-gray-700">
                    Video Streaming
                  </Link>
                  <Link href="/solutions/analytics" className="block px-4 py-2 hover:bg-gray-700">
                    Video Analytics
                  </Link>
                  <Link href="/solutions/education" className="block px-4 py-2 hover:bg-gray-700">
                    Education
                  </Link>
                  <Link href="/solutions/enterprise" className="block px-4 py-2 hover:bg-gray-700">
                    Enterprise
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <Link href="/company" className="hover:text-gray-300">
              Company
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-gray-300">
                LOG IN
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6">TALK TO US</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/products/video" className="hover:text-gray-300">
                Products
              </Link>
              <Link href="/developers/docs" className="hover:text-gray-300">
                Developers
              </Link>
              <Link href="/solutions/streaming" className="hover:text-gray-300">
                Solutions
              </Link>
              <Link href="/pricing" className="hover:text-gray-300">
                Pricing
              </Link>
              <Link href="/blog" className="hover:text-gray-300">
                Blog
              </Link>
              <Link href="/company" className="hover:text-gray-300">
                Company
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/login">
                  <Button variant="ghost" className="text-white w-full">
                    LOG IN
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-green-500 hover:bg-green-600 text-white w-full">TALK TO US</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
