import Container from "@/components/layout/Container";
import FleurHero from "@/assets/vector/Fleur_Hero.svg";

export default function Hero() {
    return <section className="relative min-h-screen h-auto bg-primary">
        <FleurHero className="absolute
    left-1/2 top-[42%] md:top-[40%]
    -translate-x-1/2 -translate-y-1/2
    w-84 md:w-128.25 h-auto
    pointer-events-none select-none
    " />
        <Container className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col justify-end items-start min-h-screen py-7 tracking-tight">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-primary z-[55] md:z-0">Creative developer focused on <span className="font-accent text-accent text-[46px] md:text-[62px] lg:text-[68px] mix-blend-darken">motion</span> and <span className="font-accent text-accent text-[46px] md:text-[62px] lg:text-[68px] mix-blend-darken">structure</span></h2>
                <h1 className="text-[92px] md:text-[218px]  lg:text-[318px] font-primary font-black text-accent uppercase leading-[0.70] mix-blend-darken">Rayan.dev</h1>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-12  text-[68px] md:text-[176px] font-primary font-extralight leading-[0.70] mix-blend-darken z-10 grid grid-cols-10 grid-rows-3 grid-flow-row gap-17 pb-20 my-32 uppercase">
                <p className="inline w-max col-start-1 md:col-start-1">
                    <span className="font-accent normal-case text-accent">Design</span> First
                </p>
                <p className="inline w-max col-start-1  md:col-start-2 row-start-2">
                    <span className="font-accent normal-case text-accent">Code</span> Second
                </p>
                <p className="inline w-max col-start-1  md:col-start-3 row-start-3">
                    <span className="font-accent normal-case text-accent">Motion</span> Always
                </p>
            </div>
        </Container>
    </section>;
}