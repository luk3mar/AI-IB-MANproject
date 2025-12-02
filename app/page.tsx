"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  kind?: "cover" | "hero" | "text";
};

const slides: Slide[] = [
  {
    id: "cover",
    title: "AI × Investment Banking",
    subtitle: "How AI Will Change Investment Banking Careers, Especially at the Junior Level",
    bullets: [
      "Luke Rosenthal",
      "Professor, Aida M. Parrondo",
      "November 22, 2025",
      "Strategic Management 4720"
    ],
    kind: "cover"
  },
  {
    id: "hero",
    title: "How AI Will Change Investment Banking Careers",
    subtitle: "Why Junior Roles Will Look Very Different in the Next Decade",
    bullets: [
      "Investment banking helps companies raise capital and do big transactions; juniors are analysts and associates.",
      "Their work today is heavy on repetitive, data-driven tasks and long hours.",
      "AI is reshaping this work — so what does that mean for junior careers?"
    ],
    kind: "hero"
  },
  {
    id: "today-junior-work",
    title: "What Junior Investment Bankers Do Today",
    bullets: [
      "Build financial models, valuations, and sensitivity tables in Excel.",
      "Create pitchbooks and PowerPoint decks for client meetings.",
      "Research companies, industries, and comparable transactions.",
      "Clean, organize, and double-check large datasets.",
      "Spend long hours on manual, repetitive work."
    ]
  },
  {
    id: "ai-fit",
    title: "What AI Is Good At (and Why IB Is a Perfect Target)",
    bullets: [
      "AI excels at pattern recognition, automation, and summarizing information.",
      "It can process huge amounts of financial data much faster than humans.",
      "It can draft text for emails, memos, or slide content in seconds.",
      "Junior IB work is data-heavy and repetitive — a natural fit for AI assistance."
    ]
  },
  {
    id: "tasks-automation",
    title: "Tasks AI Will Automate or Transform",
    subtitle: "Where Junior Analysts Will See the Biggest Changes",
    bullets: [
      "Excel modeling: AI-assisted 3-statement models, DCFs, and automated error checks.",
      "Pitchbooks: auto-generating first drafts of slides, charts, and formatting.",
      "Research: summarizing filings, earnings calls, and industry reports.",
      "Market and transaction comps: faster screening and updating of comparable deals.",
      "Drafting emails and internal memos: AI writes first drafts juniors refine."
    ]
  },
  {
    id: "risk-no-ai",
    title: "The Risk of Not Adopting AI",
    subtitle: "Why Junior Bankers Can't Afford to Fall Behind",
    bullets: [
      "Peers using AI will complete models and pitchbooks 3–5x faster than you.",
      "You'll spend more hours on manual work while others focus on strategy and client relationships.",
      "Senior bankers will notice who delivers faster, higher-quality work — and who doesn't.",
      "Career progression slows: promotions go to those who add more value with AI assistance.",
      "The gap widens over time: early AI adopters build compounding advantages."
    ]
  },
  {
    id: "human-judgment",
    title: "What AI Can't Replace",
    subtitle: "Why Human Bankers Still Matter",
    bullets: [
      "Building trust and long-term relationships with clients and senior executives.",
      "Using judgment in messy, unique, or politically sensitive situations.",
      "Negotiating terms, reading people, and understanding unspoken priorities.",
      "Framing the story of a deal in a way that resonates with stakeholders.",
      "Making trade-offs when data is incomplete, conflicting, or ambiguous."
    ]
  },
  {
    id: "role-evolution",
    title: "How Junior Roles Will Evolve",
    subtitle: "From “Excel Monkey” to Strategic Analyst",
    bullets: [
      "Less time on manual work, more time interpreting AI-generated outputs.",
      "Juniors become editors and decision-support, not just data processors.",
      "Greater focus on understanding the big picture behind each analysis.",
      "Earlier exposure to client discussions and strategic conversations.",
      "AI becomes a force multiplier for high-performing analysts."
    ]
  },
  {
    id: "future-skills",
    title: "Skills the Next Generation of Bankers Will Need",
    bullets: [
      "AI literacy: knowing how to use AI tools safely, clearly, and effectively.",
      "Data skills: comfort with analytics, dashboards, and some basic coding.",
      "Communication: explaining complex insights simply to non-technical clients.",
      "Strategic thinking: connecting the numbers to real business decisions.",
      "Adaptability: learning new tools and workflows as technology evolves."
    ]
  },
  {
    id: "final-takeaways",
    title: "Final Takeaways",
    bullets: [
      "AI will not remove junior investment banking roles, but it will reshape them.",
      "The most repetitive and manual tasks will be automated or heavily assisted.",
      "Juniors who embrace AI will move up faster and deliver more value.",
      "Careers will shift from pure hours worked to judgment and relationships.",
      "The edge goes to those who blend finance skills with smart use of AI."
    ]
  }
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ids = useMemo(() => slides.map((s) => s.id), []);

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(slides.length - 1, index));
    const id = ids[clampedIndex];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown"
      ) {
        event.preventDefault();
        scrollToIndex(activeIndex + 1);
      } else if (
        event.key === "ArrowUp" ||
        event.key === "PageUp"
      ) {
        event.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, ids]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = ids
        .map((id, index) => {
          const el = document.getElementById(id);
          if (!el) return { index, distance: Number.POSITIVE_INFINITY };
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
          return { index, distance };
        })
        .sort((a, b) => a.distance - b.distance);

      if (offsets.length > 0 && offsets[0].index !== activeIndex) {
        setActiveIndex(offsets[0].index);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, ids]);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#050816] text-foreground">
      {/* Subtle animated background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_#020617)]" />
        <div className="absolute inset-0 opacity-[0.16]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:80px_80px]">
            <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-background/80 to-background animate-grid-scan" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isHeroLike = slide.kind === "cover" || slide.kind === "hero";

          return (
            <section
              key={slide.id}
              id={slide.id}
              className="min-h-screen flex flex-col justify-center py-16"
            >
              <div
                className={`grid gap-10 md:gap-14 ${
                  slide.kind === "cover" 
                    ? "md:grid-cols-1" 
                    : isHeroLike 
                    ? "md:grid-cols-[1.3fr_minmax(0,1fr)]" 
                    : "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
                } items-center transition-all duration-700 ${
                  isActive ? "scale-[1.02] opacity-100" : "scale-[0.97] opacity-70"
                }`}
              >
                {/* Text side */}
                <div className={`space-y-6 md:space-y-8 ${slide.kind === "cover" ? "text-center max-w-4xl mx-auto" : ""}`}>
                  <h1
                    className={`font-semibold leading-tight text-4xl md:text-5xl lg:text-6xl text-white ${
                      isHeroLike ? "animate-slide-right" : "animate-fade-up"
                    }`}
                    style={isHeroLike ? { animationDelay: "0.05s" } : undefined}
                  >
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="max-w-3xl text-lg md:text-xl text-slate-300 animate-fade-up" style={{ animationDelay: "0.15s" }}>
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.kind === "cover" ? (
                    <div className="mt-8 space-y-4 md:space-y-5">
                      {slide.bullets.map((bullet, i) => (
                        <div
                          key={bullet}
                          className={`text-center text-lg md:text-xl lg:text-2xl text-slate-200 ${
                            isActive ? "animate-fade-up" : ""
                          }`}
                          style={
                            isActive
                              ? { animationDelay: `${0.25 + i * 0.1}s` }
                              : undefined
                          }
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-4 space-y-3 md:space-y-4 text-xl md:text-2xl text-slate-100">
                      {slide.bullets.map((bullet, i) => (
                        <li
                          key={bullet}
                          className={`flex gap-3 opacity-80 ${
                            isActive ? "animate-fade-up" : ""
                          }`}
                          style={
                            isActive
                              ? { animationDelay: `${0.18 + i * 0.08}s` }
                              : undefined
                          }
                        >
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent shadow-accent-glow" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Visual side */}
                {slide.kind !== "cover" && (
                <div className="relative">
                  {slide.id === "hero" && (
                    <div className="relative mx-auto max-w-md">
                      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/40 via-accent/5 to-transparent blur-2xl opacity-60" />
                      <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/80 animate-slow-float">
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-4">
                          Before vs After AI
                        </p>
                        <div className="grid gap-4 text-sm text-slate-200">
                          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/60 p-4">
                            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-400">
                              <span>Human Workflow</span>
                              <span>Manual</span>
                            </div>
                            <SpreadsheetVisual mode="human" isActive={isActive} />
                          </div>
                          <div className="rounded-2xl border border-accent/50 bg-slate-950/80 p-4 shadow-accent-glow">
                            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-accent">
                              <span>AI-Accelerated Workflow</span>
                              <span>Augmented</span>
                            </div>
                            <SpreadsheetVisual mode="ai" isActive={isActive} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {slide.id === "ai-fit" && (
                    <AIPatternVisual isActive={isActive} />
                  )}

                  {slide.id === "tasks-automation" && (
                    <WorkflowPipelineVisual isActive={isActive} />
                  )}

                  {slide.id === "risk-no-ai" && (
                    <RiskWarningVisual isActive={isActive} />
                  )}

                  {slide.id === "human-judgment" && (
                    <ImagePlaceholder
                      label="Image placeholder: two people in a meeting room, with subtle data overlay in the background."
                      tag="Human relationships"
                    />
                  )}

                  {slide.id === "role-evolution" && (
                    <EvolutionTimelineVisual isActive={isActive} />
                  )}

                  {slide.id === "future-skills" && (
                    <SkillsRadarVisual isActive={isActive} />
                  )}

                  {slide.id === "final-takeaways" && (
                    <ImagePlaceholder
                      label="Closing image placeholder: city skyline fading into a network of data lines."
                      tag="Closing visual"
                    />
                  )}
                </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      <nav className="fixed right-6 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-3 rounded-full bg-black/20 px-2 py-3 backdrop-blur">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`group relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-200 ${
                  isActive ? "h-4 w-4" : ""
                }`}
                aria-label={slide.title}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                    isActive ? "bg-accent" : "bg-slate-500"
                  } group-hover:bg-accent`}
                />
                <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-100 shadow-lg group-hover:inline">
                  {index + 1}. {slide.title}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </main>
  );
}

type SpreadsheetVisualProps = {
  mode: "human" | "ai";
  isActive: boolean;
};

const SpreadsheetVisual = ({ mode, isActive }: SpreadsheetVisualProps) => {
  const rows = 4;
  const cols = 6;
  const cells = Array.from({ length: rows * cols });

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span>{mode === "human" ? "Typing formulas cell by cell" : "AI suggests full model structure"}</span>
        <span className={mode === "ai" ? "text-accent" : ""}>
          {mode === "human" ? "Slower" : "Faster & more consistent"}
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/80 p-2 shadow-accent-glow">
        <div
          className="grid gap-[2px]"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
          }}
        >
          {cells.map((_, idx) => {
            const baseDelay = mode === "human" ? 0.08 : 0.02;
            const effectiveDelay = baseDelay * idx;
            return (
              <div
                key={idx}
                className={`h-5 rounded-[3px] border border-slate-700/70 bg-slate-900/80 ${
                  isActive ? "animate-cell-fill" : "opacity-40"
                } ${mode === "ai" ? "bg-gradient-to-r from-accent/30 via-accent/10 to-slate-900/80" : ""}`}
                style={
                  isActive
                    ? {
                        animationDelay: `${effectiveDelay}s`
                      }
                    : undefined
                }
              />
            );
          })}
        </div>
      </div>
      <p className="text-[11px] text-slate-400">
        {mode === "human"
          ? "Imagine filling each cell manually at 1:00 a.m. before a client meeting."
          : "AI proposes the full grid in seconds; you sanity-check the logic and edge cases."}
      </p>
    </div>
  );
};

type ImagePlaceholderProps = {
  label: string;
  tag: string;
};

const ImagePlaceholder = ({ label, tag }: ImagePlaceholderProps) => {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-3">
      <div className="relative h-52 w-full overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900 shadow-2xl shadow-slate-950/80">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(8,47,73,0.9),transparent_60%)]" />
        <div className="relative flex h-full items-center justify-center">
          <span className="rounded-full bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.16em] text-slate-200">
            {tag}
          </span>
        </div>
      </div>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
};

type Activeable = {
  isActive: boolean;
};

const AIPatternVisual = ({ isActive }: Activeable) => {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-3">
      <div className="relative h-56 w-full overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/80 shadow-2xl shadow-slate-950/80">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.9),transparent_60%)]" />
        <div className="relative flex h-full items-center justify-center">
          <div className="relative h-44 w-44 rounded-full border border-accent/40 bg-slate-900/60 shadow-accent-glow animate-orbit">
            <div className="absolute inset-6 rounded-full border border-slate-700/80" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-accent shadow-accent-glow"
                style={{
                  top: `${50 + 38 * Math.sin((i / 6) * 2 * Math.PI)}%`,
                  left: `${50 + 38 * Math.cos((i / 6) * 2 * Math.PI)}%`,
                  opacity: isActive ? 1 : 0.65
                }}
              />
            ))}
            <div className="absolute inset-10 rounded-full border border-slate-700/60" />
            <div className="absolute inset-[26%] rounded-full bg-accent/10 blur-xl" />
          </div>
          <div className="pointer-events-none absolute inset-x-6 top-6 h-16 overflow-hidden rounded-full border border-slate-700/60 bg-slate-900/80">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent animate-shimmer" />
            <div className="relative flex h-full items-center justify-between px-4 text-[11px] text-slate-300">
              <span>Filings</span>
              <span>Earnings calls</span>
              <span>Industry data</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-400">
        Visual metaphor: an AI core orbiting noisy data streams and surfacing clean patterns for you.
      </p>
    </div>
  );
};

const WorkflowPipelineVisual = ({ isActive }: Activeable) => {
  const lanes = [
    { label: "Excel models", color: "from-emerald-400/70 to-emerald-500/40" },
    { label: "Pitchbooks", color: "from-indigo-400/70 to-indigo-500/40" },
    { label: "Research & comps", color: "from-orange-400/80 to-orange-500/50" }
  ];

  return (
    <div className="mx-auto flex max-w-md flex-col gap-3">
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/80 p-5 shadow-2xl shadow-slate-950/80">
        <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
          <span>Today&apos;s Workflow</span>
          <span>AI-augmented</span>
        </div>
        <div className="space-y-3">
          {lanes.map((lane, idx) => (
            <div key={lane.label} className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <span>{lane.label}</span>
                <span>{idx === 0 ? "Models" : idx === 1 ? "Slides" : "Data"}</span>
              </div>
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-800/80">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${lane.color} ${
                    isActive ? "animate-bar-fill" : ""
                  }`}
                  style={
                    isActive
                      ? {
                          animationDelay: `${0.15 + idx * 0.2}s`,
                          animationFillMode: "forwards"
                        }
                      : { width: "40%" }
                  }
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-accent/40 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-200">
          <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-[10px] font-semibold text-accent">
            AI
          </span>
          AI agent sits on top of each lane, generating first drafts while you review edge cases and story.
        </div>
      </div>
      <p className="text-xs text-slate-400">
        Animation idea: each bar racing to the right to show AI accelerating models, decks, and research.
      </p>
    </div>
  );
};

const EvolutionTimelineVisual = ({ isActive }: Activeable) => {
  const stages = [
    { label: "Excel-heavy grunt work", year: "Today" },
    { label: "AI copilots for core tasks", year: "Next 3–5 years" },
    { label: "Strategy-first junior roles", year: "Later in decade" }
  ];

  return (
    <div className="mx-auto flex max-w-md flex-col gap-3">
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/80">
        <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
          <span>Role evolution</span>
          <span className="text-accent">Career roadmap</span>
        </div>

        {/* Road line */}
        <div className="relative mb-6 mt-4">
          <div className="h-1 w-full rounded-full bg-slate-800/90" />
          <div
            className={`absolute inset-y-0 left-0 h-1 rounded-full bg-gradient-to-r from-accent via-cyan-400 to-emerald-400 ${
              isActive ? "animate-bar-fill" : ""
            }`}
            style={
              isActive
                ? { animationDelay: "0.1s", animationFillMode: "forwards" }
                : { width: "60%" }
            }
          />

          {/* Moving marker */}
          <div
            className={`absolute -top-3 h-7 w-7 rounded-full border border-accent/70 bg-slate-950 shadow-accent-glow ${
              isActive ? "animate-orbit" : ""
            }`}
            style={{ left: "8%" }}
          >
            <div className="flex h-full w-full items-center justify-center text-[10px] font-semibold text-accent">
              AI
            </div>
          </div>
        </div>

        {/* Roadmap stops */}
        <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-200">
          {stages.map((stage, idx) => (
            <div
              key={stage.label}
              className={`relative rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3 ${
                isActive ? "animate-fade-up" : ""
              }`}
              style={
                isActive ? { animationDelay: `${0.25 + idx * 0.18}s` } : undefined
              }
            >
              <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                {stage.year}
              </div>
              <div className="text-[11px] text-slate-100">{stage.label}</div>
              <div className="pointer-events-none absolute -bottom-2 left-1/2 h-3 w-[1px] -translate-x-1/2 bg-gradient-to-b from-accent/70 to-transparent" />
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-slate-400">
        Think of this as a roadmap: same job title, but the work shifts from manual execution to steering AI and
        owning the story.
      </p>
    </div>
  );
};

const SkillsRadarVisual = ({ isActive }: Activeable) => {
  const skills = ["AI literacy", "Data", "Communication", "Strategy", "Adaptability"];
  return (
    <div className="mx-auto flex max-w-md flex-col gap-3">
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/80">
        <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
          <span>Skill profile</span>
          <span>Today → AI future</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-200">
          <div className="space-y-2">
            <p className="text-slate-400">Today</p>
            {skills.map((skill) => (
              <div key={skill} className="space-y-1">
                <p>{skill}</p>
                <div className="h-2 w-full rounded-full bg-slate-800/80">
                  <div className="h-full w-1/3 rounded-full bg-slate-500/80" />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-accent">With AI</p>
            {skills.map((skill, idx) => (
              <div key={skill} className="space-y-1">
                <p>{skill}</p>
                <div className="h-2 w-full rounded-full bg-slate-800/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-accent/80 to-cyan-400/80 ${
                      isActive ? "animate-bar-fill" : ""
                    }`}
                    style={
                      isActive
                        ? {
                            animationDelay: `${0.15 + idx * 0.1}s`,
                            animationFillMode: "forwards"
                          }
                        : { width: "60%" }
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-400">
        Show how the same analyst role leans much harder into AI, data, and strategic communication.
      </p>
    </div>
  );
};

const RiskWarningVisual = ({ isActive }: Activeable) => {
  const metrics = [
    { label: "Model completion time", withoutAI: 8, withAI: 2, unit: "hours" },
    { label: "Pitchbook drafts", withoutAI: 1, withAI: 3, unit: "per day" },
    { label: "Research summaries", withoutAI: 2, withAI: 8, unit: "per hour" },
    { label: "Client-ready quality", withoutAI: 60, withAI: 95, unit: "%" }
  ];

  return (
    <div className="mx-auto flex max-w-md flex-col gap-3">
      <div className="relative overflow-hidden rounded-3xl border border-red-500/50 bg-gradient-to-br from-slate-950/90 via-red-950/20 to-slate-950/90 p-6 shadow-2xl shadow-red-950/50">
        {/* Warning glow effect */}
        <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-red-500/10 blur-2xl animate-pulse-glow" />
        
        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500 shadow-red-glow animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-red-400 font-semibold">
                Competitive Disadvantage
              </span>
            </div>
            <span className="text-[10px] text-slate-400">Without AI</span>
          </div>

          {/* Comparison bars */}
          <div className="space-y-5">
            {metrics.map((metric, idx) => (
              <div key={metric.label} className="space-y-2.5">
                <div className="flex items-center justify-between text-[12px] font-medium text-slate-200">
                  <span>{metric.label}</span>
                </div>
                
                {/* Without AI bar - slow, red-tinted */}
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 h-5 overflow-hidden rounded-full bg-slate-800/80 border border-red-500/30">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-red-600/60 via-red-500/40 to-red-600/60 ${
                        isActive ? "animate-bar-fill" : ""
                      }`}
                      style={
                        isActive
                          ? {
                              animationDelay: `${0.1 + idx * 0.15}s`,
                              animationFillMode: "forwards",
                              animationDuration: "1.2s"
                            }
                          : { width: `${(metric.withoutAI / 10) * 100}%` }
                      }
                    />
                  </div>
                  <div className="flex items-center gap-1 min-w-[80px] justify-end">
                    <span className="text-[14px] font-bold text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                      {metric.withoutAI}
                    </span>
                    <span className="text-[11px] text-red-300/80">
                      {metric.unit === "%" ? "%" : metric.unit}
                    </span>
                  </div>
                </div>

                {/* With AI bar - fast, blue/green */}
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 h-5 overflow-hidden rounded-full bg-slate-800/80 border border-accent/50 shadow-accent-glow">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-accent/90 via-cyan-400/80 to-emerald-400/70 ${
                        isActive ? "animate-bar-fill" : ""
                      }`}
                      style={
                        isActive
                          ? {
                              animationDelay: `${0.2 + idx * 0.15}s`,
                              animationFillMode: "forwards",
                              animationDuration: "0.6s"
                            }
                          : { width: `${(metric.withAI / 10) * 100}%` }
                      }
                    />
                  </div>
                  <div className="flex items-center gap-1 min-w-[80px] justify-end">
                    <span className="text-[14px] font-bold text-accent drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                      {metric.withAI}
                    </span>
                    <span className="text-[11px] text-cyan-300/80">
                      {metric.unit === "%" ? "%" : metric.unit}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-[10px] mt-1">
                  <span className="text-red-400 font-medium">Without AI</span>
                  <span className="text-accent font-semibold">With AI</span>
                </div>
              </div>
            ))}
          </div>

          {/* Warning message */}
          <div className={`mt-6 rounded-2xl border border-red-500/50 bg-red-950/40 p-4 backdrop-blur-sm ${
            isActive ? "animate-fade-up" : ""
          }`} style={isActive ? { animationDelay: "0.8s" } : undefined}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-red-500/30 flex items-center justify-center">
                <span className="text-xs text-red-400">⚠</span>
              </div>
              <div className="text-[11px] text-red-200 leading-relaxed">
                <span className="font-semibold">The gap widens over time.</span> Analysts using AI build compounding advantages: faster work → more client exposure → better performance reviews → faster promotions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-400">
        Visual comparison: side-by-side metrics showing how AI users dramatically outperform those who don't adopt it.
      </p>
    </div>
  );
};




