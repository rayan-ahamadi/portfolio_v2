"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function BentoGrid({ children }: { children: React.ReactNode }) {
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const gridElement = gridRef.current;
        if (!gridElement) return;

        const gridSelector = gsap.utils.selector(gridElement);
        const gridItems = gridSelector('div.bento-item');

        gridItems.forEach((item) => {
            gsap.set(item, {
                opacity: 0,
                y: 50,
            });

            gsap.to(
                item,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: {
                        each: 0.5,
                        from: "start",
                        grid: "auto",
                        ease: "power4.out",
                    },
                    scrollTrigger: {
                        trigger: gridElement,
                        start: "top 45%",
                        markers: false,
                        invalidateOnRefresh: true,
                        once: true,
                    }
                }
            );
        });

        return () => {
            gridItems.forEach((item) => {
                gsap.killTweensOf(item);
            });
        }
    }, []);

    return (
        <div className="grid
        grid-cols-1
        gap-4
        md:grid-cols-6
        md:gap-5
        lg:grid-cols-12
        lg:gap-6"
            ref={gridRef}>
            {children}
        </div>
    )
}
