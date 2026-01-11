// lenis-provider.tsx
"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { FC, useRef, useEffect, useContext } from "react";
import { createContext } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


type LenisScrollProviderProps = {
    children: React.ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;

        // 🔑 sync Lenis → ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        // 🔑 GSAP ticker → Lenis
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.off("scroll", ScrollTrigger.update);
        };
    }, []);


    return <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
    </ReactLenis>;
};


export default LenisScrollProvider;