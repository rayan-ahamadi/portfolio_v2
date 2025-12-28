export function ProjectLayout(
    {
        children,
        className = ""
    }: {
        children: React.ReactNode
        className?: string
    }) {
    return <div className={`max-w-[1440px] mx-auto mt-32 px-6 md:px-12 lg:px-20 ` + ` ${className}`}>
        {children}
    </div>
}

ProjectLayout.Hero = function Hero({ children }: { children: React.ReactNode }) {
    return <section className="col-start-2 col-end-11 text-center">{children}</section>
}

ProjectLayout.Description = function Description({ children }: { children: React.ReactNode }) {
    return <section className="col-start-2 col-end-11 mt-16">{children}</section>
}

ProjectLayout.Bento = function Bento({ children }: { children: React.ReactNode }) {
    return <section className="col-start-2 col-end-11 my-16">{children}</section>
}
