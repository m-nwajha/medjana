"use client";
import ScriptImport from "@/libs/script";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScriptImport />
    </>
  );
};

export default MainLayout;
