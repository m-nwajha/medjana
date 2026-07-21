"use client";

import ButtonSolid from "@/components/ui/ButtonSolid";

const ProvideSect = () => {
  return (
    <section className="ul_provide_sect">
      <div className="container ul_provide_top_border"></div>
      <div className="container">
        <div className="ul_title_with_des_box">
          <h2 className="ul_title">What we provide</h2>
        </div>
        <div
          data-w-id="895bdf02-9d7d-7256-9f57-c235533d8f6f"
          className="ul_provide_wrapper_box"
        >
          <div
            data-current="Tab 1"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="ul_provide_tab w-tabs"
          >
            <div className="ul_provide_tab_menu w-tab-menu">
              <a
                data-w-tab="Tab 1"
                className="ul_provide_tab_link w-inline-block w-tab-link w--current"
              >
                <div>Brand Identity</div>
              </a>
              <a
                data-w-tab="Tab 2"
                className="ul_provide_tab_link w-inline-block w-tab-link"
              >
                <div className="text-block">Digital Marketing</div>
              </a>
              <a
                data-w-tab="Tab 3"
                className="ul_provide_tab_link w-inline-block w-tab-link"
              >
                <div>Web Development</div>
              </a>
              <a
                data-w-tab="Tab 4"
                className="ul_provide_tab_link w-inline-block w-tab-link"
              >
                <div>UI UX Design</div>
              </a>
            </div>
            <div className="ul_provide_tab_content w-tab-content">
              <div
                data-w-tab="Tab 1"
                className="ul_provide_tab_pane w-tab-pane w--tab-active"
              >
                <div className="ul_provide_content_flex_box">
                  <div className="ul_provide_content_banner_box">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="banner"
                      src="/assets/images/New-Project.jpg"
                      loading="lazy"
                      className="ul_provide_content_banner"
                    />
                  </div>
                  <div className="ul_provide_content_box">
                    <p className="ul_short_des">
                      Creative solutions, and a deep understanding of your
                      business goals. Whether you&#x27;re a startup or an
                      established enterprise
                    </p>
                    <ButtonSolid
                      dataWId="7dd50d61-e656-0792-5541-d66952ad9514"
                      className="mt-8"
                      label="Explore More"
                      href="/services"
                    />
                  </div>
                </div>
              </div>
              <div
                data-w-tab="Tab 2"
                className="ul_provide_tab_pane w-tab-pane"
              >
                <div className="ul_provide_content_flex_box">
                  <div className="ul_provide_content_banner_box">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="banner"
                      src="/assets/images/New-Project-1.jpg"
                      loading="lazy"
                      className="ul_provide_content_banner"
                    />
                  </div>
                  <div className="ul_provide_content_box">
                    <p className="ul_short_des">
                      Driving targeted traffic and leads with creative
                      strategies tailored to your growth ambitions.
                    </p>
                    <ButtonSolid
                      dataWId="15438d65-7779-97d6-f7ae-d8e904ad86ea"
                      className="mt-8"
                      label="Explore More"
                      href="/services"
                    />
                  </div>
                </div>
              </div>
              <div
                data-w-tab="Tab 3"
                className="ul_provide_tab_pane w-tab-pane"
              >
                <div className="ul_provide_content_flex_box">
                  <div
                    data-w-id="7dd50d61-e656-0792-5541-d66952ad950e"
                    className="ul_provide_content_banner_box"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="banner"
                      src="/assets/images/provide_banner_one.jpg"
                      loading="lazy"
                      className="img_hover ul_provide_content_banner"
                    />
                  </div>
                  <div className="ul_provide_content_box">
                    <p className="ul_short_des">
                      Building fast, scalable websites with modern technologies
                      that empower your business success.
                    </p>
                    <ButtonSolid
                      dataWId="7dd50d61-e656-0792-5541-d66952ad9514"
                      className="mt-8"
                      label="Explore More"
                      href="/services"
                    />
                  </div>
                </div>
              </div>
              <div
                data-w-tab="Tab 4"
                className="ul_provide_tab_pane w-tab-pane"
              >
                <div className="ul_provide_content_flex_box">
                  <div className="ul_provide_content_banner_box">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="banner"
                      src="/assets/images/New-Project-2.jpg"
                      loading="lazy"
                      className="ul_provide_content_banner"
                    />
                  </div>
                  <div className="ul_provide_content_box">
                    <p className="ul_short_des">
                      Creative solutions backed by a deep understanding of your
                      goals — whether you&#x27;re launching a startup or scaling
                      an established brand.
                    </p>
                    <ButtonSolid
                      dataWId="15438d65-7779-97d6-f7ae-d8e904ad86ea"
                      className="mt-8"
                      label="Explore More"
                      href="/services"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvideSect;
