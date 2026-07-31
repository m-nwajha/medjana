
export type NavRoute = {
  title: string;
  href: string;
  subRoutes?: NavRoute[];
};

export const navbarRoutes: NavRoute[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Projekte",
    href: "/projects",
  },
  {
    title: "Über uns",
    href: "/about",
  }
];
