const stats = [
  { value: "$450M+", label: "Cumulative Transactions" },
  { value: "100+", label: "Deals Underwritten" },
  { value: "3", label: "Global Firms" },
  { value: "3.8", label: "GPA at Cornell" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
            About
          </p>
          <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
            Where institutional
            <br />
            real estate meets
            <br />
            modern analysis.
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              I&apos;m a real estate professional with a background spanning capital
              markets, office advisory, and hospitality — across the U.S.,
              Hong Kong, and Taiwan.
            </p>
            <p>
              I hold a Master&apos;s in Real Estate (STEM) from Cornell&apos;s Baker
              Program (GPA: 3.8), where I built advanced financial modeling
              skills across REPE, debt, development, and investment analysis —
              and now apply AI-driven tools to bring sharper, data-backed
              insights to complex deals.
            </p>
            <p>
              At JLL, I rotated across debt, equity, and acquisitions —
              underwrote 50+ deals across office, multifamily, hotel, and data
              center — and solely completed a construction financing deal from
              BOV through close.
            </p>
            <p>
              At Knight Frank, I was a top-producing senior analyst in the
              office sector, advising Fortune 500 clients on strategic real
              estate decisions and closing over $150M in transactions across
              APAC markets.
            </p>
            <p>
              At Cushman &amp; Wakefield, I supported advisory and leasing across
              office, industrial, and retail — working with multinational clients
              and contributing to acquisition deals totaling over $100M.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-gray-200 pt-6">
                <div className="text-3xl font-light text-gray-900 mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-gray-400 tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Golf (15 HDC)",
                "Snowboarding",
                "Basketball",
                "Classical Music",
                "Saxophone",
                "Film Photography",
                "Architecture",
              ].map((interest) => (
                <span
                  key={interest}
                  className="text-xs px-3 py-1.5 border border-gray-200 text-gray-500"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
