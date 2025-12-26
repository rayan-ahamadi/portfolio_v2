import Container from "@/components/layout/Container";




export default function Header() {
    return <header className="fixed top-0 w-full z-50">
        <Container className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12 flex justify-between items-center py-7 uppercase">
                <span className="font-black font-primary text-accent text-4xl mix-blend-multiply">Rayan.dev</span>
                <nav>
                    <ul className="font-semibold font-primary text-secondary text-lg flex gap-6">
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>;
}