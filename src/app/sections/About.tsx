import Container from "@/components/layout/Container";
import Image from "next/image";
import StackSlider from "@/components/ui/StackSlider";

export default function About() {
    return <section id="about" className="bg-secondary min-h-screen h-auto py-28">
        <Container className="grid grid-cols-12 gap-6">
            <h2 className="col-span-8 text-primary font-primary font-bold uppercase text-9xl">About Me</h2>
            <div className="col-start-3 col-span-7 py-28 z-50">
                <p className="font-primary text-primary font-regular leading-14 tracking-tight text-5xl z-[55] uppercase">
                    I'm Rayan Ahamadi, a <span className="text-accent">front-end creative developer</span> based in Aix-en-Provence,France and currently in a work-study program.
                    I design and build <span className="text-accent"> interactive</span> interfaces with a strong attention to <span className="text-accent">motion</span>, <span className="text-accent">structure</span>, and <span className="text-accent">visual identity</span>.
                    aiming to create meaningful and expressive digital experiences.
                </p>
            </div>
            <div className="col-start-8 col-span-3 relative bottom-75 z-0">
                <div className="absolute inset-0 bg-accent mix-blend-multiply z-10"></div>
                <Image
                    src="/images/rara.png"
                    alt="Rayan Ahamadi"
                    width={302}
                    height={302}
                    className="h-auto object-cover"
                />
            </div>

        </Container>
        {/* <div className="overflow-hidden flex flex-col gap-10 relative bottom-16">
            <StackSlider />
            <StackSlider textColor="#775BC8" scrollDirection="left" />
        </div> */}

    </section>;
}
