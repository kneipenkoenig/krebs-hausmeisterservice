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
      "Ansprechpartner vor Ort für Mieter, Unternehmen und Privatpersonen. Kleinreparaturen und Hauspflege aus einer Hand.",
    image: "/images/haushaltsnahe-dienstleistungen.jpg",
  },
  {
    icon: TreePine,
    title: "Garten-, Rasen- & Teichpflege",
    description:
      "Ob Vorgarten, Rasenfläche, Blumenbeete oder Ihr geliebter Teich – wir kümmern uns kompetent und fachmännisch um Ihre Grünflächen.",
    image: "/images/garten-rasen-teichpflege.jpg",
  },
  {
    icon: Scissors,
    title: "Hecken-, Baum- & Strauchpflege",
    description:
      "Regelmäßige Pflege für gesundes Wachstum. Wir schneiden und gestalten Ihre Hecken, Bäume und Sträucher fachgerecht.",
    image: "/images/hecken-baum-strauchpflege.jpg",
  },
  {
    icon: Fence,
    title: "Zaunaufbau",
    description:
      "Professionelle Gestaltung und Aufbau von Zaunanlagen für Ihr Grundstück und Ihren Garten.",
    image: "/images/zaunaufbau.jpg",
  },
  {
    icon: Warehouse,
    title: "Gartenhausaufbau",
    description:
      "Schneller, zuverlässiger und preiswerter Aufbau Ihres Gartenhauses – alles aus einer Hand.",
    image: "/images/gartenhausaufbau.jpg",
  },
  {
    icon: Footprints,
    title: "Gehweg- & Hofflächensäuberung",
    description:
      "Fegen, Müllentfernung und Unkrautbekämpfung. Nach Wunsch im regelmäßigen Turnus.",
    image: "/images/gehweg-hofflaechensaeuberung.jpg",
  },
  {
    icon: Droplets,
    title: "Versiegelung im Sanitärbereich",
    description:
      "Fachgerechte Versiegelung von Bädern und Fliesen für langanhaltenden Schutz und Sauberkeit.",
    image: "/images/versiegelung-sanitaer.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="leistungen" className="py-24 lg:py-32 bg-slate-50">
      <div className="section-container section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-accent-500 text-sm font-semibold uppercase tracking-wider">
            Unsere Leistungen
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-500">
            Alles rund um Haus & Garten
          </h2>
          <p className="mt-4 text-navy-300 text-lg">
            Von der Gartenpflege bis zur Sanitärversiegelung – wir bieten Ihnen
            ein breites Spektrum an professionellen Dienstleistungen.
          </p>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <service.icon size={20} className="text-accent-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-500">
                  {service.title}
                </h3>
                <p className="mt-2 text-navy-300 text-sm leading-relaxed">
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
