"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const allServices = [
  {
    title: "Haushaltsnahe Dienstleistungen",
    description: "Ansprechpartner vor Ort f\u00fcr Mieter, Unternehmen und Privatpersonen. Kleinreparaturen und Hauspflege.",
    image: "/images/haushaltsnahe-dienstleistungen.jpg",
  },
  {
    title: "Garten-, Rasen- & Teichpflege",
    description: "Kompetente und fachm\u00e4nnische Pflege f\u00fcr Ihre Gr\u00fcnfl\u00e4chen, Beete und Teiche.",
    image: "/images/garten-rasen-teichpflege.jpg",
  },
  {
    title: "Hecken-, Baum- & Strauchpflege",
    description: "Regelm\u00e4\u00dfiger Schnitt und Gestaltung f\u00fcr gesundes Wachstum Ihrer Pflanzen.",
    image: "/images/hecken-baum-strauchpflege.jpg",
  },
  {
    title: "Zaunaufbau",
    description: "Professionelle Gestaltung und Aufbau von Zaunanlagen f\u00fcr Ihr Grundst\u00fcck.",
    image: "/images/zaunaufbau.jpg",
  },
  {
    title: "Gartenhausaufbau",
    description: "Schneller, zuverl\u00e4ssiger und preiswerter Aufbau Ihres Gartenhauses.",
    image: "/images/gartenhausaufbau.jpg",
  },
  {
    title: "Gehweg- & Hoffl\u00e4chens\u00e4uberung",
    description: "Fegen, M\u00fcllentfernung und Unkrautbek\u00e4mpfung im regelm\u00e4\u00dfigen Turnus.",
    image: "/images/gehweg-hofflaechensaeuberung.jpg",
  },
  {
    title: "Versiegelung im Sanit\u00e4rbereich",
    description: "Fachgerechte Versiegelung von B\u00e4dern und Fliesen f\u00fcr langanhaltenden Schutz.",
    image: "/images/versiegelung-sanitaer.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Gallery() {
  return (
    <section id="leistungen" className="py-20 bg-dark-500">
      <div className="section-container section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-black text-white text-center"
        >
          Alle Leistungen im \u00dcberblick
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allServices.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-dark-500">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-dark-200 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#kontakt"
                  className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Anfragen &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
