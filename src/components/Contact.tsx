"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+49 176 21305541", href: "tel:+4917621305541" },
  { icon: Mail, label: "E-Mail", value: "info@krebs-hausmeisterservice.de", href: "mailto:info@krebs-hausmeisterservice.de" },
  { icon: MapPin, label: "Einsatzgebiet", value: "Coesfeld & Umgebung", href: null },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const message = fd.get("message") as string;
    const subject = encodeURIComponent(`Anfrage von ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\n${message}`);
    window.location.href = `mailto:info@krebs-hausmeisterservice.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-navy-100 bg-navy-50 text-navy-500 text-sm placeholder:text-navy-200 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all";

  return (
    <section id="kontakt" className="py-16 lg:py-20 bg-navy-50">
      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          <span className="text-accent-600 text-xs font-semibold uppercase tracking-widest">
            Kontakt
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-500">
            Jetzt unverbindlich anfragen
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-navy-400 mb-1">Name *</label>
                <input type="text" id="name" name="name" required className={inputClass} placeholder="Max Mustermann" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-navy-400 mb-1">E-Mail *</label>
                <input type="email" id="email" name="email" required className={inputClass} placeholder="max@beispiel.de" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-navy-400 mb-1">Telefon</label>
                <input type="tel" id="phone" name="phone" className={inputClass} placeholder="+49 123 456789" />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-medium text-navy-400 mb-1">Leistung</label>
                <select id="service" name="service" className={inputClass}>
                  <option value="">Bitte ausw\u00e4hlen...</option>
                  <option value="haushalt">Haushaltsnahe Dienstleistungen</option>
                  <option value="garten">Garten-, Rasen- & Teichpflege</option>
                  <option value="hecken">Hecken-, Baum- & Strauchpflege</option>
                  <option value="zaun">Zaunaufbau</option>
                  <option value="gartenhaus">Gartenhausaufbau</option>
                  <option value="gehweg">Gehweg- & Hoffl\u00e4chens\u00e4uberung</option>
                  <option value="sanitaer">Versiegelung im Sanit\u00e4rbereich</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-navy-400 mb-1">Nachricht *</label>
              <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-none`} placeholder="Beschreiben Sie Ihr Anliegen..." />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-accent-500/20"
            >
              {submitted ? <><CheckCircle2 size={16} /> Wird ge\u00f6ffnet...</> : <><Send size={16} /> Nachricht senden</>}
            </button>
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-navy-100/50 rounded-lg p-4">
                <div className="w-9 h-9 bg-accent-50 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-accent-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-navy-300 font-medium uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-navy-500 font-semibold hover:text-accent-500 transition-colors truncate block">{item.value}</a>
                  ) : (
                    <p className="text-sm text-navy-500 font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/4917621305541?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4 transition-colors group"
            >
              <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-green-900">WhatsApp</p>
                <p className="text-xs text-green-700">Direkt schreiben</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
