import Container from "@/components/layout/Container";
import Link from "next/link";

export default function Header() {
    return <header className="fixed top-0 w-full z-[60]">
        <Container className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12 flex justify-between items-center py-7 uppercase">
                <Link href="/" className="flex items-baseline gap-6">
                    <span className="font-black font-primary text-accent text-4xl mix-blend-multiply">Rayan.dev</span>
                    <span className="font-medium font-primary text-secondary text-2xl normal-case mix-blend-multiply">Creative Developer</span>
                </Link>
                <nav>
                    <ul className="font-semibold font-primary text-secondary text-lg flex gap-6">
                        <Link href="#works" className="underlined-text"><li>Projects</li></Link>
                        <Link href="#about" className="underlined-text"><li>About</li></Link>
                        <Link href="#contact" className="underlined-text"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>;
}