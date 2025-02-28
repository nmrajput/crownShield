"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const heroImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.42_3746ea0b.jpg-DQxXNBeFgDrJsrLxQcCnV3OL0w7bzd.jpeg",
    alt: "Professional security guard in uniform",
    title: "Security Guards",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_242e225e.jpg-OPdjVYNMgefSdEu5gXuLUEJX2QgmAb.jpeg",
    alt: "Professional electrician working on electrical panel",
    title: "Electricians",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_eb6e73e6.jpg-Hh18mtQmI8vt5AvFuc4mBynGIUE0Ha.jpeg",
    alt: "Professional mechanic in safety gear",
    title: "Mechanics",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.44_bae11465.jpg-ab5wpYMB1gkD6zXwwBekREF2Th9cL2.jpeg",
    alt: "Professional domestic help staff",
    title: "Domestic Help",
  },
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-navy-950/70 z-10" />
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2012.26.46_3fc88e65.jpg-MjlPwfLJn2I7UdXRi9EsE5SkMyXxJ9.jpeg"
              alt="Crown Shield Agency Logo"
              width={120}
              height={120}
              className="mx-auto mb-6"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
          >
            Your Trusted Partner for <span className="text-gold-500">Quality Manpower Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 mb-8"
          >
            Providing exceptional security guards, electricians, mechanics, and domestic help services across Kolkata
            and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-medium rounded-md transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImage === index ? "bg-gold-500 w-8" : "bg-white/50"
              }`}
              aria-label={`View ${heroImages[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

