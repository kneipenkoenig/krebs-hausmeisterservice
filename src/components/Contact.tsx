"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Anfrage von der Website");
    const body = encodeURIComponent(`R\u00fcckruf erbeten an: ${email}`);
    window.location.href = `mailto:info@krebs-hausmeisterservice.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="kontakt" className="py-16 bg-dark-600">
      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Email */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-brand-500 rounded-full flex items-center justify-center">
              <Mail size={24} className="text-dark-500" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">E-Mail</h3>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              Schreiben Sie uns \u2013 wir melden uns innerhalb von 24 Stunden.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 max-w-xs mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Ihre E-Mail-Adresse"
                className="w-full px-4 py-3 bg-dark-500 border border-dark-400 text-white text-sm placeholder:text-white/30 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              />
              <button
                type="submit"
                disabled={submitted}
                className="w-full mt-3 bg-brand-500 hover:bg-brand-600 text-dark-500 hover:text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? "Wird ge\u00f6ffnet..." : <><Send size={14} /> Absenden</>}
              </button>
            </form>
          </div>

          {/* WhatsApp */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-brand-500 rounded-full flex items-center justify-center">
              <Phone size={24} className="text-dark-500" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">WhatsApp</h3>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              Schreiben Sie uns per WhatsApp f\u00fcr eine schnelle Antwort.
            </p>
            <a
              href="https://wa.me/4917621305541?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-transparent border-2 border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-dark-500 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
            >
              +49 176 21305541
            </a>
          </div>

          {/* Anruf */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-brand-500 rounded-full flex items-center justify-center">
              <MessageCircle size={24} className="text-dark-500" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">Direkt anrufen</h3>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              Der schnellste Weg zu uns \u2013 rufen Sie direkt an.
            </p>
            <a
              href="tel:+4917621305541"
              className="inline-block mt-5 bg-transparent border-2 border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-dark-500 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Jetzt anrufen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
