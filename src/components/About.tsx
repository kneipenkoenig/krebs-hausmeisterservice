"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const values = [
  "Zuverl\u00e4ssig bei jedem Auftrag",
  "Faire, transparente Preise",
  "Schnelle & saubere Arbeit",
  "Pers\u00f6nliche Beratung vor Ort",
  "Flexibel nach Ihren W\u00fcnschen",
  "Erfahrung in Coesfeld",
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-16 lg:py-20 bg-navy-100/50">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-navy-500 to-navy-700 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <Image
                  src="/images/logo.png"
                  alt="Krebs Hausmeisterservice"
                  width={225}
                  height={105}
                  className="h-16 w-auto brightness-0 invert opacity-80"
                />
                <p className="mt-3 text-white/50 text-sm text-center">
                  Ihr Partner in Coesfeld
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-3 bg-accent-500 text-white rounded-lg px-4 py-3 shadow-lg">
              <p className="text-2xl font-extrabold leading-none">100%</p>
              <p className="text-xs mt-0.5 text-white/80">Einsatzbereit</p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-600 text-xs font-semibold uppercase tracking-widest">
              \u00dcber uns
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-500">
              Zuverl\u00e4ssig. Professionell. Vor Ort.
            </h2>
            <p className="mt-4 text-navy-300 text-sm leading-relaxed">
              Krebs Hausmeisterservice ist Ihr Ansprechpartner f\u00fcr
              Hauspflege in Coesfeld. Alle Hausmeisterdienste und
              Gartenarbeiten &ndash; nach Ihren W\u00fcnschen, schnell und
              professionell.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-accent-500 shrink-0"
                  />
                  <span className="text-xs text-navy-400 font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-8 bg-navy-500 hover:bg-navy-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
