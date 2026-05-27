export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col pt-20">
      {/* Mobile: flex-col stack | Desktop: 3-col grid */}
      <div className="flex-1 flex flex-col md:grid md:grid-cols-12 px-8">

        {/* Name + status */}
        <div className="pt-10 md:pt-0 md:col-span-4 md:self-end md:pb-16">
          <h1 className="text-sm font-medium text-ink leading-tight mb-1">
            Adam Schaban
          </h1>
          <p className="text-sm text-ink-muted">
            Looking for opportunities in NYC
          </p>
        </div>

        {/* SVG — desktop only */}
        <div className="hidden md:flex md:col-span-4 items-center justify-center py-16 select-none pointer-events-none">
          <svg
            viewBox="0 0 400 500"
            className="w-full max-w-xs opacity-15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="260" r="190" stroke="#111" strokeWidth="1" />
            <circle cx="100" cy="160" r="120" stroke="#111" strokeWidth="1" />
            <circle cx="290" cy="120" r="70" stroke="#111" strokeWidth="1" />
            <circle cx="320" cy="340" r="45" stroke="#111" strokeWidth="1" />
            <circle cx="90" cy="370" r="90" stroke="#111" strokeWidth="1" />
            <circle cx="200" cy="230" r="110" stroke="#111" strokeWidth="1" />
          </svg>
        </div>

        {/* Description — fills remaining space on mobile, top-right on desktop */}
        <div className="flex-1 flex items-center py-12 md:py-0 md:block md:col-span-4 md:self-start md:pt-24">
          <p className="text-2xl font-medium text-ink leading-snug">
            Designing human-centered experiences at the intersection of sports,
            culture, and connection.
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="px-8 pb-8 flex items-end justify-between">
        <p className="text-sm text-ink-muted">Check out some of my work below.</p>
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
      </div>
    </section>
  );
}
