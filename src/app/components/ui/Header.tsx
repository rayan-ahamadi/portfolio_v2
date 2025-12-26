import Container from "@/components/layout/Container";
import Link from "next/link";

export default function Header() {
    return <header className="fixed top-0 w-full z-50">
        <Container className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12 flex justify-between items-center py-7 uppercase">
                <span className="font-black font-primary text-accent text-4xl mix-blend-multiply">Rayan.dev</span>
                <nav>
                    <ul className="font-semibold font-primary text-secondary text-lg flex gap-6">
                        <Link href="#works"><li>Projects</li></Link>
                        <Link href="#about"><li>About</li></Link>
                        <Link href="#contact"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>;
}