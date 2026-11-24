import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { translations } from './i18n';
import type { Language } from './types';

function getInitialLanguage(): Language {
  const savedLanguage = window.localStorage.getItem('portfolio-language');
  if (savedLanguage === 'es' || savedLanguage === 'en') return savedLanguage;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = translations[language];

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    window.localStorage.setItem('portfolio-language', nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <>
      <Navbar
        labels={copy.nav}
        language={language}
        onLanguageChange={changeLanguage}
      />
      <main>
        <Hero content={copy.hero} />
        <About content={copy.about} />
        <Journey content={copy.journey} />
        <Projects content={copy.projects} language={language} />
        <Contact content={copy.contact} />
      </main>
      <Footer content={copy.footer} />
    </>
  );
}
