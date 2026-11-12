
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Platform Overview", href: "#overview" },
    { name: "Real-Time Rooms", href: "#rooms" },
    { name: "AI Tutor", href: "#ai-tutor" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#060e20]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 py-3 md:px-12">

        {/* LOGO */}
        <a href="/" className="group flex items-center gap-2 font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 shadow-lg shadow-indigo-500/25 transition group-hover:scale-105">
            <Code2 className="h-5 w-5 text-white" />
          </span>

          <span className="text-lg text-white">
            Collab<span className="text-indigo-400">Editor</span>
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-5 text-sm font-semibold text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* AUTH BUTTONS */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/login"
            className="px-3 py-2 text-base font-semibold text-slate-300 transition hover:text-white"
          >
            Sign In
          </a>

          <a
            href="/signup"
            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-base font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-500 active:scale-95"
          >
            Get Started Free
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white sm:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#060e20] px-5 py-5 sm:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <div className="flex gap-4 border-t border-white/10 pt-4">
              <a href="/login" className="text-sm font-semibold text-slate-300">
                Sign In
              </a>
              <a
                href="/signup"
                className="text-sm font-semibold text-indigo-400"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
