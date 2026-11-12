
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WarpSpeed from "./WarpSpeed";

const faqs = [
  {
    q: "Do my teammates need an account to join a session?",
    a: "That depends on how guest access is implemented in the application. Currently, you can connect this button to your existing authentication and editor flow.",
  },
  {
    q: "How is CollabEditor different from typical screen sharing?",
    a: "CollabEditor is designed around a collaborative coding workspace, with the goal of keeping code and communication together.",
  },
  {
    q: "Can we run tests and inspect console output directly?",
    a: "Code execution depends on the backend and runtime integrations configured in your project. The landing-page preview itself is only a visual mockup.",
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="ai-tutor"
      className="relative isolate overflow-hidden bg-[#02030a] px-4 py-16 sm:px-6 md:px-12 md:py-24"
    >
      {/* Warp Speed Background */}
      <WarpSpeed />

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_0%_100%,rgba(97,54,171,0.20)_0%,rgba(48,32,94,0.10)_30%,transparent_65%)]"
      />

      {/* FAQ Content */}
      <div className="relative z-10 mx-auto max-w-3xl space-y-10">

        {/* Heading */}
        <div className="space-y-3 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#a78bfa] sm:text-sm">
            Clarity First
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-sm leading-7 text-[#b9adbf] sm:text-base">
            Have questions about the CollabEditor workspace?
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-[#403448] bg-gradient-to-br from-[#191526]/90 to-[#100e18]/90 backdrop-blur-sm transition-all duration-300 hover:border-[#735b85]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold leading-6 text-[#eee6f5] transition hover:text-white sm:p-6 sm:text-base"
                >
                  <span>{faq.q}</span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#b9adbf] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-violet-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#403448] px-5 pb-5 pt-4 text-sm leading-7 text-[#c2b6ca] sm:px-6 sm:pb-6 sm:text-base">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
