"use client";

const CoreSect = () => {
  return (
    <section className="ul_core_sect">
      <div className="container">
        <div className="ul_title_with_des_box">
          <h2 className="ul_title">Our Core Values</h2>
          <p className="ul_short_des ul_short_des_max_width">
            Our core values shape our culture, drive our decisions, and keep us aligned with your success.
          </p>
        </div>
        <div className="ul_core_grid_box">
          <div
            data-w-id="6f3649d4-482d-b3b6-1083-b30beb28fdd7"
            className="ul_core_items_one"
          >
            <div className="ul_core_one_content_box">
              <h3 className="ul_core_one_content_title">Team Collaboration</h3>
              <p className="ul_short_des">
                We believe the best ideas are born through collaboration. Our diverse team of designers, developers, and strategists work together to turn visions into reality.
              </p>
            </div>
            <div data-w-id="f4dda4cf-feda-f507-09b3-759ca60bf3b4" className="ul_core_one_banner_box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/core_banner_1.jpg"
                loading="lazy"
                alt="core banner"
                className="ul_core_one_banner img_hover"
              />
            </div>
          </div>
          <div
            data-w-id="14744500-7c8c-5ada-4282-d887dfd403f2"
            className="ul_core_items_two"
          >
            <div data-w-id="91d9aaec-f432-3324-b2b1-dcd72266235d" className="ul_core_two_banner_box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/core_banner_2.jpg"
                loading="lazy"
                alt="core Banner"
                className="ul_core_two_banner img_hover"
              />
            </div>
            <div className="ul_core_two_content_box">
              <h3 className="ul_core_one_content_title">100% safe &amp; secure</h3>
              <p className="ul_short_des">
                Your brand’s trust is our top priority. We ensure every project follows a transparent, secure process to protect your creative assets and digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSect;
