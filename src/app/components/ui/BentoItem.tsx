type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type BentoItemProps = {
    colSpan?: Span
    mdColSpan?: Span
    lgColSpan?: Span
    rowSpan?: 1 | 2 | 3
    bgColorClass?: string
    children: React.ReactNode
}

const colSpanClasses = {
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


const mdColSpanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
}

const lgColSpanClasses = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    7: "lg:col-span-7",
    8: "lg:col-span-8",
    9: "lg:col-span-9",
    10: "lg:col-span-10",
    11: "lg:col-span-11",
    12: "lg:col-span-12",
}

const rowSpanClasses: Record<number, string> = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
}


export function BentoItem({
    colSpan = 1,
    mdColSpan,
    lgColSpan,
    rowSpan = 1,
    children,
    bgColorClass = "bg-[#E9E9E9]",
}: BentoItemProps) {
    return (
        <div
            className={`
        ${bgColorClass}
        ${colSpanClasses[colSpan]}
        ${mdColSpan ? mdColSpanClasses[mdColSpan] : ""}
        ${lgColSpan ? lgColSpanClasses[lgColSpan] : ""}
        row-span-${rowSpan}
        rounded-xl
        p-6
      `}
        >
            {children}
        </div>
    )
}