import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { PrimaryButton } from "@/components/ui/primary-button";

export function UnlockSection() {
    return (
        <section className="py-4 md:py-[42px]">
            <SectionContainer className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[49px]">
                <Image
                    src="/figma/unlock-illustration.svg"
                    alt="Unlock membership management illustration"
                    width={442}
                    height={433}
                    className="h-auto w-full max-w-[442px]"
                />
                <div className="max-w-[661px] space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-[28px] font-semibold leading-9 text-[#4D4D4D] md:text-4xl md:leading-11">
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className="text-sm leading-5 text-[#717171]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
                            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem
                            sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium
                            auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum
                            pulvinar odio.
                        </p>
                    </div>
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
            </SectionContainer>
        </section>
    );
}
