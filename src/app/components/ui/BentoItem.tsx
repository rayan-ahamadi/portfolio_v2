type BentoItemProps = {
    colSpan?: number
    rowSpan?: number
    bgColorClass?: string
    children: React.ReactNode
}

const colSpanClasses: Record<number, string> = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
}

const rowSpanClasses: Record<number, string> = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
}


export function BentoItem({
    colSpan = 4,
    rowSpan = 1,
    bgColorClass = "bg-[#E9E9E9]",
    children,
}: BentoItemProps) {
    return (
        <div
            className={`
        ${colSpanClasses[colSpan]}
        ${rowSpanClasses[rowSpan]}
        rounded-xl
        ${bgColorClass}
        p-6
      `}
        >
            {children}
        </div>
    )
}