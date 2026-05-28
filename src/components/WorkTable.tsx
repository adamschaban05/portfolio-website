"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 2,
    title: "Aither Cards Hub",
    type: "Product Design",
    time: "S 26",
    href: "/projects/aither",
    internal: true,
  },
  {
    id: 1,
    title: "Spotify Reviews Feature",
    type: "Mobile Design",
    time: "S 26",
    href: "https://medium.com/@as3566/in-the-age-of-ai-we-still-trust-people-most-f60ab86c70fd",
    internal: false,
  },
];

export default function WorkTable() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-8 py-16">
      <div className="ml-auto w-full md:w-3/5 md:pr-8">

        {/* Header */}
        <div className="grid grid-cols-12 gap-4 mb-3 pb-3 border-b border-black/10">
          <span className="col-span-2 md:col-span-1 text-[10px] tracking-widest uppercase text-ink-muted">
            No
          </span>
          <span className="col-span-7 md:col-span-6 text-[10px] tracking-widest uppercase text-ink-muted">
            Title
          </span>
          <span className="hidden md:block md:col-span-3 text-[10px] tracking-widest uppercase text-ink-muted">
            Type
          </span>
          <span className="col-span-3 md:col-span-2 text-[10px] tracking-widest uppercase text-ink-muted text-right">
            Time
          </span>
        </div>

        {/* Rows */}
        {projects.map((project) => {
          const rowContent = (
            <>
              <span className="col-span-2 md:col-span-1 text-xs tabular-nums text-ink-muted">
                {String(project.id).padStart(2, "0")}
              </span>
              <span className="col-span-7 md:col-span-6 text-sm text-ink font-medium">
                {project.title}
              </span>
              <span className="hidden md:block md:col-span-3 text-xs text-ink-muted uppercase tracking-wide self-center">
                {project.type}
              </span>
              <span className="col-span-3 md:col-span-2 text-xs text-ink-muted self-center tabular-nums text-right">
                {project.time}
              </span>
            </>
          );

          const rowClasses = `w-full grid grid-cols-12 gap-4 py-5 border-b border-black/8 transition-opacity duration-150 ${
            activeId && activeId !== project.id ? "opacity-30" : "opacity-100"
          }`;

          if (project.internal) {
            return (
              <Link
                key={project.id}
                href={project.href}
                onMouseEnter={() => setActiveId(project.id)}
                onMouseLeave={() => setActiveId(null)}
                className={rowClasses}
              >
                {rowContent}
              </Link>
            );
          }

          return (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveId(project.id)}
              onMouseLeave={() => setActiveId(null)}
              className={rowClasses}
            >
              {rowContent}
            </a>
          );
        })}
      </div>
    </section>
  );
}
