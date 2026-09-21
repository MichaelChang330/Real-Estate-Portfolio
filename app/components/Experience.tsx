type Entry = {
  org: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

const education: Entry[] = [
  {
    org: "Cornell University, SC Johnson College of Business",
    role: "Master's in Real Estate, Baker Program (STEM) · GPA 3.8",
    location: "",
    period: "Aug 2024 – May 2026 · Graduated",
    bullets: [
      "Courses: Financial Modeling, REPE, Debt Fund, REIT, Development, Affordable Housing, Entrepreneurship.",
      "Teaching Assistant for Real Estate Financial Modeling and Principals of Real Estate.",
      "Vice President, Cornell Associate Real Estate Council.",
      "Career Assistant, Cornell University.",
      "Organizer, Cornell Real Estate Study Trip to London.",
    ],
  },
  {
    org: "Chinese University of Hong Kong (CUHK, QS #32)",
    role: "Bachelor's in Hospitality and Real Estate",
    location: "Hong Kong",
    period: "Sep 2017 – Dec 2021",
    bullets: [
      "Courses: Real Estate Valuation & Investment, Real Estate Law, Project Management, Hospitality Real Estate.",
      "Captain, CUTSA Men's Basketball Team.",
    ],
  },
];

const work: Entry[] = [
  {
    org: "Jones Lang LaSalle (JLL)",
    role: "Summer Rotational Analyst, Capital Markets",
    location: "",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Rotated across 4 teams covering debt, equity, and acquisitions in office, multifamily, hotel, and data center.",
      "Underwrote 50+ financing, acquisition, and development deals with cumulative transactions over $200M.",
      "Solely completed a construction financing deal — from BOV and OM through quote negotiation and deal pitching.",
    ],
  },
  {
    org: "Knight Frank",
    role: "Senior Analyst, Office Strategy and Solutions",
    location: "Taipei, Taiwan",
    period: "Aug 2022 – Apr 2024",
    bullets: [
      "Top-performing producer specializing in the office sector with cumulative transactions over $150M.",
      "Provided strategic consultancy to Fortune 500 clients on headquarters relocation across APAC markets.",
      "Led a team conducting quarterly office market research and publishing reports across the APAC region.",
    ],
  },
  {
    org: "Fortune Travel Agency",
    role: "Business Representative",
    location: "Taiwan",
    period: "Apr 2022 – Present",
    bullets: [
      "Supported family business operations across international markets through client relationships and BD.",
      "Advised on business strategy and operating direction, identifying opportunities to streamline workflows and optimize overall company efficiency.",
      "Curated bespoke luxury itineraries for HNW clients, coordinating premium hotels and exclusive venues.",
    ],
  },
  {
    org: "Cushman & Wakefield",
    role: "Off-Cycle Intern, Occupier Service",
    location: "Taipei, Taiwan",
    period: "Sep 2020 – Aug 2021",
    bullets: [
      "Assisted in advisory and leasing for Fortune 500 clients across office, industrial, and retail sectors.",
      "Facilitated BD, DD, BOV, and OM for acquisition deals with cumulative transactions over $100M.",
      "Led the intern class in market research and database maintenance.",
    ],
  },
  {
    org: "InterContinental Hotels Group (IHG)",
    role: "Summer Intern, Food & Beverage",
    location: "Hong Kong",
    period: "May 2018 – Aug 2018",
    bullets: [
      "Provided luxury service at a 5-star flagship hotel, building cross-cultural service skills.",
      "Gained hands-on experience in F&B operations and management, learning the full details of hospitality service.",
      "Top-rated server among intern class, earning the most direct thank-you notes from guests.",
    ],
  },
];

function EntryRow({ entry }: { entry: Entry }) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-gray-100">
      <div>
        <p className="text-xs text-gray-400 mb-1">{entry.period}</p>
        {entry.location && (
          <p className="text-xs text-gray-400">{entry.location}</p>
        )}
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-0.5">
          {entry.org}
        </h3>
        <p className="text-sm text-gray-500 mb-4 italic">{entry.role}</p>
        <ul className="space-y-2">
          {entry.bullets.map((b, j) => (
            <li key={j} className="text-sm text-gray-500 flex gap-3">
              <span className="text-gray-300 mt-1 flex-shrink-0">—</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto">
      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
        Background
      </p>
      <h2 className="text-4xl font-light text-gray-900 mb-16 leading-tight">
        Experience &amp; Education
      </h2>

      {/* Education */}
      <div className="mb-20">
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-300 mb-2">
          Education
        </p>
        {education.map((entry, i) => (
          <EntryRow key={i} entry={entry} />
        ))}
      </div>

      {/* Work Experience */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-300 mb-2">
          Work Experience
        </p>
        {work.map((entry, i) => (
          <EntryRow key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
}
