"use client";

import { useEffect } from "react";

const AboutHeroSect = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (win.Webflow && win.Webflow.require) {
      const lightbox = win.Webflow.require("lightbox");
      if (lightbox) {
        lightbox.ready();
      }
    }
  }, []);

  return (
    <section className="ul_inner_hero_banner_sect">
      <div className="container">
        <div
          data-w-id="aae436bf-0d55-0047-88cf-a444261bf362"
          className="ul_about_title_box"
        >
          <h2 className="ul_inner_hero_banner_title ul_about_title">
            Advice on <span className="ul_about_title_span">Creativity</span>
          </h2>
          <p className="ul_short_des ul_about_short_des">
            We blend imagination with strategy to craft impactful digital experiences.
          </p>
        </div>
        <div
          data-w-id="bccabd5f-359f-9136-0a0e-d62adce5a60d"
          className="ul_about_hero_banner_grid_box"
        >
          <div
            data-w-id="bbeb8eb2-ebc8-a4ba-b91f-8bf107833555"
            className="ul_about_hero_banner_items"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/about_banner_one.jpg"
              loading="lazy"
              alt="banner"
              className="ul_about_hero_banner img_hover"
            />
          </div>
          <div
            data-w-id="bbd53856-e57f-179a-aee8-3b80638ca729"
            className="ul_about_hero_banner_items"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/about_banner_two.jpg"
              loading="lazy"
              alt="banner"
              className="ul_about_hero_banner img_hover"
            />
            <div className="ul_about_hero_banner_items_shadow"></div>
            <a href="#" className="ul_about_hero_banner_lightbox w-inline-block w-lightbox">
              <div className="ul_about_hero_banner_lightbox_icon_box">
                <div className="fa-solid fa-play text-[#fbd30b]!"></div>
              </div>
              <script
                type="application/json"
                className="w-json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    items: [
                      {
                        url: "https://www.youtube.com/watch?v=TLYlXI8HpH0",
                        originalUrl: "https://www.youtube.com/watch?v=TLYlXI8HpH0",
                        width: 940,
                        height: 528,
                        thumbnailUrl: "https://i.ytimg.com/vi/TLYlXI8HpH0/hqdefault.jpg",
                        html: "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FTLYlXI8HpH0%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTLYlXI8HpH0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTLYlXI8HpH0%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
                        type: "video",
                      },
                    ],
                    group: "",
                  }),
                }}
              />
            </a>
          </div>
          <div
            data-w-id="b78a2fb6-8e79-40f0-9570-a6c1430dccba"
            className="ul_about_hero_banner_items"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/about_banner_there.jpg"
              loading="lazy"
              alt="banner"
              className="ul_about_hero_banner img_hover"
            />
          </div>
        </div>
      </div>
      <div className="d-none w-embed">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

export default AboutHeroSect;
