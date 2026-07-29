import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { COPY } from '../constants/copy';
import { HeroMockup } from './HeroMockup';

function scrollToWaitlist() {
  document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToShowcase() {
  document.getElementById('producto')?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section
      aria-label="Presentación de Agendya"
      className="relative overflow-hidden bg-gradient-to-b from-brand-bg-soft to-white px-6 pb-20 pt-16 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-pink/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-brand-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-start gap-6 text-left"
        >
          <Badge>
            <Sparkles size={12} aria-hidden="true" />
            {COPY.hero.eyebrow}
          </Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-[3.4rem]">
            Tu agenda ocupada,{' '}
            <span className="bg-gradient-to-r from-brand-pink to-brand-pink-dark bg-clip-text text-transparent">
              sin dolores de cabeza.
            </span>
          </h1>
          <p className="max-w-lg text-lg text-brand-text-secondary">{COPY.hero.subtitle}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={scrollToWaitlist}>
              {COPY.hero.ctaPrimary}
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button variant="secondary" onClick={scrollToShowcase}>
              {COPY.hero.ctaSecondary}
            </Button>
          </div>
          <p className="text-xs text-brand-text-secondary">{COPY.hero.microcopy}</p>
        </motion.div>

        <HeroMockup />
      </div>
    </section>
  );
}
