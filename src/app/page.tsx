import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
