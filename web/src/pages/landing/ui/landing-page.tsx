import { ExplanationSection } from './explanation-section'
import { FaqSection } from './faq-section'
import { FeaturesSection } from './features-section'
import { HeroSection } from './hero-section'
import { CtaSection, LandingFooter } from './landing-footer'
import { LandingHeader } from './landing-header'
import { PricingSection } from './pricing-section'
import { StepsSection } from './steps-section'

/** Public home for logged-out visitors (route "/"). */
export function LandingPage() {
  return (
    <>
      <a
        href="#noi-dung"
        className="bg-primary text-primary-foreground text-label sr-only z-20 rounded-md px-4 py-3 focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Bỏ qua đến nội dung chính
      </a>
      <LandingHeader />
      <main id="noi-dung">
        <HeroSection />
        <FeaturesSection />
        <ExplanationSection />
        <StepsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </>
  )
}
