import { HeroSection } from "./hero-section";
import { ClientsSection } from "./clients-section";
import { CommunitySection } from "./community-section";
import { UnlockSection } from "./unlock-section";
import { AchievementsSection } from "./achievements-section";
import { CalendarSection } from "./calendar-section";
import { CustomersSection } from "./customers-section";
import { BlogSection } from "./blog-section";
import { CtaSection } from "./cta-section";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <CommunitySection />
      <UnlockSection />
      <AchievementsSection />
      <CalendarSection />
      <CustomersSection />
      <BlogSection />
      <CtaSection />
    </>
  );
}
