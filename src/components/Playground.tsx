const items = [
  {
    title: "UI Design Challenges",
    type: "Figma / UI Design",
    href: "https://www.figma.com/design/YrIXw7oQBZVi6rR66wWIv0/UI-Design-Challenges?node-id=58-18&t=B7ntiRLIGf6sJAi8-1",
    cover: "/UI%20Challenges%20Cover.png",
  },
];

export default function Playground() {
  return (
    <section className="px-8 py-16 min-h-[calc(100vh-4rem)]">
      <p className="text-[10px] tracking-widest uppercase text-ink mb-12">
        Playground
      </p>

      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {items.map(({ title, type, href, cover }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="break-inside-avoid group cursor-pointer mb-4 block"
          >
            <div className="w-full h-72 mb-2 overflow-hidden transition-opacity duration-150 group-hover:opacity-60">
              <img
                src={cover}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] font-medium text-ink uppercase tracking-wide leading-tight">
              {title}
            </p>
            <p className="text-[10px] text-ink-muted uppercase tracking-wide">
              {type}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
