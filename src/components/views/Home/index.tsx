"use client";
import Hero from "./Hero";
import CounterSect from "./CounterSect";
import ProvideSect from "./ProvideSect";
import ProjectSect from "./ProjectSect";
import StorySect from "./StorySect";
import { useWFPage } from "@/hooks/useWFPage";
import { ProvideSectProps } from "./ProvideSect";
import { FC } from "react";

interface HomePageProps {
  getDataProvide: ProvideSectProps["getData"]
}

const HomePage: FC<HomePageProps> = ({ getDataProvide }) => {
  useWFPage("692ec84ae383c17227fc8d2e");
  return (
    <>
      <Hero />
      <CounterSect />
      <ProvideSect getData={getDataProvide} />
      <ProjectSect />
      <StorySect />
    </>
  );
};

export default HomePage;
