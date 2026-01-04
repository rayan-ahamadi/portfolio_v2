"use client"

import { ProjectLayout } from "@/components/layout/ProjectLayout"
import { BentoGrid } from "@/components/ui/BentoGrid"
import { BentoItem } from "@/components/ui/BentoItem"
import LeftArrow from "@/assets/vector/left_arrow.svg"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Header from "@/components/ui/Header"

export default function ProjectRonronPage() {
    const router = useRouter()
    return (
        <div>
            <div className="noise" id="noise-white"></div>

            <main className="relative z-10">
                <Header />

                <LeftArrow
                    onClick={() => router.back()}
                    className="fixed cursor-pointer bottom-10 left-20 w-10 h-10 hover:opacity-70 transition-opacity duration-300"
                />
                <ProjectLayout className="grid grid-cols-12 gap-6">
                    <ProjectLayout.Hero>
                        {/* Hero content for Bloop project */}
                        <div className="mb-15">
                            <h1 className="text-9xl font-bold uppercase mb-9">Café Ronron</h1>
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center overflow-hidden p-8 bg-[#C0AAA5] h-max">
                            <Image
                                src="/images/projects/Ronron/RonronHero.png"
                                alt="Café Ronron Project Preview"
                                width={960}
                                height={680}
                                className="rounded-lg h-auto object-cover"
                            />
                        </div>
                    </ProjectLayout.Hero>
                    <ProjectLayout.Description>
                        {/* Description content for Bloop project */}
                        <h3 className="font-semibold mb-7 text-4xl uppercase">Description</h3>
                        <p className="font-light text-3xl normal-case leading-10">
                            Café Ronron is a personal experimental project based on a fictional cat café concept.
                            The goal of this project is to explore motion design and user experience through animation, using GSAP as a core tool.
                            Rather than focusing on completeness, the project acts as a creative playground where ideas, transitions, and visual rhythm are continuously tested and refined.
                        </p>
                    </ProjectLayout.Description>
                    <ProjectLayout.Bento>
                        {/* Bento content for Bloop project */}
                        <BentoGrid>
                            <BentoItem colSpan={6} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/Ronron/RonronImage1.png"
                                        alt="Café Ronron Image 1 Preview"
                                        width={700}
                                        height={385}
                                        className="rounded-lg h-auto object-cover"
                                    /></div>

                            </BentoItem>

                            <BentoItem colSpan={6} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/Ronron/RonronImage2.png"
                                        alt="Café Ronron Image 2 Preview"
                                        width={700}
                                        height={385}
                                        className="rounded-lg h-auto object-cover"
                                    />
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={7}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="font-black text-3xl uppercase">Claytonia</h3>
                                    <p className="font-light text-2xl ">Playfair Display</p>
                                    <p className="font-light text-2xl ">Poppins</p>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={5}>
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

                            <BentoItem colSpan={6} bgColorClass="bg-[#C0AAA5]">
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="text-3xl font-semibold uppercase">Intent :</h3>
                                    <p className="text-2xl font-light normal case">
                                        Create a social network without social pressure.
                                    </p>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={6}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="text-3xl font-semibold uppercase">Stack :</h3>
                                    <p className="text-2xl font-light normal-case leading-7">
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