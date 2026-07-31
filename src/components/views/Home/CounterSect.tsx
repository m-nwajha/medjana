"use client";

import { useCounterUp } from "@/hooks/useCounterup";
import { useTextSweepReveal } from "@/hooks/useTextSweepReveal";
import { useRef } from "react";

const CounterSect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useCounterUp(sectionRef);
  useTextSweepReveal(sectionRef, ".ul_text_amin_two *");

  return (
    <section className="ul_counter_sect">
      <div className="container" ref={sectionRef}>
        <div
          data-w-id="8d25f97b-8147-8797-31bf-54672ac2f90f"
          className="ul_counter_des_box ul_text_amin_two"
        >
          <p className="ul_counter_des">Gute Gestaltung muss mehr können als</p>
          <p className="ul_counter_des">gut aussehen.</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/counter_img_3counter_img_1.png"
            loading="lazy"
            alt="counter"
            className="ul_counter_img hm-aboutus-image"
          />
          <p className="ul_counter_des">Sie soll Ihr Angebot</p>
          <p className="ul_counter_des">verständlich machen</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/counter_img_4counter_img_2.png"
            loading="lazy"
            alt="counter"
            className="ul_counter_img hm-aboutus-image"
          />
          <p className="ul_counter_des">Vertrauen schaffen</p>
          <p className="ul_counter_des">und im Kopf bleiben.</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/counter_img_5.png"
            loading="lazy"
            alt="counter"
            className="ul_counter_img hm-aboutus-image"
          />
          <p className="ul_counter_des">Medjana verbindet</p>
          <p className="ul_counter_des">
            kreative Ideen mit praktischer Umsetzung .
          </p>
          <p className="ul_counter_des">
            online, auf Papier und direkt vor Ort
          </p>
        </div>

        <div className="ul_counter_box">
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">360°</h2>
            <p className="ul_counter_short_des">Ein Ansprechpartner</p>
          </div>
          <div className="ul_counter_item_border"></div>
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">100 %</h2>
            <p className="ul_counter_short_des">Komplettservice</p>
          </div>
          <div className="ul_counter_item_border"></div>
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">12+</h2>
            <p className="ul_counter_short_des">Erfahrung</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSect;
