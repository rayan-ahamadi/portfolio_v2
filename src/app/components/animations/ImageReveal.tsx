"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HtmlHTMLAttributes, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
    children: HtmlHTMLAttributes<HTMLImageElement>['children'];
    verticalOrigin?: 'top' | 'bottom'
    delay?: number;
}

export default function ImageReveal({ children, verticalOrigin = "bottom", delay }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const clipPathRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const container = containerRef.current;
        const clipPathElement = clipPathRef.current;
        if (!container || !clipPathElement) return;

        const clipPathRefSelector = gsap.utils.selector(clipPathElement);
        const imageElement = clipPathRefSelector('img')[0];
        if (!imageElement) return;

        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                    markers: false,
                    invalidateOnRefresh: true,
                    once: true,
                }
            }
        );

        tl.fromTo(
            clipPathElement,
            {
                clipPath: verticalOrigin == "bottom" ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
            },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                ease: "power4.out",
                duration: 1,
                delay: delay || 0,
            },
            0
        )
            .from(
                imageElement,
                {
                    scale: 1.3,
                    ease: "power4.out",
                    duration: 1,
                    delay: delay || 0,
                }
                , 0
            )

        return () => {
            tl.kill();
        }
    }, []);

    return (
        <div ref={containerRef} className="h-max overflow-hidden">
            <div ref={clipPathRef}
                className="will-change-[clip-path]"
                style={{
                    clipPath: verticalOrigin == "bottom" ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
                }}>
                {children}
            </div>
        </div>
    )
}