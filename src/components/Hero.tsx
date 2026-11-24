interface HeroProps {
  content: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    workCta: string;
    contactCta: string;
    availability: string;
    scroll: string;
    cardLabel: string;
  };
}

function DatabaseIllustration() {
  return (
    <div aria-hidden="true" className="hero-art">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-glow" />
      <div className="database-stack">
        <div className="database-layer database-layer-back" />
        <div className="database-layer database-layer-mid" />
        <div className="database-layer database-layer-front">
          <div className="database-dot" />
          <span>DATA / 001</span>
          <div className="database-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="float-chip float-chip-code">
        <span className="chip-dot" />
        {'<'} clean code {'/>'}
      </div>
      <div className="float-chip float-chip-query">
        <span className="chip-spark">✳</span> query optimized
      </div>
      <div className="hero-art-caption">01 — 03 &nbsp; / &nbsp; SYSTEMS THAT SCALE</div>
    </div>
  );
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32" id="home">
      <div className="page-shell grid min-h-[calc(100svh-5rem)] items-center gap-8 pb-12 pt-8 lg:grid-cols-[1.04fr_.96fr] lg:gap-4 lg:pb-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/65 px-3 py-2 text-[11px] font-semibold tracking-wide text-ink/70">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/40" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {content.availability}
          </div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="font-display max-w-[13ch] text-[clamp(3.35rem,8vw,7.1rem)] font-semibold leading-[.94] tracking-[-.075em] text-ink">
            {content.title}{' '}
            <span className="text-accent">{content.accent}</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row">
            <a className="button button-dark" href="#projects">
              {content.workCta}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-light" href="#contact">
              {content.contactCta}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs font-medium text-muted">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-sm text-accent">
              ↓
            </span>
            {content.scroll}
          </div>
        </div>
        <div className="mx-auto w-full max-w-[590px] lg:max-w-none">
          <DatabaseIllustration />
          <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[.2em] text-muted/80">
            {content.cardLabel}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-32 top-28 size-[30rem] rounded-full bg-accent/[.035] blur-3xl" />
    </section>
  );
}
