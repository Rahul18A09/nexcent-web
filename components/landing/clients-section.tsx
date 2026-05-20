import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ClientsSection() {
    return (
        <section className="py-10 md:py-14">
            <SectionContainer className="space-y-4 text-center">
                <SectionHeading
                    title="Our Clients"
                    description="We have been working with some Fortune 500+ clients"
                />
                <Image
                    src="/figma/client-logos.svg"
                    alt="Client logos"
                    width={1152}
                    height={98}
                    className="h-auto w-full"
                />
            </SectionContainer>
        </section>
    );
}
