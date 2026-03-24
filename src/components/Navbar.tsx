"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "\u00dcber uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container section-padding">
        <div className="flex items-center justify-between h-16">
          <a href="#hero">
            <Image
              src="/images/logo.png"
              alt="Krebs Hausmeisterservice"
              width={225}
              height={105}
              className="h-9 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-dark-400 hover:text-brand-600 transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+4917621305541"
              className="inline-flex items-center gap-2 bg-brand-500 text-dark-500 px-5 py-2.5 text-sm font-bold hover:bg-brand-600 hover:text-white transition-colors"
            >
              <Phone size={14} />
              Anrufen
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-dark-500"
            aria-label={isOpen ? "Men\u00fc schlie\u00dfen" : "Men\u00fc \u00f6ffnen"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="section-padding py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-sm text-dark-400 hover:text-brand-600 font-semibold uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+4917621305541"
                className="flex items-center justify-center gap-2 mt-3 bg-brand-500 text-dark-500 py-3 text-sm font-bold"
              >
                <Phone size={14} />
                +49 176 21305541
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
