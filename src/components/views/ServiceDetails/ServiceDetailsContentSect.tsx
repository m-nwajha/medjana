"use client";

import Image from "next/image";
import { Service } from "@/app/services/[id]/page";

interface ServiceDetailsContentSectProps {
  service: Service;
}

const ServiceDetailsContentSect = ({
  service,
}: ServiceDetailsContentSectProps) => {
  const {
    imageThumb,
    description,
    summaryParagraphs,
    offerItems,
    figureImages,
    title,
  } = service;

  return (
    <section className="ul_service_details_sect">
      <div className="container">
        <div className="ul_service_details_content_box">
          <div className="ul_service_details_banner_box">
            <Image
              src={imageThumb}
              alt={title}
              width={1344}
              height={600}
              loading="lazy"
              sizes="100vw"
              className="ul_service_details_banner"
            />
          </div>
          <div className="w-richtext">
            <p>{description}</p>

            <h3>Detaillierte Zusammenfassung</h3>
            {summaryParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <h3>Was wir bieten</h3>
            <ul role="list">
              {offerItems.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            {/* {figureImages?.[0] && (
              <figure className="w-richtext-align-floatleft w-richtext-figure-type-image">
                <div>
                  <Image
                    src={figureImages[0]}
                    alt={title}
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </figure>
            )}

            {figureImages?.[1] && (
              <figure className="w-richtext-align-floatright w-richtext-figure-type-image">
                <div>
                  <Image
                    src={figureImages[1]}
                    alt={title}
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </figure>
            )} */}
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

export default ServiceDetailsContentSect;
