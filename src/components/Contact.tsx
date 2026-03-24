"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 176 21305541",
    href: "tel:+4917621305541",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@krebs-hausmeisterservice.de",
    href: "mailto:info@krebs-hausmeisterservice.de",
  },
  {
    icon: MapPin,
    label: "Einsatzgebiet",
    value: "Coesfeld & Umgebung",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Anfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:info@krebs-hausmeisterservice.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-slate-50">
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
            Kontakt
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-500">
            Jetzt unverbindlich anfragen
          </h2>
          <p className="mt-4 text-navy-300 text-lg">
            Schildern Sie uns Ihr Anliegen – wir melden uns schnellstmöglich bei
            Ihnen zurück.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy-400 mb-1.5"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-200"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy-400 mb-1.5"
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-200"
                    placeholder="max@beispiel.de"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-navy-400 mb-1.5"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-200"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-navy-400 mb-1.5"
                >
                  Gewünschte Leistung
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-500 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-200"
                >
                  <option value="">Bitte auswählen...</option>
                  <option value="haushalt">
                    Haushaltsnahe Dienstleistungen
                  </option>
                  <option value="garten">
                    Garten-, Rasen- & Teichpflege
                  </option>
                  <option value="hecken">
                    Hecken-, Baum- & Strauchpflege
                  </option>
                  <option value="zaun">Zaunaufbau</option>
                  <option value="gartenhaus">Gartenhausaufbau</option>
                  <option value="gehweg">Gehweg- & Hofflächensäuberung</option>
                  <option value="sanitaer">
                    Versiegelung im Sanitärbereich
                  </option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy-400 mb-1.5"
                >
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-200 resize-none"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 disabled:bg-green-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors duration-200 shadow-lg shadow-accent-500/25"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    Wird geöffnet...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Nachricht senden
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-accent-50 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-300 font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-navy-500 font-semibold hover:text-accent-500 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy-500 font-semibold">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA Card */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <p className="font-bold text-green-900">
                WhatsApp Nachricht senden
              </p>
              <p className="mt-1 text-sm text-green-700">
                Schreiben Sie uns direkt per WhatsApp für eine schnelle Antwort.
              </p>
              <a
                href="https://wa.me/4917621305541?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp öffnen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
