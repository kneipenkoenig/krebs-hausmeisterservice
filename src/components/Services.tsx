"use client";

import { motion } from "framer-motion";
import {
  Home,
  TreePine,
  Scissors,
  Fence,
  Warehouse,
  Footprints,
  Droplets,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Home,
    title: "Haushaltsnahe Dienstleistungen",
    description:
      "Kleinreparaturen und Hauspflege aus einer Hand.",
    image: "/images/haushaltsnahe-dienstleistungen.jpg",
  },
  {
    icon: TreePine,
    title: "Garten-, Rasen- & Teichpflege",
    description:
      "Kompetente Pflege f\u00fcr Ihre Gr\u00fcnfl\u00e4chen und Teiche.",
    image: "/images/garten-rasen-teichpflege.jpg",
  },
  {
    icon: Scissors,
    title: "Hecken-, Baum- & Strauchpflege",
    description:
      "Fachgerechter Schnitt f\u00fcr gesundes Wachstum.",
    image: "/images/hecken-baum-strauchpflege.jpg",
  },
  {
    icon: Fence,
    title: "Zaunaufbau",
    description:
      "Professioneller Aufbau von Zaunanlagen.",
    image: "/images/zaunaufbau.jpg",
  },
  {
    icon: Warehouse,
    title: "Gartenhausaufbau",
    description:
      "Schneller Aufbau Ihres Gartenhauses.",
    image: "/images/gartenhausaufbau.jpg",
  },
  {
    icon: Footprints,
    title: "Gehweg- & Hoffl\u00e4chens\u00e4uberung",
    description:
      "Fegen, M\u00fcllentfernung und Unkrautbek\u00e4mpfung.",
    image: "/images/gehweg-hofflaechensaeuberung.jpg",
  },
  {
    icon: Droplets,
    title: "Versiegelung im Sanit\u00e4rbereich",
    description:
      "Fachgerechte Versiegelung von B\u00e4dern und Fliesen.",
    image: "/images/versiegelung-sanitaer.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section id="leistungen" className="py-16 lg:py-20 bg-navy-100/50">
      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          <span className="text-accent-600 text-xs font-semibold uppercase tracking-widest">
            Leistungen
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-500">
            Alles rund um Haus & Garten
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-navy-50 rounded-xl overflow-hidden border border-navy-100 hover:border-accent-500/30 hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-700/40 to-transparent" />
                <div className="absolute bottom-2 left-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center">
                  <service.icon size={16} className="text-accent-600" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-navy-500 leading-snug">
                  {service.title}
                </h3>
                <p className="mt-1 text-navy-300 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
