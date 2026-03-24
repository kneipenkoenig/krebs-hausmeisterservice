"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const tags = [
  "Gartenpflege",
  "Heckenschnitt",
  "Zaunaufbau",
  "Sanit\u00e4r",
];

export default function Hero() {
  return (
    <section id="hero" className="bg-brand-500 relative overflow-hidden">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-20 lg:py-0">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Krebs Hausmeisterservice"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-500 leading-[1.1]">
              Zuverl\u00e4ssig,{" "}
              <br className="hidden sm:block" />
              professionell &{" "}
              <br className="hidden sm:block" />
              vor Ort.
            </h1>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {tags.map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-dark-500 rounded-full flex items-center justify-center">
                    <Check size={12} className="text-brand-500" />
                  </div>
                  <span className="text-sm font-medium text-dark-500">{tag}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-block mt-10 bg-dark-500 hover:bg-dark-600 text-white px-8 py-4 rounded-none text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
