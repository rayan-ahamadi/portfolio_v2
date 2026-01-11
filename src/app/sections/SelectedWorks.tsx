"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import Ellipse1 from "@/assets/vector/ellipse1.svg";
import Ellipse2 from "@/assets/vector/ellipse2.svg";
import Link from "next/link";

import HiddenTextReveal from "@/components/animations/HiddenTextReveal";
import ImageReveal from "@/components/animations/ImageReveal";

import { useRef, useLayoutEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export default function SelectedWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const lenis = useLenis();

    // const ellipse1Ref = useRef<SVGSVGElement>(null);
    // const ellipse2Ref = useRef<SVGSVGElement>(null);

    const projects = [
        {
            title: "Bloop",
            description: "A fictional neo-brutalist social media platform inspired by Twitter, developed as a collaborative school project. Work in progress.",
            imageUrl: "/images/bloop.webp",
            link: "/works/bloop"
        },
        {
            title: "Café Ronron",
            description: "A fictional cat café website used as an experimental playground for GSAP animations and creative motion design.",
            imageUrl: "/images/cafe_ronron.webp",
            link: "/works/cafe-ronron"
        },
        {
            title: "CBM Blog",
            description: "A static blog about superhero movies and series, built with pure HTML and CSS as my first complete web project.",
            imageUrl: "/images/cbm_blog.webp",
            link: "/works/cbm-blog"
        },
    ];

    useGSAP(() => {

        const section = sectionRef.current;
        if (!section) return;

        const sectionSelector = gsap.utils.selector(section);

        const overlay = document.querySelector("#black-overlay") as HTMLElement;
        const targetY = overlay?.offsetTop || 0;
        const startScroll = lenis?.scroll || 0; // à vérifier avec -400

        const bodyAfterRule = CSSRulePlugin.getRule("body::after");

        const opacityTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: () => targetY - 400, // à vérifier en responsive
                markers: true,
                pin: true,
                pinSpacing: false,
                scrub: true,
                invalidateOnRefresh: true,
                onEnter: () => {
                    const overlay = document.querySelector("#black-overlay");
                    if (!overlay) return;
                    gsap.set(
                        "#works",
                        {
                            y: '0vh',
                            ease: 'none'
                        },
                    )

                    // positionner l’overlay en fixed
                    gsap.set(overlay, {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 12,
                    });
                },
                onLeave: () => {
                    const overlay = document.querySelector("#black-overlay") as HTMLElement;
                    if (!overlay) return;

                    // remettre l’overlay dans le flow
                    gsap.set(overlay, {
                        opacity: 1,
                        position: "relative",
                        clearProps: "top,left,transform",
                        zIndex: 11,
                    });

                },
                // ➜ SCROLL ARRIÈRE (LA PIÈCE MANQUANTE)
                onEnterBack: () => {
                    const overlay = document.querySelector("#black-overlay");
                    if (!overlay) return;


                    gsap.set(overlay, {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 12,
                    });
                },

                onLeaveBack: () => {
                    const overlay = document.querySelector("#black-overlay");
                    if (!overlay) return;

                    gsap.set(overlay, {
                        position: "relative",
                        clearProps: "top,left,transform",
                        zIndex: 11,
                    });
                },
            },
        });


        opacityTimeline
            .to(
                sectionSelector('.work-div'),
                {
                    yPercent: -80,
                    duration: 1.5,
                    ease: "power1.out",
                    opacity: 0.2
                },
                0
            )
            .fromTo(
                "#black-overlay",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1.5,
                    ease: "power1.out",
                },
                '<'
            )
            .to(
                bodyAfterRule,
                {
                    cssRule: { opacity: 0.06 },
                },
                '<'
            )
            .fromTo(
                "#black-overlay > section > *",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.out",
                }
            )


    }, []);


    return <section id="works" className="bg-primary relative z-11 pt-28" ref={sectionRef}>
        {/* <Ellipse1 className="absolute top-1/4 left-[55vw] select-none" ref={ellipse1Ref} />
        <Ellipse2 className="absolute top-4/6 right-[55vw] select-none" ref={ellipse2Ref} /> */}
        <Container className="container grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 grid-flow-row">
            <h2 className="col-span-4 md:col-span-8 lg:col-span-12 uppercase font-primary text-secondary font-bold text-6xl md:text-8xl lg:text-9xl mb-32">
                Selected Works
            </h2>
            {projects.map((project, index) => (
                <div key={index} className="work-div col-span-4 md:col-span-4 lg:col-span-6 lg:even:col-start-2 lg:odd:col-start-7 z-[55] mb-58 md:mb-32">
                    <Link href={project.link} className="hover:opacity-70 transition-opacity duration-300">
                        <ImageReveal>
                            <img
                                src={project.imageUrl + `?${new Date().getTime()}`}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="mb-4 "
                            />
                        </ImageReveal>
                    </Link>
                    <div className="flex flex-col gap-3">
                        <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold font-primary text-secondary uppercase">

                            {project.title}

                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl font-light font-primary text-secondary uppercase leading-7">

                            {project.description}

                        </p>
                    </div>
                </div>
            ))}

        </Container>

    </section>;
}