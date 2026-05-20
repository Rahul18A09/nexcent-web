import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { UnlockSection } from "@/components/landing/unlock-section";

import { ProtectedRoute } from "@/components/auth/protected-route";

export default function FeaturePage() {
    return (
        <ProtectedRoute>
            <div className="py-20">
                <SectionContainer>
                    <SectionHeading
                        title="Our Features"
                        description="Discover the powerful features of Nexcent."
                    />
                    <div className="mt-12">
                        <UnlockSection />
                    </div>
                </SectionContainer>
            </div>
        </ProtectedRoute>
    );
}
