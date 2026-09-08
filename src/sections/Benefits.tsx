import { SectionHeading } from '../components/SectionHeading';
import { IconTile } from '../components/IconTile';
import { BENEFITS } from '../constants/benefits';
import { COPY } from '../constants/copy';
import { getIcon } from '../utils/iconMap';

export function Benefits() {
  return (
    <section
      aria-labelledby="benefits-title"
      className="bg-white px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow={COPY.benefits.eyebrow}
            title={COPY.benefits.title}
            id="benefits-title"
          />
        </div>

        <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = getIcon(benefit.icon);
            return (
              <li
                key={benefit.id}
                className="reveal hover-lift flex flex-col gap-3 rounded-xl border border-brand-border bg-white p-5 shadow-[0_10px_24px_rgba(79,70,229,0.08),0_4px_12px_rgba(15,23,42,0.02)]"
              >
                <IconTile icon={Icon} />
                <h3 className="text-lg font-bold text-brand-ink">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-brand-text">{benefit.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
