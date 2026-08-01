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
            Ein Einblick in unsere Arbeit - Projekte, die zeigen, wie wir
            Ideen mit Wirkung
          </p>
          <h1 className="ul_inner_hero_banner_title ul_service_details_hero_banner_title">
            Die Arbeit<span className="ul_blog_hero_banner_title_span">spricht</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeroSect;