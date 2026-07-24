"use client";
import { ScriptsProvider } from "../contexts/ScriptsProvider";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScriptsProvider>
      <Header />
      {children}
      <Footer />
    </ScriptsProvider>
  );
};

export default MainLayout;
