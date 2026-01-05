import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Hero />

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-48 md:h-64 bg-linear-to-t from-black/60 via-black/20 to-transparent z-0" />
    </main>
  );
}
