export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-700 text-white/30 py-6">
      <div className="section-container section-padding flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs">
          &copy; {currentYear} Krebs Hausmeisterservice. Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-6">
          <a href="/impressum" className="text-xs hover:text-white/60 transition-colors">Impressum</a>
          <a href="/datenschutz" className="text-xs hover:text-white/60 transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
