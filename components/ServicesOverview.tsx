"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Bolt as Tool, Home } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Shield className="w-12 h-12 text-gold-500" />,
    title: "Security Guards",
    description:
      "Professional security personnel trained to protect your property, assets, and people with vigilance and integrity.",
    link: "/services#security",
  },
  {
    icon: <Zap className="w-12 h-12 text-gold-500" />,
    title: "Electricians",
    description:
      "Skilled electrical professionals for installations, repairs, and maintenance with a focus on safety and reliability.",
    link: "/services#electrical",
  },
  {
    icon: <Tool className="w-12 h-12 text-gold-500" />,
    title: "Mechanics",
    description:
      "Expert mechanical technicians providing comprehensive repair and maintenance services for all your equipment needs.",
    link: "/services#mechanical",
  },
  {
    icon: <Home className="w-12 h-12 text-gold-500" />,
    title: "Housekeeping",
    description:
      "Reliable and trustworthy domestic staff including maids, cooks, and caretakers to maintain your home with care Including hospital, hotel and domestic service.",
    link: "/services#domestic",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Crown Shield Agency provides top-tier manpower solutions tailored to meet your specific requirements with
            excellence and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-800 rounded-lg p-6 shadow-lg border border-navy-700 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="text-gold-500 hover:text-gold-400 inline-flex items-center font-medium transition-colors duration-300"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-medium rounded-md transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/services">Explore All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

