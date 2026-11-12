
export default function FinalCTA() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#08090d] px-4 py-16 sm:px-6 md:px-12 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#493565] bg-gradient-to-br from-[#211638] via-[#141426] to-[#0d1120] p-7 shadow-2xl shadow-purple-950/20 sm:p-10 md:p-14">

        {/* Background Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-10">

          {/* CTA Content */}
          <div className="space-y-5 text-center md:text-left">
            <span className="inline-block rounded-full border border-violet-400/20 bg-violet-500/15 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-violet-300 sm:text-xs">
              Instant Pairing • Collaborative Learning
            </span>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to elevate your collaborative coding?
            </h2>

            <p className="max-w-xl text-sm leading-7 text-[#c2b6ca] sm:text-base">
              Start building, debugging, and learning with your peers. Bring
              your code and collaboration into one focused workspace.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="/signup"
              className="rounded-xl bg-indigo-600 px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-indigo-900/30 transition hover:-translate-y-1 hover:bg-indigo-500 sm:text-base"
            >
              Create Free Account
            </a>

            <a
              href="/editor"
              className="rounded-xl border border-[#493e60] bg-[#141426]/70 px-7 py-4 text-center text-sm font-semibold text-[#e4dced] transition hover:-translate-y-1 hover:border-violet-400/60 hover:bg-[#211638] sm:text-base"
            >
              Open Workspace
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
