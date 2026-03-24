"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const values = [
  "Zuverl\u00e4ssigkeit bei jedem Auftrag",
  "Faire, transparente Preise",
  "Schnelle & saubere Arbeit",
  "Pers\u00f6nliche Beratung vor Ort",
  "Flexibel nach Ihren W\u00fcnschen",
  "Langj\u00e4hrige Erfahrung in Coesfeld",
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-20 bg-gray-50">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-brand-500 rounded-none overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <Image
                  src="/images/logo.png"
                  alt="Krebs Hausmeisterservice"
                  width={225}
                  height={105}
                  className="h-20 w-auto"
                />
                <p className="mt-4 text-dark-500 font-bold text-lg text-center">
                  Ihr Partner in Coesfeld
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-dark-500">
              Warum wir?
            </h2>
            <p className="mt-5 text-dark-200 leading-relaxed">
              Krebs Hausmeisterservice ist Ihr zuverl\u00e4ssiger Ansprechpartner
              f\u00fcr Hauspflege in Coesfeld. Ob f\u00fcr Mieter, Unternehmen
              oder Privatpersonen \u2013 wir bieten individuelle L\u00f6sungen
              f\u00fcr jeden Bedarf.
            </p>

            <div className="mt-8 space-y-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-brand-500 shrink-0"
                  />
                  <span className="text-sm text-dark-300 font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-block mt-10 bg-brand-500 hover:bg-brand-600 text-dark-500 hover:text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
