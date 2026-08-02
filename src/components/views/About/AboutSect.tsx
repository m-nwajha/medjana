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
            Design ist für uns mehr als Ästhetik. Es schafft Orientierung, weckt
            Vertrauen und hinterlässt einen bleibenden Eindruck. Seit über 12
            Jahren begleiten wir Unternehmen mit kreativen Konzepten,
            hochwertigem Druck und durchdachten Markenauftritten – persönlich,
            zuverlässig und alles aus einer Hand.
          </p>
        </div>
        <div className="ul_about_card_flex_box">
          <div
            data-w-id="4041d308-b0ef-de24-4b28-ef897502b955"
            className="ul_about_card_items min-h-auto!"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                360°
              </h2>
              <p className="ul_short_des">
                Ganzheitliche Betreuung – von der Idee bis zur Umsetzung
              </p>
            </div>
          </div>
          <div
            data-w-id="2026ba38-bd76-1955-c9e1-f415dc6121fd"
            className="ul_about_card_items min-h-auto!"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                100 %
              </h2>
              <p className="ul_short_des">
                Alles aus einer Hand: Design, Print, Druck und Werbetechnik.
              </p>
            </div>
            {/* <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                Ob Druck, Webdesign oder Werbetechnik - wir decken alle Bereiche
                ab, damit Ihr Auftritt überall aus einem Guss wirkt.
              </p>
            </div> */}
          </div>
          <div
            data-w-id="eb4f1786-77ad-bca3-485a-f6e8236b6d73"
            className="ul_about_card_items min-h-auto!"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                12+
              </h2>
              <p className="ul_short_des">
                Praxisnahes Know-how für Unternehmen jeder Größe.
              </p>
            </div>
            {/* <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                Über die Jahre haben wir Gastronomen und lokale Unternehmen
                dabei begleitet, sichtbar zu werden und im Kopf ihrer Gäste zu
                bleiben.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSect;
