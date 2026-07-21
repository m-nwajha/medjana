"use client";

const StorySect = () => {
  return (
    <section className="ul_story_sect">
      <div className="container">
        <div
          data-w-id="c88fe188-2514-8ff7-ad34-837dc933de0d"
          className="ul_story_short_des_flex_box"
        >
          <div className="ul_story_short_des_box">
            <p className="ul_story_short_des">Our campaigns create unforgettable experiences.</p>
          </div>
          <div className="ul_story_short_des_box">
            <p className="ul_story_short_des">How brands are transforming their digital presence.</p>
          </div>
        </div>
        <div
          data-w-id="37aed0df-9274-b657-af77-c9d739caea88"
          className="ul_story_banner_box"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/story_banner.jpg"
            loading="lazy"
            alt="story Banner"
            className="ul_story_banner"
          />
        </div>
      </div>
    </section>
  );
};

export default StorySect;
