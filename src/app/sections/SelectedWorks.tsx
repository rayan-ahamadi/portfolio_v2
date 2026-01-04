"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import Ellipse1 from "@/assets/vector/ellipse1.svg";
import Ellipse2 from "@/assets/vector/ellipse2.svg";
import Link from "next/link";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const ellipseDivRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !ellipseDivRef.current) return;

        const section = sectionRef.current;
        const ellipseDiv = ellipseDivRef.current;
        const ellipse1 = ellipseDiv.querySelector('svg:nth-child(1)') as SVGSVGElement;
        const ellipse2 = ellipseDiv.querySelector('svg:nth-child(2)') as SVGSVGElement;

        const stickyEllipses = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: ellipseDiv,
                pinSpacing: false,
            }
        });

        stickyEllipses
            .to(ellipse1, {
                y: 100,
                x: -100,
                scale: 0.8,
                ease: "power1.out",
            }, 0)
            .to(ellipse2, {
                y: -500,
                x: 100,
                scale: 0.8,
                ease: "power1.out",
            }, 0);
    }, [])


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
    ]

    return <section id="works" className="relative overflow-hidden min-h-screen h-auto bg-primary" ref={sectionRef}>
        <div id="ellipse-div" className="absolute inset-0 pointer-events-none h-screen w-screen top-0 left-0" ref={ellipseDivRef}>
            <Ellipse1 className="absolute top-1/4 left-[55vw] select-none" />
            <Ellipse2 className="absolute top-4/6 right-[55vw] select-none" />
        </div>
        <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 grid-flow-row">
            <h2 className="col-span-4 md:col-span-8 lg:col-span-12 uppercase font-primary text-secondary font-bold text-6xl md:text-8xl lg:text-9xl mb-32">Selected Works</h2>
            {projects.map((project, index) => (
                <div key={index} className="col-span-4 md:col-span-4 lg:col-span-6 lg:even:col-start-2 lg:odd:col-start-7 z-[55] mb-58 md:mb-32">
                    <Link href={project.link} className="hover:opacity-70 transition-opacity duration-300">
                        <Image
                            src={project.imageUrl + `?${new Date().getTime()}`}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="mb-4 h-auto w-200 object-cover"
                        />
                    </Link>
                    <div className="flex flex-col gap-3">
                        <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl  font-semibold font-primary text-secondary uppercase">{project.title}</h3>
                        <p className="text-lg md:text-xl lg:text-2xl font-light font-primary text-secondary uppercase leading-7">{project.description}</p>
                    </div>
                </div>
            ))}

        </Container>
    </section>;
}