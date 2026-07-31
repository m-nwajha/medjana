import Link from "next/link";

const Footer = () => {
  return (
    <footer className="ul_footer_sect">
      <div className="container">
        <div
          data-w-id="59180ab9-397e-9f6d-dae3-0257f441fb3a"
          className="ul_footer_title_box"
        >
          <h1 className="ul_footer_title">REDEN WIR</h1>
          <Link
            href="/contact"
            className="ul_footer_title_button w-inline-block hover:bg-[#fbd30b]!"
          >
            <div>REDEN WIR</div>
          </Link>
        </div>
        <div
          data-w-id="59180ab9-397e-9f6d-dae3-0257f441fb40"
          className="ul_footer_nav_wrapper"
        >
          <ul role="list" className="ul_footer_nav_box w-list-unstyled">
            <li className="ul_footer_nav_items">
              <Link
                href="/services"
                className="ul_footer_nav w-inline-block hover:text-[#fbd30b]!"
              >
                <div>Services</div>
              </Link>
            </li>
            <li className="ul_footer_nav_items">
              <Link
                href="/contact"
                className="ul_footer_nav w-inline-block hover:text-[#fbd30b]!"
              >
                <div>Kontakt</div>
              </Link>
            </li>
            <li className="ul_footer_nav_items">
              <Link
                href="/impressum"
                className="ul_footer_nav w-inline-block hover:text-[#fbd30b]!"
              >
                <div>Impressum</div>
              </Link>
            </li>
            <li className="ul_footer_nav_items">
              <Link
                href="/datenschutz"
                className="ul_footer_nav w-inline-block hover:text-[#fbd30b]!"
              >
                <div>Datenschutz</div>
              </Link>
            </li>
            <li className="ul_footer_nav_items">
              <Link
                href="/AGB"
                className="ul_footer_nav w-inline-block hover:text-[#fbd30b]!"
              >
                <div>AGB</div>
              </Link>
            </li>
          </ul>
          <ul role="list" className="ul_footer_nav_box w-list-unstyled">
            <li className="ul_footer_nav_items">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ul_footer_nav w-inline-block hover:text-[#fbd30b]!"
              >
                <div>Instagram</div>
              </a>
            </li>
            <li className="ul_footer_nav_items">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ul_footer_nav w-inline-block hover:text-[#fbd30b]!"
              >
                <div>Linkedin</div>
              </a>
            </li>
            <li className="ul_footer_nav_items">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ul_footer_nav w-inline-block hover:text-[#fbd30b]!"
              >
                <div>Facebook</div>
              </a>
            </li>
          </ul>
        </div>
        <div
          data-w-id="59180ab9-397e-9f6d-dae3-0257f441fb63"
          className="ul_footer_copy_right_text_box"
        >
          <p className="ul_short_des">
            © {new Date().getFullYear()} Medjana – Powered By{" "}
            <a
              href="https://orionlens.net/"
              className="hover:text-[#fbd30b]!"
              target="_blank"
              rel="noopener noreferrer"
            >
              OrionLens
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
