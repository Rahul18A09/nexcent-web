import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";

export function Footer() {
    return (
        <footer className="bg-[#263238] py-12 text-white md:py-16">
            <SectionContainer className="grid gap-10 lg:grid-cols-[350px_1fr]">
                <div className="space-y-10">
                    <Link href="/">
                        <Image src="/figma/logo.svg" alt="Nexcent" width={191} height={30} className="brightness-0 invert" />
                    </Link>
                    <div className="space-y-2 text-sm leading-5 text-[#F5F7FA]">
                        <p>Copyright © 2020 Nexcent ltd.</p>
                        <p>All rights reserved</p>
                    </div>
                    <Image src="/figma/social-links.svg" alt="Social media links" width={176} height={32} />
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold leading-7">Company</h3>
                        <ul className="space-y-3 text-sm leading-5 text-[#F5F7FA]">
                            <li><Link href="#">About us</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Contact us</Link></li>
                            <li><Link href="#">Pricing</Link></li>
                            <li><Link href="/testimonial">Testimonials</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold leading-7">Support</h3>
                        <ul className="space-y-3 text-sm leading-5 text-[#F5F7FA]">
                            <li><Link href="/faq">Help center</Link></li>
                            <li><Link href="#">Terms of service</Link></li>
                            <li><Link href="#">Legal</Link></li>
                            <li><Link href="#">Privacy policy</Link></li>
                            <li><Link href="#">Status</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold leading-7">Stay up to date</h3>
                        <label className="relative block max-w-[255px]">
                            <span className="sr-only">Your email address</span>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="h-10 w-full rounded-lg bg-white/20 px-3.5 pr-11 text-sm leading-5 text-[#D9DBE1] placeholder:text-[#D9DBE1] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                            />
                            <Image
                                src="/figma/send-icon.svg"
                                alt=""
                                aria-hidden
                                width={18}
                                height={18}
                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                            />
                        </label>
                    </div>
                </div>
            </SectionContainer>
        </footer>
    );
}
