import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Problem } from '../sections/Problem';
import { HowItWorks } from '../sections/HowItWorks';
import { ProductShowcase } from '../sections/ProductShowcase';
import { Benefits } from '../sections/Benefits';
import { Features } from '../sections/Features';
import { Pricing } from '../sections/Pricing';
import { EarlyAccess } from '../sections/EarlyAccess';
import { Waitlist } from '../sections/Waitlist';
import { FAQ } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';
import { Footer } from '../sections/Footer';

export function LandingPage() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero />
        <Problem />
        <HowItWorks />
        <ProductShowcase />
        <Benefits />
        <Features />
        <Pricing />
        <EarlyAccess />
        <Waitlist />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
