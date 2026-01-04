export function BentoGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid
        grid-cols-1
        gap-4
        md:grid-cols-6
        md:gap-5
        lg:grid-cols-12
        lg:gap-6">
            {children}
        </div>
    )
}
