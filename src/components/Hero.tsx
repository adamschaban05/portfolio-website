export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col pt-20">
      {/* Main content row */}
      <div className="flex-1 grid grid-cols-12 px-8 items-center">

        {/* Left — Name + status */}
        <div className="col-span-4 self-end pb-16">
          <h1 className="text-sm font-medium text-ink leading-tight mb-1">
            Adam Schaban
          </h1>
          <p className="text-sm text-ink-muted">
            Looking for opportunities in NYC
          </p>
        </div>

        {/* Center — Abstract organic shapes */}
        <div className="col-span-4 flex items-center justify-center py-16 select-none pointer-events-none">
          <svg
            viewBox="0 0 400 500"
            className="w-full max-w-xs opacity-15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Large outer circle */}
            <circle cx="200" cy="260" r="190" stroke="#111" strokeWidth="1" />
            {/* Medium circle top-left */}
            <circle cx="100" cy="160" r="120" stroke="#111" strokeWidth="1" />
            {/* Small circle top-right */}
            <circle cx="290" cy="120" r="70" stroke="#111" strokeWidth="1" />
            {/* Tiny circle bottom-right */}
            <circle cx="320" cy="340" r="45" stroke="#111" strokeWidth="1" />
            {/* Medium circle bottom-left */}
            <circle cx="90" cy="370" r="90" stroke="#111" strokeWidth="1" />
            {/* Inner overlap circle */}
            <circle cx="200" cy="230" r="110" stroke="#111" strokeWidth="1" />
          </svg>
        </div>

        {/* Right — Description */}
        <div className="col-span-4 self-start pt-24">
          <p className="text-2xl font-medium text-ink leading-snug">
            <span className="font-bold">Developer & designer</span>{" "}
            building thoughtful, user-first digital experiences grounded in
            craft, clarity, and code.
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
