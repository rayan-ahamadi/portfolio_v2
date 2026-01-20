"use client"

import { ProjectLayout } from "@/components/layout/ProjectLayout"
import { BentoGrid } from "@/components/ui/BentoGrid"
import { BentoItem } from "@/components/ui/BentoItem"
import ProjectPageLeftArrow from "@/components/ui/ProjectPageLeftArrow"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Header from "@/components/ui/Header"
import useScrollRefresh from "@/hooks/useScrollRefresh";

import { Playfair_Display, Poppins } from "next/font/google"
import { claytonia } from "@/../lib/fonts"


const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-playfair",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    display: "swap",
});

export default function ProjectRonronPage() {
    const router = useRouter()
    useScrollRefresh();

    return (
        <div>

            <main className="relative z-10">
                <Header />

                <ProjectPageLeftArrow />
                <ProjectLayout className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
                    <ProjectLayout.Hero>
                        {/* Hero content for CaféRonron project */}
                        <div className="mb-15">
                            <h1 className="text-7xl md:text-8xl lg:text-9xl  font-bold uppercase mb-4 md:mb-6 lg:mb-9">Café Ronron</h1>
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center overflow-hidden p-4 md:p-6 lg:p-8 bg-[#C0AAA5] h-max">
                            <Image
                                src="/images/projects/Ronron/RonronHero.png"
                                alt="Café Ronron Project Preview"
                                width={960}
                                height={680}
                                className="rounded-lg object-cover flex-1"
                            />
                            <div className="flex justify-between w-full text-xs md:text-sm lg:text-base mt-4 px-2">
                                <p>Self-Learning</p>
                                <p>Role : Front-End Developer</p>
                            </div>
                        </div>
                    </ProjectLayout.Hero>
                    <ProjectLayout.Description>
                        {/* Description content for CaféRonron project */}
                        <h3 className="font-semibold mb-7 text-2xl md:text-3xl lg:text-4xl uppercase">Description</h3>
                        <p className="font-light text-xl md:text-2xl lg:text-3xl normal-case leading-normal md:leading-10">
                            Café Ronron is a personal experimental project based on a fictional cat café concept.
                            The goal of this project is to explore motion design and user experience through animation, using GSAP as a core tool.
                            Rather than focusing on completeness, the project acts as a creative playground where ideas, transitions, and visual rhythm are continuously tested and refined.
                        </p>
                    </ProjectLayout.Description>
                    <ProjectLayout.Bento>
                        {/* Bento content for CaféRonron project */}
                        <BentoGrid>
                            <BentoItem colSpan={1} mdColSpan={4} lgColSpan={6} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/Ronron/RonronImage1.png"
                                        alt="Café Ronron Image 1 Preview"
                                        width={700}
                                        height={385}
                                        className="rounded-lg h-auto object-cover z-[55]"
                                    /></div>

                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={4} lgColSpan={6} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/Ronron/RonronImage2.png"
                                        alt="Café Ronron Image 2 Preview"
                                        width={700}
                                        height={385}
                                        className="rounded-lg h-auto object-cover z-[55]"
                                    />
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={7}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className={`text-3xl ${claytonia.className}`}>Claytonia</h3>
                                    <p className={`${playfair.className} font-light text-2xl`}>Playfair Display</p>
                                    <p className={`${poppins.className} font-light text-2xl`}>Poppins</p>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={5}>
                                <div className="flex flex-wrap justify-center items-center gap-6 h-full">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#DCB47F] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#DCB47F</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#F3EBE5] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#F3EBE5</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#799B4B] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#799B4B</p>
                                    </div>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={6} bgColorClass="bg-[#C0AAA5]">
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">Intent :</h3>
                                    <p className="text-lg md:text-xl lg:text-2xl font-light normal case">
                                        Explore motion design and user experience through animation.
                                    </p>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={6}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">Stack :</h3>
                                    <p className="text-lg md:text-xl lg:text-2xl font-light normal-case leading-7">
                                        Figma - ReactJS - Javascript - TailwindCSS
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