"use client";

import { ReactNode } from "react";

interface LegalContentSectProps {
  children: ReactNode;
}

const LegalContentSect = ({ children }: LegalContentSectProps) => {
  return (
    <section className="ul_service_details_sect">
      <div className="container">
        <div className="ul_service_details_content_box">
          <div className="w-richtext">
            {children}
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .ul_service_details_content_box ul{
              list-style: none;
              padding: 0;
            }
            .ul_service_details_content_box figure{
              width: calc(50% - 12px) !important;
              overflow: hidden;
              border-radius: 24px;
              margin: 0 !important;
              margin-top: 32px !important;
            }
            .ul_service_details_content_box figure img{
              width: 100%;
              height: auto;
            }
            @media screen and (max-width: 768px) {
                .ul_service_details_content_box figure{
                  max-width: 100% !important;
                  width: 100% !important;
                }
            }
          `,
          }}
        />
      </div>
    </section>
  );
};

export default LegalContentSect;
