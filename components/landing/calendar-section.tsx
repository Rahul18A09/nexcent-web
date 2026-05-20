import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { PrimaryButton } from "@/components/ui/primary-button";

export function CalendarSection() {
    return (
        <section className="py-8 md:py-12">
            <SectionContainer className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[49px]">
                <Image
                    src="/figma/calendar-illustration.svg"
                    alt="Calendar and mobile app illustration"
                    width={441}
                    height={433}
                    className="h-auto w-full max-w-[441px]"
                />
                <div className="max-w-[661px] space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-[28px] font-semibold leading-9 text-[#4D4D4D] md:text-4xl md:leading-11">
                            How to design your site footer like we did
                        </h2>
                        <p className="text-sm leading-5 text-[#717171]">
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
                            molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
                            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
                            porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna
                            tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent
                            felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
                            ipsum id gravida.
                        </p>
                    </div>
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
            </SectionContainer>
        </section>
    );
}
