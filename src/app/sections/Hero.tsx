import Container from "@/components/layout/Container";
import FleurHero from "@/assets/vector/Fleur_Hero.svg";

export default function Hero() {
    return <section className="bg-primary min-h-screen h-auto">
        <Container className="grid grid-cols-12 gap-6">
            <FleurHero className="absolute top-26 h-auto pointer-events-none select-none z-0 w-128.25 left-[35vw]" />
            <div className="col-span-12 flex flex-col justify-end items-start min-h-screen py-7 tracking-tight">
                <h2 className="text-5xl font-primary">Creative developer focused on <span className="font-accent text-accent text-[68px] mix-blend-darken">motion</span> and <span className="font-accent text-accent text-[68px] mix-blend-darken">structure</span></h2>
                <h1 className="text-[318px] font-primary font-black text-accent uppercase leading-[0.70] mix-blend-darken">Rayan.dev</h1>
            </div>
            <div className="col-start-2 col-end-11 text-[176px] font-primary font-extralight leading-[0.70] mix-blend-darken z-10 grid grid-cols-10 grid-rows-3 grid-flow-row gap-17 pb-20 my-32 uppercase">
                <p className="inline w-max col-start-1 col-end-3">
                    <span className="font-accent normal-case text-accent text-[176px]">Design</span> First
                </p>
                <p className="inline w-max col-start-2 col-end-5 row-start-2">
                    <span className="font-accent normal-case text-accent text-[176px]">Code</span> Second
                </p>
                <p className="inline w-max col-start-4 col-end-7 row-start-3">
                    <span className="font-accent normal-case text-accent text-[176px]">Motion</span> Always
                </p>
            </div>
        </Container>
    </section>;
}