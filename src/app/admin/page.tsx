"use client";

import { useState, useEffect } from "react";
import {
  Lock,
  Save,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";

interface ImpressumData {
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
}

interface DatenschutzData {
  verantwortlicher: string;
  adresse: string;
  email: string;
  telefon: string;
  hostingAnbieter: string;
  zusatz: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"impressum" | "datenschutz">(
    "impressum"
  );
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [impressum, setImpressum] = useState<ImpressumData>({
    inhaber: "",
    firmenname: "",
    strasse: "",
    plz: "",
    ort: "",
    telefon: "",
    email: "",
    steuernummer: "",
    ustIdNr: "",
    zusatz: "",
  });

  const [datenschutz, setDatenschutz] = useState<DatenschutzData>({
    verantwortlicher: "",
    adresse: "",
    email: "",
    telefon: "",
    hostingAnbieter: "",
    zusatz: "",
  });

  useEffect(() => {
    const storedPw = sessionStorage.getItem("admin_pw");
    if (storedPw) {
      setPassword(storedPw);
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      loadContent();
    }
  }, [authenticated]);

  async function loadContent() {
    setLoading(true);
    try {
      const res = await fetch("/api/content");
      if (res.ok) {
        const data = await res.json();
        if (data.impressum) setImpressum(data.impressum);
        if (data.datenschutz) setDatenschutz(data.datenschutz);
      }
    } catch {
      setError("Inhalte konnten nicht geladen werden");
    }
    setLoading(false);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        sessionStorage.setItem("admin_pw", password);
        setAuthenticated(true);
      } else {
        const data = await res.json();
        setLoginError(data.error || "Falsches Passwort");
      }
    } catch {
      setLoginError("Verbindungsfehler");
    }
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    setSaved(false);
    setSaveMessage("");
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: sessionStorage.getItem("admin_pw"),
          data: { impressum, datenschutz },
        }),
      });
      const result = await res.json();
      if (res.ok) {
        setSaved(true);
        setSaveMessage(
          result.message || "Gespeichert & Deploy gestartet."
        );
        setTimeout(() => {
          setSaved(false);
          setSaveMessage("");
        }, 5000);
      } else {
        setError(result.error || "Speichern fehlgeschlagen");
      }
    } catch {
      setError("Verbindungsfehler");
    }
    setSaving(false);
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_pw");
    setAuthenticated(false);
    setPassword("");
  }

  // Login Screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="w-12 h-12 bg-navy-500 rounded-xl flex items-center justify-center mx-auto">
              <Lock size={22} className="text-white" />
            </div>
            <h1 className="mt-4 text-xl font-bold text-navy-500 text-center">
              Admin-Bereich
            </h1>
            <p className="mt-1 text-sm text-navy-300 text-center">
              Passwort eingeben, um fortzufahren
            </p>
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passwort"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500"
                autoFocus
              />
              {loginError && (
                <p className="text-sm text-red-600 flex items-center gap-1.5">
                  <AlertCircle size={14} />
                  {loginError}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-navy-500 hover:bg-navy-600 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                Anmelden
              </button>
            </form>
          </div>
          <p className="mt-4 text-center">
            <a
              href="/"
              className="text-sm text-navy-300 hover:text-navy-500 transition-colors"
            >
              &larr; Zurück zur Website
            </a>
          </p>
        </div>
      </div>
    );
  }

  const impressumFields: {
    key: keyof ImpressumData;
    label: string;
    placeholder: string;
  }[] = [
    {
      key: "inhaber",
      label: "Inhaber / Geschäftsführer",
      placeholder: "Max Mustermann",
    },
    {
      key: "firmenname",
      label: "Firmenname",
      placeholder: "Krebs Hausmeisterservice",
    },
    {
      key: "strasse",
      label: "Straße & Hausnummer",
      placeholder: "Musterstraße 1",
    },
    { key: "plz", label: "PLZ", placeholder: "48653" },
    { key: "ort", label: "Ort", placeholder: "Coesfeld" },
    { key: "telefon", label: "Telefon", placeholder: "+49 176 21305541" },
    {
      key: "email",
      label: "E-Mail",
      placeholder: "info@krebs-hausmeisterservice.de",
    },
    {
      key: "steuernummer",
      label: "Steuernummer",
      placeholder: "123/456/78901",
    },
    {
      key: "ustIdNr",
      label: "USt-IdNr. (optional)",
      placeholder: "DE123456789",
    },
    {
      key: "zusatz",
      label: "Zusätzliche Angaben (optional)",
      placeholder: "z.B. Handelsregister, Berufshaftpflicht...",
    },
  ];

  const datenschutzFields: {
    key: keyof DatenschutzData;
    label: string;
    placeholder: string;
  }[] = [
    {
      key: "verantwortlicher",
      label: "Verantwortlicher",
      placeholder: "Max Mustermann",
    },
    {
      key: "adresse",
      label: "Adresse",
      placeholder: "Musterstraße 1, 48653 Coesfeld",
    },
    {
      key: "email",
      label: "E-Mail",
      placeholder: "info@krebs-hausmeisterservice.de",
    },
    { key: "telefon", label: "Telefon", placeholder: "+49 176 21305541" },
    {
      key: "hostingAnbieter",
      label: "Hosting-Anbieter",
      placeholder: "Cloudflare Pages",
    },
    {
      key: "zusatz",
      label: "Zusätzliche Angaben (optional)",
      placeholder: "z.B. Datenschutzbeauftragter...",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-navy-300 hover:text-navy-500 transition-colors"
              title="Zurück zur Website"
            >
              <ArrowLeft size={20} />
            </a>
            <h1 className="font-bold text-navy-500">Admin-Bereich</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadContent}
              disabled={loading}
              className="inline-flex items-center gap-1.5 text-navy-300 hover:text-navy-500 text-sm transition-colors"
              title="Inhalte neu laden"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Laden
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              {saving ? (
                "Speichert..."
              ) : saved ? (
                <>
                  <CheckCircle2 size={16} />
                  Gespeichert
                </>
              ) : (
                <>
                  <Save size={16} />
                  Speichern
                </>
              )}
            </button>
            <button
              onClick={handleLogout}
              className="text-sm text-navy-300 hover:text-red-500 transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
            <AlertCircle size={16} />
            {error}
            <button onClick={() => setError("")} className="ml-auto font-bold">
              &times;
            </button>
          </div>
        )}

        {saveMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
            <CheckCircle2 size={16} />
            {saveMessage}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 bg-slate-100 p-1 rounded-xl mb-8 w-fit">
          <button
            onClick={() => setActiveTab("impressum")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "impressum"
                ? "bg-white text-navy-500 shadow-sm"
                : "text-navy-300 hover:text-navy-500"
            }`}
          >
            Impressum
          </button>
          <button
            onClick={() => setActiveTab("datenschutz")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "datenschutz"
                ? "bg-white text-navy-500 shadow-sm"
                : "text-navy-300 hover:text-navy-500"
            }`}
          >
            Datenschutz
          </button>
        </div>

        {/* Impressum Form */}
        {activeTab === "impressum" && (
          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-navy-500 mb-6">
              Impressum bearbeiten
            </h2>
            <div className="space-y-5">
              {impressumFields.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-navy-400 mb-1.5">
                    {field.label}
                  </label>
                  {field.key === "zusatz" ? (
                    <textarea
                      value={impressum[field.key]}
                      onChange={(e) =>
                        setImpressum((p) => ({
                          ...p,
                          [field.key]: e.target.value,
                        }))
                      }
                      placeholder={field.placeholder}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={impressum[field.key]}
                      onChange={(e) =>
                        setImpressum((p) => ({
                          ...p,
                          [field.key]: e.target.value,
                        }))
                      }
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Datenschutz Form */}
        {activeTab === "datenschutz" && (
          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-navy-500 mb-6">
              Datenschutz bearbeiten
            </h2>
            <div className="space-y-5">
              {datenschutzFields.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-navy-400 mb-1.5">
                    {field.label}
                  </label>
                  {field.key === "zusatz" ? (
                    <textarea
                      value={datenschutz[field.key]}
                      onChange={(e) =>
                        setDatenschutz((p) => ({
                          ...p,
                          [field.key]: e.target.value,
                        }))
                      }
                      placeholder={field.placeholder}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={datenschutz[field.key]}
                      onChange={(e) =>
                        setDatenschutz((p) => ({
                          ...p,
                          [field.key]: e.target.value,
                        }))
                      }
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy-500 placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info */}
        <div className="mt-8 bg-accent-50 border border-accent-100 rounded-xl p-5">
          <p className="text-sm text-accent-700 font-medium">
            Hinweis zum Speichern
          </p>
          <p className="mt-1 text-sm text-accent-600">
            Änderungen werden direkt in GitHub gespeichert und lösen einen
            automatischen Rebuild aus. Die aktualisierte Seite ist in ca. 1-2
            Minuten online.
          </p>
        </div>
      </div>
    </div>
  );
}
