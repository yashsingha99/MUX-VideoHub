"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Moon, Sun, User } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useAuth } from "@/contexts/auth-context"
import { gsap } from "gsap"

export default function AnimatedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current && logoRef.current) {
      gsap.fromTo(headerRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

      gsap.fromTo(
        logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 0.3 },
      )
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="border-b border-amber-900/20 dark:border-amber-100/20 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950 text-amber-900 dark:text-amber-100 sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              ref={logoRef}
              className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
            >
              MUX
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link
                    href="/products/video"
                    className="block px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                  >
                    Mux Video
                  </Link>
                  <Link
                    href="/products/player"
                    className="block px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                  >
                    Mux Player
                  </Link>
                  <Link
                    href="/products/data"
                    className="block px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                  >
                    Mux Data
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Blog
            </Link>
            <Link href="/developers/docs" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Developers
            </Link>
          </nav>

          {/* Auth & Theme Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-amber-100 dark:hover:bg-amber-900/20"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>

            {user ? (
              <div className="relative group">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{user.name}</span>
                </Button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <Link href="/profile" className="block px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20">
                      Profile
                    </Link>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20">
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="hover:bg-amber-100 dark:hover:bg-amber-900/20">
                    LOG IN
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    TALK TO US
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-amber-200 dark:border-amber-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/products/video" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Products
              </Link>
              <Link href="/pricing" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Blog
              </Link>
              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="hover:bg-amber-100 dark:hover:bg-amber-900/20"
                >
                  {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </Button>
                {!user && (
                  <div className="flex space-x-2">
                    <Link href="/login">
                      <Button variant="ghost" size="sm">
                        LOG IN
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="sm" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                        TALK TO US
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
