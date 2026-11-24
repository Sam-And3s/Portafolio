import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import type { Language, Project } from '../types';
import ScreenshotCarousel from './ScreenshotCarousel';

interface ProjectsProps {
  language: Language;
  content: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    viewDetails: string;
    github: string;
    challenge: string;
    solution: string;
    technicalDetails: string;
    technologies: string;
    close: string;
    previous: string;
    next: string;
    screenshots: string;
    screen: string;
    project: string;
  };
}

export default function Projects({ language, content }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedProject && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedProject]);

  function closeDialog() {
    dialogRef.current?.close();
    setSelectedProject(null);
  }

  const screenshotLabels = {
    previous: content.previous,
    next: content.next,
    screenshots: content.screenshots,
    screen: content.screen,
  };

  return (
    <section className="section-space" id="projects">
      <div className="page-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="section-title mt-4 max-w-2xl">
              {content.title}{' '}
              <span className="text-accent">{content.accent}</span>
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-muted">{content.description}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-3">
          {projects.map((project, index) => {
            const copy = project.content[language];
            return (
              <article
                className="project-card group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white"
                key={project.id}
              >
                <button
                  aria-label={`${content.viewDetails}: ${copy.title}`}
                  className="relative block w-full overflow-hidden bg-[#eff1ed] text-left"
                  onClick={() => setSelectedProject(project)}
                  type="button"
                >
                  <img
                    alt={copy.imageAlt}
                    className="aspect-[1.48] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    loading="lazy"
                    src={project.cover}
                  />
                  <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white text-lg text-ink shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                  <span className="sr-only">{content.viewDetails}</span>
                </button>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 text-[10px] font-bold tracking-[.15em] text-muted">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                    {copy.title}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                    {copy.summary}
                  </p>
                  <ul aria-label={content.technologies} className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((technology) => (
                      <li
                        className="rounded-full bg-paper px-2.5 py-1 text-[10px] font-medium text-ink/75"
                        key={technology}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center gap-4 border-t border-ink/8 pt-4">
                    <button
                      className="text-xs font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition hover:decoration-accent"
                      onClick={() => setSelectedProject(project)}
                      type="button"
                    >
                      {content.viewDetails} <span aria-hidden="true">↗</span>
                    </button>
                    <a
                      className="ml-auto text-xs font-medium text-muted transition hover:text-ink"
                      href={project.githubUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {content.github}
                    </a>
                  </div>
                </div>
                <span className="sr-only">
                  {content.project} {index + 1}
                </span>
              </article>
            );
          })}
        </div>
      </div>

      <dialog
        aria-labelledby="project-dialog-title"
        className="project-dialog"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') closeDialog();
        }}
        onClose={() => setSelectedProject(null)}
        ref={dialogRef}
      >
        {selectedProject && (
          <div className="relative p-5 sm:p-8">
            <button
              aria-label={content.close}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-ink/10 bg-white text-xl text-ink hover:bg-paper"
              onClick={closeDialog}
              type="button"
            >
              ×
            </button>
            <p className="eyebrow">{selectedProject.category}</p>
            <h2
              className="font-display mt-2 pr-12 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
              id="project-dialog-title"
            >
              {selectedProject.content[language].title}
            </h2>
            <p className="mt-2 max-w-xl leading-7 text-muted">
              {selectedProject.content[language].summary}
            </p>
            <div className="mt-6">
              <ScreenshotCarousel
                alt={selectedProject.content[language].imageAlt}
                images={selectedProject.screenshots}
                labels={screenshotLabels}
              />
            </div>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[.15em] text-accent">
                  {content.challenge}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/80">
                  {selectedProject.content[language].challenge}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[.15em] text-accent">
                  {content.solution}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/80">
                  {selectedProject.content[language].solution}
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-ink/10 pt-5">
              <h3 className="text-xs font-bold uppercase tracking-[.15em] text-muted">
                {content.technicalDetails}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/80">
                {selectedProject.content[language].details}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {selectedProject.stack.map((technology) => (
                  <li
                    className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-ink/75"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="button button-dark !px-4 !py-2.5"
                href={selectedProject.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                {content.github} ↗
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
