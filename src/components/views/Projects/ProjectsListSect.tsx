"use client";

import ButtonSolid from "@/components/ui/ButtonSolid";
import Modal from "@/components/ui/Modal";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { PROJECT_CATEGORIES } from "../Home/ProjectSect";
import { slugify } from "@/utils/slugify";
import { useWebflowReinit } from "@/hooks/useWebflowReinit";

export type ProjectDataType = {
  id: string;
  externalLink?: string;
  image: string;
  mediaUrl: string;
  mediaType: "image" | "video" | "pdf";
  type: string;
  title: string;
  description: string;
};

const PROJECTS_DATA: ProjectDataType[] = [
  {
    id: "1",
    externalLink: "https://example.com/fasho",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f40a9ebbf0f52ed27fd7d_Home_3.jpg",
    mediaUrl: "/AGB_Medjana_Aktualisiert.pdf",
    mediaType: "pdf",
    type: "Webdesign",
    title: "Fasho eCommerce Website",
    description:
      "A creative portfolio website designed to highlight brand excellence, crafted with modern layouts and engaging visuals to capture audience attention.",
  },
  {
    id: "2",
    externalLink: "https://example.com/pulsefit",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736.jpg",
    mediaUrl:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736.jpg",
    mediaType: "image",
    type: "Webdesign",
    title: "Pulsefit Gym Websie",
    description:
      "An innovative SaaS platform website built with user-first design principles, offering seamless navigation and dynamic content presentation.",
  },
  {
    id: "3",
    externalLink: "https://example.com/aiflow",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f414dc8a1456b682e8d3a_hero01.jpg",
    mediaUrl: "https://www.youtube.com/watch?v=3QmtR8tCZ1g",
    mediaType: "video",
    type: "Webdesign",
    title: "Aiflow Agency Website",
    description:
      "A corporate finance consultancy site developed for maximum clarity, blending minimalist design with impactful storytelling to build trust.",
  },
  {
    id: "4",
    externalLink: "https://example.com/vibely",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f573ae59e42c11c954363_Group_1171274793.jpg",
    mediaUrl:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f573ae59e42c11c954363_Group_1171274793.jpg",
    mediaType: "image",
    type: "Webdesign",
    title: "Vibely Design Portfolio Website",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour randomised words which don't look even slightly believable.",
  },
  {
    id: "5",
    externalLink: "https://example.com/leureon",
    image:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f6a7fa189316bcddc588d_Group_1171274793.jpg",
    mediaUrl:
      "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f6a7fa189316bcddc588d_Group_1171274793.jpg",
    mediaType: "image",
    type: "Webdesign",
    title: "Leureon Design Portfolio Website",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour randomised words which don't look even slightly believable.",
  },
];

const filters = [
  "All",
  ...Array.from(new Set(PROJECT_CATEGORIES.map((p) => slugify(p.category)))),
];

const ProjectsListContent = () => {
  const searchParams = useSearchParams();
  const getCategory = searchParams.get("category");

  const [activeFilter, setActiveFilter] = useState(
    getCategory && filters.includes(getCategory) ? getCategory : "All",
  );

  const [selectedProject, setSelectedProject] =
    useState<ProjectDataType | null>(null);

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

  useWebflowReinit(["ix2"]);

  const filteredData = PROJECTS_DATA.filter(
    (item) =>
      activeFilter === "All" ||
      slugify(item.type) === activeFilter ||
      item.type === activeFilter,
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
                  : "bg-transparent text-white! border-white/10! hover:text-[#fbd30b]!"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="ul_project_items_box">
          <div className="w-dyn-list flex flex-wrap justify-center!">
            <div role="list" className="ul_project_collection_list w-dyn-items">
              {filteredData.map((project) => (
                <div
                  key={project.id}
                  role="listitem"
                  className="ul_project_collection_items w-dyn-item"
                >
                  <div className="ul_project_grid_box">
                    <div
                      data-w-id="1047d664-0d97-205d-63f7-eb40a6db9d09"
                      onClick={() => setSelectedProject(project)}
                      className="ul_project_banner_box w-inline-block cursor-pointer"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        loading="lazy"
                        alt={project.title}
                        className="ul_project_banner img_hover"
                      />
                    </div>
                    <div className="ul_project_content_box">
                      <div className="ul_project_type">
                        <div>{project.type}</div>
                      </div>
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="ul_project_content_title w-inline-block hover:text-[#fbd30b]! cursor-pointer"
                      >
                        <div>{project.title}</div>
                      </div>
                      <p className="ul_short_des">{project.description}</p>
                      <div className="ul_button_box ul_project_content_button flex! lg:flex-row flex-col justify-between! gap-5">
                        <ButtonSolid
                          dataWId="da9bfb3c-ccb1-8ed7-5ccf-98618904e97d"
                          onClick={() => setSelectedProject(project)}
                          label="Projekt ansehen"
                        />
                        {project.externalLink && (
                          <ButtonSolid
                            target="_blank"
                            href={project.externalLink}
                            isSubmit={false}
                            dataWId="da9bfb3c-ccb1-8ed7-5ccf-98618904e97d"
                            className="bg-[#fff]! text-black!"
                            label={
                              <span className="flex gap-2">
                                Zur Website
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                                  />
                                </svg>
                              </span>
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredData.length === 0 && (
              <div className="w-dyn-empty bg-[#fbd30b]/20! w-[300px] py-5! rounded-lg text-center py-10">
                <div className="text-white">
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

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        className="bg-[#111]! text-white flex flex-col justify-center items-center"
      >
        {selectedProject && (
          <>
            {/* Media Content */}
            {selectedProject.mediaType === "image" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selectedProject.mediaUrl}
                alt={selectedProject.title}
                className="max-w-full max-h-[100vh] object-contain rounded-lg"
              />
            )}
            {selectedProject.mediaType === "video" &&
              (selectedProject.mediaUrl.includes("youtube.com") ||
              selectedProject.mediaUrl.includes("youtu.be") ? (
                <iframe
                  src={selectedProject.mediaUrl
                    .replace("watch?v=", "embed/")
                    .replace("youtu.be/", "youtube.com/embed/")}
                  className="w-[90vw] max-w-5xl aspect-video rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedProject.mediaUrl}
                  controls
                  className="max-w-full max-h-[100vh] object-contain rounded-lg"
                  autoPlay
                />
              ))}
            {selectedProject.mediaType === "pdf" && (
              <iframe
                src={selectedProject.mediaUrl}
                className="w-full h-[100vh] rounded-lg bg-white"
              />
            )}
          </>
        )}
      </Modal>
    </section>
  );
};

const ProjectsListSect = () => {
  return (
    <Suspense
      fallback={<div className="py-20 text-center text-white">Loading...</div>}
    >
      <ProjectsListContent />
    </Suspense>
  );
};

export default ProjectsListSect;
