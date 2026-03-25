"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef, useLayoutEffect, useState, use } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  children: React.ReactNode;
  verticalOrigin?: "top" | "bottom";
  delay?: number;
  duration?: number;
  stagger?: number;
  startViewport?: string;
  splitType?: "lines" | "chars";
  animateOnScroll?: boolean;
};

export default function HiddenTextReveal({
  children,
  verticalOrigin = "bottom",
  delay = 0,
  duration = 1,
  stagger = 0.15,
  startViewport = "75%",
  splitType = "lines",
  animateOnScroll = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      if (container.children.length === 0) return;

      const elements: Element[] = []; // stocke les nodes à animer

      if (container.hasAttribute("data-copy-wrapper")) {
        elements.push(...Array.from(container.children));
      } else {
        elements.push(container);
      }

      const lines: Element[] = []; // stocke les lignes créées par SplitText

      // Diviser le texte par lignes
      elements.forEach((element) => {
        const split = new SplitText(element, { type: "lines" });

        split.lines.forEach((line) => {
          const wrapper = document.createElement("div"); // Mettre la ligne dans un wrapper avec overflow hidden
          wrapper.style.overflow = "hidden";
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
          lines.push(line);
        });
      });

      const master = gsap.timeline({ paused: true }); // timeline principale pour synchroniser les animations

      lines.forEach((line, index) => {
        const tl = gsap.timeline(); // timeline pour chaque ligne

        if (splitType === "chars") {
          // Créer un nouveau SplitText par chars
          const newSplit = new SplitText(line, { type: "chars" });
          gsap.set(newSplit.chars, {
            yPercent: verticalOrigin === "bottom" ? 400 : -400,
          });
          tl.to(
            newSplit.chars,
            {
              yPercent: 0,
              ease: "power4.out",
              duration: duration,
              stagger: 0.02,
              delay: delay || 0,
            },
            0,
          );
        } else {
          // animation par ligne
          gsap.set(line, {
            yPercent: verticalOrigin === "bottom" ? 400 : -400,
          });
          tl.to(
            line,
            {
              yPercent: 0,
              ease: "power4.out",
              duration: duration,
              delay: delay || 0,
            },
            0,
          );
        }

        master.add(tl, delay + index * stagger); // Ajouter la timeline enfant à la timeline parente
      });

      if (animateOnScroll) {
        // Brancher la timeline maitre au scrollTrigger
        ScrollTrigger.create({
          trigger: container,
          start: `top ${startViewport}`,
          markers: false,
          onEnter: () => master.restart(true),
          onLeave: () => master.reverse(),
          onEnterBack: () => master.restart(true),
          onLeaveBack: () => master.reverse(),
        });
      } else {
        master.play(); // Jouer immédiatement si pas d'animation au scroll
      }

      return () => {
        master.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [children, verticalOrigin, delay, startViewport, splitType],
    },
  );

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
