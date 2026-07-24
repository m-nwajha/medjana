"use client";

import { useWFPage } from "@/hooks/useWFPage";
import ProjectDetailsHeroSect from "./ProjectDetailsHeroSect";
import ProjectDetailsContentSect from "./ProjectDetailsContentSect";
import ProjectExcellenceSect from "./ProjectExcellenceSect";

const ProjectDetailsPage = () => {
  useWFPage("692ec84ae383c17227fc8da9");

  return (
    <>
      <ProjectDetailsHeroSect />
      <ProjectDetailsContentSect />
      <ProjectExcellenceSect />
    </>
  );
};

export default ProjectDetailsPage;
