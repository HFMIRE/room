import HeroBanner from "@/components/hero-banner";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroBanner />
      <div className=" "></div>
    </main>
  );
}
