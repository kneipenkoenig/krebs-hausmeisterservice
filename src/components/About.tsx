"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Zuverlässigkeit bei jedem Auftrag",
  "Faire und transparente Preise",
  "Schnelle und saubere Arbeit",
  "Persönliche Beratung vor Ort",
  "Flexibel nach Ihren Wünschen",
  "Langjährige Erfahrung in Coesfeld",
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 lg:py-32 bg-white">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl overflow-hidden relative">
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                  <span className="text-4xl font-extrabold">K</span>
                </div>
                <p className="text-2xl font-bold text-center">
                  Krebs Hausmeisterservice
                </p>
                <p className="mt-2 text-white/60 text-center">
                  Ihr Partner in Coesfeld
                </p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-xl shadow-lg p-5 border border-slate-100">
              <p className="text-3xl font-extrabold text-navy-500">100%</p>
              <p className="text-sm text-navy-300 mt-0.5">Einsatzbereit</p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-accent-500 text-sm font-semibold uppercase tracking-wider">
              Über uns
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-500">
              Ihr zuverlässiger Ansprechpartner vor Ort
            </h2>
            <p className="mt-6 text-navy-300 text-lg leading-relaxed">
              Krebs Hausmeisterservice ist Ihr zuverlässiger Ansprechpartner für
              Hauspflege in Coesfeld. Nach Ihren Wünschen werden alle
              Hausmeisterdienste und Gartenarbeiten durchgeführt – schnell,
              sauber und professionell.
            </p>
            <p className="mt-4 text-navy-300 leading-relaxed">
              Ob für Mieter, Unternehmen oder Privatpersonen – wir bieten
              individuelle Lösungen für jeden Bedarf. Verlassen Sie sich auf
              unsere Kompetenz und Erfahrung.
            </p>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="text-accent-500 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-navy-400 font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-10 bg-navy-500 hover:bg-navy-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors duration-200"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
