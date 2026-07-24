"use client";

import Link from "next/link";
import ButtonSolid from "@/components/ui/ButtonSolid";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const PROJECTS_DATA = [
  {
    id: "1",
    link: "/projects/fasho-ecommerce-website",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f40a9ebbf0f52ed27fd7d_Home_3.jpg",
    type: "Redesign",
    title: "Fasho eCommerce Website",
    description:
      "A creative portfolio website designed to highlight brand excellence, crafted with modern layouts and engaging visuals to capture audience attention.",
  },
  {
    id: "2",
    link: "/projects/pulsefit-gym-websie",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736.jpg",
    type: "App Development",
    title: "Pulsefit Gym Websie",
    description:
      "An innovative SaaS platform website built with user-first design principles, offering seamless navigation and dynamic content presentation.",
  },
  {
    id: "3",
    link: "/projects/aiflow-agency-website",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f414dc8a1456b682e8d3a_hero01.jpg",
    type: "E-commerce",
    title: "Aiflow Agency Website",
    description:
      "A corporate finance consultancy site developed for maximum clarity, blending minimalist design with impactful storytelling to build trust.",
  },
  {
    id: "4",
    link: "/projects/vibely-design-portfolio-website",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f573ae59e42c11c954363_Group_1171274793.jpg",
    type: "Marketing",
    title: "Vibely Design Portfolio Website",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour randomised words which don't look even slightly believable.",
  },
  {
    id: "5",
    link: "/projects/leureon-design-portfolio-website",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f6a7fa189316bcddc588d_Group_1171274793.jpg",
    type: "Website",
    title: "Leureon Design Portfolio Website",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour randomised words which don't look even slightly believable.",
  },
];

const filters = [
  "All",
  ...Array.from(new Set(PROJECTS_DATA.map((p) => p.type))),
];

const ProjectsListContent = () => {
  const searchParams = useSearchParams();
  const getCategory = searchParams.get("category");

  const [activeFilter, setActiveFilter] = useState(
    getCategory && filters.includes(getCategory) ? getCategory : "All",
  );

  const router = useRouter();
  const pathname = usePathname();

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    const newParams = new URLSearchParams(searchParams.toString());
    if (filter === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", filter);
    }
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== "undefined" && (window as any).Webflow) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).Webflow.destroy();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).Webflow.ready();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).Webflow.require("ix2").init();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredData = PROJECTS_DATA.filter(
    (item) => activeFilter === "All" || item.type === activeFilter,
  );

  return (
    <section className="ul_project_sect">
      <div className="container">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#fbd30b] text-white! border-[#fbd30b]"
                  : "bg-transparent text-white! border-white/10!  hover:text-[#fbd30b]!"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="ul_project_items_box">
          <div className="w-dyn-list">
            <div role="list" className="ul_project_collection_list w-dyn-items">
              {filteredData.map((project) => (
                <div
                  key={project.id}
                  role="listitem"
                  className="ul_project_collection_items w-dyn-item"
                >
                  <div className="ul_project_grid_box">
                    <Link
                      data-w-id="1047d664-0d97-205d-63f7-eb40a6db9d09"
                      href={project.link}
                      className="ul_project_banner_box w-inline-block"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        loading="lazy"
                        alt={project.title}
                        className="ul_project_banner img_hover"
                      />
                    </Link>
                    <div className="ul_project_content_box">
                      <div className="ul_project_type">
                        <div>{project.type}</div>
                      </div>
                      <Link
                        href={project.link}
                        className="ul_project_content_title w-inline-block hover:text-[#fbd30b]!"
                      >
                        <div>{project.title}</div>
                      </Link>
                      <p className="ul_short_des">{project.description}</p>
                      <div className="ul_button_box ul_project_content_button">
                        <ButtonSolid
                          href={project.link}
                          label="View Projects"
                          dataWId="da9bfb3c-ccb1-8ed7-5ccf-98618904e97d"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredData.length === 0 && (
              <div className="w-dyn-empty text-center py-10">
                <div className="text-white/70">
                  No projects found for this category.
                </div>
              </div>
            )}
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .ul_project_collection_items:last-child{
                margin-bottom: 0;
              }
            `,
            }}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectsListSect = () => {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ProjectsListContent />
    </Suspense>
  );
};

export default ProjectsListSect;
