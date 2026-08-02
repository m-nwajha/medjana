import { useHeroReveal } from "@/hooks/useHeroReveal";
import { useWebflowReinit } from "@/hooks/useWebflowReinit";
import Image from "next/image";

const HERO_ELEMENT_IDS = [
  "6257fdfb-ddb3-0e3b-7a19-3c31ebb942b3",
  "aac156d4-5b26-1fa6-8081-f692a311913b",
];

const Hero = () => {
  useWebflowReinit(["ix2"]);
  useHeroReveal(HERO_ELEMENT_IDS);

  return (
    <section className="ul_hero_banner_sect">
      <div className="container">
        <div
          data-w-id="6257fdfb-ddb3-0e3b-7a19-3c31ebb942b3"
          className="ul_hero_banner_items_box"
        >
          <div className="ul_hero_banner_items_one">
            <div className="ul_hero_banner_sub_title_dot bg-[linear-gradient(135deg,#fdd309,#221e05)]!"></div>
            <h4 className="ul_hero_banner_sub_title">
              Kreativagentur aus Laatzen
            </h4>
          </div>
          <div className="ul_hero_banner_items_two">
            <div className="ul_hero_banner_experience">
              {/* <h3 className="ul_hero_banner_experience_years">12+</h3> */}
              <p className="ul_hero_banner_experience_content">
                Design · Druck · Digital - alles aus einer Hand.
              </p>
            </div>
            <h1 className="ul_hero_banner_title" style={{ fontSize: "6rem" }}>
              SICHTBARE IDEEN
            </h1>
          </div>
        </div>
      </div>
      <div
        data-w-id="f0432b5f-5394-2035-b2ac-413de02fa625"
        className="video_wall"
      >
        <div className="video_section">
          <div className="video_wrap">
            <div className="video_box">
              <div className="video_bg">
                <Image
                  src="/assets/images/hero-image.png"
                  alt=""
                  fill
                  sizes="100vw"
                  className="img-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            data-w-id="aac156d4-5b26-1fa6-8081-f692a311913b"
            className="ul_hero_banner_short_des_box"
          >
            <p className="ul_hero_banner_short_des">
              Wir verbinden Kreativität mit Strategie für wirkungsvolle
              Ergebnisse.
            </p>
            <h4 className="ul_hero_banner_short_des_year">
              @{new Date().getFullYear()}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
