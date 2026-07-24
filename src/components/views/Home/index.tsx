"use client";
import Hero from "./Hero";
import CounterSect from "./CounterSect";
import ProvideSect from "./ProvideSect";
import ProjectSect from "./ProjectSect";
import StorySect from "./StorySect";
import { useWFPage } from "@/hooks/useWFPage";

const HomePage = () => {
  useWFPage("692ec84ae383c17227fc8d2e");
  return (
    <>
      <Hero />
      <CounterSect />
      <ProvideSect />
      <ProjectSect />
      <StorySect />
    </>
  );
};

export default HomePage;
