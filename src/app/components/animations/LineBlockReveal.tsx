"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

type LineBlockRevealProps = {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    blockColor?: string;
    stagger?: number;
    duration?: number;
};

export function LineBlockReveal({
    children,
    animateOnScroll = true,
    delay = 0,
    blockColor = '#775bc8',
    stagger = 0.15,
    duration = 0.75,
}: LineBlockRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const splitRefs = useRef<SplitText[]>([]);
    const lines = useRef<HTMLElement[]>([]);
    const blocks = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        if (!containerRef.current) return;

        splitRefs.current = [];
        lines.current = [];
        blocks.current = [];

        const elements: Element[] = [];

        if (containerRef.current.hasAttribute('data-copy-wrapper')) {
            elements.push(...Array.from(containerRef.current.children));
        } else {
            elements.push(containerRef.current);
        }

        elements.forEach((el) => {
            const split = SplitText.create(el, {
                type: 'lines',
                linesClass: 'block-line',
            });

            splitRefs.current.push(split);

            split.lines.forEach((line) => {
                const wrapper = document.createElement('div');
                wrapper.className = 'block-line-wrapper';
                line.parentNode!.insertBefore(wrapper, line);
                wrapper.appendChild(line);

                const block = document.createElement('div');
                block.className = 'block-revealer';
                block.style.backgroundColor = blockColor;
                wrapper.insertBefore(block, line);

                lines.current.push(line as HTMLElement);
                blocks.current.push(block);
            });
        });

        gsap.set(lines.current, { opacity: 0 });
        gsap.set(blocks.current, { scaleX: 0, transformOrigin: 'left center' });

        const master = gsap.timeline({ paused: true });

        blocks.current.forEach((block, index) => {
            const line = lines.current[index];
            const tl = gsap.timeline();

            tl
                .to(block, {
                    scaleX: 1,
                    ease: 'power4.inOut',
                    duration,
                })
                .set(line, { opacity: 1 })
                .set(block, { transformOrigin: 'right center' })
                .to(block, {
                    scaleX: 0,
                    duration,
                    ease: 'power4.inOut',
                });

            master.add(tl, delay + index * stagger);
        });

        let st: ScrollTrigger | undefined;

        if (animateOnScroll) {
            st = ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 80%',
                onEnter: () => master.restart(true),
                // onEnterBack: () => master.restart(true),
                onLeaveBack: () => master.reverse(),
                markers: false,
            });
        } else {
            master.play();
        }

        return () => {
            st?.kill();
            master.kill();

            splitRefs.current.forEach((split) => split.revert());

            const wrapper = containerRef.current?.querySelectorAll('.block-line-wrapper');

            wrapper?.forEach((w) => {
                const parent = w.parentNode;
                if (!parent) return;

                const line = w.querySelector('.block-line') ?? w.lastElementChild;
                if (line) parent.insertBefore(line, w);
                parent.removeChild(w);
            });
        }

    }, {
        scope: containerRef,
        dependencies: [animateOnScroll, delay, blockColor, stagger, duration]
    });

    return (
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    );
}