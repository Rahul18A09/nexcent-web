import { SectionContainer } from "@/components/ui/section-container";
import { PrimaryButton } from "@/components/ui/primary-button";

export function CtaSection() {
    return (
        <section className="bg-[#F5F7FA] py-8 md:py-12">
            <SectionContainer className="flex flex-col items-center gap-8 text-center">
                <h2 className="max-w-[887px] text-4xl font-semibold leading-[52px] text-[#263238] md:text-[64px] md:leading-[76px]">
                    Pellentesque suscipit fringilla libero eu.
                </h2>
                <PrimaryButton withArrow>Get a Demo</PrimaryButton>
            </SectionContainer>
        </section>
    );
}
