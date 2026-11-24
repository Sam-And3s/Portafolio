interface JourneyProps {
  content: {
    eyebrow: string;
    title: string;
    role: string;
    company: string;
    description: string;
    period: string;
    tags: readonly string[];
  };
}

export default function Journey({ content }: JourneyProps) {
  return (
    <section className="section-space border-y border-ink/5 bg-[#f0f2ee]" id="journey">
      <div className="page-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-4">{content.title}</h2>
        </div>
        <article className="mt-10 grid gap-5 border-t border-ink/15 pt-6 sm:mt-14 sm:grid-cols-[150px_1fr] sm:gap-10 lg:grid-cols-[190px_1fr]">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-muted">
            {content.company}
          </p>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {content.role}
              </h3>
              <span className="text-sm text-muted">{content.period}</span>
            </div>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              {content.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <li
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink/75"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
