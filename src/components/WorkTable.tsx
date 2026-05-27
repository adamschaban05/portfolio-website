"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Spotify Reviews Feature",
    type: "Mobile Design",
    time: "S 26",
    href: "https://medium.com/@as3566/in-the-age-of-ai-we-still-trust-people-most-f60ab86c70fd",
  },
];

export default function WorkTable() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-8 py-16">
      <div className="ml-auto w-full md:w-3/5 md:pr-8">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 mb-3 pb-3 border-b border-black/10">
          {[
            { label: "No", span: "col-span-1" },
            { label: "Title", span: "col-span-6" },
            { label: "Type", span: "col-span-3" },
            { label: "Time", span: "col-span-2 text-right" },
          ].map(({ label, span }) => (
            <span
              key={label}
              className={`${span} text-[10px] tracking-widest uppercase text-ink-muted`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Rows */}
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActiveId(project.id)}
            onMouseLeave={() => setActiveId(null)}
            className={`w-full grid grid-cols-12 gap-4 py-5 border-b border-black/8 transition-opacity duration-150 ${
              activeId && activeId !== project.id ? "opacity-30" : "opacity-100"
            }`}
          >
            <span className="col-span-1 text-xs tabular-nums text-ink-muted">
              {String(project.id).padStart(2, "0")}
            </span>
            <span className="col-span-6 text-sm text-ink font-medium">
              {project.title}
            </span>
            <span className="col-span-3 text-xs text-ink-muted uppercase tracking-wide self-center">
              {project.type}
            </span>
            <span className="col-span-2 text-xs text-ink-muted self-center tabular-nums text-right">
              {project.time}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
