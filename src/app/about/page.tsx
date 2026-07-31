import AboutPage from "@/components/views/About";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Medjana kennen - Ihre Kreativagentur aus Laatzen für Design, Druck und digitale Lösungen.",
};

export default function About() {
  return <AboutPage />;
}
