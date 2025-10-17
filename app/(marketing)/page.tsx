import { Hero } from '@/components/marketing/hero';
import { FeaturedRails } from '@/components/marketing/featured-rails';
import { CaseStudies } from '@/components/marketing/case-studies';
import { CallToAction } from '@/components/marketing/call-to-action';
import { Features } from '@/components/marketing/features';
import { SocialProof } from '@/components/marketing/social-proof';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <FeaturedRails />
      <Features />
      <CaseStudies />
      <CallToAction />
    </>
  );
}
