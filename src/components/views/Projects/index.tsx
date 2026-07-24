"use client";

import { useWFPage } from "@/hooks/useWFPage";
import ProjectsHeroSect from "./ProjectsHeroSect";
import ProjectsListSect from "./ProjectsListSect";

const ProjectsPage = () => {
  useWFPage("692ec84ae383c17227fc8daf");

  return (
    <>
      <ProjectsHeroSect />
      <ProjectsListSect />
    </>
  );
};

export default ProjectsPage;
