"use client";

import { useCounterUp } from "@/hooks/useCounterup";
import { useTextSweepReveal } from "@/hooks/useTextSweepReveal";
import { useEffect, useRef } from "react";

const AboutSect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useCounterUp(sectionRef);
  useTextSweepReveal(sectionRef, ".ul_text_amin_two *");

  return (
    <section className="ul_about_sect" ref={sectionRef}>
      <div className="container">
        <div
          data-w-id="60bdad17-0d3e-791e-c8a9-e3a4c2604976"
          className="ul_about_text_box ul_text_amin_two"
        >
          <p className="ul_about_text">
            At Ferula, we specialize in helping brands stand out in a crowded
            digital world. Our passion for creativity, innovation, and strategic
            growth drives every project we take on.
          </p>
        </div>
        <div className="ul_about_card_flex_box">
          <div
            data-w-id="4041d308-b0ef-de24-4b28-ef897502b955"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                23+
              </h2>
              <p className="ul_short_des">Brands Empowered</p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                We’ve partnered with brands across industries to craft
                distinctive digital identities that leave a lasting impact on
                their audiences.
              </p>
            </div>
          </div>
          <div
            data-w-id="2026ba38-bd76-1955-c9e1-f415dc6121fd"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                130+
              </h2>
              <p className="ul_short_des">Digital Solutions </p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                From websites to marketing campaigns, our creative solutions are
                tailored to spark growth, drive engagement, and fuel business
                success.
              </p>
            </div>
          </div>
          <div
            data-w-id="eb4f1786-77ad-bca3-485a-f6e8236b6d73"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                15+
              </h2>
              <p className="ul_short_des">Awards</p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                Our commitment to innovation and design excellence has earned us
                recognition from leading industry platforms and global creative
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSect;
