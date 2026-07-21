import Image from "next/image";
const Hero = () => {
  return (
    <section className="ul_hero_banner_sect">
      <div className="container">
        <div
          data-w-id="6257fdfb-ddb3-0e3b-7a19-3c31ebb942b3"
          className="ul_hero_banner_items_box"
        >
          <div className="ul_hero_banner_items_one">
            <div className="ul_hero_banner_sub_title_dot bg-[linear-gradient(135deg,#fdd309,#221e05)]!"></div>
            <h4 className="ul_hero_banner_sub_title">we are ferula</h4>
          </div>
          <div className="ul_hero_banner_items_two">
            <div className="ul_hero_banner_experience">
              <h3 className="ul_hero_banner_experience_years">12+</h3>
              <p className="ul_hero_banner_experience_content">
                years of experience
              </p>
            </div>
            <h1 className="ul_hero_banner_title">Creative Agency</h1>
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
                  src="/assets/images/home_hero_banner.jpg"
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
              We combine imagination with strategy to achieve impactful results
            </p>
            <h4 className="ul_hero_banner_short_des_year">@2025</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
