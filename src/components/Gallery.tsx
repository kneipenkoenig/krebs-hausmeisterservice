"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    image: "/images/gallery/projekt-1.jpg",
    title: "Gartenpflege",
    placeholder: true,
  },
  {
    image: "/images/gallery/projekt-2.jpg",
    title: "Heckenschnitt",
    placeholder: true,
  },
  {
    image: "/images/gallery/projekt-3.jpg",
    title: "Zaunaufbau",
    placeholder: true,
  },
  {
    image: "/images/gallery/projekt-4.jpg",
    title: "Hofflächenreinigung",
    placeholder: true,
  },
  {
    image: "/images/gallery/projekt-5.jpg",
    title: "Gartenhausaufbau",
    placeholder: true,
  },
  {
    image: "/images/gallery/projekt-6.jpg",
    title: "Sanitärversiegelung",
    placeholder: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Gallery() {
  return (
    <section id="projekte" className="py-24 lg:py-32 bg-white">
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
            Unsere Projekte
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-500">
            Einblicke in unsere Arbeit
          </h2>
          <p className="mt-4 text-navy-300 text-lg">
            Überzeugen Sie sich selbst von der Qualität unserer Arbeit –
            hier finden Sie ausgewählte Projekte aus der Region Coesfeld.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100"
            >
              {project.placeholder ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                  <Camera size={40} strokeWidth={1.5} />
                  <span className="mt-2 text-sm font-medium">
                    {project.title}
                  </span>
                  <span className="text-xs mt-1">Bild folgt</span>
                </div>
              ) : (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm">
                      {project.title}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
