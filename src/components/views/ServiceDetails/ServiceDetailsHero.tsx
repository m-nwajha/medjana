"use client";

import { useHeroReveal } from "@/hooks/useHeroReveal";
import { useWebflowReinit } from "@/hooks/useWebflowReinit";

const HERO_ELEMENT_IDS = ["8f70753d-c239-696c-33a8-64a3b6748cc2"];

const ServiceDetailsHeroSect = ({ title }: { title: string }) => {
  useWebflowReinit(["ix2"]);
  useHeroReveal(HERO_ELEMENT_IDS);

  return (
    <section className="ul_inner_hero_banner_sect">
      <div className="container">
        <div
          data-w-id="8f70753d-c239-696c-33a8-64a3b6748cc2"
          className="ul_service_hero_banner_title_box"
        >
          <h1 className="ul_inner_hero_banner_title ul_service_details_hero_banner_title text-center!">
            <span className="ul_blog_hero_banner_title_span">{title}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsHeroSect;
