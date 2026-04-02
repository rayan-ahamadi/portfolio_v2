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
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const fleurFooter = FleurFooterRef.current;
    if (!fleurFooter) return;

    const footerSelector = gsap.utils.selector(footerRef.current);

    gsap.set(fleurFooter, { transformOrigin: "50% 50%" });

    // Disparition du header
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top-=10 top",
        end: "top top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    headerTl.to("header", {
      display: "none",
      opacity: 0,
      ease: "power4.out",
    });

    // Animation footer parallaxe
    const footerContent = footerSelector(".footer-section");

    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "top top",
        // markers: true,
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    footerTl.set(footerContent, { yPercent: -80 });

    footerTl
      .fromTo(
        footerContent,
        {
          yPercent: -80,
          ease: "none",
        },
        {
          yPercent: 0,
          ease: "none",
        },
      )
      .to(
        footerRef.current,
        {
          backgroundColor: "#1d133a",
        },
        "<0.2",
      );

    return () => {
      headerTl.kill();
      footerTl.kill();
    };
  }, []);

  return (
    <footer
      id="contact"
      className="bg-secondary min-h-screen h-auto relative z-12 overflow-hidden"
      ref={footerRef}
    >
      <Container className="footer-section grid grid-cols-12 gap-4 md:gap-7.5 md:static text-primary">
        <FleurFooter
          className="absolute top-[20vh] pointer-events-none select-none z-0 left-[35vw] opacity-25"
          ref={FleurFooterRef}
        />

        <h2 className="text-[42px] col-span-12 py-12">
          <LineBlockReveal>
            <span className="text-[length:var(--fluid-footer-h1)]">
              Let's build something that moves.
            </span>
          </LineBlockReveal>
        </h2>

        <div className="col-span-12 flex flex-col gap-14 md:gap-0 md:grid grid-cols-12">
          <div className="md:col-start-1">
            <Label className="white font-bold text-[length:var(--fluid-footer-label)] mb-5">
              Navigation
            </Label>
            <ul className="leading-[1.1]">
              <li>
                <Link
                  href="/#"
                  className="underlined-text-white text-[length:var(--fluid-footer-link)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#works"
                  className="underlined-text-white text-[length:var(--fluid-footer-link)]"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="underlined-text-white text-[length:var(--fluid-footer-link)]"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-start-7">
            <Label className="white font-bold text-[length:var(--fluid-footer-label)] mb-5">
              Socials
            </Label>
            <ul className="leading-[1.1] text-lg">
              <li>
                <Link
                  href="https://github.com/rayan-ahamadi"
                  target="_blank"
                  className="underlined-text-white text-[length:var(--fluid-footer-link)]"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/rayan-ahamadi/"
                  target="_blank"
                  className="underlined-text-white text-[length:var(--fluid-footer-link)]"
                >
                  linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-start-11">
            <Label className="white font-bold text-[length:var(--fluid-footer-label)] mb-5">
              Contact
            </Label>
            <ul className="leading-[1.1] text-lg">
              <li>
                <Link
                  href="mailto:rayanahamadi13@gmail.com"
                  className="underlined-text-white text-[length:var(--fluid-footer-link)]"
                >
                  rayanahamadi13@gmail.com
                </Link>
              </li>
              <li>
                <p className="w-max text-[length:var(--fluid-footer-link)]">
                  Aix-en-Provence, France
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-1 col-span-12 relative top-32">
          <h2 className="text-[length:var(--fluid-footer-h2)] font-black uppercase leading-[0.8] tracking-[-0.01em] relative -left-[9px] ">
            Rayan.dev
          </h2>
          <p className="text-[length:var(--fluid-footer-copyright)] mt-4 tracking-[0.01em]">
            ©2026 Rayan Ahamadi all rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
