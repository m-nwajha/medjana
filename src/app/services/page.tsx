import ServicesPage from "@/components/views/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Entdecken Sie unsere Services: Druck & Print, Webdesign, Markenauftritt, Werbetechnik und mehr - individuell auf Ihre Bedürfnisse abgestimmt.",
};

export default async function Services() {
  let services = [];
  try {
    const res = await fetch("http://localhost:5000/services", {
      next: {
        revalidate: 60,
      },
    });
    services = await res.json();
  } catch (error) {
    console.error("Error fetching services:", error);
    services = [];
  }

  return <ServicesPage getData={services} />;
}
