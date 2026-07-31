import ServiceDetailsPage from "@/components/views/ServiceDetails";
import { slugify } from "@/utils/slugify";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface OfferItem {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageThumb: string;
  tags: string[];
  summaryParagraphs: string[];
  offerItems: OfferItem[];
  figureImages: string[];
}

interface ServiceDetailsProps {
  params: Promise<{ id: string }>;
}

async function getService(id: string) {
  let services: Service[] = [];
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

  const service = services.find((item) => slugify(item.title) === id);
  return service;
}

export async function generateMetadata({
  params,
}: ServiceDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const service = await getService(id);

  if (!service) {
    return {
      title: "Service nicht gefunden",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [
        {
          url: service.imageThumb,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetails({ params }: ServiceDetailsProps) {
  const { id } = await params;

  const service = await getService(id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailsPage service={service} />;
}
