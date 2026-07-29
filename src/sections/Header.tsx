import { motion } from 'framer-motion';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';

function scrollToWaitlist() {
  document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <Button variant="primary" onClick={scrollToWaitlist} className="!px-5 !py-2.5 text-xs sm:text-sm">
          Únete a la lista de espera
        </Button>
      </div>
    </motion.header>
  );
}
