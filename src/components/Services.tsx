"use client";

import { motion } from "framer-motion";
import {
  Home,
  TreePine,
  Scissors,
  Fence,
} from "lucide-react";

const quickServices = [
  {
    icon: Home,
    title: "Hauspflege",
    description: "Kleinreparaturen und haushaltsnahe Dienstleistungen aus einer Hand.",
  },
  {
    icon: TreePine,
    title: "Gartenpflege",
    description: "Rasen, Beete, Teiche \u2013 kompetente Pflege f\u00fcr Ihre Gr\u00fcnfl\u00e4chen.",
  },
  {
    icon: Scissors,
    title: "Heckenschnitt",
    description: "Fachgerechter Schnitt f\u00fcr Hecken, B\u00e4ume und Str\u00e4ucher.",
  },
  {
    icon: Fence,
    title: "Montage",
    description: "Z\u00e4une, Gartenh\u00e4user und mehr \u2013 professionell aufgebaut.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-black text-dark-500 text-center"
        >
          Unsere Leistungen
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {quickServices.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-brand-100 rounded-full flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-300">
                <s.icon size={28} className="text-brand-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-dark-500">{s.title}</h3>
              <p className="mt-2 text-sm text-dark-200 leading-relaxed">
                {s.description}
              </p>
              <a href="#leistungen" className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 transition-colors">
                Mehr &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
