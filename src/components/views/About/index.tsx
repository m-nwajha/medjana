"use client";
import AboutHeroSect from "./AboutHeroSect";
import AboutSect from "./AboutSect";
import CoreSect from "./CoreSect";
// import AwardingSect from "./AwardingSect";
import { useWFPage } from "@/hooks/useWFPage";

const AboutPage = () => {
  useWFPage("692ec84ae383c17227fc8dac");

  return (
    <>
      <AboutHeroSect />
      <AboutSect />
      <CoreSect />
      {/* <AwardingSect /> */}
    </>
  );
};

export default AboutPage;
