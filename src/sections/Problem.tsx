import { SectionHeading } from '../components/SectionHeading';
import { IconTile } from '../components/IconTile';
import { PROBLEMS } from '../constants/problems';
import { COPY } from '../constants/copy';
import { getIcon } from '../utils/iconMap';

export function Problem() {
  return (
    <section
      aria-labelledby="problem-title"
      className="bg-linear-to-b from-white to-brand-bg-soft px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow={COPY.problem.eyebrow}
            title={COPY.problem.title}
            id="problem-title"
          />
        </div>

        <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = getIcon(problem.icon);
            return (
              <li
                key={problem.id}
                className="reveal hover-lift flex flex-col gap-3 rounded-xl border border-brand-border bg-white p-5 shadow-[0_10px_24px_rgba(79,70,229,0.08),0_6px_16px_rgba(15,23,42,0.04)]"
              >
                <IconTile icon={Icon} />
                <h3 className="text-lg font-bold text-brand-ink">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-brand-text">{problem.description}</p>
              </li>
            );
          })}
        </ul>

        <p className="text-center text-lg font-bold text-brand-primary">{COPY.problem.closing}</p>
      </div>
    </section>
  );
}
