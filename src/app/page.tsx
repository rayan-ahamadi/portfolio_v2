"use client";

import Image from "next/image";
import Header from "@/components/ui/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import SelectedWorks from "@/sections/SelectedWorks";
import Footer from "@/sections/Footer";
import LeafPath from "@/assets/vector/LeafPath";
import useScrollRefresh from "@/hooks/useScrollRefresh";



import { ReactLenis, type LenisRef, useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";


gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Home() {
  // useScrollRefresh();
  const lenisRef = useRef<LenisRef | null>(null);
  const leafWrapperRef = useRef<SVGSVGElement>(null);


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

  useGSAP(() => {
    const leafWrapper = leafWrapperRef.current;
    if (!leafWrapper) return;


    gsap.from("#leaf", {
      ease: "none",
      scrollTrigger: {
        trigger: leafWrapper,
        start: "top",
        end: "bottom+=60% top",
        markers: false,
        scrub: 0,
      },
      motionPath: {
        path: "#LeafPath",
        align: "#LeafPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });


  }, []);



  return (
    <div>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <main className="relative z-10 overflow-x-hidden">
        <Header />
        <Hero />
        <LeafPath className="absolute
            left-1/2 
            top-[32.5%] md:top-[38%]
            -translate-x-[35%] md:-translate-x-[44.5%] 
            -translate-y-1/2
            pointer-events-none select-none
            z-15
            w-full
            "
          ref={leafWrapperRef}
        />
        <SelectedWorks />
        <div id="black-overlay" className=" z-[12]">
          <About />
          <Footer />
        </div>
      </main>
    </div>
  );
}
