import Image from "next/image";
import type { ReactNode } from "react";

export function PrimaryButton({
    children,
    withArrow = false,
    className,
}: {
    children: ReactNode;
    withArrow?: boolean;
    className?: string;
}) {
    return (
        <button
            className={`inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#4CAF4F] px-8 py-3.5 text-base font-medium leading-6 text-white transition hover:bg-[#43a046] ${className ?? ""}`}
            type="button"
        >
            {children}
            {withArrow ? (
                <Image src="/figma/arrow-right-16.svg" alt="" aria-hidden width={16} height={16} />
            ) : null}
        </button>
    );
}
