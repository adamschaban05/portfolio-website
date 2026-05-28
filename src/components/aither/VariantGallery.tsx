"use client";

import { useState } from "react";

const C = {
  primary: "#3333ff",
  primaryLight: "rgba(51,51,255,0.08)",
  primaryLight2: "rgba(51,51,255,0.18)",
  dark: "#0d1117",
  d60: "rgba(13,17,23,0.6)",
  d40: "rgba(13,17,23,0.4)",
  d10: "rgba(13,17,23,0.1)",
  d08: "rgba(13,17,23,0.08)",
  d04: "rgba(13,17,23,0.04)",
  d02: "rgba(13,17,23,0.02)",
  red: "#e03e00",
  redLight: "rgba(224,62,0,0.1)",
  redLight15: "rgba(224,62,0,0.15)",
  green: "#00875a",
  greenLight: "rgba(0,135,90,0.1)",
  amber: "#c47d00",
};

// ─── D1 Desktop ────────────────────────────────────────────────────────────────
export function D1Desktop() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Row 1 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "12px 18px",
          borderBottom: `1px solid ${C.d08}`,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, color: C.d40, marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Balance
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: C.dark, lineHeight: 1 }}>
            $24,180.00
          </div>
        </div>
        <div style={{ fontSize: 11, color: C.d60, flexShrink: 0 }}>
          Amount due now · $24,180.00 · autopay Jun 15
        </div>
        <button
          style={{
            background: C.primary,
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "7px 14px",
            fontSize: 11,
            fontWeight: 600,
            cursor: "default",
            flexShrink: 0,
          }}
        >
          Pay balance
        </button>
      </div>
      {/* Row 2 — 4-col grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          background: C.d02,
        }}
      >
        {[
          { label: "Due date", value: "Jun 15, 2026", color: C.red },
          { label: "Autopay", value: "On · biweekly", color: C.green },
          { label: "Available limit", value: "$6,820", color: C.red },
          { label: "Statement", value: "Jun 30", color: C.dark },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              padding: "9px 18px",
              borderRight: i < 3 ? `1px solid ${C.d08}` : "none",
            }}
          >
            <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
              {item.label}
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: item.color }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── D2 Desktop ────────────────────────────────────────────────────────────────
export function D2Desktop() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Alert banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "9px 18px",
          background: C.redLight,
          borderBottom: `1px solid ${C.d08}`,
        }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: C.red,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.red }}>
            Available limit low — $6,820 remaining
          </span>
          <span style={{ fontSize: 11, color: C.d40, marginLeft: 6 }}>
            of $100,000
          </span>
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
            flexShrink: 0,
          }}
        >
          Pay balance
        </button>
      </div>
      {/* Data row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "14px 18px",
          borderBottom: `1px solid ${C.d08}`,
        }}
      >
        <div>
          <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 1 }}>Balance</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: C.dark }}>$24,180</div>
        </div>
        <div style={{ width: 1, height: 32, background: C.d08 }} />
        <div>
          <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 1 }}>Amount due</div>
          <div style={{ fontSize: 17, fontWeight: 600, color: C.dark }}>$24,180</div>
        </div>
        <div style={{ width: 1, height: 32, background: C.d08 }} />
        <div>
          <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 1 }}>Due date</div>
          <div style={{ fontSize: 17, fontWeight: 600, color: C.red }}>Jun 15</div>
        </div>
        <div style={{ width: 1, height: 32, background: C.d08 }} />
        <div>
          <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 1 }}>Credit limit</div>
          <div style={{ fontSize: 17, fontWeight: 600, color: C.dark }}>$100,000</div>
        </div>
      </div>
      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 18px",
          background: C.d02,
        }}
      >
        <span style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em" }}>Autopay</span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: C.green,
            background: C.greenLight,
            padding: "1px 6px",
            borderRadius: 3,
          }}
        >
          On
        </span>
        <span style={{ fontSize: 10, color: C.d40 }}>
          biweekly · from USD account ···· 4421 · next: Jun 15, 2026 · statement closes Jun 30
        </span>
      </div>
    </div>
  );
}

// ─── D3 Desktop ────────────────────────────────────────────────────────────────
export function D3Desktop() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", display: "flex" }}>
      {/* Dark left panel */}
      <div
        style={{
          background: C.dark,
          width: "35%",
          minWidth: 200,
          flexShrink: 0,
          padding: "16px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
            Credit balance
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 4 }}>
            $24,180.00
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>
            12 active cards
          </div>
        </div>
        <button
          style={{
            marginTop: 16,
            background: C.primary,
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "7px 14px",
            fontSize: 11,
            fontWeight: 600,
            cursor: "default",
            alignSelf: "flex-start",
          }}
        >
          Pay balance
        </button>
      </div>
      {/* Right 2x2 grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {[
          { label: "Amount due", value: "$24,180", color: C.dark },
          { label: "Due date", value: "Jun 15", color: C.red },
          { label: "Autopay", value: "On", color: C.green },
          { label: "Limits", value: "$6,820 of $100K · stmt Jun 30", color: C.red, small: true },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              padding: "14px 16px",
              borderBottom: i < 2 ? `1px solid ${C.d08}` : "none",
              borderRight: i % 2 === 0 ? `1px solid ${C.d08}` : "none",
            }}
          >
            <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
              {item.label}
            </div>
            <div
              style={{
                fontSize: item.small ? 10 : 17,
                fontWeight: item.small ? 500 : 600,
                color: item.color,
                lineHeight: 1.3,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── D4 Desktop ────────────────────────────────────────────────────────────────
export function D4Desktop() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "14px 18px" }}>
      {/* Hero row */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <button
          style={{
            background: C.primary,
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "0 18px",
            height: 40,
            fontSize: 12,
            fontWeight: 700,
            cursor: "default",
            flexShrink: 0,
          }}
        >
          Pay balance
        </button>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.dark }}>$24,180.00</div>
        <div style={{ fontSize: 13, color: C.red, fontWeight: 600 }}>— due Jun 15, 2026</div>
        <div style={{ fontSize: 12, color: C.d40 }}>(8 days)</div>
      </div>
      {/* Sub-line */}
      <div style={{ fontSize: 10, color: C.d40, marginBottom: 12 }}>
        Amount due now: $24,180.00 · autopay will process from USD ···· 4421
      </div>
      {/* Context row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 22,
          paddingTop: 10,
          borderTop: `1px solid ${C.d08}`,
        }}
      >
        {[
          { label: "Autopay", value: "On", color: C.green },
          { label: "Cadence", value: "Biweekly", color: C.dark },
          { label: "Available limit", value: "$6,820", color: C.red },
          { label: "Credit limit", value: "$100,000", color: C.dark },
          { label: "Statement", value: "Jun 30", color: C.dark },
        ].map((item, i) => (
          <div key={i}>
            <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
              {item.label}
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: item.color }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── D5 Desktop ────────────────────────────────────────────────────────────────
export function D5Desktop() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "10px 12px" }}>
      {/* Row 1 — 4 col */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 7,
          marginBottom: 7,
        }}
      >
        {/* Balance — dark */}
        <div
          style={{
            background: C.dark,
            borderRadius: 8,
            padding: "10px 12px",
          }}
        >
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Balance</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>$24,180</div>
        </div>
        {/* Amount due */}
        <div style={{ background: C.d02, borderRadius: 8, padding: "10px 12px", border: `1px solid ${C.d08}` }}>
          <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Amount due</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: C.dark }}>$24,180</div>
        </div>
        {/* Due date — red tint */}
        <div
          style={{
            background: C.redLight,
            border: `1px solid ${C.redLight15}`,
            borderRadius: 8,
            padding: "10px 12px",
          }}
        >
          <div style={{ fontSize: 9, color: C.red, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Due date</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: C.red }}>Jun 15</div>
          <div style={{ fontSize: 9, color: C.red, marginTop: 1 }}>8 days</div>
        </div>
        {/* Pay CTA — blue tint */}
        <div
          style={{
            background: C.primaryLight,
            border: `1px solid ${C.primaryLight2}`,
            borderRadius: 8,
            padding: "10px 12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              background: C.primary,
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "7px 0",
              width: "100%",
              fontSize: 11,
              fontWeight: 600,
              cursor: "default",
            }}
          >
            Pay balance
          </button>
        </div>
      </div>
      {/* Row 2 — 4 col */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 7 }}>
        {[
          { label: "Autopay", value: "On", color: C.green },
          { label: "Available limit", value: "$6,820", color: C.red },
          { label: "Credit limit", value: "$100,000", color: C.dark },
          { label: "Statement", value: "Jun 30", color: C.dark },
        ].map((item, i) => (
          <div key={i} style={{ background: C.d02, border: `1px solid ${C.d08}`, borderRadius: 8, padding: "8px 12px" }}>
            <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
              {item.label}
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: item.color }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile variants ────────────────────────────────────────────────────────────

export function D1Mobile() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "8px 10px" }}>
      {/* Balance card */}
      <div
        style={{
          border: `1px solid ${C.d08}`,
          borderRadius: 10,
          padding: "12px 14px",
          marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 9, color: C.d40, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Balance</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: C.dark, marginBottom: 3 }}>$24,180.00</div>
        <div style={{ fontSize: 10, color: C.red, marginBottom: 10 }}>Due Jun 15 · 8 days</div>
        <button
          style={{
            width: "100%",
            background: C.primary,
            color: "#fff",
            border: "none",
            borderRadius: 7,
            padding: "8px 0",
            fontSize: 11,
            fontWeight: 600,
            cursor: "default",
          }}
        >
          Pay balance
        </button>
      </div>
      {/* 3-col mini strip */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
        {[
          { label: "Autopay", value: "On", color: C.green },
          { label: "Avail. limit", value: "$6,820", color: C.red },
          { label: "Statement", value: "Jun 30", color: C.dark },
        ].map((item, i) => (
          <div key={i} style={{ background: C.d02, border: `1px solid ${C.d08}`, borderRadius: 7, padding: "7px 8px" }}>
            <div style={{ fontSize: 8, color: C.d40, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>{item.label}</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: item.color }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function D2Mobile() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "8px 10px" }}>
      {/* Red alert box */}
      <div
        style={{
          background: C.redLight,
          borderRadius: 10,
          padding: "10px 12px",
          marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 10, fontWeight: 600, color: C.red, marginBottom: 7 }}>
          Available limit low — $6,820 left
        </div>
        <button
          style={{
            width: "100%",
            background: C.primary,
            color: "#fff",
            border: "none",
            borderRadius: 7,
            padding: "8px 0",
            fontSize: 11,
            fontWeight: 600,
            cursor: "default",
          }}
        >
          Pay balance to free limit
        </button>
      </div>
      {/* 2x2 grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginBottom: 8 }}>
        <div style={{ background: C.d02, border: `1px solid ${C.d08}`, borderRadius: 8, padding: "9px 10px" }}>
          <div style={{ fontSize: 8, color: C.d40, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>Balance</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: C.dark }}>$24,180</div>
        </div>
        <div style={{ background: C.redLight, border: `1px solid ${C.redLight15}`, borderRadius: 8, padding: "9px 10px" }}>
          <div style={{ fontSize: 8, color: C.red, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>Due date</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: C.red }}>Jun 15</div>
        </div>
      </div>
      <div style={{ fontSize: 9, color: C.d40 }}>
        Autopay on · biweekly · USD ···· 4421 · stmt Jun 30
      </div>
    </div>
  );
}

export function D3Mobile() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "8px 10px" }}>
      <div style={{ border: `1px solid ${C.d08}`, borderRadius: 10, overflow: "hidden" }}>
        {/* Dark header */}
        <div
          style={{
            background: C.dark,
            padding: "12px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Credit balance</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>$24,180.00</div>
          </div>
          <button
            style={{
              background: C.primary,
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "6px 12px",
              fontSize: 10,
              fontWeight: 600,
              cursor: "default",
            }}
          >
            Pay
          </button>
        </div>
        {/* 2x2 grid below */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {[
            { label: "Amount due", value: "$24,180", color: C.dark },
            { label: "Due date", value: "Jun 15", color: C.red },
            { label: "Autopay", value: "On", color: C.green },
            { label: "Avail / Limit", value: "$6,820", color: C.red },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "9px 12px",
                borderTop: `1px solid ${C.d08}`,
                borderRight: i % 2 === 0 ? `1px solid ${C.d08}` : "none",
              }}
            >
              <div style={{ fontSize: 8, color: C.d40, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>{item.label}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: item.color }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function D4Mobile() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "8px 10px" }}>
      <button
        style={{
          width: "100%",
          background: C.primary,
          color: "#fff",
          border: "none",
          borderRadius: 8,
          height: 40,
          fontSize: 12,
          fontWeight: 700,
          cursor: "default",
          marginBottom: 8,
        }}
      >
        Pay balance
      </button>
      <div style={{ fontSize: 20, fontWeight: 700, color: C.dark, marginBottom: 2 }}>$24,180.00</div>
      <div style={{ fontSize: 10, color: C.red, marginBottom: 10 }}>Due Jun 15 · 8 days</div>
      <div
        style={{
          fontSize: 9,
          color: C.d40,
          paddingTop: 8,
          paddingBottom: 8,
          borderTop: `1px solid ${C.d08}`,
          borderBottom: `1px solid ${C.d08}`,
          marginBottom: 8,
        }}
      >
        Autopay will pay from USD ···· 4421
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
        {[
          { label: "Autopay", value: "On", color: C.green },
          { label: "Avail. limit", value: "$6,820", color: C.red },
          { label: "Statement", value: "Jun 30", color: C.dark },
        ].map((item, i) => (
          <div key={i} style={{ background: C.d02, border: `1px solid ${C.d08}`, borderRadius: 7, padding: "7px 8px" }}>
            <div style={{ fontSize: 8, color: C.d40, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>{item.label}</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: item.color }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function D5Mobile() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "8px 10px" }}>
      {/* 2-col row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 }}>
        <div style={{ background: C.dark, borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>Balance</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>$24,180</div>
        </div>
        <div style={{ background: C.redLight, border: `1px solid ${C.redLight15}`, borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 8, color: C.red, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>Due date</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: C.red }}>Jun 15</div>
        </div>
      </div>
      {/* Full-width pay button */}
      <button
        style={{
          width: "100%",
          background: C.primary,
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "9px 0",
          fontSize: 11,
          fontWeight: 600,
          cursor: "default",
          marginBottom: 6,
        }}
      >
        Pay balance
      </button>
      {/* 3-col secondary row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
        {[
          { label: "Autopay", value: "On", color: C.green },
          { label: "Avail.", value: "$6,820", color: C.red },
          { label: "Statement", value: "Jun 30", color: C.dark },
        ].map((item, i) => (
          <div key={i} style={{ background: C.d02, border: `1px solid ${C.d08}`, borderRadius: 7, padding: "7px 8px" }}>
            <div style={{ fontSize: 8, color: C.d40, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>{item.label}</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: item.color }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── AppChrome (shared desktop shell) ──────────────────────────────────────────
function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        border: `1px solid ${C.d10}`,
        borderRadius: 10,
        overflow: "hidden",
        background: "#fff",
        fontSize: 11,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: C.dark,
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          height: 38,
          gap: 12,
        }}
      >
        {/* Logo triangle */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <polygon points="8,2 15,14 1,14" fill="#3333ff" />
        </svg>
        {/* Stats */}
        <div style={{ display: "flex", gap: 16, flex: 1 }}>
          {[
            { label: "Total Spent", value: "$1.2M" },
            { label: "Burn", value: "-$39K" },
            { label: "Runway", value: "18mo" },
          ].map((s, i) => (
            <div key={i} style={{ fontSize: 9 }}>
              <span style={{ color: "rgba(255,255,255,0.35)", marginRight: 4 }}>{s.label}</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{s.value}</span>
            </div>
          ))}
        </div>
        {/* Gradient button */}
        <button
          style={{
            background: "linear-gradient(90deg, #3333ff, #6633ff)",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            padding: "4px 10px",
            fontSize: 9,
            fontWeight: 600,
            cursor: "default",
          }}
        >
          Pay | Exchange | Deposit
        </button>
        {/* Avatar */}
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#3333ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 9,
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
            width: 110,
            background: "#fafafa",
            borderRight: `1px solid ${C.d08}`,
            padding: "10px 0",
            flexShrink: 0,
          }}
        >
          {[
            { label: "Dashboard", dot: null },
            { label: "Activities", dot: null },
            { label: "Accounts", dot: null },
            { label: "Cards", dot: "#3333ff", active: true },
            { label: "Accounting", dot: null },
            { label: "Settings", dot: null },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "5px 12px",
                background: item.active ? C.primaryLight : "transparent",
              }}
            >
              {item.dot && (
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: item.dot,
                    flexShrink: 0,
                  }}
                />
              )}
              {!item.dot && <div style={{ width: 5, height: 5, flexShrink: 0 }} />}
              <span
                style={{
                  fontSize: 10,
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
              padding: "10px 16px",
              borderBottom: `1px solid ${C.d08}`,
            }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 4 }}>
                User Cards
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {["Overview", "Credit ★", "Debit"].map((tab, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 9,
                      fontWeight: i === 1 ? 600 : 400,
                      color: i === 1 ? C.primary : C.d40,
                      paddingBottom: 2,
                      borderBottom: i === 1 ? `1.5px solid ${C.primary}` : "none",
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
                borderRadius: 5,
                padding: "5px 10px",
                fontSize: 9,
                fontWeight: 600,
                cursor: "default",
              }}
            >
              Create New
            </button>
          </div>

          {/* Overview area (variant content) */}
          <div style={{ borderBottom: `1px solid ${C.d08}` }}>{children}</div>

          {/* Table chrome */}
          <div style={{ padding: "8px 14px 6px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 10, color: C.d60, fontWeight: 600 }}>200 Items</span>
              <button
                style={{
                  background: "transparent",
                  border: `1px solid ${C.d10}`,
                  borderRadius: 4,
                  padding: "3px 8px",
                  fontSize: 9,
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
                gap: 8,
                paddingBottom: 5,
                borderBottom: `1px solid ${C.d08}`,
              }}
            >
              {["Credit Cards", "Account Holder", "Balance / Limit", "Expiration", "Status"].map(
                (col, i) => (
                  <span key={i} style={{ fontSize: 8, color: C.d40, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {col}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MobileChrome ───────────────────────────────────────────────────────────────
function MobileChrome({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        border: `1px solid ${C.d10}`,
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
        maxWidth: 300,
        margin: "0 auto",
      }}
    >
      {/* Topbar */}
      <div
        style={{
          background: C.dark,
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <polygon points="8,2 15,14 1,14" fill="#3333ff" />
        </svg>
        <div style={{ flex: 1, fontSize: 9 }}>
          <span style={{ color: "rgba(255,255,255,0.35)" }}>Burn </span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>-$39,432.95</span>
        </div>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#3333ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 8,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          JG
        </div>
        <button
          style={{
            background: "linear-gradient(90deg, #3333ff, #6633ff)",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "3px 7px",
            fontSize: 8,
            fontWeight: 600,
            cursor: "default",
          }}
        >
          Pay
        </button>
      </div>

      {/* Page header */}
      <div style={{ padding: "8px 10px 0", borderBottom: `1px solid ${C.d08}` }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, marginBottom: 5 }}>User Cards</div>
        <div style={{ display: "flex", gap: 10 }}>
          {["Overview", "Credit ★", "Debit"].map((tab, i) => (
            <span
              key={i}
              style={{
                fontSize: 8,
                fontWeight: i === 1 ? 600 : 400,
                color: i === 1 ? C.primary : C.d40,
                paddingBottom: 4,
                borderBottom: i === 1 ? `1.5px solid ${C.primary}` : "none",
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Variant content */}
      <div style={{ borderBottom: `1px solid ${C.d08}` }}>{children}</div>

      {/* Table chrome */}
      <div style={{ padding: "7px 10px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontSize: 9, color: C.d60, fontWeight: 600 }}>200 Items</span>
          <button
            style={{
              background: "transparent",
              border: `1px solid ${C.d10}`,
              borderRadius: 4,
              padding: "2px 7px",
              fontSize: 8,
              color: C.d60,
              cursor: "default",
            }}
          >
            Filter
          </button>
        </div>
        {/* Card rows */}
        {[
          { name: "Kierra Levin", status: "Active", statusColor: C.green },
          { name: "Ann Lipshutz", status: "Lost", statusColor: C.red },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "6px 0",
              borderTop: `1px solid ${C.d08}`,
            }}
          >
            <span style={{ fontSize: 9, color: C.dark }}>{row.name}</span>
            <span
              style={{
                fontSize: 8,
                fontWeight: 600,
                color: row.statusColor,
                background: row.status === "Active" ? C.greenLight : C.redLight,
                padding: "2px 6px",
                borderRadius: 3,
              }}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Variant metadata ───────────────────────────────────────────────────────────
const VARIANTS = [
  {
    id: "D1",
    label: "Compact",
    tag: "Recommended",
    title: "High-Density Enterprise Row",
    desc: "All fields in a single horizontal line. CTA pinned right. Zero wasted vertical space — designed for experienced accountants who scan left-to-right and visit daily.",
    hierarchy: [
      { level: 1, color: "#3333ff", title: "Balance", desc: "28px dominant anchor — everything else references it" },
      { level: 2, color: "#e03e00", title: "Due date + amount", desc: "Red — urgent signal immediately right of balance" },
      { level: 3, color: "#00875a", title: "Autopay status", desc: "Green — reassurance or warning, compact inline" },
      { level: 4, color: "#94a3b8", title: "Limits, statement, CTA", desc: "Right-pinned — action completes the scan" },
    ],
    notes: [
      { accent: "blue", title: "Why high-density", body: "Experienced accountants don't need breathing room — they need speed. A single row lets them triage in one left-to-right pass." },
      { accent: "green", title: "Strongest hierarchy", body: "Spatial order mirrors cognitive priority: left = most important, right = least. The CTA breaks the pattern deliberately to signal action." },
    ],
    Desktop: D1Desktop,
    Mobile: D1Mobile,
  },
  {
    id: "D2",
    label: "Alert-first",
    tag: undefined,
    title: "Risk Banner + Balance",
    desc: "When available limit is low, the risk condition leads. The banner is the headline. This hierarchy inverts when limits are healthy — the banner disappears and balance leads naturally.",
    hierarchy: [
      { level: 1, color: "#e03e00", title: "Risk alert banner", desc: "Full-width — the condition needing attention dominates" },
      { level: 2, color: "#0d1117", title: "Balance + amount due + due date", desc: "28px/20px confirms the financial picture" },
      { level: 3, color: "#00875a", title: "Autopay footer", desc: "11px muted sentence — context, not a decision point" },
    ],
    notes: [
      { accent: "blue", title: "Why alert-first", body: "When the limit condition is true, it should be unmissable — not a badge buried in a field." },
      { accent: "amber", title: "State-aware design", body: "Two states: alert active (limit low) and nominal. The layout adapts to context rather than always displaying the same weight." },
    ],
    Desktop: D2Desktop,
    Mobile: D2Mobile,
  },
  {
    id: "D3",
    label: "Unified",
    tag: undefined,
    title: "Dark Balance Zone + Right Grid",
    desc: "One enclosing container, two visual zones. Dark left panel = the decision unit. Right 2×2 grid = context at equal weight. The container makes the overview a discrete object on the page.",
    hierarchy: [
      { level: 1, color: "#0d1117", title: "Dark balance panel", desc: "28px white-on-dark — the container's visual anchor" },
      { level: 2, color: "#e03e00", title: "Due date (top-right cell)", desc: "20px red — most urgent field in the grid" },
      { level: 3, color: "#0d1117", title: "Amount due + Autopay", desc: "20px/14px — secondary cells in grid rhythm" },
      { level: 4, color: "#94a3b8", title: "Limits + statement", desc: "Bottom-right — lowest priority, rightmost position" },
    ],
    notes: [
      { accent: "blue", title: "Why a unified container", body: "A single bounded object makes the overview visually separable from the 200-item table below. No section header needed." },
      { accent: "amber", title: "Tradeoff", body: "The dark panel adds visual weight. Best for dense pages where a strong visual landmark matters." },
    ],
    Desktop: D3Desktop,
    Mobile: D3Mobile,
  },
  {
    id: "D4",
    label: "Action",
    tag: undefined,
    title: "Pay CTA as Headline",
    desc: "The Pay button and balance are co-equal heroes. Everything below confirms the action. For teams where payment is the primary daily task, not monitoring.",
    hierarchy: [
      { level: 1, color: "#3333ff", title: "Pay button + balance", desc: "44px button + 28px number — action and justification co-equal" },
      { level: 2, color: "#e03e00", title: "Due date (inline)", desc: "Red inline with balance — one decision-unit sentence" },
      { level: 3, color: "#94a3b8", title: "Autopay + limits + statement", desc: "14px flat row — confirmation the scheduled action is correct" },
    ],
    notes: [
      { accent: "blue", title: "Why action-first", body: "Most variants assume the accountant reads before acting. This one assumes they've already decided. Removes one cognitive step for high-frequency payers." },
      { accent: "amber", title: "Tradeoff", body: "For monitoring-first workflows this feels backwards — action precedes reason. D1 or D2 serve mixed monitor + pay workflows better." },
    ],
    Desktop: D4Desktop,
    Mobile: D4Mobile,
  },
  {
    id: "D5",
    label: "Modular",
    tag: undefined,
    title: "Independent Named Tiles",
    desc: "Each field in its own discrete tile. No single dominant number. Color-coded tile backgrounds signal priority without relying on type size alone. For teams that scan across fields rather than read linearly.",
    hierarchy: [
      { level: 1, color: "#0d1117", title: "Balance tile (dark bg)", desc: "Dark background signals primary — stands apart" },
      { level: 2, color: "#e03e00", title: "Due date tile (red tint)", desc: "Tinted background = urgency signal without type size" },
      { level: 3, color: "#3333ff", title: "Pay CTA tile (blue tint)", desc: "Blue tint = action zone — grouped with primary info" },
      { level: 4, color: "#94a3b8", title: "Row 2 tiles", desc: "Equal-weight grid — reference info, scanned not read" },
    ],
    notes: [
      { accent: "blue", title: "Why modular tiles", body: "Some accountants hunt for a specific field. Discrete labeled tiles make any field findable in one scan regardless of reading order." },
      { accent: "amber", title: "Tradeoff vs D1", body: "More visual weight, no single dominant number. Serves field-hunting use cases but less efficient for users who always check balance first." },
    ],
    Desktop: D5Desktop,
    Mobile: D5Mobile,
  },
];

const accentColors: Record<string, string> = {
  blue: "#3333ff",
  green: "#00875a",
  amber: "#c47d00",
};

// ─── Main VariantGallery ────────────────────────────────────────────────────────
export default function VariantGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  function handleTab(i: number) {
    if (i === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(i);
      setFading(false);
    }, 140);
  }

  const v = VARIANTS[activeIndex];
  const DesktopComp = v.Desktop;
  const MobileComp = v.Mobile;

  return (
    <div>
      {/* Section header */}
      <div className="mb-6">
        <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-1">
          Interactive Exploration
        </p>
        <h2 className="text-2xl font-medium text-ink">Five Structural Directions</h2>
      </div>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-1 mb-8 border-b border-black/8 pb-4">
        {VARIANTS.map((variant, i) => (
          <button
            key={variant.id}
            onClick={() => handleTab(i)}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-150 flex items-center gap-1.5 ${
              i === activeIndex
                ? "bg-ink text-white"
                : "text-ink-muted hover:text-ink hover:bg-black/4"
            }`}
          >
            <span className="text-[10px] opacity-60">{variant.id}</span>
            <span>·</span>
            {variant.label}
            {variant.tag && (
              <span
                className="text-[9px] px-1.5 py-0.5 rounded"
                style={{
                  background: i === activeIndex ? "rgba(255,255,255,0.2)" : "rgba(51,51,255,0.1)",
                  color: i === activeIndex ? "#fff" : "#3333ff",
                }}
              >
                {variant.tag}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Preview area with fade animation */}
      <div
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(6px)" : "translateY(0)",
          transition: "opacity 0.14s ease, transform 0.14s ease",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — Desktop preview (3/5) */}
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-3">Desktop</p>
            <AppChrome>
              <DesktopComp />
            </AppChrome>
          </div>

          {/* Right — details + mobile (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Variant info */}
            <div>
              <h3 className="text-base font-semibold text-ink mb-1">{v.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{v.desc}</p>
            </div>

            {/* Hierarchy */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-3">Hierarchy</p>
              <div className="flex flex-col gap-2">
                {v.hierarchy.map((h) => (
                  <div key={h.level} className="flex items-start gap-2.5">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5"
                      style={{ background: h.color }}
                    >
                      {h.level}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-ink">{h.title}</span>
                      <span className="text-xs text-ink-muted"> — {h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-2">
              {v.notes.map((note, i) => (
                <div
                  key={i}
                  className="rounded-lg p-3"
                  style={{
                    borderLeft: `3px solid ${accentColors[note.accent] ?? "#888"}`,
                    background: note.accent === "blue"
                      ? "rgba(51,51,255,0.04)"
                      : note.accent === "green"
                      ? "rgba(0,135,90,0.04)"
                      : "rgba(196,125,0,0.04)",
                  }}
                >
                  <p className="text-xs font-semibold text-ink mb-0.5">{note.title}</p>
                  <p className="text-xs text-ink-muted leading-relaxed">{note.body}</p>
                </div>
              ))}
            </div>

            {/* Mobile preview */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-3">
                Mobile — Responsive
              </p>
              <MobileChrome>
                <MobileComp />
              </MobileChrome>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
