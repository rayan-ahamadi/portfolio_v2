
import FleurHero from "@/assets/vector/Fleur_Hero.svg";
import LeafPath from "@/assets/vector/LeafPath";
import { useTransitionStore } from "@/stores/transitionStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useRef } from "react";
import { createPortal } from "react-dom";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function GlobalDecor() {
    const fleurRef = useRef<SVGSVGElement>(null);
    const leafWrapperRef = useRef<SVGSVGElement>(null);

    const portalTarget = typeof document !== "undefined" ? document.body : null;

    const isTransitionDone = useTransitionStore((s) => s.isTransitionDone);

    const idle = useRef({ rotate: 0 });
    const wind = useRef({ rotate: 0 });
    const lastX = useRef(0);
    const lastTime = useRef(0);

    useGSAP(() => {
        if (!isTransitionDone) return;

        const fleur = fleurRef.current;
        if (!fleur) return;

        const idleState = idle.current;
        const windState = wind.current;

        // Mouvement fleur d'intro
        gsap.set(
            fleur, {
            transformOrigin: "50% 50%",
        }
        )

        gsap.fromTo(
            fleur,
            {
                opacity: 0,
                scale: 1.2,
                rotate: 20,
                ease: "power4.out",
                duration: 1.5,
            },
            {
                opacity: 1,
                scale: 1,
                rotate: 0,
                ease: "power4.out",
                duration: 1.5,
            }
        )

        gsap.set(
            fleur, {
            transformOrigin: "center bottom",
        }
        )


        // Animation vent sur la fleur avec la souris 
        const idleTween = gsap.to(
            idleState,
            {
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                duration: 4,
                rotate: 1,
                delay: 1.5,
            }
        )

        const handleMouseMove = (e: MouseEvent) => {
            const rect = fleur.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5

            const now = performance.now()
            const dx = x - lastX.current
            const dt = now - lastTime.current || 16

            const velocity = dx / dt // vitesse normalisée

            lastX.current = x
            lastTime.current = now

            gsap.to(windState, {
                rotate: gsap.utils.clamp(-6, 6, velocity * 600),
                duration: 0.3,
                ease: "power3.out",
            })
        }

        const handleMouseLeave = () => {
            gsap.to(windState, {
                rotate: 0,
                duration: 1,
                ease: "power3.out",
            })
        }

        fleur.addEventListener("mousemove", handleMouseMove)
        fleur.addEventListener("mouseleave", handleMouseLeave)


        const setRotate = gsap.quickSetter(fleur, "rotate", "deg")

        const tickerFn = () => {
            setRotate(idleState.rotate + windState.rotate)
        }

        gsap.ticker.add(tickerFn)

        return () => {
            idleTween.kill();
            gsap.ticker.remove(tickerFn);
            fleur.removeEventListener("mousemove", handleMouseMove);
            fleur.removeEventListener("mouseleave", handleMouseLeave);
        };

    }, { dependencies: [isTransitionDone] });

    useGSAP(() => {
        const leafWrapper = leafWrapperRef.current;
        if (!leafWrapper) return;


        gsap.from("#leaf", {
            ease: "none",
            scrollTrigger: {
                trigger: leafWrapper,
                start: "top",
                end: "bottom+=60% top",
                markers: false,
                scrub: 0,
            },
            motionPath: {
                path: "#LeafPath",
                align: "#LeafPath",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
        });


    }, []);

    return (
        <div>
            <FleurHero className="absolute
                        left-1/2 top-[40%]
                        -translate-x-1/2 -translate-y-1/2
                        w-84 md:w-128.25 h-auto
                        select-none pointer-events-auto
                        opacity-0
                        z-10
                        "
                ref={fleurRef}
            />

            {portalTarget
                ? createPortal(
                    <LeafPath
                        className="absolute
                        pointer-events-none select-none
                        translate-y-[9%]    md:translate-y-[40%]
                        z-49
                        w-full
                        "
                        ref={leafWrapperRef}
                    />,
                    portalTarget,
                )
                : null}

        </div>
    );
}