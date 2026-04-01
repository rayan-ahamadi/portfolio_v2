"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

type props = {
  textColor?: string;
  scrollDirection?: "left" | "right";
};

gsap.registerPlugin(ScrollTrigger);

export default function StackSlider({
  textColor = "#D7DAE1",
  scrollDirection = "right",
}: props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const stacks = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "GSAP",
    "TailwindCSS",
    "Figma",
  ];

  return (
    <div
      ref={sliderRef}
      className="slider bg-secondary w-screen overflow-hidden overflow-x-auto flex"
      style={{ ["--carousel-speed" as never]: 50 }}
    >
      <div
        className={
          "group flex items-center justify-center gap-8 pr-8 md:gap-14 md:pr-14 lg:gap-20 lg:pr-20" +
          (scrollDirection === "left"
            ? " animate-scrollLeft"
            : " animate-scrollRight")
        }
      >
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="text-[length:var(--fluid-stackslider)] font-extrabold leading-[0.8] tracking-tight select-none flex-0 uppercase"
            style={{ color: textColor }}
          >
            {stack}
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className={
          "group flex items-center justify-center gap-8 pr-8 md:gap-14 md:pr-14 lg:gap-20 lg:pr-20" +
          (scrollDirection === "left"
            ? " animate-scrollLeft"
            : " animate-scrollRight")
        }
      >
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="text-[length:var(--fluid-stackslider)] font-extrabold leading-[0.8] tracking-tight select-none flex-0 uppercase"
            style={{ color: textColor }}
          >
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
}
