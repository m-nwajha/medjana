import type { Metadata } from "next";
import "@/styles/normalize.css";
import "@/styles/webflow.css";
import "@/styles/medjana.webflow.css";
import "@/styles/globals.css";
import MainLayout from "@/components/layouts/MainLayout";
import { Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Medjana Art & Idea - Kreativagentur aus Laatzen",
    template: "%s | Medjana",
  },
  description:
    "Medjana ist Ihre Kreativagentur aus Laatzen für Druck, Webdesign, Markenauftritt und Werbetechnik - alles aus einer Hand.",
    openGraph: {
      title: "Medjana Art & Idea - Kreativagentur aus Laatzen",
      description:
        "Medjana ist Ihre Kreativagentur aus Laatzen für Druck, Webdesign, Markenauftritt und Werbetechnik - alles aus einer Hand.",
      images: [
        {
          url: "/assets/images/google-360.png",
          width: 1200,
          height: 630,
          alt: "Medjana Art & Idea",
        },
      ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-page="692ec84ae383c17227fc8d2e"
      data-wf-site="692ec847e383c17227fc8c5b"
      suppressHydrationWarning
    >
      <body className={manrope.variable}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
