import { SectionHeading } from '../components/SectionHeading';
import { Accordion } from '../components/Accordion';
import { FAQ_ITEMS } from '../constants/faq';
import { COPY } from '../constants/copy';

export function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Preguntas frecuentes"
      className="bg-white px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <div className="flex justify-center">
          <SectionHeading eyebrow={COPY.faq.eyebrow} title={COPY.faq.title} />
        </div>
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
