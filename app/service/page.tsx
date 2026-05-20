import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CommunitySection } from "@/components/landing/community-section";

import { ProtectedRoute } from "@/components/auth/protected-route";

export default function ServicePage() {
    return (
        <ProtectedRoute>
            <div className="py-20">
                <SectionContainer>
                    <SectionHeading
                        title="Our Services"
                        description="We provide various membership management services."
                    />
                    <div className="mt-12">
                        <CommunitySection />
                    </div>
                </SectionContainer>
            </div>
        </ProtectedRoute>
    );
}
