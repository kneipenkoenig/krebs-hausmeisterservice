"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-navy-700/85" />

      <div className="section-container section-padding relative z-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-accent-500/20 text-accent-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-md">
              Hausmeisterservice Coesfeld
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]"
          >
            Wir krebsen{" "}
            <span className="text-accent-400">nicht rum!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-white/60 max-w-lg leading-relaxed"
          >
            Ihr zuverl\u00e4ssiger Ansprechpartner f\u00fcr Hausmeisterdienste
            und Gartenarbeiten in Coesfeld &ndash; schnell, sauber, professionell.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-accent-500/20"
            >
              Kostenlos anfragen
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+4917621305541"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors border border-white/10"
            >
              <Phone size={15} />
              Jetzt anrufen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
