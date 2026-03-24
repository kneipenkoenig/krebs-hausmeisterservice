import { readFileSync } from "fs";
import { join } from "path";

const CONTENT_PATH = join(process.cwd(), "content", "site-content.json");

export interface SiteContent {
  impressum: {
    inhaber: string;
    firmenname: string;
    strasse: string;
    plz: string;
    ort: string;
    telefon: string;
    email: string;
    steuernummer: string;
    ustIdNr: string;
    zusatz: string;
  };
  datenschutz: {
    verantwortlicher: string;
    adresse: string;
    email: string;
    telefon: string;
    hostingAnbieter: string;
    zusatz: string;
  };
}

export function getContent(): SiteContent {
  const raw = readFileSync(CONTENT_PATH, "utf-8");
  return JSON.parse(raw);
}
