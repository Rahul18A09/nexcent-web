import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { stats } from "@/constants";

export function AchievementsSection() {
    return (
        <section className="bg-[#F5F7FA] py-8 md:py-16">
            <SectionContainer className="grid items-center gap-8 lg:grid-cols-2">
                <div className="space-y-2">
                    <h2 className="text-[28px] font-semibold leading-9 text-[#4D4D4D] md:text-4xl md:leading-11">
                        Helping a local
                        <br />
                        <span className="text-[#4CAF4F]">business reinvent itself</span>
                    </h2>
                    <p className="text-base leading-6 text-[#18191F]">
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex items-center gap-4">
                            <Image src={stat.icon} alt="" aria-hidden width={48} height={48} />
                            <div>
                                <p className="text-[28px] font-bold leading-9 text-[#4D4D4D]">{stat.value}</p>
                                <p className="text-base leading-6 text-[#717171]">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
