"use client";

import { useWFPage } from "@/hooks/useWFPage";
import LegalHeroSect from "./LegalHero";
import LegalContentSect from "./LegalContentSect";
import { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  children: ReactNode;
}

const LegalPage = ({ title, children }: LegalPageProps) => {
  useWFPage("692ec84ae383c17227fc8dae");

  return (
    <>
      <LegalHeroSect title={title} />
      <LegalContentSect>{children}</LegalContentSect>
    </>
  );
};

export default LegalPage;
