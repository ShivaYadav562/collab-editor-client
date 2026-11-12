
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#403448] bg-[#08090d] px-5 py-12 text-sm text-[#b9adbf] sm:px-8 md:px-10 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5 md:gap-x-12">

        {/* Brand */}
        <div className="col-span-2 space-y-5 md:col-span-2">
          <a
            href="/"
            className="inline-flex items-center gap-3 text-xl font-extrabold text-white transition hover:opacity-80 sm:text-2xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-900/30">
              <Code2 className="h-5 w-5 text-white" />
            </span>

            <span>
              Collab<span className="text-indigo-400">Editor</span>
            </span>
          </a>

          <p className="max-w-md text-sm leading-7 text-[#b9adbf] sm:text-base">
            A collaborative coding workspace designed to bring developers
            together for coding, learning, and problem-solving.
          </p>

          <p className="pt-2 text-xs leading-6 text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} CollabEditor. Built for collaborative learning.
          </p>
        </div>

        {/* Platform */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
            Platform
          </h3>

          <ul className="space-y-4 text-sm sm:text-base">
            <li>
              <a href="#overview" className="transition-colors hover:text-violet-300">
                Overview
              </a>
            </li>

            <li>
              <a href="#rooms" className="transition-colors hover:text-violet-300">
                Collaboration
              </a>
            </li>

            <li>
              <a href="/editor" className="transition-colors hover:text-violet-300">
                Code Editor
              </a>
            </li>
          </ul>
        </div>

        {/* Learning */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
            Learning
          </h3>

          <ul className="space-y-4 text-sm sm:text-base">
            <li>
              <a href="/study-materials" className="transition-colors hover:text-violet-300">
                Study Materials
              </a>
            </li>

            <li>
              <a href="#ai-tutor" className="transition-colors hover:text-violet-300">
                AI Tutor
              </a>
            </li>

            <li>
              <a href="#resources" className="transition-colors hover:text-violet-300">
                Features
              </a>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
            Account
          </h3>

          <ul className="space-y-4 text-sm sm:text-base">
            <li>
              <a href="/login" className="transition-colors hover:text-violet-300">
                Sign In
              </a>
            </li>

            <li>
              <a href="/signup" className="transition-colors hover:text-violet-300">
                Create Account
              </a>
            </li>

            <li>
              <a href="#pricing" className="transition-colors hover:text-violet-300">
                Get Started
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
