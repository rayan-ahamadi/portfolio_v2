"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import FleurFooter from "@/assets/vector/Fleur_Footer.svg";
import HiddenTextReveal from "@/components/animations/HiddenTextReveal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import Label from "@/components/layout/Label";

import { LineBlockReveal } from "@/components/animations/LineBlockReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const FleurFooterRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const fleurFooter = FleurFooterRef.current;
    if (!fleurFooter) return;

    gsap.set(fleurFooter, { transformOrigin: "50% 50%" });

    const apparitionTl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "50% bottom",
        markers: false,
        invalidateOnRefresh: true,
        once: false,
        onEnter: () => apparitionTl.restart(true),
        onEnterBack: () => apparitionTl.restart(true),
        onLeave: () => apparitionTl.pause(0),
        onLeaveBack: () => apparitionTl.pause(0),
      },
    });

    // apparitionTl.from(fleurFooter, {
    //   scale: 0.8,
    //   rotate: -10,
    //   ease: "power4.inOut",
    //   delay: 0.8,
    //   duration: 2,
    // });

    // Disparition du header
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top-=10 top",
        end: "top top",
        // markers: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    headerTl.to("header", {
      display: "none",
      opacity: 0,
      ease: "power4.out",
    });

    return () => {
      apparitionTl.kill();
      headerTl.kill();
    };
  }, []);

  return (
    <section
      id="contact"
      className="bg-secondary min-h-screen h-auto relative z-12 overflow-hidden"
      ref={sectionRef}
    >
      <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 md:static text-primary">
        <FleurFooter
          className="absolute bottom-[15vh] pointer-events-none select-none z-0 left-[35vw] opacity-25"
          ref={FleurFooterRef}
        />

        <h2 className="text-[42px] lg:col-span-12 py-12">
          <LineBlockReveal>
            <span>Let's build something that moves.</span>
          </LineBlockReveal>
        </h2>

        <div className="col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
          <div className="md:col-start-1">
            <Label className="white font-bold text-[12px] mb-5">
              Navigation
            </Label>
            <ul className="leading-[1.1] text-lg">
              <li>
                <Link href="/#">Home</Link>
              </li>
              <li>
                <Link href="/#works">Selected Work</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-start-7">
            <Label className="white font-bold text-[12px] mb-5">Socials</Label>
            <ul className="leading-[1.1] text-lg">
              <li>
                <Link href="https://github.com/rayan-ahamadi" target="_blank">
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/rayan-ahamadi/"
                  target="_blank"
                >
                  linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-start-11">
            <Label className="white font-bold text-[12px] mb-5">Contact</Label>
            <ul className="leading-[1.1] text-lg">
              <li>
                <Link href="mailto:rayanahamadi13@gmail.com">
                  rayanahamadi13@gmail.com
                </Link>
              </li>
              <li>
                <p>Aix-en-Provence, France</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-1 lg:col-span-12 relative top-32">
          <h2 className="text-[343px] font-black uppercase leading-[0.8] tracking-[-0.01em] relative -left-[9px] ">
            Rayan.dev
          </h2>
          <p className="text-[10px] mt-4">
            ©2026 Rayan Ahamadi all rights reserved
          </p>
        </div>
      </Container>
    </section>
  );
}
