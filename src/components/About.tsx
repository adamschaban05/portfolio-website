export default function About() {
  return (
    <section className="px-8 py-16 min-h-[calc(100vh-4rem)]">
      {/* Mobile: stacked | Desktop: 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:items-end">

        {/* Photo */}
        <div className="md:col-span-5">
          <div className="aspect-[3/4] max-w-[260px] md:max-w-none overflow-hidden">
            <img
              src="/headshot.jpg"
              alt="Adam Schaban"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio — left-aligned on mobile, right-aligned on desktop */}
        <div className="md:col-span-7 flex flex-col md:items-end md:text-right pb-4">
          <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-6">
            About
          </p>
          <p className="text-sm leading-loose text-ink uppercase tracking-wide max-w-sm">
            My name is Adam Schaban. I am a rising senior at Cornell University,
            passionate about the intersection of design, sports, and social
            experience. I build products that are intentional, visually
            considered, and centered around the people who use them.
          </p>
          <p className="text-sm leading-loose text-ink-muted uppercase tracking-wide max-w-sm mt-5">
            Currently seeking internship and project opportunities in product
            design and UI/UX. Based in New York.
          </p>
        </div>
      </div>
    </section>
  );
}
