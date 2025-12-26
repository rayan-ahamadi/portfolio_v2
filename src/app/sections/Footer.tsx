import Container from "@/components/layout/Container";
import Link from "next/link";
import FleurFooter from "@/assets/vector/Fleur_Footer.svg";

export default function Hero() {
    return <section id="contact" className="bg-secondary min-h-screen h-auto pt-12">
        <Container className="grid grid-cols-12 gap-6">
            <FleurFooter className="absolute h-auto bottom-[15vh] pointer-events-none select-none z-0 left-[35vw]" />
            <h2 className="w-max col-start-1 col-end-12 font-primary font-black text-accent text-[292px] uppercase tracking-tight leading-[0.70]">Contact Me</h2>
            <Link className="col-start-6 col-end-12 mt-48 w-max" href="mailto:rayanahamadi13@gmail.com">
                <span className="text-7xl uppercase underline text-primary font-semibold">Rayanahamadi13@gmail.com</span>
            </Link>

            <ul className="col-start-1 col-span-2 text-5xl font-primary font-regular flex flex-col gap-3 mt-22 normal-case text-primary w-max">
                <li><Link href=""><span>Github</span></Link></li>
                <li><Link href=""><span>Linkedin</span></Link></li>
            </ul>
        </Container>
    </section>;
}