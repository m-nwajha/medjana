"use client";

import { useWebflowReinit } from "@/hooks/useWebflowReinit";
import Link from "next/link";

const ProjectSect = () => {
    useWebflowReinit(["ix2"]);

  return (
    <section className="ul_home_project_sect">
      <div className="container">
        <div className="ul_title_with_des_box">
          <h2 className="ul_title lg:text-[2.8rem]!">Design, das im Alltag funktioniert.</h2>
          <p className="ul_short_des ul_short_des_max_width">
            Jedes Projekt beginnt mit Zuhören. So entsteht keine Lösung von der
            Stange, sondern genau das, was Sie wirklich brauchen.
          </p>
        </div>
        <div className="ul_home_project_collection_wrapper w-dyn-list">
          <div
            role="list"
            className="ul_home_project_collection_list w-dyn-items "
          >
            <div
              role="listitem"
              className="ul_home_project_collection_items w-dyn-item"
            >
              <Link
                href="/project/fasho-ecommerce-website"
                className="ul_home_project_collection_box w-inline-block hover:bg-[#fbd30b]!"
              >
                <div className="ul_home_project_name_flex_box">
                  <h3 className="ul_home_project_name">Fasho</h3>
                  <div className="ul_home_project_type">
                    <div>Redesign</div>
                  </div>
                </div>
                <div className="ul_home_project_content_flex_box">
                  <div
                    data-w-id="e032babd-685a-cc0e-0a22-43fd7be77919"
                    className="ul_home_project_img_box"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f40a9ebbf0f52ed27fd7d_Home_3.jpg"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f40a9ebbf0f52ed27fd7d_Home_3-p-500.jpg 500w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f40a9ebbf0f52ed27fd7d_Home_3-p-800.jpg 800w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f40a9ebbf0f52ed27fd7d_Home_3-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f40a9ebbf0f52ed27fd7d_Home_3.jpg 1206w"
                      className="ul_home_project_img img_hover"
                    />
                  </div>
                  <div className="ul_home_project_content_box">
                    <h3 className="ul_home_project_content_title">
                      Fasho eCommerce Website
                    </h3>
                    <p className="ul_short_des">
                      A creative portfolio website designed to highlight brand
                      excellence, crafted with modern layouts and engaging
                      visuals to capture audience attention.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              role="listitem"
              className="ul_home_project_collection_items w-dyn-item"
            >
              <Link
                href="/project/pulsefit-gym-websie"
                className="ul_home_project_collection_box w-inline-block hover:bg-[#fbd30b]!"
              >
                <div className="ul_home_project_name_flex_box">
                  <h3 className="ul_home_project_name">Pulsefit</h3>
                  <div className="ul_home_project_type">
                    <div>App Development</div>
                  </div>
                </div>
                <div className="ul_home_project_content_flex_box">
                  <div
                    data-w-id="e032babd-685a-cc0e-0a22-43fd7be77919"
                    className="ul_home_project_img_box"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736.jpg"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736-p-500.jpg 500w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736-p-800.jpg 800w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f41044f2ee1521c185469_Frame_1171275736.jpg 1206w"
                      className="ul_home_project_img img_hover"
                    />
                  </div>
                  <div className="ul_home_project_content_box">
                    <h3 className="ul_home_project_content_title">
                      Pulsefit Gym Websie
                    </h3>
                    <p className="ul_short_des">
                      An innovative SaaS platform website built with user-first
                      design principles, offering seamless navigation and
                      dynamic content presentation.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              role="listitem"
              className="ul_home_project_collection_items w-dyn-item"
            >
              <Link
                href="/project/aiflow-agency-website"
                className="ul_home_project_collection_box w-inline-block hover:bg-[#fbd30b]!"
              >
                <div className="ul_home_project_name_flex_box">
                  <h3 className="ul_home_project_name">Aiflow</h3>
                  <div className="ul_home_project_type">
                    <div>E-commerce</div>
                  </div>
                </div>
                <div className="ul_home_project_content_flex_box">
                  <div
                    data-w-id="e032babd-685a-cc0e-0a22-43fd7be77919"
                    className="ul_home_project_img_box"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f414dc8a1456b682e8d3a_hero01.jpg"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f414dc8a1456b682e8d3a_hero01-p-500.jpg 500w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f414dc8a1456b682e8d3a_hero01-p-800.jpg 800w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f414dc8a1456b682e8d3a_hero01-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f414dc8a1456b682e8d3a_hero01.jpg 1206w"
                      className="ul_home_project_img img_hover"
                    />
                  </div>
                  <div className="ul_home_project_content_box">
                    <h3 className="ul_home_project_content_title">
                      Aiflow Agency Website
                    </h3>
                    <p className="ul_short_des">
                      A corporate finance consultancy site developed for maximum
                      clarity, blending minimalist design with impactful
                      storytelling to build trust.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .ul_home_project_collection_items:nth-child(2){
            top: 60px
          }
          .ul_home_project_collection_items:nth-child(3){
            top: 90px
          }
        `,
          }}
        />
      </div>
    </section>
  );
};

export default ProjectSect;
