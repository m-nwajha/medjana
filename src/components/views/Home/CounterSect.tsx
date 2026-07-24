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
          <p className="ul_counter_des">
            Elevate your digital presence with distinction,
          </p>
          <p className="ul_counter_des">immerse</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/counter_img_3counter_img_1.png"
            loading="lazy"
            alt="counter"
            className="ul_counter_img hm-aboutus-image"
          />
          <p className="ul_counter_des">in boundless creativity. Our team of</p>
          <p className="ul_counter_des">designers and development</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/counter_img_4counter_img_2.png"
            loading="lazy"
            alt="counter"
            className="ul_counter_img hm-aboutus-image"
          />
          <p className="ul_counter_des">trailblazers</p>
          <p className="ul_counter_des">ignites</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/counter_img_5.png"
            loading="lazy"
            alt="counter"
            className="ul_counter_img hm-aboutus-image"
          />
          <p className="ul_counter_des">your digital vision</p>
        </div>

        <div className="ul_counter_box">
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">40+</h2>
            <p className="ul_counter_short_des">Satisfied clients</p>
          </div>
          <div className="ul_counter_item_border"></div>
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">100+</h2>
            <p className="ul_counter_short_des">Projects delivered</p>
          </div>
          <div className="ul_counter_item_border"></div>
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">12+</h2>
            <p className="ul_counter_short_des">years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSect;
