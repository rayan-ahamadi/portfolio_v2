import Container from "@/components/layout/Container";
import Link from "next/link";
import FleurFooter from "@/assets/vector/Fleur_Footer.svg";

export default function Hero() {
    return <section id="contact" className="bg-secondary min-h-screen h-auto pt-24 ">
        <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 relative top-[10vh] md:static">
            <FleurFooter className="absolute bottom-[2vh] pointer-events-none select-none z-0 left-[35vw] opacity-15" />
            <h2 className="w-max col-span-4 md:col-span-8 lg:col-span-12 font-primary font-extrabold text-accent text-[82px] md:text-[292px] uppercase leading-[0.70] z-[55]">Contact Me</h2>
            <Link className="col-span-4 col-start-1 md:col-span-8 lg:col-start-6 lg:col-end-12 mt-24 w-max" href="mailto:rayanahamadi13@gmail.com">
                <span className="text-4xl md:text-7xl uppercase underline text-primary font-semibold">Rayanahamadi13@gmail.com</span>
            </Link>

            <ul className="col-start-1 col-span-2 text-3xl md:text-5xl font-primary font-regular flex flex-col gap-2 md:gap-3 mt-24 normal-case text-primary w-max">
                <li><Link href="https://github.com/rayan-ahamadi" className="underlined-text-white"><span>Github</span></Link></li>
                <li><Link href="https://www.linkedin.com/in/rayan-ahamadi/" className="underlined-text-white"><span>Linkedin</span></Link></li>
            </ul>
        </Container>
    </section>;
}