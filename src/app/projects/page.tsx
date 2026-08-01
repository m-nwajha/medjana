import { Metadata } from "next";
import ProjectsPage from "@/components/views/Projects";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Ein Einblick in unsere Arbeit - Projekte, die zeigen, wie wir Ideen mit Wirkung",
};

export default function Projects() {
  return <ProjectsPage />;
}
