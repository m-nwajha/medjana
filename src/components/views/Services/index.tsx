"use client";

import { useWFPage } from "@/hooks/useWFPage";
import ServicesHeroSect from "./ServicesHeroSect";
import ServicesListSect, { ServicesListSectProps } from "./ServicesListSect";
// import BrandLogoSect from "./BrandLogoSect";
import FaqSect from "./FaqSect";

const ServicesPage = ({ getData }: ServicesListSectProps) => {
  useWFPage("692ec84ae383c17227fc8dad");

  return (
    <>
      <ServicesHeroSect />
      <ServicesListSect getData={getData} />
      {/* <BrandLogoSect /> */}
      <FaqSect />
    </>
  );
};

export default ServicesPage;
