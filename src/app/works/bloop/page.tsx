"use client"

import { ProjectLayout } from "@/components/layout/ProjectLayout"
import { BentoGrid } from "@/components/ui/BentoGrid"
import { BentoItem } from "@/components/ui/BentoItem"
import LeftArrow from "@/assets/vector/left_arrow.svg"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Header from "@/components/ui/Header"

import { proximaNova } from "@/../lib/fonts"


export default function ProjectBloopPage() {
    const router = useRouter()
    return (
        <div>

            <main className="relative z-10">
                <Header />

                <LeftArrow
                    onClick={() => router.back()}
                    className="fixed cursor-pointer bottom-10 left-5 md:left-20 w-10 h-10 hover:opacity-70 transition-opacity duration-300"
                />
                <ProjectLayout className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
                    <ProjectLayout.Hero>
                        {/* Hero content for Bloop project */}
                        <div className="mb-15">
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold uppercase mb-9">Bloop</h1>
                            <div className="">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-light uppercase mb-3">In collaboration with :</h2>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                                    <Link href="https://fr.linkedin.com/in/lucie-cottrelle">Lucie Cottrelle • </Link>
                                    <Link href="https://github.com/AdlenSouci">Adlen Souci • </Link>
                                    <Link href="https://github.com/charefs13">Mohamed saadi</Link>
                                </h2>
                            </div>
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center overflow-hidden p-8 bg-[#FF99CF] h-max">
                            <Image
                                src="/images/projects/Bloop/BloopHero.png"
                                alt="Bloop Project Preview"
                                width={960}
                                height={680}
                                className="rounded-lg h-auto object-cover z-[55] flex-1"
                            />
                            <div className="flex justify-between w-full">
                                <p>At : La Plateforme & Ynov</p>
                                <p>Role : Full-Stack Developer</p>
                            </div>
                        </div>
                    </ProjectLayout.Hero>
                    <ProjectLayout.Description>
                        {/* Description content for Bloop project */}
                        <h3 className={"font-semibold mb-7 text-2xl md:text-3xl lg:text-4xl uppercase"}>Description</h3>
                        <p className="font-light text-xl md:text-2xl lg:text-3xl normal-case leading-normal md:leading-10">
                            Bloop is a fictional social media platform inspired by Twitter, designed around a bold neo-brutalist visual language. Developed as a collaborative project with three other creatives, it explores interface structure, typography, and interaction patterns within a contemporary social network context. The project is still evolving, with ongoing experimentation around usability, visual identity, and front-end implementation.
                        </p>
                    </ProjectLayout.Description>
                    <ProjectLayout.Bento>
                        {/* Bento content for Bloop project */}
                        <BentoGrid>
                            <BentoItem colSpan={1} mdColSpan={4} lgColSpan={8} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/Bloop/BloopImage1.png"
                                        alt="Bloop Bento Preview"
                                        width={541}
                                        height={385}
                                        className="rounded-lg h-auto object-cover z-[55]"
                                    /></div>

                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={2} lgColSpan={4} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/Bloop/BloopImage2.png"
                                        alt="Bloop Bento Preview"
                                        width={203}
                                        height={442}
                                        className="rounded-lg h-auto object-cover"
                                    />
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={7}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className={`font-black text-3xl uppercase ${proximaNova.className}`}>Proxima Nova Extra Condensed</h3>
                                    <p className={`font-light text-2xl ${proximaNova.className}`}>Lorem Ipsum Dolor Sit Amet.</p>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={5}>
                                <div className="flex flex-wrap justify-center items-center gap-6 h-full">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#FF4DAB] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#FF4DAB</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#000000] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#000000</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#A8FFC7] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#A8FFC7</p>
                                    </div>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={6} bgColorClass="bg-[#FF99CF]">
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">Intent :</h3>
                                    <p className="text-lg md:text-xl lg:text-2xl font-light normal case">
                                        Create a social network without social pressure.
                                    </p>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={6}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">Stack :</h3>
                                    <p className="text-lg md:text-xl lg:text-2xl font-light normal-case leading-7">
                                        Figma - NextJS - TypeScript - TailwindCSS
                                    </p>
                                    <p className="text-lg md:text-xl lg:text-2xl font-light normal-case leading-7">
                                        Symfony - ExpressJS - PostgreSQL - Socket.IO - Docker
                                    </p>
                                </div>
                            </BentoItem>
                        </BentoGrid>
                    </ProjectLayout.Bento>
                </ProjectLayout>
            </main>

        </div >
    )
}