"use client";

export default function LoadingScreen() {
    return (
        <div id="loading-container" className="fixed inset-0 z-[48] grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, index) => (
                <div
                    key={index}
                    className={`tile bg-secondary ${Math.floor(index / 12) % 2 === index % 2 ? "even" : "odd"}`}>
                </div>
            ))}
            <div id="text-loader" className="absolute inset-0 flex items-center justify-center z-[49] pointer-events-none uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200">
                    <defs>
                        <clipPath id="theClipPath">
                            <rect className="masker" width="600" height="200" fill="#444" />
                        </clipPath>
                    </defs>

                    <rect width="600" height="200" fill="#000009" />
                    <text textAnchor="middle" x="300" y="150" fontSize="128" fill="#d7dae1" fontWeight="900">Rayan.dev</text>

                    <rect width="600" height="200" className="masker" fill="#000009" />
                    <g clipPath="url(#theClipPath)">
                        <text textAnchor="middle" x="300" y="150" fontSize="128" fill="#775bc8" fontWeight="900">Rayan.dev</text>
                    </g>
                </svg>
            </div>
        </div>
    );
}