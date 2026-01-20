"use client";

import Container from "@/components/layout/Container";
import HiddenTextReveal from "@/components/animations/HiddenTextReveal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransitionStore } from "@/stores/transitionStore";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobalDecor from "@/components/ui/GlobalDecor";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    const isTransitionDone = useTransitionStore((s) => s.isTransitionDone);

    // Animation du texte Rayan.dev et overlap
    useGSAP(() => {
        if (!isTransitionDone) return;

        // Animation texte Rayan.dev sans scrollTrigger
        const split = new SplitText(h1Ref.current, { type: "chars" });
        // gsap.set(split.chars, {
        //     yPercent: -300,
        //     opacity: 0,
        // });

        gsap.set(h1Ref.current, {
            opacity: 1,
        }
        )

        gsap.from(split.chars,
            {
                opacity: 0,
                yPercent: -300,
                duration: 1,
                ease: "power4.out",
                stagger: {
                    each: 0.02,
                },
                delay: 0.25,
            },
        );

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
                pinSpacing: false,
                invalidateOnRefresh: true,
            },
        });

        tl
            .fromTo(
                "#works > .container",
                {
                    y: 0,
                },
                {
                    y: '-40vh',
                }
            )
            .to(
                introSelector('#hero > div, #hero > svg:first-of-type'),
                {
                    opacity: 0,
                },
                '<+0.1'
            )





        ScrollTrigger.refresh();

        return () => {
            tl.kill();
            split.revert();
        };
    }, { dependencies: [isTransitionDone] });



    return (
        <section id="hero" className="bg-primary relative z-9" ref={sectionRef}>
            <GlobalDecor />
            <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
                <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col justify-end items-start min-h-screen py-7 tracking-tight z-11" ref={heroRef}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-primary mb-2 md:-mb-2.5 leading-8 md:leading-none mix-blend-multiply relative z-11">Creative developer focused on <span className="font-accent text-accent text-[46px] md:text-[62px] lg:text-[68px] mix-blend-darken">motion</span> and <span className="font-accent text-accent text-[46px] md:text-[62px] lg:text-[68px] mix-blend-darken">structure</span></h2>
                    <h1 id="hero-title" className="font-primary font-black text-accent fill-accent uppercase leading-[0.70] mix-blend-darken w-full relative right-1.5 z-11">
                        <div className="overflow-hidden inline-block h-full w-max opacity-0" ref={h1Ref}>
                            Rayan.dev
                        </div>
                    </h1>
                </div>
                <div id="intro" className="col-span-4 md:col-span-8 lg:col-span-12  mix-blend-darken grid grid-cols-10 grid-rows-3 grid-flow-row gap-17 pb-20 my-32 z-11"  >
                    <p className="inline w-max col-start-1 md:col-start-1 leading-none">
                        <span className="font-accent normal-case text-accent">
                            <HiddenTextReveal>Design</HiddenTextReveal>
                        </span>
                        <span className="font-primary font-extralight leading-[0.70] uppercase">
                            &nbsp;
                            <HiddenTextReveal>First</HiddenTextReveal>
                        </span>
                    </p>
                    <p className="inline w-max col-start-1  md:col-start-2 row-start-2 leading-none">
                        <span className="font-accent normal-case text-accent">
                            <HiddenTextReveal>Code</HiddenTextReveal>
                        </span>
                        <span className="font-primary font-extralight leading-[0.70] uppercase">
                            &nbsp;
                            <HiddenTextReveal>Second</HiddenTextReveal>
                        </span>
                    </p>
                    <p className="inline w-max col-start-1  md:col-start-3 row-start-3 leading-none">
                        <span className="font-accent normal-case text-accent">
                            <HiddenTextReveal>Motion</HiddenTextReveal>
                        </span>
                        <span className="font-primary font-extralight leading-[0.70] uppercase">
                            &nbsp;
                            <HiddenTextReveal>Always</HiddenTextReveal>
                        </span>
                    </p>
                </div>
            </Container>
        </section>);
}