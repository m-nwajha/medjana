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
            Gute Gestaltung muss mehr können als gut aussehen. counter Sie soll
            Ihr Angebot verständlich machen counter Vertrauen schaffen und im
            Kopf bleiben. counter Medjana verbindet kreative Ideen mit
            praktischer Umsetzung . online, auf Papier und direkt vor Ort
          </p>
        </div>
        <div className="ul_about_card_flex_box">
          <div
            data-w-id="4041d308-b0ef-de24-4b28-ef897502b955"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                360°
              </h2>
              <p className="ul_short_des">Ein Ansprechpartner</p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                Von der ersten Idee bis zur fertigen Umsetzung begleiten wir Sie
                persönlich - ohne Umwege über mehrere Ansprechpartner oder
                Agenturen.
              </p>
            </div>
          </div>
          <div
            data-w-id="2026ba38-bd76-1955-c9e1-f415dc6121fd"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                100 %
              </h2>
              <p className="ul_short_des">Komplettservice</p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                Ob Druck, Webdesign oder Werbetechnik - wir decken alle Bereiche
                ab, damit Ihr Auftritt überall aus einem Guss wirkt.
              </p>
            </div>
          </div>
          <div
            data-w-id="eb4f1786-77ad-bca3-485a-f6e8236b6d73"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">
                12+
              </h2>
              <p className="ul_short_des">Jahre Erfahrung</p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                Über die Jahre haben wir Gastronomen und lokale Unternehmen
                dabei begleitet, sichtbar zu werden und im Kopf ihrer Gäste zu
                bleiben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSect;
