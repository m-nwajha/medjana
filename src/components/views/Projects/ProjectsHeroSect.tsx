"use client";

import { useHeroReveal } from "@/hooks/useHeroReveal";
import { useWebflowReinit } from "@/hooks/useWebflowReinit";

const HERO_ELEMENT_IDS = [
  "31fc61d2-2492-0255-6d28-e6250474cf67",
];

const ProjectsHeroSect = () => {
  useWebflowReinit(["ix2"]);
  useHeroReveal(HERO_ELEMENT_IDS);

  return (
    <section className="ul_inner_hero_banner_sect">
      <div className="container">
        <div
          data-w-id="31fc61d2-2492-0255-6d28-e6250474cf67"
          className="ul_service_hero_banner_title_box"
        >
          <p className="ul_short_des ul_blog_hero_banner_des">
            We provide a wide array of services tailored to your specific needs. Our skilled team is
          </p>
          <h1 className="ul_inner_hero_banner_title ul_service_details_hero_banner_title">
            The Work<span className="ul_blog_hero_banner_title_span">Speaks</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeroSect;
