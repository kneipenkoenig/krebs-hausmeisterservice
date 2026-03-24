# Krebs Hausmeisterservice - Website

## Tech Stack
- Next.js 15 + TypeScript + Tailwind CSS
- Framer Motion für Animationen
- Cloudflare Pages (Hosting + Functions)
- GitHub API für Content-Management (via Cloudflare Functions)

## Deployment
- Repo: `kneipenkoenig/krebs-hausmeisterservice`
- Hosting: Cloudflare Pages (`krebs-hausmeisterservice.pages.dev`)
- Auto-Deploy bei Push auf `main`
- Cloudflare Env-Variablen: `ADMIN_PASSWORD`, `GITHUB_TOKEN`, `GITHUB_REPO`
- Nach Änderungen immer committen und pushen (nicht nachfragen)

## Projektstruktur
- `src/components/` - Alle UI-Komponenten (Hero, Navbar, Services, Gallery, About, Contact, Footer, WhatsAppButton)
- `src/app/` - Seiten (Home, Admin, Impressum, Datenschutz)
- `src/lib/content.ts` - Content-Loader für site-content.json
- `content/site-content.json` - Editierbarer Content (Impressum, Datenschutz)
- `functions/api/` - Cloudflare Functions (login, content, upload-image)
- `public/images/` - Alle Bilder (Logo, Hero, Service-Bilder, Galerie)

## Design
- Farbschema: Grüntöne (navy = Waldgrün, accent = frisches Grün)
- Kompaktes, modernes Layout (py-16/20, linksbündige Section-Header)
- Parallax-Hintergrundbild (krebsback.png) mit fixem Scroll
- Neues Logo (krebs logo.png) mit Firmenname in Navbar
- Service-Bilder von der alten Homepage (krebs-hausmeisterservice.de)
- 7 Leistungen mit Bildern, 6 Galerie-Platzhalter

## Admin-Panel (/admin)
- Passwortgeschützter Bereich
- 3 Tabs: Impressum, Datenschutz, Bilder
- Bilder-Tab: Upload für Hero, 7 Service-Bilder, 6 Galerie-Bilder
- Uploads gehen via GitHub API direkt ins Repo (löst Auto-Deploy aus)

## Was erledigt wurde
- Vollständige Website mit allen Sektionen
- Cloudflare Pages Deployment eingerichtet
- Bilder von alter Homepage übernommen
- Farbschema auf Grün umgestellt
- Kompaktes/modernes Redesign
- Admin-Panel mit Bild-Upload (Hero, Services, Galerie)
- Neues Logo eingebaut
- Parallax-Hintergrundbild
- Galerie-Sektion mit Platzhaltern (auto-detect ob Bild vorhanden)

## Offene Punkte / Nächste Schritte
- Hero-Bild austauschen (Kunde will eigenes Bild, passend zu Gartenarbeit)
- Galerie-Bilder hochladen (Projektfotos vom Kunden)
- Impressum-Daten vervollständigen (Inhabername, Adresse, PLZ, Steuernummer)
- Datenschutz-Daten vervollständigen
- Eigene Domain verbinden (z.B. krebs-hausmeisterservice.de)
- Ggf. Kontaktformular auf echtes Backend umstellen (statt mailto)
