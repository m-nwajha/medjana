"use client";

import { useHeroReveal } from "@/hooks/useHeroReveal";
import { useWebflowReinit } from "@/hooks/useWebflowReinit";

const HERO_ELEMENT_IDS = [
  "2c3aa34c-2fac-1d2a-154c-184413a3fb0c",
];

const ProjectDetailsHeroSect = () => {
  useWebflowReinit(["ix2"]);
  useHeroReveal(HERO_ELEMENT_IDS);

  return (
    <section className="ul_inner_hero_banner_sect">
      <div className="container">
        <div className="ul_project_details_hero_banner_title_box">
          <h1
            data-w-id="2c3aa34c-2fac-1d2a-154c-184413a3fb0c"
            className="ul_inner_hero_banner_title"
          >
            Fasho eCommerce Website
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsHeroSect;
