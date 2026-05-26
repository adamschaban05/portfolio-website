import Link from "next/link";

export default function CaseStudyPreview() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Left panel */}
        <div className="w-44 flex-shrink-0 flex flex-col justify-center px-8 py-12">
          <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-3">01</p>
          <p className="text-sm font-medium text-ink mb-1 leading-snug">
            Spotify Reviews Feature
          </p>
          <p className="text-sm text-ink-muted mb-6">Mobile Design</p>
          <a
            href="https://medium.com/@as3566/in-the-age-of-ai-we-still-trust-people-most-f60ab86c70fd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink hover:text-ink-muted transition-colors"
          >
            →
          </a>
        </div>

        {/* Right: Spotify screenshots */}
        <div className="flex-1 bg-[#1A1A1A] flex items-center justify-center gap-6 px-12 py-16 overflow-hidden">
          <img
            src="/spotify-review.jpg.png"
            alt="Spotify Reviews — rate screen"
            className="h-[75vh] w-auto object-contain drop-shadow-2xl"
          />
          <img
            src="/spotify-browse.jpg.png"
            alt="Spotify Reviews — browse screen"
            className="h-[75vh] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
