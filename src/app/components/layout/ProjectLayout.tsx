"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function ProjectLayout(
    {
        children,
        className = ""
    }: {
        children: React.ReactNode
        className?: string
    }) {
    return <div className={`max-w-[1440px] mx-auto mt-32 px-6 md:px-12 lg:px-20 ` + ` ${className}`}>
        {children}
    </div>
}

ProjectLayout.Hero = function Hero({ children }: { children: React.ReactNode }) {
    return <section className="col-span-4 md:col-span-8 lg:col-start-2 lg:col-end-11 text-center">{children}</section>
}

ProjectLayout.Description = function Description({ children }: { children: React.ReactNode }) {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        const sectionSelector = gsap.utils.selector(section);
        const paragraphs = sectionSelector('p');

        paragraphs.forEach((paragraph) => {
            const split = new SplitText(paragraph, { type: "chars" });

            gsap.set(split.chars, {
                opacity: 0.2,
            });

            gsap.to(
                split.chars,
                {
                    opacity: 1,
                    stagger: {
                        each: 0.005,
                    },
                    ease: "power4.out",
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: paragraph,
                        start: "top 85%",
                        markers: false,
                        invalidateOnRefresh: true,
                        once: true,
                    }
                }
            )

            return () => {
                split.revert();
            }

        });
    }, []);


    return <section id="description-container" className="col-span-4 md:col-span-8 lg:col-start-2 lg:col-end-11 mt-16" ref={sectionRef}>{children}</section>
}

ProjectLayout.Bento = function Bento({ children }: { children: React.ReactNode }) {
    return <section className="col-span-4 md:col-span-8 lg:col-start-2 lg:col-end-11 my-16">{children}</section>
}
