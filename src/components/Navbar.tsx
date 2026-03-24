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
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container section-padding">
        <div className="flex items-center justify-between h-14">
          <a href="#hero" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="Krebs Hausmeisterservice"
              width={225}
              height={105}
              className="h-8 md:h-9 w-auto"
              priority
            />
            <div className="hidden sm:block leading-none">
              <span className="text-sm md:text-base font-extrabold text-navy-500 tracking-tight">KREBS</span>
              <br />
              <span className="text-[9px] md:text-[10px] font-semibold text-navy-300 uppercase tracking-widest">Hausmeisterservice</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-navy-400 hover:text-navy-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+4917621305541"
              className="inline-flex items-center gap-1.5 bg-accent-500 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-accent-600 transition-colors"
            >
              <Phone size={13} />
              Anrufen
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-navy-500"
            aria-label={isOpen ? "Men\u00fc schlie\u00dfen" : "Men\u00fc \u00f6ffnen"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden bg-navy-50 border-t border-navy-100 overflow-hidden"
          >
            <div className="section-padding py-3 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-sm text-navy-400 hover:text-navy-500 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+4917621305541"
                className="flex items-center justify-center gap-2 mt-3 bg-accent-500 text-white py-2.5 rounded-lg text-sm font-semibold"
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
