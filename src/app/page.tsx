"use client";
import CounterSect from "@/components/views/Home/CounterSect";
import Hero from "@/components/views/Home/Hero";
import ProvideSect from "@/components/views/Home/ProvideSect";
import ProjectSect from "@/components/views/Home/ProjectSect";
import StorySect from "@/components/views/Home/StorySect";

export default function Home() {
  return (
    <>
      <Hero />
      <CounterSect />
      <ProvideSect />
      <ProjectSect />
      <StorySect />
    </>
  );
}
