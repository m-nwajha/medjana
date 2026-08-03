"use client";

import ButtonSolid from "@/components/ui/ButtonSolid";
import Modal from "@/components/ui/Modal";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { PROJECT_CATEGORIES } from "../Home/ProjectSect";
import { slugify } from "@/utils/slugify";
import { useWebflowReinit } from "@/hooks/useWebflowReinit";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type ProjectDataType = {
  id: string;
  externalLink?: string;
  image: string;
  mediaUrl: string | string[];
  mediaType: "image" | "video" | "pdf";
  type: string;
  title: string;
  description: string;
};



const filters = [
  "All",
  ...Array.from(new Set(PROJECT_CATEGORIES.map((p) => p.category))),
];

const ProjectsListContent = ({ projects }: { projects: ProjectDataType[] }) => {
  const searchParams = useSearchParams();
  const getCategory = searchParams.get("category");

  const [activeFilter, setActiveFilter] = useState(
    getCategory && filters.includes(getCategory) ? getCategory : "All",
  );

  const [selectedProject, setSelectedProject] =
    useState<ProjectDataType | null>(null);
  const [isMediaLoading, setIsMediaLoading] = useState(false);

  const handleSelectProject = (project: ProjectDataType) => {
    setSelectedProject(project);
    setIsMediaLoading(true);
  };

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

  const filteredData = (projects || []).filter(
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
              className={`px-7 py-3 rounded-full text-[1.1rem]! font-semibold transition-all duration-300 border cursor-pointer ${
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
                      onClick={() => handleSelectProject(project)}
                      className="ul_project_banner_box w-inline-block cursor-pointer lg:h-[90vh]! overflow-hidden!"
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
                        onClick={() => handleSelectProject(project)}
                        className="ul_project_content_title w-inline-block hover:text-[#fbd30b]! cursor-pointer"
                      >
                        <div>{project.title}</div>
                      </div>
                      <p className="ul_short_des">{project.description}</p>
                      <div className="ul_button_box ul_project_content_button flex! lg:flex-row flex-col justify-between! gap-5">
                        <ButtonSolid
                          dataWId="da9bfb3c-ccb1-8ed7-5ccf-98618904e97d"
                          onClick={() => handleSelectProject(project)}
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
              .swiper-button-next, .swiper-button-prev {
                background-color: rgba(20, 20, 20, 0.7);
                width: 44px !important;
                height: 44px !important;
                border-radius: 15px;
                color: #fbd30b !important;
              }
              .swiper-button-next::after, .swiper-button-prev::after {
                font-size: 20px !important;
              }
              .swiper-pagination-bullet {
                width: 12px !important;
                height: 12px !important;
                background: rgba(255, 255, 255, 0.4) !important;
                opacity: 1 !important;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                width: 35px !important;
                border-radius: 15px !important;
                background: #fbd30b !important;
              }
            `,
            }}
          />
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => {
          setSelectedProject(null);
          setIsMediaLoading(false);
        }}
        className="bg-[#111]! text-white flex flex-col justify-center items-center relative overflow-hidden"
      >
        {isMediaLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#111] z-50">
            <div className="w-12 h-12 border-4 border-[#fbd30b] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {selectedProject && (
          <>
            {/* Media Content */}
            {selectedProject.mediaType === "image" && (
              Array.isArray(selectedProject.mediaUrl) ? (
                <div className="w-[100vw] h-[100vh] md:w-[90vw] md:max-w-6xl md:h-[85vh] flex items-center justify-center p-2 md:p-4">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    style={{
                      "--swiper-navigation-color": "#fbd30b",
                      "--swiper-pagination-color": "#fbd30b",
                      "--swiper-navigation-size": "30px",
                    } as React.CSSProperties}
                    className="w-full h-full rounded-lg"
                  >
                    {selectedProject.mediaUrl.map((url, idx) => (
                      <SwiperSlide key={idx} className="flex! items-center! justify-center! h-full w-full">
                        <img
                          src={url}
                          alt={`${selectedProject.title} ${idx + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg mx-auto"
                          onLoad={idx === 0 ? () => setIsMediaLoading(false) : undefined}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedProject.mediaUrl as string}
                  alt={selectedProject.title}
                  className="max-w-full max-h-[100vh] md:max-h-[90vh] object-contain rounded-lg p-2 md:p-4"
                  onLoad={() => setIsMediaLoading(false)}
                />
              )
            )}
            {selectedProject.mediaType === "video" &&
              ((selectedProject.mediaUrl as string).includes("youtube.com") ||
              (selectedProject.mediaUrl as string).includes("youtu.be") ? (
                <iframe
                  src={(selectedProject.mediaUrl as string)
                    .replace("watch?v=", "embed/")
                    .replace("youtu.be/", "youtube.com/embed/")}
                  className="w-[90vw] max-w-5xl aspect-video rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsMediaLoading(false)}
                />
              ) : (
                <video
                  src={selectedProject.mediaUrl as string}
                  controls
                  className="max-w-full max-h-[100vh] object-contain rounded-lg"
                  autoPlay
                  onLoadedData={() => setIsMediaLoading(false)}
                />
              ))}
            {selectedProject.mediaType === "pdf" && (
              <iframe
                src={selectedProject.mediaUrl as string}
                className="w-full h-[100vh] rounded-lg bg-white"
                onLoad={() => setIsMediaLoading(false)}
              />
            )}
          </>
        )}
      </Modal>
    </section>
  );
};

const ProjectsListSect = ({ projects }: { projects: ProjectDataType[] }) => {
  return (
    <Suspense
      fallback={<div className="py-20 text-center text-white">Loading...</div>}
    >
      <ProjectsListContent projects={projects} />
    </Suspense>
  );
};

export default ProjectsListSect;
