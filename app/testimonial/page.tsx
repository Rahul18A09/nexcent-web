import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CustomersSection } from "@/components/landing/customers-section";

import { ProtectedRoute } from "@/components/auth/protected-route";

export default function TestimonialPage() {
    return (
        <ProtectedRoute>
            <div className="py-20">
                <SectionContainer>
                    <SectionHeading
                        title="Testimonials"
                        description="What our clients say about us."
                    />
                    <div className="mt-12">
                        <CustomersSection />
                    </div>
                </SectionContainer>
            </div>
        </ProtectedRoute>
    );
}
