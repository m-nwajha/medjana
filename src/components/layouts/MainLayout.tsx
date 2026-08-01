"use client";
import { ScriptsProvider } from "../contexts/ScriptsProvider";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import CookieConsent from "../shared/CookieConsent";
import WhatsAppButton from "../shared/WhatsAppButton";
import ScrollToTopButton from "../shared/ScrollToTopButton";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScriptsProvider>
      <ScrollToTopButton />
      <Header />
      {children}
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
    </ScriptsProvider>
  );
};

export default MainLayout;
