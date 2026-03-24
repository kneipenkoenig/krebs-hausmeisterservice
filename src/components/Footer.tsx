import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-600 text-white">
      <div className="section-container section-padding py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Krebs Hausmeisterservice"
              width={225}
              height={105}
              className="h-8 w-auto brightness-0 invert opacity-70"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
            <a href="#hero" className="hover:text-white transition-colors">Startseite</a>
            <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#ueber-uns" className="hover:text-white transition-colors">{"\u00dc"}ber uns</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
            <a href="tel:+4917621305541" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} />
              +49 176 21305541
            </a>
            <a href="mailto:info@krebs-hausmeisterservice.de" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} />
              info@krebs-hausmeisterservice.de
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30">
            &copy; {currentYear} Krebs Hausmeisterservice
          </p>
          <div className="flex items-center gap-4">
            <a href="/impressum" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
