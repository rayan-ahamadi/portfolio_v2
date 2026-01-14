"use client"

import Container from "@/components/layout/Container";
import Link from "next/link";
import NewLink from "./NewLink";
import BurgerButton from "@/assets/vector/burger_button.svg";

export default function Header() {
    return <header className="fixed top-0 w-full z-[60]">
        <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex justify-between items-center py-7 uppercase">
                <NewLink href="/" className="flex flex-col md:flex-row items-baseline md:gap-6">
                    <span className="font-black font-primary text-accent text-4xl mix-blend-multiply">Rayan.dev</span>
                    <span className="font-medium font-primary text-secondary text-2xl normal-case mix-blend-multiply">Creative Developer</span>
                </NewLink>
                <nav className="hidden md:block">
                    <ul className="font-semibold font-primary text-secondary text-lg flex gap-6">
                        <Link href="#works" className="underlined-text"><li>Projects</li></Link>
                        <Link href="#about" className="underlined-text"><li>About</li></Link>
                        <Link href="#contact" className="underlined-text"><li>Contact</li></Link>
                        <Link href="" className="underlined-text"><li>Resume</li></Link>
                    </ul>
                </nav>
                <BurgerButton id="burgerButton" className="md:hidden w-9 h-9 cursor-pointer select-none fill-secondary" />
            </div>
        </Container>
    </header>;
}