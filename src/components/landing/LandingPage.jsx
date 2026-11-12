
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProductPreview from "./ProductPreview";
import PlatformHighlights from "./PlatformHighlights";
import ProblemSolutionSection from "./ProblemSolutionSection";
import FeaturesSection from "./FeaturesSection";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#08090d] font-sans text-white selection:bg-violet-600 selection:text-white">
      <Navbar />

      <main>
        <HeroSection />

        <ProductPreview />

        <PlatformHighlights />

        <ProblemSolutionSection />

        <FeaturesSection />

        <FAQSection />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

