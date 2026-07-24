"use client";

import Link from "next/link";

const EXCELLENCE_DATA = [
  {
    id: "1",
    img: "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736.jpg",
    type: "App Development",
    title: "Pulsefit Gym Website",
    des: "An innovative SaaS platform website built with user-first design principles, offering seamless navigation and dynamic content presentation.",
    link: "/projects/pulsefit-gym-websie"
  },
  {
    id: "2",
    img: "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f414dc8a1456b682e8d3a_hero01.jpg",
    type: "E-commerce",
    title: "Aiflow Agency Website",
    des: "A corporate finance consultancy site developed for maximum clarity, blending minimalist design with impactful storytelling to build trust.",
    link: "/projects/aiflow-agency-website"
  }
];

const ProjectExcellenceSect = () => {
  return (
    <div className="ul_project_excellence_sect">
      <div className="container">
        <div className="ul_project_excellence_title_box hm-aboutus-animatedtext">
          <h2 className="ul_title">Showcase of Excellence</h2>
        </div>
        <div className="ul_project_excellence_flex_box">
          <div className="w-dyn-list">
            <div role="list" className="ul_project_excellence_list w-dyn-items">
              {EXCELLENCE_DATA.map((item) => (
                <div 
                  key={item.id}
                  data-w-id="394ebf8e-b0cf-6e01-1d7b-e49e3e3c6b7f" 
                  role="listitem" 
                  className="ul_project_excellence_items w-dyn-item"
                >
                  <div className="ul_project_excellence_box">
                    <Link href={item.link} className="ul_project_excellence_img_box w-inline-block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.img} 
                        loading="lazy" 
                        alt={item.title} 
                        className="ul_project_excellence_img" 
                      />
                    </Link>
                    <div className="ul_project_excellence_content_box">
                      <Link href={item.link} className="ul_project_excellence_content_type w-inline-block hover:bg-[#fbd30b]! hover:border-[#fbd30b]!">
                        <div>{item.type}</div>
                      </Link>
                      <Link href={item.link} className="ul_project_excellence_content_title w-inline-block hover:text-[#fbd30b]!">
                        <div>{item.title}</div>
                      </Link>
                      <p className="ul_short_des ul_project_excellence_content_des">{item.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {EXCELLENCE_DATA.length === 0 && (
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectExcellenceSect;
