"use client"

import Container from "@/components/layout/Container";
import Link from "next/link";
import NewLink from "./NewLink";

export default function Header() {
    return <header className="fixed top-0 w-full z-[60]">
        <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col md:flex-row justify-between items-center py-7 uppercase">
                <NewLink href="/" className="flex flex-col md:flex-row items-center md:items-baseline  md:gap-4">
                    <span className="font-black font-primary text-accent text-4xl select-none mix-blend-difference">Rayan.dev</span>
                    <span className="font-medium font-primary text-secondary text-2xl normal-case select-none mix-blend-difference">Creative Developer</span>
                </NewLink>
                <nav className="block">
                    <ul className="font-semibold font-primary text-secondary text-lg flex gap-6">
                        <Link href="#works" className="underlined-text mix-blend-difference"><li>Projects</li></Link>
                        <Link href="#about" className="underlined-text mix-blend-difference"><li>About</li></Link>
                        <Link href="#contact" className="underlined-text mix-blend-difference"><li>Contact</li></Link>
                        <Link href="" className="underlined-text mix-blend-difference"><li>Resume</li></Link>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>;
}