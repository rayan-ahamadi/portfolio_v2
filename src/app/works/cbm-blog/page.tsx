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

import { Bebas_Neue, Public_Sans } from "next/font/google"

const bebaNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-beba-neue",
    display: "swap",
});

const publicSans = Public_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-public-sans",
    display: "swap",
});

export default function ProjectCBMBlogPage() {
    const router = useRouter()
    useScrollRefresh();

    return (
        <div>
            <main className="relative z-10">
                <Header />

                <ProjectPageLeftArrow />
                <ProjectLayout className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
                    <ProjectLayout.Hero>
                        {/* Hero content for CBMBlog project */}
                        <div className="mb-15">
                            <h1 className="text-7xl md:text-8xl lg:text-9xl  font-bold uppercase mb-9">CBM Blog</h1>
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center overflow-hidden p-8 bg-[#96a2d0] h-max">
                            <Image
                                src="/images/projects/CBMBlog/CBMBlogHero.png"
                                alt="CBM Blog Project Preview"
                                width={960}
                                height={680}
                                className="rounded-lg  object-cover flex-1"
                            />
                            <div className="flex justify-between w-full text-xs md:text-sm lg:text-base mt-4 px-2">
                                <p>At : La Plateforme School</p>
                                <p>Role : Front-End Developer</p>
                            </div>
                        </div>
                    </ProjectLayout.Hero>
                    <ProjectLayout.Description>
                        {/* Description content for CBMBlog project */}
                        <h3 className="font-semibold mb-7 text-2xl md:text-3xl lg:text-4xl uppercase">Description</h3>
                        <p className="font-light text-xl md:text-2xl lg:text-3xl normal-case leading-normal md:leading-10">
                            CBM Blog is a static website dedicated to superhero movies and TV series.
                            Built using only HTML and CSS, this project was my first complete front-end experience during my studies.
                            It focuses on layout and content structure and represents an important milestone in my understanding of the fundamentals of the web.
                        </p>
                    </ProjectLayout.Description>
                    <ProjectLayout.Bento>
                        {/* Bento content for CBMBlog project */}
                        <BentoGrid>
                            <BentoItem colSpan={1} mdColSpan={4} lgColSpan={8} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/CBMBlog/CBMBlogImage1.png"
                                        alt="CBMBlog Bento Preview"
                                        width={541}
                                        height={385}
                                        className="rounded-lg h-auto object-cover z-[55]"
                                    /></div>

                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={2} lgColSpan={4} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/CBMBlog/CBMBlogImage2.png"
                                        alt="CBMBlog Bento Preview"
                                        width={203}
                                        height={442}
                                        className="rounded-lg h-auto object-cover z-[55]"
                                    />
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={7}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className={`font-extrabold text-3xl uppercase ${bebaNeue.className}`}>Bebas Neue</h3>
                                    <p className={`font-light text-2xl ${publicSans.className}`}>Public Sans</p>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={5}>
                                <div className="flex flex-wrap justify-center items-center gap-6 h-full">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#A42A2A] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#A42A2A</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#151A2F] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#151A2F</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#35A7D9] rounded-lg w-16 h-16 mb-3"></div>
                                        <p className="font-regular text-lg">#35A7D9</p>
                                    </div>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={6} bgColorClass="bg-[#96a2d0]">
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">Intent :</h3>
                                    <p className="text-lg md:text-xl lg:text-2xl font-light normal case">
                                        Create a static blog to share my passion for superhero movies and series.
                                    </p>
                                </div>
                            </BentoItem>

                            <BentoItem colSpan={1} mdColSpan={3} lgColSpan={6}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">Stack :</h3>
                                    <p className="text-lg md:text-xl lg:text-2xl font-light normal-case leading-7">
                                        HTML - CSS
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