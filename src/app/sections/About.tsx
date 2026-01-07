"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import StackSlider from "@/components/ui/StackSlider";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import HiddenTextReveal from "@/components/animations/HiddenTextReveal";
import ImageReveal from "@/components/animations/ImageReveal";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const element = sectionRef.current;
        if (!element) return;

        ScrollTrigger.refresh();

        const bodyAfterRule = CSSRulePlugin.getRule("body::after");
        const navLinkAfterRule = CSSRulePlugin.getRule(".underlined-text::after");
        if (!bodyAfterRule) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top top",
                end: "top top",
                scrub: true,
                markers: true,
                invalidateOnRefresh: true,
            },
        });

        tl.to(bodyAfterRule, {
            cssRule: { opacity: 0.06 },
        },
            0
        )
            .to(
                "header a, header #logo span:last-child",
                { color: '#d7dae1' },
                0
            )
            .to(
                navLinkAfterRule,
                { cssRule: { backgroundColor: '#d7dae1' } },
                0
            )
            .to(
                "#burgerButton", { fill: '#d7dae1' },
                0
            );

    }, []);




    return <section id="about" className="bg-secondary min-h-screen h-min relative" ref={sectionRef}>
        <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 pt-28">
            <h2 className="col-span-4 md:col-span-8 lg:col-span-12 text-primary font-primary font-bold uppercase text-6xl md:text-8xl lg:text-9xl">
                <HiddenTextReveal verticalOrigin="bottom">
                    About Me
                </HiddenTextReveal>
            </h2>
            <div className="col-span-4 lg:col-start-3 lg:col-span-7 py-28 z-50">
                <p className="font-primary text-primary font-regular leading-normal md:leading-14 tracking-tight text-2xl md:text-4xl lg:text-5xl z-[55] uppercase">
                    I'm Rayan Ahamadi, a <span className="text-accent">front-end creative developer</span> based in Aix-en-Provence,France and currently in a work-study program.
                    I design and build <span className="text-accent"> interactive</span> interfaces with a strong attention to <span className="text-accent">motion</span>, <span className="text-accent">structure</span>, and <span className="text-accent">visual identity</span>.
                    aiming to create meaningful and expressive digital experiences.
                </p>
            </div>
            <div className="col-start-3 col-span-2 lg:col-start-8 lg:col-span-3 relative bottom-45 md:bottom-75 z-0">
                <ImageReveal verticalOrigin="top">
                    <div className="absolute inset-0 bg-accent mix-blend-multiply z-10"></div>
                    <img
                        src="/images/rara.png"
                        alt="Rayan Ahamadi"
                        width={302}
                        height={302}
                        className="h-auto object-cover"
                    />
                </ImageReveal>
            </div>

        </Container>
        {/* <div className="overflow-hidden flex flex-col gap-10 relative bottom-16">
            <StackSlider />
            <StackSlider textColor="#775BC8" scrollDirection="left" />
        </div> */}
    </section>;
}
