"use client";

import { useHeroReveal } from "@/hooks/useHeroReveal";

const HERO_ELEMENT_IDS = ["9c74a479-42e1-4444-7593-15860ddc7ca7"];

const ContactHeroSect = () => {
  useHeroReveal(HERO_ELEMENT_IDS);

  return (
    <section className="ul_inner_hero_banner_sect">
      <div className="container">
        <div
          data-w-id="9c74a479-42e1-4444-7593-15860ddc7ca7"
          className="ul_contact_hero_banner_title_box"
        >
          <h1 className="ul_inner_hero_banner_title">Contact Us</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSect;
