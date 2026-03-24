import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krebs Hausmeisterservice | Ihr zuverlässiger Partner in Coesfeld",
  description:
    "Krebs Hausmeisterservice in Coesfeld – Gebäudereinigung, Gartenpflege, Winterdienst, Kleinreparaturen und mehr. Schnell, sauber und professionell. Wir krebsen nicht rum!",
  keywords: [
    "Hausmeisterservice",
    "Coesfeld",
    "Gartenpflege",
    "Gebäudereinigung",
    "Winterdienst",
    "Kleinreparaturen",
    "Krebs",
  ],
  openGraph: {
    title: "Krebs Hausmeisterservice | Coesfeld",
    description:
      "Ihr zuverlässiger Partner für Hausmeisterdienste und Gartenarbeiten in Coesfeld. Wir krebsen nicht rum!",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
