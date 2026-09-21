export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-900 text-white">
      <div className="px-6 max-w-5xl mx-auto text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-6">
          Contact
        </p>
        <h2 className="text-5xl sm:text-6xl font-light mb-6 leading-tight">
          Let&apos;s connect.
        </h2>
        <p className="text-gray-400 mb-12 max-w-md mx-auto text-base leading-relaxed">
          Open to conversations about real estate full-time opportunities.
        </p>

        <a
          href="mailto:hc2265@cornell.edu"
          className="inline-block px-8 py-4 border border-white text-white text-sm font-medium tracking-wider hover:bg-white hover:text-gray-900 transition-colors mb-16"
        >
          hc2265@cornell.edu
        </a>

        <div className="flex justify-center gap-8 text-sm">
          <a
            href="https://www.linkedin.com/in/michael-hh-chang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hc2265@cornell.edu"
            className="text-gray-500 hover:text-white transition-colors tracking-wide"
          >
            Email
          </a>
          <a
            href="tel:+16073711464"
            className="text-gray-500 hover:text-white transition-colors tracking-wide"
          >
            (607) 371-1464
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Michael Chang · Built with Next.js
          </p>
        </div>
      </div>
    </section>
  );
}
