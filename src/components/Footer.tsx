interface FooterProps {
  content: {
    made: string;
    backToTop: string;
  };
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-[#f0f2ee] pb-7">
      <div className="page-shell flex flex-col gap-4 border-t border-ink/10 pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} · {content.made}</p>
        <a className="font-medium text-ink/70 hover:text-accent" href="#home">
          {content.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
