import { useState, type FormEvent } from 'react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../config';

interface ContactProps {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    direct: string;
    emailSubject: string;
    formHint: string;
  };
}

export default function Contact({ content }: ContactProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(content.emailSubject);
    const body = encodeURIComponent(`${message}\n\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section-space border-t border-ink/5 bg-[#f0f2ee]" id="contact">
      <div className="page-shell grid gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-24">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-xl">{content.title}</h2>
          <p className="mt-5 max-w-lg leading-7 text-muted">{content.description}</p>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[.15em] text-muted">
              {content.direct}
            </p>
            <a
              className="mt-2 inline-block break-all font-display text-xl font-semibold text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-accent sm:text-2xl"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-5 flex gap-4">
              <a
                className="text-sm font-medium text-ink/75 underline decoration-ink/20 underline-offset-4 hover:text-accent"
                href={SOCIAL_LINKS.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub ↗
              </a>
              <a
                className="text-sm font-medium text-ink/75 underline decoration-ink/20 underline-offset-4 hover:text-accent"
                href={SOCIAL_LINKS.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <form
          className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-7"
          onSubmit={handleSubmit}
        >
          <label className="block text-sm font-semibold text-ink" htmlFor="email">
            {content.emailLabel}
          </label>
          <input
            autoComplete="email"
            className="form-field mt-2"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder={content.emailPlaceholder}
            required
            type="email"
            value={email}
          />
          <label
            className="mt-5 block text-sm font-semibold text-ink"
            htmlFor="message"
          >
            {content.messageLabel}
          </label>
          <textarea
            className="form-field mt-2 min-h-36 resize-y"
            id="message"
            onChange={(event) => setMessage(event.target.value)}
            placeholder={content.messagePlaceholder}
            required
            rows={5}
            value={message}
          />
          <p className="mt-3 text-xs leading-5 text-muted">{content.formHint}</p>
          <button className="button button-dark mt-5 w-full sm:w-auto" type="submit">
            {content.send}
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}
