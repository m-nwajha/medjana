"use client";

import { useWFPage } from "@/hooks/useWFPage";
import ServiceDetailsHeroSect from "./ServiceDetailsHeroSect";
import ServiceDetailsContentSect from "./ServiceDetailsContentSect";

const ServiceDetailsPage = () => {
  useWFPage("692ec84ae383c17227fc8dae");

  return (
    <>
      <ServiceDetailsHeroSect />
      <ServiceDetailsContentSect />
    </>
  );
};

export default ServiceDetailsPage;
