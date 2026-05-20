import type { ReactNode } from "react";

export function SectionHeading({
    title,
    description,
    center = true,
}: {
    title: ReactNode;
    description: string;
    center?: boolean;
}) {
    return (
        <div className={`space-y-2 ${center ? "mx-auto text-center" : "text-left"}`}>
            <h2 className="text-[28px] font-semibold leading-9 text-[#4D4D4D] md:text-4xl md:leading-11">
                {title}
            </h2>
            <p className="text-base leading-6 text-[#717171]">{description}</p>
        </div>
    );
}
