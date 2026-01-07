"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollRefresh() {
    useEffect(() => {
        const refresh = () => ScrollTrigger.refresh();

        // 1. après chargement complet (images, fonts)
        window.addEventListener("load", refresh);

        // 2. sécurité supplémentaire
        setTimeout(refresh, 100);

        return () => {
            window.removeEventListener("load", refresh);
        };
    }, []);
}
