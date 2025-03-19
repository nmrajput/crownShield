"\"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <ul className="space-y-4">
        <li className="flex items-center">
          <Phone className="w-5 h-5 text-gold-500 mr-3" />
          <a href="tel:+919876543210" className="text-white/70 hover:text-gold-500 transition-colors duration-300">
            +91 98765 43210
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 text-gold-500 mr-3" />
          <a
            href="mailto:info@crownshieldagency.com"
            className="text-white/70 hover:text-gold-500 transition-colors duration-300"
          >
            info@crownshieldagency.com
          </a>
        </li>
        <li className="flex items-start">
          <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-1" />
          <span className="text-white/70">
            Crown Shield Agency Pvt. Ltd., 123 Taratala Road, Kolkata, West Bengal 700088
          </span>
        </li>
      </ul>
    </motion.div>
  )
}

