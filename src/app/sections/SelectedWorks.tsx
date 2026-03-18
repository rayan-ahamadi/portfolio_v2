"use client";

import Container from "@/components/layout/Container";
import NewLink from "@/components/ui/NewLink";
import ImageReveal from "@/components/animations/ImageReveal";
import HiddenTextReveal from "@/components/animations/HiddenTextReveal";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import Label from "@/components/layout/Label";

import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLElement>(null);

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

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionSelector = gsap.utils.selector(section);
    const bodyAfterRule = CSSRulePlugin.getRule("body::after");

    // Changement de couleur de la page pendant le scroll
    const colorTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "bottom 55%",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });

    const aboutSection = document.querySelector("#about");

    colorTimeline
      .to("section, .container", {
        backgroundColor: "#000009",
        color: "#d7dae1",
      })
      .to(
        sectionSelector(".container *"),
        {
          opacity: 0,
        },
        0,
      )
      .to(
        bodyAfterRule,
        {
          opacity: 0.06,
        },
        0,
      ) // Synchroniser avec le début de la timeline
      .to(
        aboutSection,
        {
          height: aboutSection ? aboutSection.clientHeight * 0.25 : 0,
        },
        0,
      )
      .to(
        "#about > div:not(#sliders)",
        {
          yPercent: -45, // Faire remonter la section "About" pendant le scroll
        },
        "-=0.4",
      )
      .to(
        "#leaf",
        {
          opacity: 0,
        },
        "-=0.6",
      );

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
