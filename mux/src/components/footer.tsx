"use client"

import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-900 dark:from-gray-900 dark:to-amber-950 text-amber-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-200">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-amber-300 hover:text-amber-100 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/press" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/company/investors" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-200">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/video" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Mux Video
                </Link>
              </li>
              <li>
                <Link href="/products/player" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Mux Player
                </Link>
              </li>
              <li>
                <Link href="/products/data" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Mux Data
                </Link>
              </li>
              <li>
                <Link href="/products/live" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Live Streaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-200">Developers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/developers/docs" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/developers/guides" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/developers/api" className="text-amber-300 hover:text-amber-100 transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/developers/sdks" className="text-amber-300 hover:text-amber-100 transition-colors">
                  SDKs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-200">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/help" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support/status" className="text-amber-300 hover:text-amber-100 transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support/community" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-200">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/security" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/legal/compliance" className="text-amber-300 hover:text-amber-100 transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-amber-300">© 2024 Mux, Inc. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
