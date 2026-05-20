import type { ReactNode } from "react";

export function SectionContainer({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[144px] ${className ?? ""}`}>
            {children}
        </div>
    );
}
