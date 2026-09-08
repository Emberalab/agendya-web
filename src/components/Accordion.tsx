import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FAQItem } from '../types';

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-trigger-${item.id}`;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-brand-border bg-brand-bg-soft"
          >
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-ink sm:text-[15px]"
              >
                {item.question}
                <Plus
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 text-brand-primary transition-transform duration-200 motion-reduce:transition-none ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={isOpen}
            >
              <div>
                <p className="px-5 pb-5 text-sm leading-relaxed text-brand-text">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
