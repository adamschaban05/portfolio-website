export default function Footer() {
  return (
    <footer className="px-8 py-12 flex items-center justify-between border-t border-black/8">
      <p className="text-xs text-ink-muted">
        &copy; {new Date().getFullYear()} Adam Schaban
      </p>
      <div className="flex flex-col items-end gap-1">
        <a
          href="https://linkedin.com"
          className="text-xs tracking-widest uppercase text-ink hover:text-ink-muted transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:hello@adamschaban.com"
          className="text-xs tracking-widest uppercase text-ink hover:text-ink-muted transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
