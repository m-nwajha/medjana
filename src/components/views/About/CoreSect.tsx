"use client";

const CoreSect = () => {
  return (
    <section className="ul_core_sect">
      <div className="container">
        <div className="ul_title_with_des_box">
          <h2 className="ul_title">Grundwerte</h2>
          <p className="ul_short_des ul_short_des_max_width">
            Unsere Grundwerte prägen unsere Arbeitsweise und sorgen dafür, dass
            Ihr Erfolg bei uns im Mittelpunkt steht.
          </p>
        </div>
        <div className="ul_core_grid_box">
          <div
            data-w-id="6f3649d4-482d-b3b6-1083-b30beb28fdd7"
            className="ul_core_items_one"
          >
            <div className="ul_core_one_content_box">
              <h3 className="ul_core_one_content_title">
                Persönliche Beratung
              </h3>
              <p className="ul_short_des">
                Wir hören zu, verstehen Ihre Ziele und entwickeln individuelle
                Lösungen.
              </p>
            </div>
            <div
              data-w-id="f4dda4cf-feda-f507-09b3-759ca60bf3b4"
              className="ul_core_one_banner_box"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/about-b1.png"
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
            <div
              data-w-id="91d9aaec-f432-3324-b2b1-dcd72266235d"
              className="ul_core_two_banner_box"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/about-b2.png"
                loading="lazy"
                alt="core Banner"
                className="ul_core_two_banner img_hover"
              />
            </div>
            <div className="ul_core_two_content_box">
              <h3 className="ul_core_one_content_title">
                Zuverlässige Umsetzung
              </h3>
              <p className="ul_short_des">
                Klare Prozesse, feste Ansprechpartner und termingerechte
                Ergebnisse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSect;
