export default function CaseStudyPreview() {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Mobile: stacked | Desktop: side-by-side */}
      <div className="flex flex-col md:flex-row flex-1">

        {/* Info panel — horizontal bar on mobile, narrow sidebar on desktop */}
        <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center
                        px-8 py-5 md:py-12 md:w-44 md:flex-shrink-0
                        border-b border-black/8 md:border-b-0">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-0.5 md:mb-3">01</p>
            <p className="text-sm font-medium text-ink leading-snug">
              Spotify Reviews Feature
            </p>
            <p className="text-xs text-ink-muted md:mb-6">Mobile Design</p>
          </div>
          <a
            href="https://medium.com/@as3566/in-the-age-of-ai-we-still-trust-people-most-f60ab86c70fd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink hover:text-ink-muted transition-colors"
          >
            →
          </a>
        </div>

        {/* Image area */}
        <div className="flex-1 bg-[#1A1A1A] flex items-center justify-center gap-4 md:gap-6
                        px-6 md:px-12 py-10 md:py-16 overflow-hidden">
          {/* Show one image on mobile, both on desktop */}
          <img
            src="/spotify-review.jpg.png"
            alt="Spotify Reviews — rate screen"
            className="h-[55vh] md:h-[75vh] w-auto object-contain drop-shadow-2xl"
          />
          <img
            src="/spotify-browse.jpg.png"
            alt="Spotify Reviews — browse screen"
            className="hidden md:block h-[75vh] w-auto object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
