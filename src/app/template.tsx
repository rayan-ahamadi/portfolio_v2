"use client";

import LoadingScreen from "@/components/animations/LoadingScreen";
import { animatePageIn } from "./utils/TransitionAnimations";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
    children?: React.ReactNode;
};

export default function Template({ children }: Props) {
    const pathname = usePathname();

    const normalizedPathname = (() => {
        if (!pathname) return "/";
        if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
        return pathname;
    })();

    const shouldShowLoader = (() => {
        const knownRoutes = new Set<string>([
            "/",
            "/works/bloop",
            "/works/cafe-ronron",
            "/works/cbm-blog",
        ]);

        return knownRoutes.has(normalizedPathname);
    })();

    useEffect(() => {
        if (!shouldShowLoader) return;
        animatePageIn();
    }, [shouldShowLoader]);

    return (
        <div>
            {shouldShowLoader ? <LoadingScreen /> : null}
            {children}
        </div>
    );
}
