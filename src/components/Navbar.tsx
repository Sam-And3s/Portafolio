import { useState } from 'react';
import type { Language } from '../types';

interface NavbarProps {
  language: Language;
  labels: {
    navigation: string;
    home: string;
    about: string;
    journey: string;
    projects: string;
    contact: string;
    contactCta: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  onLanguageChange: (language: Language) => void;
}

export default function Navbar({
  language,
  labels,
  onLanguageChange,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: '#about', label: labels.about },
    { href: '#journey', label: labels.journey },
    { href: '#projects', label: labels.projects },
    { href: '#contact', label: labels.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/5 bg-paper/85 backdrop-blur-xl">
      <nav
        aria-label={labels.navigation}
        className="page-shell flex h-[72px] items-center justify-between"
      >
        <a
          aria-label={labels.home}
          className="font-display text-lg font-bold tracking-tight text-ink"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          sam<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            aria-label={labels.language}
            className="flex items-center rounded-full border border-ink/10 bg-white/70 p-1"
            role="group"
          >
            {(['es', 'en'] as const).map((option) => (
              <button
                aria-pressed={language === option}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-colors ${
                  language === option
                    ? 'bg-ink text-white'
                    : 'text-muted hover:text-ink'
                }`}
                key={option}
                onClick={() => onLanguageChange(option)}
                type="button"
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="button button-dark nav-contact !px-4 !py-2.5" href="#contact">
            {labels.contactCta}
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? labels.closeMenu : labels.openMenu}
            className="grid size-10 place-items-center rounded-full border border-ink/10 text-ink md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="flex w-[17px] flex-col gap-[5px]">
              <span className={`h-[1.5px] w-full bg-current transition-transform ${menuOpen ? 'translate-y-[3.25px] rotate-45' : ''}`} />
              <span className={`h-[1.5px] w-full bg-current transition-transform ${menuOpen ? '-translate-y-[3.25px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-ink/5 bg-paper px-5 pb-5 pt-2 md:hidden">
          <div className="page-shell flex flex-col">
            {navItems.map((item) => (
              <a
                className="border-b border-ink/5 py-4 text-sm font-medium text-ink"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
