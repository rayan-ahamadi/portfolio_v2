"use client";

import Container from "@/components/layout/Container";
import FleurHero from "@/assets/vector/Fleur_Hero.svg";
import HiddenTextReveal from "@/components/animations/HiddenTextReveal";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const fleurRef = useRef<SVGSVGElement>(null);

    useGSAP(() => {
        const fleur = fleurRef.current;
        if (!fleur) return;

        gsap.set(
            fleur, {
            transformOrigin: "50% 50%",
        }
        )

        gsap.from(
            fleur,
            {
                scale: 1.2,
                // opacity: 1.2,
                // y: 10,
                rotate: 10,
                ease: "back.out",
                delay: 0,
                duration: 1.5,
            }
        )
    }, []);


    return <section className="relative min-h-screen h-auto bg-primary">
        <FleurHero className="absolute
    left-1/2 top-[42%] md:top-[34%]
    -translate-x-1/2 -translate-y-1/2
    w-84 md:w-128.25 h-auto
    pointer-events-none select-none
    "
            ref={fleurRef}
        />
        <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col justify-end items-start min-h-screen py-7 tracking-tight">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-primary z-[55] md:z-0">Creative developer focused on <span className="font-accent text-accent text-[46px] md:text-[62px] lg:text-[68px] mix-blend-darken">motion</span> and <span className="font-accent text-accent text-[46px] md:text-[62px] lg:text-[68px] mix-blend-darken">structure</span></h2>
                <h1 className="text-[92px] md:text-[218px]  lg:text-[298px] font-primary font-black text-accent fill-accent uppercase leading-[0.70] mix-blend-darken w-full relative right-1.5">
                    <HiddenTextReveal verticalOrigin="top" delay={0.5}>
                        Rayan.dev
                    </HiddenTextReveal>
                </h1>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-12  text-[68px] md:text-[176px] mix-blend-darken z-10 grid grid-cols-10 grid-rows-3 grid-flow-row gap-17 pb-20 my-32">
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
    </section>;
}