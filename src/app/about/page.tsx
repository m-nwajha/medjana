"use client";
import AboutHeroSect from "@/components/views/About/AboutHeroSect";
import AboutSect from "@/components/views/About/AboutSect";
import CoreSect from "@/components/views/About/CoreSect";
import AwardingSect from "@/components/views/About/AwardingSect";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSect />
      <AboutSect />
      <CoreSect />
      <AwardingSect />
    </>
  );
}
