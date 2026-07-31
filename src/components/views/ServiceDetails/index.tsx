"use client";

import { useWFPage } from "@/hooks/useWFPage";
import { Service } from "@/app/services/[id]/page";
import ServiceDetailsHeroSect from "./ServiceDetailsHero";
import ServiceDetailsContentSect from "./ServiceDetailsContentSect";

interface ServiceDetailsPageProps {
  service: Service;
}

const ServiceDetailsPage = ({ service }: ServiceDetailsPageProps) => {
  useWFPage("692ec84ae383c17227fc8dae");

  return (
    <>
      <ServiceDetailsHeroSect title={service.title} />
      <ServiceDetailsContentSect service={service} />
    </>
  );
};

export default ServiceDetailsPage;
