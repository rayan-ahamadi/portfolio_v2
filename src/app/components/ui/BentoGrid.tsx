export function BentoGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-8">
            {children}
        </div>
    )
}
