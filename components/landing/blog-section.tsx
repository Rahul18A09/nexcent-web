import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogCards } from "@/constants";

export function BlogSection() {
    return (
        <section className="py-12 md:py-16">
            <SectionContainer className="space-y-4">
                <SectionHeading
                    title="Caring is the new marketing"
                    description="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
                />

                <div className="grid gap-6 pt-2 md:grid-cols-2 lg:grid-cols-3">
                    {blogCards.map((card) => (
                        <article key={card.title} className="mx-auto flex w-full max-w-[368px] flex-col items-center">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={368}
                                height={286}
                                className="h-[286px] w-full rounded-lg object-cover"
                            />
                            <div className="-mt-24 flex w-[317px] flex-col items-center gap-4 rounded-lg bg-[#F5F7FA] p-4 text-center shadow-[0px_8px_16px_0px_rgba(171,190,209,0.4)]">
                                <h3 className="text-xl font-semibold leading-7 text-[#717171]">{card.title}</h3>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 p-2 text-xl font-semibold leading-7 text-[#4CAF4F]"
                                >
                                    Readmore
                                    <Image src="/figma/arrow-right-24.svg" alt="" aria-hidden width={24} height={24} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
