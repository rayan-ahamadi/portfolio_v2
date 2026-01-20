import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-secondary px-4 text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-accent mb-4">404</h1>
            <p className="text-xl mb-8">The page you&apos;re looking for doesn&apos;t exist !</p>
            <Link href="/" className="text-lg md:text-2xl lg:text-3xl underlined-text">Go back to Home</Link>
        </div>
    );
}