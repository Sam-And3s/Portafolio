interface AboutProps {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    detail: string;
    educationLabel: string;
    education: string;
    educationDetail: string;
    focusLabel: string;
    focus: string;
    focusDetail: string;
    technologies: string;
  };
}

const technologies = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Spring Boot',
  'Oracle PL/SQL',
  'MongoDB',
];

export default function About({ content }: AboutProps) {
  return (
    <section className="section-space" id="about">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="section-title mt-4 max-w-md">{content.title}</h2>
          </div>
          <div className="pt-1">
            <p className="text-lg leading-8 text-ink/80">{content.description}</p>
            <p className="mt-5 leading-7 text-muted">{content.detail}</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-ink/10 bg-white/65 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-accent">
                  {content.educationLabel}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {content.education}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {content.educationDetail}
                </p>
              </article>
              <article className="rounded-2xl border border-ink/10 bg-white/65 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-accent">
                  {content.focusLabel}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {content.focus}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {content.focusDetail}
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-ink/10 pt-7 sm:mt-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.16em] text-muted">
            {content.technologies}
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {technologies.map((technology) => (
              <li
                className="rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-sm font-medium text-ink/80"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
