"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/work" },
  { label: "Playground", href: "/playground" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="px-8 py-5 flex items-center justify-between">
        {/* Left */}
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-ink hover:text-ink-muted transition-colors"
        >
          Home
        </Link>

        {/* Center */}
        <ul className="flex items-center gap-10">
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

        {/* Right */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase text-ink hover:text-ink-muted transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
