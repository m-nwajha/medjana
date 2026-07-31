"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../ui/Logo";
import { navbarRoutes, NavRoute } from "@/constants/navbar-routes";
import { usePathname } from "next/navigation";
import { Fragment } from "react/jsx-runtime";
import ButtonSolid from "../ui/ButtonSolid";

const Header = () => {
  const getPathname = usePathname();
  const activeClass = (route: string) =>
    route === getPathname ? "w--current text-[#fbd30b]!" : "";

  return (
    <header className="mian_header">
      <div className="navigation-wrap">
        {/* Desktop Navigation */}
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navigation w-nav"
        >
          <div className="navigation-container">
            <div className="navigation-left">
              <Logo />
            </div>
            <div className="navigation-right">
              <nav role="navigation" className="nav-menu w-nav-menu">
                {navbarRoutes.map((route: NavRoute) =>
                  route.subRoutes ? (
                    <Fragment key={route.title}>
                      <div
                        data-delay="0"
                        data-hover="true"
                        data-w-id="f0c27159-9854-7615-e1b6-8312bd74e429"
                        className="dropdown w-dropdown"
                      >
                        <div className="dropdown-toggle w-dropdown-toggle">
                          <div className="menu-icon-drodown w-icon-dropdown-toggle"></div>
                          <div>{route.title}</div>
                        </div>
                        <nav className="navigation-dropdown w-dropdown-list">
                          <div className="dropdown-pointer">
                            <div className="dropdown-wrapper">
                              {route.subRoutes.map((subRoute) => (
                                <Link
                                  key={subRoute.title}
                                  href={subRoute.href}
                                  className="dropdown-link w-inline-block"
                                >
                                  <div className="nav-content-wrap nav-content-single-wrap">
                                    <div className="dropdown-title">
                                      {subRoute.title}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </nav>
                      </div>
                    </Fragment>
                  ) : (
                    <Link
                      key={route.title}
                      href={route.href}
                      aria-current="page"
                      className={`navigation-link w-nav-link ${activeClass(route.href)}`}
                    >
                      {route.title}
                    </Link>
                  ),
                )}
              </nav>
              <ButtonSolid
                href="/contact"
                label="Kontakt"
                dataWId="f0c27159-9854-7615-e1b6-8312bd74e45b"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          data-easing="ease-out"
          data-easing2="ease-out"
          role="banner"
          className="navigation-mob w-nav"
        >
          <div className="navigation-container-mob">
            <Logo />
            <nav role="navigation" className="mobile-nav w-nav-menu">
              {navbarRoutes.map((route) =>
                route.subRoutes ? (
                  <div
                    key={route.title}
                    data-delay="0"
                    data-hover="false"
                    className="mobile-dropdown w-dropdown"
                  >
                    <div className="mobile-toggle w-dropdown-toggle">
                      <div className="w-icon-dropdown-toggle"></div>
                      <div>{route.title}</div>
                    </div>
                    <nav className="dropdown-list w-dropdown-list">
                      {route.subRoutes.map((subRoute) => (
                        <Link
                          key={subRoute.title + subRoute.href}
                          href={subRoute.href}
                          className="dropdown-link-mobile w-inline-block"
                        >
                          <div className="nav-content-wrap">
                            <div className="dropdown-title">
                              {subRoute.title}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </nav>
                  </div>
                ) : (
                  <Link
                    key={route.title}
                    href={route.href}
                    aria-current="page"
                    className={`mobile-nav-link w-nav-link ${activeClass(route.href)}`}
                  >
                    {route.title}
                  </Link>
                ),
              )}

              <ButtonSolid
                href="/contact"
                label="Kontakt"
                dataWId="ab1c7ac7-c86d-2246-5d11-49bee1448acd"
              />
            </nav>
            <div className="lm_mobail_menu_button w-nav-button bg-[#fbd30b]!">
              <Image
                loading="lazy"
                width={24}
                height={24}
                src="/assets/images/menu.svg"
                alt="menu"
                className="lm_mobail_menu"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
