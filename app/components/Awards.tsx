"use client";

import { useState, useEffect } from "react";

type Award = {
  type: "Competition" | "Leadership";
  title: string;
  result: string;
  role: string;
  period: string;
  bullets: string[];
};

const awards: Award[] = [
  {
    type: "Competition",
    title: "MIT International Real Estate Case Competition",
    result: "2nd Place",
    role: "Chief of Finance",
    period: "March 2026",
    bullets: [
      "Analyzed the case within 72 hours and delivered an adaptive reuse proposal for the FBI headquarters.",
      "Responsible for the financial analysis for the redevelopment project and optimized the return for the JV.",
      "Put together a dynamic financial model and underwrote a mixed-use deal including office, hotel, and retail.",
    ],
  },
  {
    type: "Competition",
    title: "UT Austin National Real Estate Competition",
    result: "3rd Place",
    role: "Chief of Finance",
    period: "November 2025",
    bullets: [
      "Analyzed the case within 72 hours and delivered a presentation on strategic portfolio diversification.",
      "Responsible for the financial analysis for 3 real estate funds with the application of modern portfolio theory.",
      "Conducted risk-return and correlation-coefficient analysis to develop recommendations for HNW clients.",
    ],
  },
  {
    type: "Competition",
    title: "Cornell Real Estate Financial Modeling Challenge",
    result: "2nd Fastest in 16-Year History",
    role: "Competitor",
    period: "2025",
    bullets: [
      "Ranked 2nd fastest completion in the challenge's 16-year history on the Excel speed modeling exam.",
    ],
  },
];

const skills = [
  {
    category: "Technical",
    items: [
      "AI in Real Estate",
      "Claude Code",
      "Data Scraping",
      "Data Visualization",
      "Model Optimization",
      "Financial Modeling",
      "Argus",
      "MS Office",
    ],
  },
  {
    category: "Real Estate",
    items: [
      "Capital Markets",
      "Office Advisory",
      "Debt & Equity",
      "Acquisitions",
      "REPE",
      "REIT",
      "Development",
      "Affordable Housing",
    ],
  },
  {
    category: "Languages",
    items: [
      "English (Native)",
      "Mandarin (Native)",
      "Cantonese (Basic)",
      "Spanish (Beginner)",
    ],
  },
];

function Modal({ award, onClose }: { award: Award; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white max-w-lg w-full p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-300 hover:text-gray-700 transition-colors text-xl leading-none"
        >
          ×
        </button>

        <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-300 mb-4 block">
          {award.type}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">
          {award.title}
        </h3>
        <p className="text-sm font-medium text-gray-400 mb-1">{award.result}</p>
        <p className="text-xs text-gray-400 mb-6">
          {award.role} · {award.period}
        </p>

        <div className="border-t border-gray-100 pt-6">
          <ul className="space-y-3">
            {award.bullets.map((b, i) => (
              <li key={i} className="text-sm text-gray-500 flex gap-3">
                <span className="text-gray-300 mt-1 flex-shrink-0">—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Awards() {
  const [selected, setSelected] = useState<Award | null>(null);

  return (
    <section id="awards" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">

        {/* Awards */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
            Awards &amp; Leadership
          </p>
          <h2 className="text-4xl font-light text-gray-900 mb-2 leading-tight">
            Recognition
          </h2>
          <p className="text-xs text-gray-400 mb-8">Click any entry for details</p>

          <div>
            {awards.map((a, i) => (
              <button
                key={i}
                onClick={() => setSelected(a)}
                className="w-full flex items-start gap-6 py-5 border-t border-gray-100 text-left group hover:bg-gray-50 transition-colors -mx-3 px-3"
              >
                <span className="text-[10px] font-medium tracking-wider uppercase text-gray-300 w-20 flex-shrink-0 mt-0.5">
                  {a.type}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 leading-snug group-hover:text-gray-900 transition-colors">
                    {a.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{a.result}</p>
                </div>
                <span className="text-gray-300 text-sm mt-0.5 flex-shrink-0 group-hover:text-gray-500 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
            Skills
          </p>
          <h2 className="text-4xl font-light text-gray-900 mb-10 leading-tight">
            Expertise
          </h2>
          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-300 mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && <Modal award={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
