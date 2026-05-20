import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { communityCards } from "@/constants";

export function CommunitySection() {
    return (
        <section className="pb-10 md:pb-[42px]">
            <SectionContainer className="space-y-4">
                <SectionHeading
                    title={
                        <>
                            Manage your entire community
                            <br />
                            in a single system
                        </>
                    }
                    description="Who is Nextcent suitable for?"
                />
                <div className="grid gap-6 pt-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-[127px]">
                    {communityCards.map((card) => (
                        <article
                            key={card.title}
                            className="mx-auto flex w-full max-w-[299px] flex-col items-center gap-4 rounded-lg bg-white px-8 py-6 text-center shadow-[0px_2px_4px_0px_rgba(171,190,209,0.2)]"
                        >
                            <Image src={card.icon} alt="" aria-hidden width={65} height={56} />
                            <h3 className="text-[28px] font-bold leading-9 text-[#4D4D4D]">{card.title}</h3>
                            <p className="text-sm leading-5 text-[#717171]">{card.description}</p>
                        </article>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
