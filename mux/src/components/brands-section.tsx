"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function BrandsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const brandsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && brandsRef.current) {
      gsap.fromTo(
        brandsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-amber-900 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-700 dark:text-amber-300 font-medium tracking-wider uppercase text-sm mb-4">
            WE WORK WITH THE WORLD'S TOP BRANDS
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div ref={brandsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-2xl font-bold text-amber-800 dark:text-amber-200 group-hover:scale-110 transition-transform">
              PATREON
            </span>
          </div>
          <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-2xl font-bold text-amber-800 dark:text-amber-200 group-hover:scale-110 transition-transform">
              Substack
            </span>
          </div>
          <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-2xl font-bold text-amber-800 dark:text-amber-200 italic group-hover:scale-110 transition-transform">
              vimeo
            </span>
          </div>
          <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-2xl font-bold text-amber-800 dark:text-amber-200 group-hover:scale-110 transition-transform">
              ▲Vercel
            </span>
          </div>
          <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-2xl font-bold text-amber-800 dark:text-amber-200 italic group-hover:scale-110 transition-transform">
              Paramount
            </span>
          </div>
          <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-2xl font-bold text-amber-800 dark:text-amber-200 group-hover:scale-110 transition-transform">
              HubSpot
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
