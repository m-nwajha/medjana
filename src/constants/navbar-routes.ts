export const navbarRoutes = [
  {
    title: "Startseite",
    href: "/",
  },
  {
    title: "Über uns",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    subRoutes: [
      {
        title: "Services",
        href: "/services",
      },
      {
        title: "Services details",
        href: "/services/details",
      },
    ],
  },
  {
    title: "Projekte",
    href: "/projects",
  },
  {
    title: "Kontakt",
    href: "/contact",
  },
];