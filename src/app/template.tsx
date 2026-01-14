"use client";

import LoadingScreen from "@/components/animations/LoadingScreen";
import { animatePageIn } from "./utils/TransitionAnimations";
import { use, useEffect } from "react";

type Props = {
    children?: React.ReactNode;
};

export default function Template({ children }: Props) {

    useEffect(() => {
        animatePageIn();
    }, []);

    return (
        <div>
            <LoadingScreen />
            {children}
        </div>
    );
}
