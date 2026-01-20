"use client";

import Image from "next/image";
import Header from "@/components/ui/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import SelectedWorks from "@/sections/SelectedWorks";
import Footer from "@/sections/Footer";
import GlobalDecor from "@/components/ui/GlobalDecor";
// import useScrollRefresh from "@/hooks/useScrollRefresh";

import { ReactLenis, type LenisRef } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // useScrollRefresh();
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  // Synchronise Lenis avec ScrollTrigger pour avoir des coordonnées cohérentes (scroll absolu).
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (typeof value === "number") {
          lenis.scrollTo(value, { immediate: true });
          return;
        }

        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    const handleRefresh = () => lenis.raf(performance.now());

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", handleRefresh);

    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
    };
  }, []);

  return (
    <div>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <main className="relative z-10 overflow-x-hidden">

        <Header />
        <Hero />
        <SelectedWorks />
        <div id="black-overlay" className=" z-[12]">
          <About />
          <Footer />
        </div>
      </main>
    </div>
  );
}
