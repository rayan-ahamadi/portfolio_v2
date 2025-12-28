import Container from "@/components/layout/Container";
import Image from "next/image";
import Ellipse1 from "@/assets/vector/ellipse1.svg";
import Ellipse2 from "@/assets/vector/ellipse2.svg";
import Link from "next/link";



export default function SelectedWorks() {

    const projects = [
        {
            title: "Bloop",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "/images/bloop.webp",
            link: "/works/bloop"
        },
        {
            title: "Café Ronron",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "/images/cafe_ronron.webp",
            link: "/works/cafe-ronron"
        },
        {
            title: "CBM Blog",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "/images/cbm_blog.webp",
            link: "/works/cbm-blog"
        },
    ]

    return <section id="works" className="relative overflow-hidden bg-primary min-h-screen h-auto">

        <Container className="grid grid-cols-12 gap-6">
            <h2 className="col-span-8 uppercase font-primary text-secondary font-bold text-9xl">Selected Works</h2>
            <div className="grid grid-cols-10 grid-rows-3 grid-flow-row col-start-2 col-end-11 gap-20 my-32">
                <div id="ellipse-div" className="absolute inset-0 pointer-events-none h-screen w-screen top-0 left-0">
                    <Ellipse1 className="absolute top-1/4 left-[55vw] select-none" />
                    <Ellipse2 className="absolute top-4/6 right-[55vw] select-none" />
                </div>
                {projects.map((project, index) => (
                    <div key={index} className={`col-span-6 ${index % 2 === 0 ? 'col-start-1' : 'col-start-5'}`}>
                        <Link href={project.link} className="hover:opacity-70 transition-opacity duration-300">
                            <Image
                                src={project.imageUrl + `?${new Date().getTime()}`}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="mb-4 h-auto w-200 object-cover"
                            />
                        </Link>
                        <div className="flex flex-col gap-3">
                            <h3 className="mt-4 text-3xl  font-semibold font-primary text-secondary uppercase">{project.title}</h3>
                            <p className="mt-2 text-2xl font-light font-primary text-secondary uppercase leading-7">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>;
}