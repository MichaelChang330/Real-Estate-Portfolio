const dhlSteps = [
  {
    label: "Situation",
    color: "bg-gray-100 text-gray-500",
    content:
      "DHL Global Forwarding operated two separate ~17,800 sqft offices across the city, creating operational fragmentation for their APAC regional hub. Leadership wanted to consolidate both locations into a single unified headquarters.",
  },
  {
    label: "Task",
    color: "bg-gray-100 text-gray-500",
    content:
      "Lead a full-cycle HQ consolidation project — from initial market research through final transaction close — coordinating across DHL's APAC leadership and their local Taipei teams.",
  },
  {
    label: "Action",
    color: "bg-gray-900 text-white",
    content:
      "Screened 100+ properties and conducted 10+ site visits with DHL stakeholders. Midway through the search, the APAC office flagged a budget constraint that brought the project to a halt. I proposed selling both existing offices and using the proceeds to self-fund the relocation — a structure that unlocked the deal and became the key to making it work. Managed multilateral negotiations with landlords, buyers, and the APAC office simultaneously to bring the transaction to close.",
  },
  {
    label: "Result",
    color: "bg-gray-100 text-gray-500",
    content:
      "Successfully consolidated DHL's presence into a single ~35,600 sqft Grade A headquarters — doubling the usable footprint, eliminating operational silos, and structuring the deal so proceeds from the two office sales funded the entire relocation.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="px-6 max-w-5xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
          Selected Work
        </p>
        <h2 className="text-4xl font-light text-gray-900 mb-16 leading-tight">
          Project Spotlight
        </h2>

        {/* DHL Card */}
        <div className="bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Knight Frank · 2022–2024
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                DHL Global Forwarding
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Taipei HQ Consolidation · Office Advisory & Capital Markets
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Advisory", "Leasing", "Capital Markets", "APAC"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-10 border-b border-gray-100">
            {[
              { value: "100+", label: "Properties Screened" },
              { value: "10+", label: "Site Visits" },
              { value: "~35,600 sqft", label: "New HQ Size" },
              { value: "Self-Funded", label: "Relocation Structure" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-light text-gray-900 mb-1">
                  {s.value}
                </div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* STAR Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            {dhlSteps.map((step) => (
              <div key={step.label} className={`p-6 ${step.color}`}>
                <p className="text-[10px] font-semibold tracking-widest uppercase mb-3 opacity-60">
                  {step.label}
                </p>
                <p className="text-sm leading-relaxed">{step.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tulaberry Plaza */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Principles of Real Estate · Sep 2024
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                Tulaberry Plaza
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Retail Leasing Recommendation · Orlando, FL
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Leasing", "NER", "Financial Modeling", "Retail"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Advised the owner of a 59,100 sqft retail shopping center in Orlando facing a <strong className="text-gray-700">33% vacancy rate</strong> after anchor tenant bankruptcy. Built a full <strong className="text-gray-700">NER calculator</strong> across all lease terms, scored every anchor and inline candidate on a <strong className="text-gray-700">50/50 quantitative and qualitative framework</strong>, and — crucially — proposed <strong className="text-gray-700">merging four adjacent vacant units</strong> into one large consolidated space to unlock the anchor tenant that produced the strongest overall co-tenancy synergy. This reconfiguration was the key insight that improved <strong className="text-gray-700">WAULT from 4.6 to 8.9 years</strong>.
          </p>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {[
                "Diagnose Portfolio",
                "Model Economics",
                "Score Candidates",
                "Reconfigure Space",
              ].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {title}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="/tulaberry-group6.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <span>View Full Submission</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Angus Cartwright */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Principles of Real Estate · Oct 2024
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                Angus Cartwright III
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Investment Advisory · Multi-Property Proforma Analysis
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Proforma", "IRR / NPV", "Tax Analysis", "Client Advisory"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Advised two investors — a retiree and an active business owner — on which of four properties best matched their financial profile. Built <strong className="text-gray-700">full 10-year after-tax proforma models</strong> for each property, calculated <strong className="text-gray-700">CoC, IRR, NPV, LTV, and DCR</strong>, and designed a <strong className="text-gray-700">risk-return scoring matrix</strong> to rank every property across both short- and long-term hold strategies. Recommended <strong className="text-gray-700">Alison Green for John</strong> (highest CoC at 12.06%, lowest risk) and <strong className="text-gray-700">Ivy Terrace for Judy</strong> (IRR 15.13%, superior risk-adjusted return over Fowler Building).
          </p>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {[
                "Profile Investors",
                "Model Properties",
                "Rank Risk & Return",
                "Match Client to Asset",
              ].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {title}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="/angus-cartwright-group10.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <span>View Full Submission</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* London Office Market */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Principles of Real Estate · Nov 2024
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                London Office Market Analysis
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Market Study · Development Advisory · West End, City &amp; Southbank, Docklands
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Market Analysis", "Supply & Demand", "Office", "Development"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Advised the board of Hiccup Real Estate Ltd on whether to initiate new office development across their London land bank. Conducted a <strong className="text-gray-700">full macro and demographic analysis</strong> of the UK and London market, then deep-dived into <strong className="text-gray-700">supply and demand dynamics</strong> across three submarkets — take-up, vacancy, active requirements, prime rents, and construction pipeline. Scored all three submarkets across <strong className="text-gray-700">7 metrics</strong> and recommended <strong className="text-gray-700">West End Class A development</strong> — lowest Class A vacancy (5.6%), highest prime rent (£150/sqft, +11.1% YoY), and 2.32M sqft in active requirements signaling near-term absorption.
          </p>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {[
                "Map the Economy",
                "Profile the Market",
                "Analyze Supply & Demand",
                "Rank & Recommend",
              ].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {title}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex gap-3">
            <a
              href="/london-office-market-ppt.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <span>View Presentation</span>
              <span>↗</span>
            </a>
            <a
              href="/london-office-market-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <span>View Report</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Chrysler Building Reuse */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Creating the Built Environment · Oct 2024
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                Chrysler Building Reuse
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Adaptive Reuse Proposal · Midtown Manhattan, NYC
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Adaptive Reuse", "Mixed-Use", "Hospitality", "Residential"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Proposed a full adaptive reuse of the iconic Chrysler Building. Started by analyzing Midtown&apos;s affluent, young professional demographic (50% earning $100K+) to determine highest-value use. Identified two key structural constraints — <strong className="text-gray-700">17–18.5ft column spans</strong> and a <strong className="text-gray-700">95ft exterior wall-to-core distance</strong> — and solved the deep floor plate problem by introducing a <strong className="text-gray-700">central atrium with skylights</strong>. Rejected office use due to limited natural light, and instead programmed the building as <strong className="text-gray-700">luxury residential + 5-star hotel</strong> from base to crown, with curated luxury retail at street level (Gucci, Ferrari, Taschen) and exclusive penthouses at the top.
          </p>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {[
                "Analyze Demographics",
                "Solve Constraints",
                "Design Program",
                "Draw Floor Plans",
              ].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {title}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="/chrysler-building-reuse.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <span>View Full Submission</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Public Storage PSA */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Management Communication · Oct 2024
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                Public Storage (PSA) — Q2 2024 Analysis
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                REIT Competitor Research · Investor Relations
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["REIT Analysis", "Earnings Call", "NOI / FFO", "Investor Relations"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            As an analyst at Qthos REIT, prepared a competitor intelligence report on <strong className="text-gray-700">Public Storage (PSA)</strong> for the CEO, drawing from Q2 2024 earnings call, 10-Q, and 10-K filings. Key findings: below-market <strong className="text-gray-700">move-in rents fell -14.4% YoY</strong>, pressuring earnings while supporting occupancy; same-store occupancy <strong className="text-gray-700">rebounded +0.9pp QoQ to 93%</strong>, breaking a 3-quarter decline; PSA maintained a <strong className="text-gray-700">79% operating margin</strong> and closed a <strong className="text-gray-700">$2.2B acquisition of BREIT Simply Storage</strong> adding $52M NOI; and rising leverage — <strong className="text-gray-700">3.9x Net Debt/EBITDA</strong> with $1B+ in new debt — warranted monitoring. Delivered findings as both a written memo and an executive presentation.
          </p>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {[
                "Review Public Filings",
                "Identify Key Trends",
                "Build the Narrative",
                "Report & Present",
              ].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {title}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex gap-3">
            <a
              href="/psa-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <span>View Report</span>
              <span>↗</span>
            </a>
            <a
              href="/psa-presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <span>View Presentation</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Park Well */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Business of Entrepreneurship · Spring 2025
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                Park Well
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                PropTech Venture · Mixed-Use Truck Parking Network
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Entrepreneurship", "PropTech", "Development", "Business Planning"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Co-founded a PropTech venture to solve the commercial trucking industry&apos;s acute parking crisis — <strong className="text-gray-700">only 1 in 10 drivers have reliable parking access</strong>, costing the industry <strong className="text-gray-700">$120Bn annually</strong> in wasted fuel and lost productivity. As <strong className="text-gray-700">Head of Real Estate & Partnerships</strong>, led site identification, land acquisition strategy, and the JV structure — proposing a <strong className="text-gray-700">95/5 LP/GP model</strong> to convert low-cost vacant land into modular truck parking hubs with full amenities (fuel/EV, F&B, lodging, security). Conducted market sizing across a <strong className="text-gray-700">$150Bn+ TAM</strong>, built a 5-year pro forma projecting <strong className="text-gray-700">$138MM Year 5 revenue</strong> with a 3x GP ROC, and interviewed 20+ drivers and fleet operators to validate product-market fit.
          </p>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {[
                "Validate the Problem",
                "Design the Solution",
                "Model the Financials",
                "Pitch to Investors",
              ].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {title}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="/park-well-presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <span>View Full Presentation</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* G64 Development — Ithaca SouthWorks */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Real Estate Development · Dec 2024
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                G64 Development — Ithaca SouthWorks
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Mixed-Use Adaptive Reuse Proposal · Ithaca, NY
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Adaptive Reuse", "Mixed-Use", "Financial Modeling", "Development Planning"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Proposed an adaptive reuse of Building 34 on the <strong className="text-gray-700">95-acre former Chain Works industrial campus</strong> in Ithaca, NY — converting a vacant industrial shell into a <strong className="text-gray-700">180,000 sqft mixed-use destination</strong> anchored by retail, F&amp;B, indoor sports, and creative office. The key design move was demolishing the building&apos;s central section to create an <strong className="text-gray-700">outdoor retail promenade with 5 active frontages</strong>, eliminating the dead-mall problem and maximizing co-tenancy synergy. Programmed <strong className="text-gray-700">76,000 sqft of leasable space</strong> (76% retail, 13% sports, 11% office) targeting tenants including Pickle Rage, Nike, Lululemon, Cava, and Shake Shack. Built a full development budget of <strong className="text-gray-700">$24M</strong> and modeled a 7-year hold projecting a <strong className="text-gray-700">10.2% unlevered IRR</strong> and <strong className="text-gray-700">1.79x equity multiple</strong> on a 65/35 debt-to-equity structure.
          </p>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {[
                "Analyze Market",
                "Design Program",
                "Model Financials",
                "Plan Development",
              ].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {title}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Elate Hospitality — Mezzanine Loan IC */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Real Estate Debt Funds &amp; Distress Investing · Feb 2025
              </p>
              <h3 className="text-2xl font-light text-gray-900">
                Elate Hospitality — Mezzanine Loan
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Investment Committee Presentation · Boston, MA
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Mezzanine Debt", "Hospitality", "Credit Analysis", "Debt Structuring"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Acting as the origination team for Raven Real Estate Debt Fund LP, underwrote and structured a <strong className="text-gray-700">$28.9MM mezzanine loan</strong> to support the acquisition of the 245-key Elate Hotel in Boston&apos;s Kenmore/Fenway submarket — backed by durable demand drivers including Boston University, Fenway Park, and a diversified corporate client base. The hotel historically generated a <strong className="text-gray-700">$8.38M avg NOI (2017–2019)</strong> and consistently achieved <strong className="text-gray-700">110%+ RevPAR penetration</strong> versus its comp set. Structured the mezz at <strong className="text-gray-700">75% total LTC</strong> behind a $57.5MM senior facility — full-term interest-only, LIBOR + 960 bps — with a <strong className="text-gray-700">1.60x senior DSCR covenant</strong>, lockbox cash management, cash trap triggers, and cure/step-in rights. With 60% warehouse leverage, the investment projects a <strong className="text-gray-700">16.86% levered IRR</strong>, exceeding the fund&apos;s 11% target, backed by a <strong className="text-gray-700">$27.4MM equity cushion</strong> in the downside scenario.
          </p>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {[
                "Underwrite Property",
                "Structure the Debt",
                "Stress Test Scenarios",
                "Recommend to IC",
              ].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {title}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equinix (EQIX) Stock Pitch */}
        <div className="mt-8 bg-white border border-gray-100 p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Cornell · Investment in Real Estate Securities and Funds · April 2026
              </p>
              <h3 className="text-2xl font-light text-gray-900">Equinix (EQIX) — Stock Pitch</h3>
              <p className="text-sm text-gray-400 mt-1">Global Data Center &amp; Interconnection REIT · BUY Recommendation</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["REIT Valuation", "Stock Pitch", "Data Centers", "Capital Markets"].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 border border-gray-200 text-gray-400 tracking-wide">{tag}</span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Initiated coverage on Equinix (EQIX) with a <strong className="text-gray-700">BUY and 12-month price target of $1,200 (+8.2% upside)</strong> from $1,108.76 — supported by a blended NAV / P/AFFO valuation framework. EQIX operates <strong className="text-gray-700">270 IBX data centers across 75 markets</strong> with <strong className="text-gray-700">470,000+ cross-connects</strong>, the largest interconnection ecosystem globally with sub-2% churn. The thesis rests on three pillars: the interconnection network-effect moat (85% gross margin, impossible to replicate outside an existing campus), the AI infrastructure supercycle driving hyperscaler capex to $250B+ in 2025E, and P/FFO multiple reversion from 29.1x toward the 5-yr median of 26.1x. Bull-case NAV of <strong className="text-gray-700">$997/sh (4.5% cap / 12% NOI growth)</strong> and 40x P/AFFO on FY25 AFFO of $38.14 support a <strong className="text-gray-700">bull-case $1,526</strong>; blended PT anchored at $1,200. Key catalysts: xScale JV-3 announcement ($3–5B deal), Q2 2026 earnings beat, and power procurement wins unlocking ~$1B incremental revenue per GW.
          </p>
          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between gap-2">
              {["Analyze Company & Industry", "Build NAV Model", "Run Comps Analysis", "Recommend BUY"].map((title, i) => (
                <div key={title} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-[11px] font-semibold text-gray-900 mb-2 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">{title}</p>
                  </div>
                  {i < 3 && (
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-6 h-px bg-gray-300 relative">
                        <span className="absolute -right-1 -top-1.5 text-gray-300 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Placeholder */}
        <div className="mt-8">
          <div className="border border-dashed border-gray-200 p-8 flex items-center justify-center">
            <p className="text-sm text-gray-300 tracking-wide">
              AI in Real Estate — Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
