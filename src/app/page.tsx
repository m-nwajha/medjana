import HomePage from "@/components/views/Home";

export default async function Home() {
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
  return <HomePage getData={services} />;
}
