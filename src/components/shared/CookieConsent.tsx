"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true);
      }, 0);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-[10%] md:right-[10%] z-[99999] p-6 rounded-2xl"
      style={{
        backgroundColor: "rgba(15, 15, 15, 0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(251, 211, 11, 0.3)",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white flex-1">
          <h5 className="text-xl font-semibold mb-2 text-[#fbd30b]">
            Cookie-Einstellungen
          </h5>
          <p className="text-sm leading-relaxed text-gray-300">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu
            verbessern, Analysen durchzuführen und Ihnen relevante Inhalte
            bereitzustellen. Durch die Nutzung unserer Website stimmen Sie der
            Verwendung von Cookies gemäß unserer{" "}
            <Link
              href="/datenschutz"
              className="text-[#fbd30b]! hover:text-white! underline transition-colors"
            >
              Datenschutzerklärung
            </Link>{" "}
            zu.
          </p>
        </div>
        <div className="flex flex-row gap-3 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={handleReject}
            className="px-6 py-2.5 rounded-full border border-[#fbd30b] text-[#fff]! hover:bg-[#fbd30b] hover:text-black transition-all font-semibold uppercase tracking-wider text-sm w-full md:w-auto"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-full bg-[#fbd30b] text-[#fff]! hover:bg-white hover:text-black! transition-all font-semibold uppercase tracking-wider text-sm w-full md:w-auto"
          >
            Zustimmen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
