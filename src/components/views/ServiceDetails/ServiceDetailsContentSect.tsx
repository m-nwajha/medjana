"use client";

const ServiceDetailsContentSect = () => {
  return (
    <section className="ul_service_details_sect">
      <div className="container">
        <div className="ul_service_details_content_box">
          <div className="ul_service_details_banner_box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f529fc847bab5604cab30_young-woman-order-purchase-product-internet-using-laptop-blithe.jpg" 
              loading="lazy" 
              alt="" 
              sizes="100vw" 
              srcSet="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f529fc847bab5604cab30_young-woman-order-purchase-product-internet-using-laptop-blithe-p-500.jpg 500w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f529fc847bab5604cab30_young-woman-order-purchase-product-internet-using-laptop-blithe-p-800.jpg 800w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f529fc847bab5604cab30_young-woman-order-purchase-product-internet-using-laptop-blithe-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f529fc847bab5604cab30_young-woman-order-purchase-product-internet-using-laptop-blithe.jpg 1344w" 
              className="ul_service_details_banner" 
            />
          </div>
          <div className="w-richtext">
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain</p>
            <h3>Detailed summary</h3>
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain</p>
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances</p>
            <h3>What We Offer</h3>
            <ul role="list">
              <li><strong>Custom Website Design:</strong> Unique and visually appealing designs that reflect your brand.</li>
              <li><strong>Responsive Development:</strong> Websites optimized for all devices, ensuring a seamless user experience.</li>
              <li><strong>E-Commerce Solutions:</strong> Scalable platforms that drive online sales and enhance customer satisfaction.</li>
              <li><strong>CMS Integration:</strong> Easy-to-manage content solutions for effortless updates.</li>
              <li><strong>Performance Optimization:</strong> Fast-loading websites that are SEO-friendly and reliable.</li>
            </ul>
            <figure className="w-richtext-align-floatleft w-richtext-figure-type-image">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" alt="" src="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680df95f66f6511b23662900_680df86c1cee1884a28ec5e4_service_banner_1.jpeg" />
              </div>
            </figure>
            <figure className="w-richtext-align-floatright w-richtext-figure-type-image">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" alt="" src="https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680df95f66f6511b236628fd_680df87e0996393aaf0a1c17_service_banner_2.jpeg" />
              </div>
            </figure>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{
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
            }
            @media screen and (max-width: 768px) {
                .ul_service_details_content_box figure{
                  max-width: 100% !important;
                  width: 100% !important;
                }
            }
          `
        }} />
      </div>
    </section>
  );
};

export default ServiceDetailsContentSect;
