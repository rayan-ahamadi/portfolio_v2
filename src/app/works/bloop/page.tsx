"use client"

import { ProjectLayout } from "@/components/layout/ProjectLayout"
import { BentoGrid } from "@/components/ui/BentoGrid"
import { BentoItem } from "@/components/ui/BentoItem"
import LeftArrow from "@/assets/vector/left_arrow.svg"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Header from "@/components/ui/Header"

export default function ProjectBloopPage() {
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
                            <h1 className="text-9xl font-bold uppercase mb-9">Bloop</h1>
                            <div className="">
                                <h2 className="text-3xl font-light uppercase mb-3">In collaboration with :</h2>
                                <h2 className="text-4xl font-bold uppercase">
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
                                className="rounded-lg h-auto object-cover"
                            />
                        </div>
                    </ProjectLayout.Hero>
                    <ProjectLayout.Description>
                        {/* Description content for Bloop project */}
                        <h3 className="font-semibold mb-7 text-4xl uppercase">Description</h3>
                        <p className="font-light text-3xl normal-case leading-10">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </ProjectLayout.Description>
                    <ProjectLayout.Bento>
                        {/* Bento content for Bloop project */}
                        <BentoGrid>
                            <BentoItem colSpan={8} rowSpan={2}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src="/images/projects/Bloop/BloopImage1.png"
                                        alt="Bloop Bento Preview"
                                        width={541}
                                        height={385}
                                        className="rounded-lg h-auto object-cover"
                                    /></div>

                            </BentoItem>

                            <BentoItem colSpan={4} rowSpan={2}>
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

                            <BentoItem colSpan={7}>
                                <div className="flex flex-col justify-center h-full">
                                    <h3 className="font-black text-3xl uppercase">Proxima Nova Condensed</h3>
                                    <p className="font-light text-2xl ">Lorem Ipsum Dolor Sit Amet.</p>
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

                            <BentoItem colSpan={6} bgColorClass="bg-[#FF99CF]">
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
                                        Figma - NextJS - TypeScript - TailwindCSS
                                    </p>
                                    <p className="text-2xl font-light normal-case leading-7">
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