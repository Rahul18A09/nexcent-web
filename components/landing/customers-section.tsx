import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";

export function CustomersSection() {
    return (
        <section className="bg-[#F5F7FA] py-8 md:py-8">
            <SectionContainer className="flex flex-col gap-8 lg:flex-row lg:gap-[78px]">
                <Image
                    src="/figma/customer-image.png"
                    alt="Customer profile"
                    width={326}
                    height={326}
                    className="h-auto w-full max-w-[326px] rounded-lg shadow-[0px_8px_16px_0px_rgba(171,190,209,0.4)]"
                />

                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <p className="text-base font-medium leading-6 text-[#717171]">
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel
                            rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                            tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                            laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed
                            augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis
                            vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat
                            ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
                            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold leading-7 text-[#4CAF4F]">Tim Smith</h3>
                            <p className="text-base leading-6 text-[#89939E]">
                                British Dragon Boat Racing Association
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                        <Image
                            src="/figma/customer-logos.svg"
                            alt="Customer partner logos"
                            width={493}
                            height={48}
                            className="h-auto w-full max-w-[493px]"
                        />
                        <Link
                            href="/customers"
                            className="inline-flex items-center gap-2 self-start p-2 text-xl font-semibold leading-7 text-[#4CAF4F]"
                        >
                            Meet all customers
                            <Image src="/figma/arrow-right-24.svg" alt="" aria-hidden width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}
