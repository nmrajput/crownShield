"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-gold-500" />,
    title: "Call Us",
    content: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: <Mail className="w-6 h-6 text-gold-500" />,
    title: "Email Us",
    content: "info@crownshieldagency.com",
    link: "mailto:info@crownshieldagency.com",
  },
  {
    icon: <MapPin className="w-6 h-6 text-gold-500" />,
    title: "Visit Us",
    content: "123 Taratala Road, Kolkata",
    link: "https://goo.gl/maps/123",
  },
]

export default function ContactHero() {
  return (
    <section className="relative py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/80">
            Get in touch with Crown Shield Agency for premium manpower solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {contactInfo.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              className="bg-navy-800 rounded-lg p-6 text-center hover:bg-navy-700 transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center p-3 bg-navy-700 rounded-full mb-4 group-hover:bg-navy-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70">{item.content}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

