"use client";

import Container from "@/components/layout/Container";
import HiddenTextReveal from "@/components/animations/HiddenTextReveal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransitionStore } from "@/stores/transitionStore";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobalDecor from "@/components/ui/GlobalDecor";
import Label from "@/components/layout/Label";
import { markOverlapDone } from "@/stores/transitionStore";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const isTransitionDone = useTransitionStore((s) => s.isTransitionDone);

  // Animation du texte Rayan.dev et overlap
  useGSAP(
    () => {
      if (!isTransitionDone) return;

      // Animation texte Rayan.dev sans scrollTrigger
      //   const split = new SplitText(h1Ref.current, { type: "chars" });

      //   gsap.set(h1Ref.current, {
      //     opacity: 1,
      //   });

      //   gsap.from(split.chars, {
      //     opacity: 0,
      //     yPercent: -300,
      //     duration: 1,
      //     ease: "power4.out",
      //     stagger: {
      //       each: 0.02,
      //     },
      //     delay: 0.25,
      //   });

      // overlap intro text
      const section = sectionRef.current;
      if (!section) return;

      const introSelector = gsap.utils.selector(section);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          end: "+=80%",
          pin: true,
          scrub: true,
          // pinSpacing: true,
          invalidateOnRefresh: true,
          onLeave: () => {
            markOverlapDone();
          },
        },
      });

      tl.fromTo(
        "#works > .container",
        {
          y: 0,
        },
        {
          y: "-40vh",
        },
      ).to(
        introSelector("#hero > div, #hero > svg:first-of-type"),
        {
          opacity: 0,
        },
        "<+0.1",
      );

      return () => {
        tl.kill();
        split.revert();
      };
    },
    { dependencies: [isTransitionDone] },
  );

  return (
    <section id="hero" className="bg-primary relative z-9" ref={sectionRef}>
      <GlobalDecor />
      <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div
          className="col-span-4 md:col-span-8 lg:col-span-12 min-h-[98vh] tracking-tight z-11 flex flex-col justify-end"
          ref={heroRef}
        >
          <div className="flex flex-col-reverse md:flex-row items-end gap-12">
            <h1
              id="hero-title"
              className="font-primary font-black text-accent fill-accent uppercase mix-blend-darken w-full leading-[0.9] tracking-[-0.01em] z-11"
            >
              Rayan.dev
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-primary leading-[1.1] tracking-[-0.01em] z-11">
              Creative developer focused on&nbsp;
              <span className="font-accent text-accent mix-blend-darken">
                motion
              </span>
              &nbsp; and&nbsp;
              <span className="font-accent text-accent mix-blend-darken">
                structure
              </span>
            </h2>
          </div>
        </div>

        <div
          id="intro"
          className="col-span-4 md:col-span-8 lg:col-start-4 pb-26 my-32 z-49"
        >
          <Label>Manifesto</Label>
          <p className="font-primary leading-[1.3] tracking-[0.02em] lg:text-[42px]">
            I love building interfaces that breathe.
          </p>
          <br />
          <p className="font-primary leading-[1.3] tracking-[0.02em] lg:text-[42px]">
            Spaces where rhythm, contrast, and movement create a living
            <mark className="text-accent"> experience.</mark>
          </p>
          <br />
          <p className="font-primary leading-[1.3] tracking-[0.02em] lg:text-[42px]">
            I work at the intersection of design and development, where
            structure gives rise to{" "}
            <mark className="font-accent"> emotion</mark>.
          </p>
        </div>
      </Container>
    </section>
  );
}
