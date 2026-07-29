import { Suspense, lazy } from 'react';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { TrustLogos } from '../sections/TrustLogos';
import { Problem } from '../sections/Problem';
import { Solution } from '../sections/Solution';
import { ProductShowcase } from '../sections/ProductShowcase';
import { Benefits } from '../sections/Benefits';
import { HowItWorks } from '../sections/HowItWorks';
import { FinalCTA } from '../sections/FinalCTA';

// Secciones below-the-fold no críticas para la primera pintura: se cargan
// de forma diferida para mejorar el rendimiento inicial.
const Testimonials = lazy(() =>
  import('../sections/Testimonials').then((module) => ({ default: module.Testimonials })),
);
const FAQ = lazy(() => import('../sections/FAQ').then((module) => ({ default: module.FAQ })));
const Footer = lazy(() =>
  import('../sections/Footer').then((module) => ({ default: module.Footer })),
);

function SectionFallback() {
  return <div className="h-40 w-full animate-pulse-soft bg-brand-bg-soft" aria-hidden="true" />;
}

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustLogos />
        <Problem />
        <Solution />
        <ProductShowcase />
        <Benefits />
        <HowItWorks />
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <FinalCTA />
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </>
  );
}
