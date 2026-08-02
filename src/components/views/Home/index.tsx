"use client";
import Hero from "./Hero";
import CounterSect from "./CounterSect";
import ProjectSect from "./ProjectSect";
import StorySect from "./StorySect";
import { useWFPage } from "@/hooks/useWFPage";
import { FC } from "react";
import ServicesListSect, { ServicesListSectProps } from "../Services/ServicesListSect";


const HomePage: FC<ServicesListSectProps> = ({ getData }) => {
  useWFPage("692ec84ae383c17227fc8d2e");
  return (
    <>
      <Hero />
      <CounterSect />
      <ServicesListSect getData={getData}  />
      <ProjectSect />
      <StorySect />
    </>
  );
};

export default HomePage;
