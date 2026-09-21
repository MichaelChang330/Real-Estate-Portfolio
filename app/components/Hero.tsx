import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-16"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex-shrink-0">
          <Image
            src="/headshot.jpg"
            alt="Michael Chang"
            width={280}
            height={360}
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-6">
            Real Estate · Capital Markets · Cornell MRE &#39;26 Graduate
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight text-gray-900 leading-none mb-8">
            Michael
            <br />
            <span className="text-gray-400">Chang</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
            Real estate professional with $450M+ in transactions across capital
            markets, advisory, and leasing. Bridging institutional deal-making
            with AI-driven analysis.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-block px-6 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/michael-hh-chang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium tracking-wide hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium tracking-wide hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-16 bg-gray-300 mx-auto" />
      </div>
    </section>
  );
}
