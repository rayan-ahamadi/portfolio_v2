'use client';

import 'keen-slider/keen-slider.min.css'
import KeenSlider, { KeenSliderInstance } from 'keen-slider'
import { useEffect, useRef } from 'react';

type props = {
    textColor?: string;
    scrollDirection?: 'left' | 'right';
}

const animation = { duration: 50000, easing: (t: number) => t }

const moveWithDirection = (s: KeenSliderInstance, offset: number) => {
    s.moveToIdx(s.track.details.abs + offset, true, animation);
}

export default function StackSlider({ textColor = "#D7DAE1", scrollDirection = 'right' }: props) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const stacks = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "GSAP",
        "TailwindCSS",
        "Figma",
    ];

    useEffect(() => {
        if (!sliderRef.current) return;

        const moveOffset = scrollDirection === 'left' ? -5 : 5;

        const slider = new KeenSlider(sliderRef.current, {
            loop: true,
            drag: false,
            renderMode: "performance",
            slides: {
                perView: 3,
            },
            breakpoints: {
                '(max-width: 768px)': {
                    slides: {
                        perView: 2,
                        spacing: 12,
                    },
                },
            },
            created(s) {
                moveWithDirection(s, moveOffset)
            },
            updated(s) {
                moveWithDirection(s, moveOffset)
            },
            animationEnded(s) {
                moveWithDirection(s, moveOffset)
            },
        },
            []
        );
        return () => {
            slider.destroy();
        };
    }, [scrollDirection]);


    return (
        <div ref={sliderRef} className="keen-slider bg-secondary">
            {stacks.map((stack, index) => (
                <div
                    key={index}
                    className="keen-slider__slide flex items-center justify-center"
                >
                    <span className={`text-8xl font-extrabold uppercase w-max`} style={{ color: textColor }}>
                        {stack}
                    </span>
                </div>
            ))}
        </div>
    );


}