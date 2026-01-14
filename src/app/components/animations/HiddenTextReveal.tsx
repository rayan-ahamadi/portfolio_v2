"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef, useLayoutEffect, useState } from "react";


gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
    children: React.ReactNode;
    verticalOrigin?: 'top' | 'bottom'
    delay?: number;
    startViewport?: string;
    splitType?: 'lines' | 'chars';
}

export default function HiddenTextReveal({ children, verticalOrigin = "bottom", delay, startViewport = "75%", splitType = "chars" }: Props) {
    const textRef = useRef<HTMLDivElement>(null);
    const svgTextRef = useRef<SVGTextElement>(null);
    const textContent = typeof children === 'string' ? children : '';
    const [parentClasses, setParentClasses] = useState<string>("");

    useLayoutEffect(() => {
        const parentNode = textRef.current?.parentNode as HTMLElement | null;
        if (parentNode) {
            setParentClasses(Array.from(parentNode.classList).join(" "));
        } else {
            setParentClasses("");
        }
    }, []);

    useGSAP(() => {
        const element = textRef.current;
        if (!element) return;

        const split = new SplitText(element, {
            type: "lines,chars",
            charsClass: "char",
            reduceWhiteSpace: false,
        });

        gsap.set(
            splitType === "chars" ? split.chars : split.lines,
            {
                yPercent: verticalOrigin === "bottom" ? 300 : -300,
            });


        const tween = gsap.to(
            splitType === "chars" ? split.chars : split.lines,
            {
                yPercent: 0,
                duration: 1,
                ease: "power4.out",
                stagger: {
                    each: 0.02,
                },
                delay: delay || 0,
                scrollTrigger: {
                    trigger: element,
                    start: "top " + startViewport,
                    invalidateOnRefresh: true,
                    markers: false,
                }
            });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            split.revert();
        };
    })


    return (
        <div ref={textRef} className="overflow-hidden inline-block h-full w-max">
            {children}
        </div>
    );


}