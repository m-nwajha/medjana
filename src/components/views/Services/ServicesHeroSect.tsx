"use client";

import { useHeroReveal } from "@/hooks/useHeroReveal";
import { useWebflowReinit } from "@/hooks/useWebflowReinit";

const SERVICES_HERO_ELEMENT_IDS = [
  "efc27826-251d-7df2-5648-12db3effd869"
];

const ServicesHeroSect = () => {
  useWebflowReinit(["ix2"]);
  useHeroReveal(SERVICES_HERO_ELEMENT_IDS);
  
  return (
    <section className="ul_inner_hero_banner_sect">
      <div className="container">
        <div
          data-w-id="efc27826-251d-7df2-5648-12db3effd869"
          className="ul_about_title_box"
        >
          <h2 className="ul_inner_hero_banner_title ul_service_hero_banner_title">
            Our Service<span className="ul_about_title_span">Offerings</span>
          </h2>
          <p className="ul_short_des ul_about_short_des">
            We provide a wide array of services tailored to your specific needs. Our skilled team is
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSect;
