import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";

import { ProtectedRoute } from "@/components/auth/protected-route";

export default function FaqPage() {
    return (
        <ProtectedRoute>
            <div className="py-20">
                <SectionContainer>
                    <SectionHeading
                        title="Frequently Asked Questions"
                        description="Find answers to common questions about Nexcent."
                    />
                    <div className="mt-12 max-w-3xl mx-auto space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-[#4D4D4D]">What is Nexcent?</h3>
                            <p className="text-[#717171]">Nexcent is a membership management software that provides full automation of membership renewals and payments.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-[#4D4D4D]">How can I register?</h3>
                            <p className="text-[#717171]">You can register by clicking the Register button on the home page or contact our support team.</p>
                        </div>
                    </div>
                </SectionContainer>
            </div>
        </ProtectedRoute>
    );
}
