"use client";

import { useWFPage } from "@/hooks/useWFPage";
import ProjectsHeroSect from "./ProjectsHeroSect";
import ProjectsListSect from "./ProjectsListSect";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectsPage = ({ getData }: { getData: any[] }) => {
  useWFPage("692ec84ae383c17227fc8daf");

  return (
    <>
      <ProjectsHeroSect />
      <ProjectsListSect projects={getData} />
    </>
  );
};

export default ProjectsPage;
