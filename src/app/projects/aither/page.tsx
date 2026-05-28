import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import VariantGallery, { D1Desktop, D1Mobile } from "@/components/aither/VariantGallery";

export const metadata: Metadata = {
  title: "Aither Cards Hub — Adam Schaban",
};

const C = {
  primary: "#3333ff",
  dark: "#0d1117",
  d08: "rgba(13,17,23,0.08)",
  d10: "rgba(13,17,23,0.1)",
  red: "#e03e00",
  green: "#00875a",
  amber: "#c47d00",
};

export default function AitherPage() {
  return (
    <main>
      {/* ── Section 1: Hero ── */}
      <section className="bg-[#0d1117] text-white px-8 md:px-16 py-24 md:py-32">
        <p
          className="text-[10px] tracking-widest uppercase mb-5"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Design Challenge · Aither Global Banking
        </p>
        <h1
          className="font-medium tracking-tight mb-5"
          style={{ fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 1.05 }}
        >
          Cards Hub —<br />Overview Component
        </h1>
        <p
          className="mb-12 max-w-2xl"
          style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}
        >
          An exploration of how interface hierarchy shapes operational clarity in fintech workflows.
        </p>
        <div
          className="flex flex-wrap gap-8 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            { label: "Role", value: "Product Designer" },
            { label: "Timeline", value: "1-day sprint" },
            { label: "Focus", value: "Hierarchy · Fintech UX · Responsive Systems" },
            { label: "Tools", value: "Figma · Claude Sonnet 4.6" },
          ].map((item) => (
            <div key={item.label}>
              <p
                className="text-[9px] tracking-widest uppercase mb-1"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {item.label}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: The Challenge ── */}
      <section className="px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-2">
              The Brief
            </p>
            <h2 className="text-2xl font-medium text-ink mb-6">The Challenge</h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-4">
              Aither is a global banking platform used by accountants managing employee cards,
              spending limits, and payments across the organization. The design prompt was precise:
              build the overview component at the top of the Cards Hub page — the first thing an
              accountant sees when they open the module.
            </p>
            <p className="text-sm text-ink-muted leading-relaxed">
              The user isn&apos;t exploring. They&apos;re triaging. They visit this page every
              workday. What matters isn&apos;t discoverability — it&apos;s the speed of comprehension.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                accent: C.primary,
                title: "Same Required Fields",
                body: "Balance, amount due, due date, autopay status, cadence, account, available limit, credit limit, statement date — identical across all five variants.",
              },
              {
                accent: C.amber,
                title: "Hard Constraints",
                body: "No graphs as focal points. No form controls. No card visuals. Levro design system: Inter, #3333FF primary, semantic color tokens.",
              },
              {
                accent: C.green,
                title: "Five Structural Directions",
                body: "Not visual restyles of the same layout — five genuinely different arguments about what accountants need to see first.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-4"
                style={{
                  borderLeft: `3px solid ${card.accent}`,
                  borderRadius: 8,
                  background: "rgba(0,0,0,0.02)",
                }}
              >
                <p className="text-sm font-semibold text-ink mb-1">{card.title}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: My Approach ── */}
      <section
        className="px-8 md:px-16 py-20"
        style={{ background: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="max-w-6xl">
          <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-2">
            Methodology
          </p>
          <h2 className="text-2xl font-medium text-ink mb-6">Designing Around Hierarchy</h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-10 max-w-2xl">
            I started by establishing a hierarchy argument before touching layout. The question
            wasn&apos;t &ldquo;how should this look?&rdquo; — it was &ldquo;what does an accountant
            need to know, and in what order?&rdquo;
          </p>

          {/* Priority sequence */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {[
              { num: 1, color: C.primary, title: "Balance", sub: "The financial state" },
              { num: 2, color: C.red, title: "Payment / Due Date", sub: "The immediate action" },
              { num: 3, color: C.green, title: "Autopay Status", sub: "The safety net" },
              { num: 4, color: "#94a3b8", title: "Limits & Context", sub: "The operating boundary" },
            ].map((step, i) => (
              <div key={step.num} className="flex md:flex-col items-start md:items-center gap-3 md:gap-2 flex-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: step.color }}
                >
                  {step.num}
                </div>
                {i < 3 && (
                  <div className="hidden md:block text-ink-faint text-lg self-center translate-y-[-4px]">→</div>
                )}
                <div className="md:text-center">
                  <p className="text-sm font-semibold text-ink">{step.title}</p>
                  <p className="text-xs text-ink-muted">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Insight callouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: "1",
                title: "Density as a Feature",
                body: "Expert users don't need breathing room — they need speed. A compressed, information-dense layout respects the accountant's time and domain expertise.",
              },
              {
                num: "2",
                title: "Scanning, Not Reading",
                body: "Accountants scan left-to-right across the overview. Spatial position communicates priority as powerfully as type size.",
              },
              {
                num: "3",
                title: "State-Aware Design",
                body: "When available limit is critically low, the layout should respond — not just a badge, but a structural change that makes the risk unmissable.",
              },
            ].map((insight) => (
              <div
                key={insight.num}
                className="p-5 bg-white rounded-xl"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <p
                  className="text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: C.primary }}
                >
                  {insight.num}
                </p>
                <p className="text-sm font-semibold text-ink mb-1">{insight.title}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Interactive Exploration ── */}
      <section className="px-8 md:px-16 py-20 border-t border-black/8">
        <VariantGallery />
      </section>

      {/* ── Section 5: Final Direction ── */}
      <section
        className="px-8 md:px-16 py-20"
        style={{ background: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="max-w-6xl">
          <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-2">Recommendation</p>
          <h2 className="text-2xl font-medium text-ink mb-10">Why D1 Is Recommended</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left — reasoning */}
            <div className="flex flex-col gap-5">
              {[
                "Spatial order = cognitive priority — balance leads left, CTA closes right. The sequence mirrors how an experienced accountant processes the page.",
                "Density as a signal — the compressed single-row format communicates 'this is a power tool for experts,' not a dashboard for occasional visitors.",
                "CTA position = workflow assumption — placing Pay after all data means the user reads before acting. This reduces payment errors in high-stakes fintech contexts.",
              ].map((bullet, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: C.primary }}
                  />
                  <p className="text-sm text-ink-muted leading-relaxed">{bullet}</p>
                </div>
              ))}
              <p
                className="text-xs text-ink-muted leading-relaxed mt-2 pt-4"
                style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
              >
                D2 becomes the right choice when available-limit risk is a frequent condition for
                the team. The banner&apos;s structural dominance ensures it&apos;s never missed.
              </p>
            </div>

            {/* Right — D1 featured preview */}
            <div className="border border-black/8 rounded-xl overflow-hidden p-4 bg-white">
              <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-3">D1 Overview Component</p>
              <div style={{ border: `1px solid ${C.d08}`, borderRadius: 8, overflow: "hidden" }}>
                <D1Desktop />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Responsive System ── */}
      <section className="px-8 md:px-16 py-20 border-t border-black/8">
        <div className="max-w-6xl">
          <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-2">Responsive Design</p>
          <h2 className="text-2xl font-medium text-ink mb-4">Responsive System</h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-10 max-w-2xl">
            Each variant&apos;s mobile layout preserves the same hierarchy decisions while converting
            to a single-column structure. The D1 mobile collapses the four-column information strip
            into a compact 3-cell row, maintaining density while accommodating touch targets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Desktop */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-3">Desktop</p>
              <div className="border border-black/8 rounded-xl overflow-hidden bg-white p-4">
                <div style={{ border: `1px solid ${C.d08}`, borderRadius: 8, overflow: "hidden" }}>
                  <D1Desktop />
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-3">Mobile — 375px</p>
              <div className="border border-black/8 rounded-xl overflow-hidden bg-white p-4">
                <div style={{ maxWidth: 300 }}>
                  <div style={{ border: `1px solid ${C.d08}`, borderRadius: 10, overflow: "hidden" }}>
                    <D1Mobile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Process ── */}
      <section
        className="px-8 md:px-16 py-20"
        style={{ background: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* AI workflow */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-2">Workflow</p>
            <h3 className="text-xl font-medium text-ink mb-4">AI-Assisted Workflow</h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-4">
              I used Claude Sonnet 4.6 to rapidly generate structural variants, allowing me to
              explore five distinct hierarchy models in a single sprint. The goal wasn&apos;t to
              have AI make design decisions — it was to compress the prototyping phase so I could
              spend more time on the decisions that matter: hierarchy rationale, responsiveness
              logic, and tradeoff analysis.
            </p>
            <p
              className="text-xs text-ink-muted leading-relaxed p-3 rounded-lg"
              style={{ background: "rgba(51,51,255,0.04)", borderLeft: "3px solid rgba(51,51,255,0.3)" }}
            >
              This reflects how I believe product designers should work with AI — as a leverage
              tool for speed, not a replacement for design thinking.
            </p>
          </div>

          {/* Reflection */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-ink-muted mb-2">Takeaway</p>
            <h3 className="text-xl font-medium text-ink mb-4">Reflection</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              This challenge reinforced that interface hierarchy isn&apos;t a visual preference —
              it&apos;s a workflow argument. D1, D2, and D3 each make a different bet about what
              state the accountant is in when they open the page. The strongest solution isn&apos;t
              the one that looks best — it&apos;s the one whose hierarchy assumption matches the
              team&apos;s actual daily workflow.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 8: Back nav ── */}
      <section className="px-8 md:px-16 py-16 border-t border-black/8">
        <Link
          href="/work"
          className="text-sm text-ink hover:text-ink-muted transition-colors inline-flex items-center gap-2"
        >
          ← Back to Work
        </Link>
      </section>

      <Footer />
    </main>
  );
}
