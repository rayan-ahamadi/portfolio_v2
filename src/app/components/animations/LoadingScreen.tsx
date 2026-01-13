"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";


export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const loadingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tiles = gsap.utils.toArray(".tile");

        const tl = gsap.timeline({
            onComplete
        })

        tl
            .fromTo(tiles,
                {
                    backgroundColor: "#000009",
                },
                {
                    backgroundColor: "#775bc8",
                    opacity: 0,
                    duration: 1,
                    stagger: {
                        grid: [12, 12],
                        each: 0.2,
                        from: "start",
                    }
                },
            )

    }, [])

    return (
        <div ref={loadingRef} className="fixed inset-0 z-[999] grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, index) => (
                <div
                    key={index}
                    className={`tile bg-secondary ${Math.floor(index / 12) % 2 === index % 2 ? "even" : "odd"}`}>
                </div>
            ))}

        </div>
    );
}