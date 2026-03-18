"use client";

import Container from "@/components/layout/Container";
import NewLink from "@/components/ui/NewLink";
import ImageReveal from "@/components/animations/ImageReveal";
import HiddenTextReveal from "@/components/animations/HiddenTextReveal";

import { useRef, useLayoutEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useLenis } from "lenis/react";
import { useTransitionStore } from "@/stores/transitionStore";

import Label from "@/components/layout/Label";

import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const isOverlapDone = useTransitionStore((s) => s.isOverlapDone);

  // const ellipse1Ref = useRef<SVGSVGElement>(null);
  // const ellipse2Ref = useRef<SVGSVGElement>(null);

  const projects = [
    {
      title: "Bloop",
      description:
        "A fictional neo-brutalist social media platform inspired by Twitter, developed as a collaborative school project. Work in progress.",
      imageUrl: "/images/bloop.webp",
      link: "/works/bloop",
    },
    {
      title: "Café Ronron",
      description:
        "A fictional cat café website used as an experimental playground for GSAP animations and creative motion design.",
      imageUrl: "/images/cafe_ronron.webp",
      link: "/works/cafe-ronron",
    },
    {
      title: "CBM Blog",
      description:
        "A static blog about superhero movies and series, built with pure HTML and CSS as my first complete web project.",
      imageUrl: "/images/cbm_blog.webp",
      link: "/works/cbm-blog",
    },
  ];

  const scrollMinus = useMediaQuery({ maxWidth: 768 }) ? 200 : 400;

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionSelector = gsap.utils.selector(section);

    const overlay = document.querySelector("#black-overlay") as HTMLElement;
    const overlayHeight = overlay?.offsetHeight || 0;
    const targetY = overlay?.offsetTop || 0;
    const startScroll = lenis?.scroll || 0; // à vérifier avec -400

    const bodyAfterRule = CSSRulePlugin.getRule("body::after");

    // const opacityTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: section,
    //     start: "bottom bottom",
    //     end: () => targetY,
    //     // markers: true,
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: true,
    //     invalidateOnRefresh: true,
    //     onEnter: () => {
    //       const overlay = document.querySelector("#black-overlay");
    //       if (!overlay) return;

    //       gsap.set("#LeafPathSVG", {
    //         display: "none",
    //         ease: "none",
    //       });

    //       gsap.set("#works", {
    //         y: "0vh",
    //         ease: "none",
    //       });

    //       gsap.set("body", {
    //         paddingBottom: overlayHeight + "px",
    //         ease: "none",
    //       });

    //       // positionner l’overlay en fixed
    //       gsap.set(overlay, {
    //         position: "fixed",
    //         top: 0,
    //         left: 0,
    //         width: "100%",
    //         height: "100%",
    //         zIndex: 12,
    //       });
    //     },
    //     onLeave: () => {
    //       const overlay = document.querySelector(
    //         "#black-overlay",
    //       ) as HTMLElement;
    //       if (!overlay) return;

    //       gsap.set("body", {
    //         clearProps: "padding-bottom",
    //         ease: "none",
    //       });

    //       // remettre l’overlay dans le flow
    //       gsap.set(overlay, {
    //         opacity: 1,
    //         position: "relative",
    //         clearProps: "top,left,transform",
    //         zIndex: 11,
    //       });
    //     },
    //     onEnterBack: () => {
    //       const overlay = document.querySelector("#black-overlay");
    //       if (!overlay) return;

    //       gsap.set("body", {
    //         paddingBottom: overlayHeight + "px",
    //         ease: "none",
    //       });

    //       gsap.set(overlay, {
    //         position: "fixed",
    //         top: 0,
    //         left: 0,
    //         width: "100%",
    //         height: "100%",
    //         zIndex: 12,
    //       });
    //     },

    //     onLeaveBack: () => {
    //       const overlay = document.querySelector("#black-overlay");
    //       if (!overlay) return;

    //       gsap.set("#LeafPathSVG", {
    //         clearProps: "display",
    //         ease: "none",
    //       });

    //       gsap.set("body", {
    //         clearProps: "padding-bottom",
    //         ease: "none",
    //       });

    //       gsap.set(overlay, {
    //         position: "relative",
    //         clearProps: "top,left,transform",
    //         zIndex: 11,
    //       });
    //     },
    //   },
    // });

    // opacityTimeline
    //   .to(
    //     sectionSelector(".work-div"),
    //     {
    //       yPercent: -80,
    //       duration: 1.5,
    //       ease: "power1.out",
    //       opacity: 0.2,
    //     },
    //     0,
    //   )
    //   .fromTo(
    //     "#black-overlay",
    //     {
    //       opacity: 0,
    //     },
    //     {
    //       opacity: 1,
    //       duration: 1.5,
    //       ease: "power1.out",
    //     },
    //     "<",
    //   )
    //   .to(
    //     bodyAfterRule,
    //     {
    //       cssRule: { opacity: 0.06 },
    //     },
    //     "<",
    //   )
    //   .fromTo(
    //     "#black-overlay > section > *",
    //     {
    //       opacity: 0,
    //     },
    //     {
    //       opacity: 1,
    //       duration: 0.5,
    //       ease: "power1.out",
    //     },
    //   );

    return () => {
      // opacityTimeline.kill();
    };
  }, []);

  return (
    <section
      id="works"
      className="bg-primary relative pt-28 z-10"
      ref={sectionRef}
    >
      <Container className="container bg-primary grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 grid-flow-row z-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <Label>Works</Label>
          <h2 className="uppercase font-primary text-secondary font-bold lg:text-[67px] leading-[0.8] mb-8 md:mb-16 lg:mb-32">
            <HiddenTextReveal startViewport="90%">
              Selected Works
            </HiddenTextReveal>
          </h2>
        </div>
        {projects.map((project, index) => (
          <article
            key={index}
            className="work-div col-span-4 md:col-span-4 lg:col-span-6 lg:even:col-start-6 lg:odd:col-start-2  mb-28 md:mb-32"
          >
            <NewLink
              href={project.link}
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <ImageReveal>
                <figure>
                  <img
                    src={project.imageUrl + `?${new Date().getTime()}`}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="mb-4 "
                  />
                </figure>
              </ImageReveal>
            </NewLink>
            <div className="flex flex-col gap-4.5">
              <h3 className="mt-4 text-xl md:text-2xl lg:text-[38px] font-semibold font-primary text-secondary uppercase leading-[0.9] tracking-[-0.01em]">
                {project.title}
              </h3>
              <p className="text-lg md:text-xl lg:text-[16px] font-light font-primary text-secondary uppercase leading-[1.3] tracking-normal">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
