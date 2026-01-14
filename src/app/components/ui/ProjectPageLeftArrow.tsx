"use client";

import LeftArrow from "@/assets/vector/left_arrow.svg"
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/TransitionAnimations";

export default function ProjectPageLeftArrow() {
    const router = useRouter();

    const handleClick = () => {
        animatePageOut({ router: router });
    }

    return (
        <LeftArrow
            onClick={handleClick}
            className="fixed cursor-pointer bottom-10 left-5 md:left-20 w-10 h-10 hover:opacity-70 transition-opacity duration-300"
        />
    )
}