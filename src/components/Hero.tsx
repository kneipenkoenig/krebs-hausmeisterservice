"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Clock } from "lucide-react";

const highlights = [
  { icon: MapPin, text: "Coesfeld & Umgebung" },
  { icon: Shield, text: "Zuverlässig & professionell" },
  { icon: Clock, text: "Schnelle Terminvergabe" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="section-container section-padding relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Ihr Hausmeisterservice in Coesfeld
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Wir krebsen
            <br />
            <span className="text-accent-300">nicht rum!</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed"
          >
            Krebs Hausmeisterservice ist Ihr zuverlässiger Ansprechpartner für
            Hauspflege in Coesfeld. Alle Hausmeisterdienste und Gartenarbeiten –
            schnell, sauber und professionell.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors duration-200 shadow-lg shadow-accent-500/25"
            >
              Kostenlos anfragen
              <ArrowRight size={18} />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors duration-200 border border-white/10"
            >
              Unsere Leistungen
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 flex flex-wrap gap-6"
          >
            {highlights.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-white/60 text-sm"
              >
                <item.icon size={16} className="text-accent-300" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
