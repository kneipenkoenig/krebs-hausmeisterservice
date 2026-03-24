"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const projects = [
  { image: "/images/gallery/projekt-1.jpg", title: "Gartenpflege" },
  { image: "/images/gallery/projekt-2.jpg", title: "Heckenschnitt" },
  { image: "/images/gallery/projekt-3.jpg", title: "Zaunaufbau" },
  { image: "/images/gallery/projekt-4.jpg", title: "Hofreinigung" },
  { image: "/images/gallery/projekt-5.jpg", title: "Gartenhausaufbau" },
  { image: "/images/gallery/projekt-6.jpg", title: "Versiegelung" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

function GalleryItem({ project }: { project: { image: string; title: string } }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-100/50"
    >
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-navy-200">
          <Camera size={28} strokeWidth={1.5} />
          <span className="mt-1.5 text-xs font-medium">{project.title}</span>
        </div>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            onError={() => setFailed(true)}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="absolute bottom-3 left-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.title}
          </p>
        </>
      )}
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="projekte" className="py-16 lg:py-20 bg-navy-50">
      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          <span className="text-accent-600 text-xs font-semibold uppercase tracking-widest">
            Projekte
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-500">
            Einblicke in unsere Arbeit
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {projects.map((project, index) => (
            <GalleryItem key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
