"use client"

import { animatePageOut } from "@/utils/TransitionAnimations";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type LinkProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

export default function NewLink({ children, href, className }: LinkProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (pathname === href) return;

        animatePageOut({ href, router: router });
    };

    return (
        <Link onClick={handleClick} className={className} href={href}>
            {children}
        </Link>
    );
}