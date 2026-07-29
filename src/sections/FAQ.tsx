import { SectionHeading } from '../components/SectionHeading';
import { Accordion } from '../components/Accordion';
import { FAQ_ITEMS } from '../constants/faq';
import { COPY } from '../constants/copy';

export function FAQ() {
  return (
    <section id="faq" aria-label="Preguntas frecuentes" className="bg-white px-6 py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading eyebrow={COPY.faq.eyebrow} title={COPY.faq.title} />
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
