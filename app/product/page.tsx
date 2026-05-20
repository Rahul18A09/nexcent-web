import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CalendarSection } from "@/components/landing/calendar-section";

import { ProtectedRoute } from "@/components/auth/protected-route";

export default function ProductPage() {
    return (
        <ProtectedRoute>
            <div className="py-20">
                <SectionContainer>
                    <SectionHeading
                        title="Our Products"
                        description="Next-generation products for your organization."
                    />
                    <div className="mt-12">
                        <CalendarSection />
                    </div>
                </SectionContainer>
            </div>
        </ProtectedRoute>
    );
}
