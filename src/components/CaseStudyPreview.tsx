"use client";

import { useState } from "react";
import Link from "next/link";

const C = {
  primary: "#3333ff",
  primaryLight: "rgba(51,51,255,0.08)",
  dark: "#0d1117",
  d60: "rgba(13,17,23,0.6)",
  d40: "rgba(13,17,23,0.4)",
  d10: "rgba(13,17,23,0.1)",
  d08: "rgba(13,17,23,0.08)",
  d02: "rgba(13,17,23,0.02)",
  red: "#e03e00",
  redLight: "rgba(224,62,0,0.1)",
  green: "#00875a",
};

function SpotifyPreview() {
  return (
    <div className="flex-1 bg-[#1A1A1A] flex items-center justify-center gap-4 md:gap-6 px-6 md:px-12 py-10 md:py-16 overflow-hidden">
      <img
        src="/spotify-review.jpg.png"
        alt="Spotify Reviews — rate screen"
        className="h-[55vh] md:h-[65vh] w-auto object-contain drop-shadow-2xl"
      />
      <img
        src="/spotify-browse.jpg.png"
        alt="Spotify Reviews — browse screen"
        className="hidden md:block h-[65vh] w-auto object-contain drop-shadow-2xl"
      />
    </div>
  );
}

function AitherPreview() {
  return (
    <div
      className="flex-1 flex items-start justify-center overflow-hidden pt-8 px-6 md:px-12"
      style={{ background: "#f0f1f5" }}
    >
      <div
        style={{
          transform: "scale(0.55)",
          transformOrigin: "top center",
          width: "900px",
          flexShrink: 0,
          fontFamily: "Inter, sans-serif",
          border: `1px solid ${C.d10}`,
          borderRadius: 10,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            background: C.dark,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            height: 44,
            gap: 14,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <polygon points="8,2 15,14 1,14" fill="#3333ff" />
          </svg>
          <div style={{ display: "flex", gap: 20, flex: 1 }}>
            {[
              { label: "Total Spent", value: "$1.2M" },
              { label: "Burn", value: "-$39K" },
              { label: "Runway", value: "18mo" },
            ].map((s, i) => (
              <div key={i} style={{ fontSize: 11 }}>
                <span style={{ color: "rgba(255,255,255,0.35)", marginRight: 5 }}>{s.label}</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{s.value}</span>
              </div>
            ))}
          </div>
          <button
            style={{
              background: "linear-gradient(90deg, #3333ff, #6633ff)",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "5px 12px",
              fontSize: 11,
              fontWeight: 600,
              cursor: "default",
            }}
          >
            Pay | Exchange | Deposit
          </button>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#3333ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            JG
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div
            style={{
              width: 130,
              background: "#fafafa",
              borderRight: `1px solid ${C.d08}`,
              padding: "12px 0",
              flexShrink: 0,
            }}
          >
            {[
              { label: "Dashboard", active: false },
              { label: "Activities", active: false },
              { label: "Accounts", active: false },
              { label: "Cards", active: true },
              { label: "Accounting", active: false },
              { label: "Settings", active: false },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  background: item.active ? C.primaryLight : "transparent",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: item.active ? C.primary : "transparent",
                    border: item.active ? "none" : "none",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: item.active ? 600 : 400,
                    color: item.active ? C.primary : C.d60,
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            {/* Page header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                borderBottom: `1px solid ${C.d08}`,
              }}
            >
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: C.dark, marginBottom: 5 }}>
                  User Cards
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  {["Overview", "Credit ★", "Debit"].map((tab, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 11,
                        fontWeight: i === 1 ? 600 : 400,
                        color: i === 1 ? C.primary : C.d40,
                        paddingBottom: 3,
                        borderBottom: i === 1 ? `2px solid ${C.primary}` : "none",
                      }}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
              <button
                style={{
                  background: C.primary,
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "6px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "default",
                }}
              >
                Create New
              </button>
            </div>

            {/* D1 Overview */}
            <div style={{ borderBottom: `1px solid ${C.d08}` }}>
              {/* Row 1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "14px 20px",
                  borderBottom: `1px solid ${C.d08}`,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: C.d40, marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.08em" }}>Balance</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: C.dark, lineHeight: 1 }}>$24,180.00</div>
                </div>
                <div style={{ fontSize: 12, color: C.d60 }}>Amount due now · $24,180.00 · autopay Jun 15</div>
                <button
                  style={{
                    background: C.primary,
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "8px 16px",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "default",
                    flexShrink: 0,
                  }}
                >
                  Pay balance
                </button>
              </div>
              {/* Row 2 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", background: C.d02 }}>
                {[
                  { label: "Due date", value: "Jun 15, 2026", color: C.red },
                  { label: "Autopay", value: "On · biweekly", color: C.green },
                  { label: "Available limit", value: "$6,820", color: C.red },
                  { label: "Statement", value: "Jun 30", color: C.dark },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "10px 20px",
                      borderRight: i < 3 ? `1px solid ${C.d08}` : "none",
                    }}
                  >
                    <div style={{ fontSize: 10, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: item.color }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Table chrome */}
            <div style={{ padding: "10px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: C.d60, fontWeight: 600 }}>200 Items</span>
                <button
                  style={{
                    background: "transparent",
                    border: `1px solid ${C.d10}`,
                    borderRadius: 4,
                    padding: "4px 10px",
                    fontSize: 10,
                    color: C.d60,
                    cursor: "default",
                  }}
                >
                  Filter
                </button>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 0.8fr",
                  gap: 10,
                  paddingBottom: 6,
                  borderBottom: `1px solid ${C.d08}`,
                }}
              >
                {["Credit Cards", "Account Holder", "Balance / Limit", "Expiration", "Status"].map((col, i) => (
                  <span key={i} style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const featured = [
  {
    id: "spotify",
    num: "01",
    title: "Spotify Reviews Feature",
    sub: "Mobile Design · S 26",
    href: "https://medium.com/@as3566/in-the-age-of-ai-we-still-trust-people-most-f60ab86c70fd",
    external: true,
    Preview: SpotifyPreview,
  },
  {
    id: "aither",
    num: "02",
    title: "Aither Cards Hub",
    sub: "Product Design · S 26",
    href: "/projects/aither",
    external: false,
    Preview: AitherPreview,
  },
];

export default function CaseStudyPreview() {
  const [active, setActive] = useState(0);
  const current = featured[active];
  const PreviewComponent = current.Preview;

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-col flex-1">
        {/* Preview area */}
        <div className="flex-1 flex overflow-hidden" style={{ minHeight: "70vh" }}>
          <PreviewComponent />
        </div>

        {/* Bottom tab bar */}
        <div className="flex items-stretch border-t border-black/8">
          {featured.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setActive(i)}
              className={`flex-1 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center
                          px-6 md:px-8 py-4 md:py-5 transition-colors duration-150 text-left
                          ${i < featured.length - 1 ? "border-r border-black/8" : ""}
                          ${active === i ? "bg-white" : "bg-[#fafafa] hover:bg-white"}`}
            >
              <div className="flex flex-col">
                <span
                  className={`text-[10px] tracking-widest uppercase mb-0.5 ${
                    active === i ? "text-ink-muted" : "text-ink-faint"
                  }`}
                >
                  {project.num}
                </span>
                <span
                  className={`text-sm font-medium leading-snug ${
                    active === i ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {project.title}
                </span>
                <span className="text-xs text-ink-muted hidden md:block">{project.sub}</span>
              </div>
              {active === i && (
                project.external ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-ink hover:text-ink-muted transition-colors mt-0 md:mt-3"
                  >
                    →
                  </a>
                ) : (
                  <Link
                    href={project.href}
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-ink hover:text-ink-muted transition-colors mt-0 md:mt-3"
                  >
                    →
                  </Link>
                )
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
