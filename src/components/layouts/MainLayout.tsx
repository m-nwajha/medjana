"use client";
import ScriptImport from "@/libs/script";
import Header from "../shared/Header";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <ScriptImport />
    </>
  );
};

export default MainLayout;
