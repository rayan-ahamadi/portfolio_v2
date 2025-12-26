import Image from "next/image";
import Header from "@/components/ui/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import SelectedWorks from "@/sections/SelectedWorks";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <div className="noise" id="noise-white"></div>
      <div className="noise" id="noise-black"></div>

      <main className="relative z-10">
        <Header />
        <Hero />
        <SelectedWorks />
        <About />
        <Footer />
      </main>

    </div>
  );
}
