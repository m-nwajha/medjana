"use client";

import { useCounterUp } from "@/hooks/useCounterup";
import { useTextSweepReveal } from "@/hooks/useTextSweepReveal";
import { useRef } from "react";

const ProjectDetailsContentSect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useCounterUp(sectionRef);
  useTextSweepReveal(sectionRef, ".ul_text_amin_two *");

  return (
    <section className="ul_project_details_sect" ref={sectionRef}>
      <div className="container ul_project_details_container">
        <div className="ul_project_details_banner_box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f40a9ebbf0f52ed27fd7d_Home_3.jpg" 
            loading="lazy" 
            alt="banner" 
            className="ul_project_details_banner" 
          />
        </div>
        <div className="ul_project_publish_info_box">
          <div className="ul_project_publish_info_items">
            <p className="ul_project_publish_info_type">Client:</p>
            <h3 className="ul_project_publish_info">Fasho</h3>
          </div>
          <div className="ul_project_publish_info_items">
            <p className="ul_project_publish_info_type">Category:</p>
            <h3 className="ul_project_publish_info">Redesign</h3>
          </div>
          <div className="ul_project_publish_info_items">
            <p className="ul_project_publish_info_type">Date:</p>
            <h3 className="ul_project_publish_info">25 Dec 2025</h3>
          </div>
          <div className="ul_project_publish_info_items">
            <p className="ul_project_publish_info_type">Budget:</p>
            <h3 className="ul_project_publish_info">$150,000</h3>
          </div>
        </div>
        <div className="ul_project_details_short_des_flex_box">
          <div className="ul_project_details_short_des_box ul_text_amin_two">
            <p className="ul_project_details_short_des">A creative portfolio website designed to highlight brand excellence, crafted with modern layouts and engaging visuals to capture audience attention.</p>
          </div>
          <div className="ul_project_details_short_des_banner_box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680df95f66f6511b23662900_680df86c1cee1884a28ec5e4_service_banner_1.jpeg" 
              loading="lazy" 
              alt="banner" 
              className="ul_project_details_short_des_banner" 
            />
          </div>
        </div>
        <div className="w-richtext">
          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will.</p>
          <h3>Detailed summary</h3>
          <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsContentSect;
