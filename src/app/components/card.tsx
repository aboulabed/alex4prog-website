import React from 'react';

type CardProps = {
    title: string;
    description: string;
    href?: string;
    // Optional styling controls
    gradientFrom?: string; // Tailwind color, e.g. 'from-orange-50'
    gradientTo?: string;   // Tailwind color, e.g. 'to-violet-50'
    // New: path to an SVG in /public
    svgSrc?: string;
};

export default function Card({
    title,
    description,
    href = '#',
    gradientFrom = 'from-orange-50',
    gradientTo = 'to-purple-50',
    svgSrc,
}: CardProps) {
    return (
        <div
            className={[
                'relative overflow-hidden rounded-2xl border border-black/5',
                'bg-gradient-to-r',
                gradientFrom,
                gradientTo,
                'p-6 sm:p-7 md:p-8',
                'shadow-sm transition-transform duration-300 hover:-translate-y-0.5',
            ].join(' ')}
        >
            {/* Subtle glow background */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%)',
                    insetInlineEnd: '-4rem',
                }}
            />

            {/* Right-side SVG decorative shape */}
            {svgSrc && (
                <div
                    className="pointer-events-none absolute inset-y-0 w-1/2 max-w-[280px] flex items-center justify-center opacity-80"
                    style={{ insetInlineEnd: 0 }}
                >
                    <img
                        src={svgSrc}
                        alt=""
                        className="h-40 sm:h-44 md:h-48 w-auto mix-blend-multiply opacity-70 drop-shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
                    />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-3">

                {/* Title */}
                <h3 className="mt-1 text-xl font-semibold text-gray-900">{title}</h3>

                {/* Description */}
                <p className="max-w-[36ch] text-sm leading-6 text-gray-600">{description}</p>

                {/* CTA */}
                <a
                    href={href}
                    className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-semibold text-gray-900 underline-offset-4 hover:underline"
                >
                    Learn more <span aria-hidden>→</span>
                </a>
            </div>
        </div>
    );
}
