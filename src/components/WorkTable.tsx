"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Spotify Reviews Feature",
    type: "Mobile Design",
    time: "S 26",
    bg: "#1A1A1A",
    href: "https://medium.com/@as3566/in-the-age-of-ai-we-still-trust-people-most-f60ab86c70fd",
  },
];

export default function WorkTable() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = projects.find((p) => p.id === activeId);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* Ghost background */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 pointer-events-none transition-all duration-500"
        style={{
          backgroundColor: active?.bg ?? "transparent",
          opacity: active ? 0.3 : 0,
          filter: "blur(60px)",
        }}
      />

      {/* Table — right half */}
      <div className="relative z-10 ml-auto w-full md:w-1/2 px-8 md:pr-16 py-16">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 mb-3 pb-3 border-b border-black/10">
          {[
            { label: "No", span: "col-span-2" },
            { label: "Title", span: "col-span-5" },
            { label: "Type", span: "col-span-3" },
            { label: "Time", span: "col-span-2" },
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
            className={`w-full grid grid-cols-12 gap-4 py-5 border-b border-black/8 text-left transition-opacity duration-150 ${
              activeId && activeId !== project.id ? "opacity-30" : "opacity-100"
            }`}
          >
            <span className="col-span-2 text-xs tabular-nums text-ink-muted">
              {String(project.id).padStart(2, "0")}
            </span>
            <span className="col-span-5 text-sm text-ink font-medium">
              {project.title}
            </span>
            <span className="col-span-3 text-xs text-ink-muted uppercase tracking-wide self-center">
              {project.type}
            </span>
            <span className="col-span-2 text-xs text-ink-muted self-center tabular-nums">
              {project.time}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
