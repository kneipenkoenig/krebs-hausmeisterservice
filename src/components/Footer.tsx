import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-500 text-white">
      <div className="section-container section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Krebs</p>
                <p className="text-white/60 text-xs leading-tight">
                  Hausmeisterservice
                </p>
              </div>
            </div>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              Ihr zuverlässiger Partner für Hausmeisterdienste und Gartenarbeiten
              in Coesfeld und Umgebung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-sm mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {[
                { label: "Startseite", href: "#hero" },
                { label: "Leistungen", href: "#leistungen" },
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-sm mb-4">Kontakt</p>
            <div className="space-y-3">
              <a
                href="tel:+4917621305541"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone size={16} />
                +49 176 21305541
              </a>
              <a
                href="mailto:info@krebs-hausmeisterservice.de"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail size={16} />
                info@krebs-hausmeisterservice.de
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {currentYear} Krebs Hausmeisterservice. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/impressum"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
