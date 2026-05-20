import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { PrimaryButton } from "@/components/ui/primary-button";

export function HeroSection() {
    return (
        <section className="bg-[#F5F7FA] py-12 md:py-24">
            <SectionContainer className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[104px]">
                <div className="max-w-[657px] space-y-4">
                    <h1 className="text-4xl font-semibold leading-[52px] text-[#4D4D4D] md:text-[64px] md:leading-[76px]">
                        Lessons and insights
                        <br />
                        <span className="text-[#4CAF4F]">from 8 years</span>
                    </h1>
                    <p className="text-base leading-6 text-[#717171]">
                        Where to grow your business as a photographer: site or social media?
                    </p>
                    <PrimaryButton className="mt-4">Register</PrimaryButton>
                </div>

                <Image
                    src="/figma/hero-illustration.svg"
                    alt="Business dashboard illustration"
                    width={391}
                    height={407}
                    className="h-auto w-full max-w-[391px]"
                    priority
                />
            </SectionContainer>

            <div className="mt-[70px] flex items-center justify-center gap-2">
                <span className="h-[10px] w-[10px] rounded-full bg-[#4CAF4F]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#4CAF4F]/30" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#4CAF4F]/30" />
            </div>
        </section>
    );
}
