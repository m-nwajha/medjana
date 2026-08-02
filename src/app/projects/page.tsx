import { Metadata } from "next";
import ProjectsPage from "@/components/views/Projects";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Ein Einblick in unsere Arbeit - Projekte, die zeigen, wie wir Ideen mit Wirkung",
};

export default async function Projects() {
  let projects = [];
  try {
    const res = await fetch("http://localhost:5000/projects", {
      next: {
        revalidate: 60,
      },
    });
    projects = await res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    projects = [];
  }

  return <ProjectsPage getData={projects} />;
}
