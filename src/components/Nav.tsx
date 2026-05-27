"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/work" },
  { label: "Playground", href: "/playground" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="px-8 py-5 flex items-center justify-between">
          {/* Left — Home */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xs tracking-widest uppercase text-ink hover:text-ink-muted transition-colors"
          >
            Home
          </Link>

          {/* Center — desktop only */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-xs tracking-widest uppercase transition-colors border-b ${
                      active
                        ? "text-ink border-ink pb-0.5"
                        : "text-ink border-transparent hover:text-ink-muted"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right — Resume (desktop) / Menu toggle (mobile) */}
          <a
            href="/Design%20Resume%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-xs tracking-widest uppercase text-ink hover:text-ink-muted transition-colors"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xs tracking-widest uppercase text-ink"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-end px-8 pb-16 pt-24 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 mb-12">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="text-4xl font-medium text-ink"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="/Design%20Resume%20(1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase text-ink-muted"
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}
