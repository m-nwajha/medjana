"use client";

import { useWebflowReinit } from "@/hooks/useWebflowReinit";
import { slugify } from "@/utils/slugify";
import Link from "next/link";

const PROJECT_CATEGORIES = [
  {
    id: "1",
    category: "Druck & Print",
    tags: ["Flyer", "Speisekarten"],
    description:
      "Flyer, Visitenkarten, Plakate und Speisekarten - Drucksachen, die professionell gestaltet und druckfertig umgesetzt sind.",
    image: "/assets/images/druck-print-cat.jpg",
  },
  {
    id: "2",
    category: "Webdesign",
    tags: ["Websites"],
    description:
      "Moderne, schnelle Websites für Gastronomie und lokale Unternehmen - optimiert für Smartphone, Suche und Kontakt.",
    image: "/assets/images/web-design-cat.jpg",
  },
  {
    id: "3",
    category: "Markenauftritt & Design",
    tags: ["Logo", "Branding"],
    description:
      "Logo, Farben, Schriften und Bildsprache als stimmiges Gesamtbild, das professionell wirkt und wiedererkannt wird.",
    image: "/assets/images/markenauftritt-design-cat.jpg",
  },
  {
    id: "4",
    category: "Werbetechnik & Ausstattung",
    tags: ["Beschilderung", "Bildschirme"],
    description:
      "Beschilderung, Schaufenster, Wandgestaltung sowie digitale Menüboards und Video-Design für Ihren Standort.",
    image: "/assets/images/werbetechnik-ausstattung-cat.jpg",
  },
];

const ProjectSect = () => {
  useWebflowReinit(["ix2"]);

  return (
    <section className="ul_home_project_sect">
      <div className="container">
        <div className="ul_title_with_des_box">
          <h2 className="ul_title lg:text-[2.8rem]!">
            Design, das im Alltag funktioniert.
          </h2>
          <p className="ul_short_des ul_short_des_max_width">
            Jedes Projekt beginnt mit Zuhören. So entsteht keine Lösung von der
            Stange, sondern genau das, was Sie wirklich brauchen.
          </p>
        </div>
        <div className="ul_home_project_collection_wrapper w-dyn-list">
          <div
            role="list"
            className="ul_home_project_collection_list w-dyn-items "
          >
            {PROJECT_CATEGORIES.map((item) => (
              <div
                key={item.id}
                role="listitem"
                className="ul_home_project_collection_items w-dyn-item"
              >
                <Link
                  href={`/projects?category=${encodeURIComponent(
                    slugify(item.category)
                  )}`}
                  className="ul_home_project_collection_box w-inline-block hover:bg-[#fbd30b]!"
                >
                  <div className="ul_home_project_name_flex_box">
                    <h3 className="ul_home_project_name">{item.category}</h3>
                    <div className="ul_home_project_type">
                      <div>{item.tags.join(" · ")}</div>
                    </div>
                  </div>
                  <div className="ul_home_project_content_flex_box">
                    <div
                      data-w-id="e032babd-685a-cc0e-0a22-43fd7be77919"
                      className="ul_home_project_img_box"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        loading="lazy"
                        alt={item.category}
                        className="ul_home_project_img img_hover"
                      />
                    </div>
                    <div className="ul_home_project_content_box">
                      <h3 className="ul_home_project_content_title">
                        {item.category}
                      </h3>
                      <p className="ul_short_des">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .ul_home_project_collection_items:nth-child(2){
            top: 60px
          }
          .ul_home_project_collection_items:nth-child(3){
            top: 90px
          }
        `,
          }}
        />
      </div>
    </section>
  );
};

export default ProjectSect;