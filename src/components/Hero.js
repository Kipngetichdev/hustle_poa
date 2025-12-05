// src/components/Hero.js
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom"; // ← ADD THIS LINE
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate(); // ← NOW DEFINED

  const scrollToCategories = () => {
    const target = document.querySelector("#categories");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight">
              Because kila hustle inahitaji plan.
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)]">
              Smart, practical PDF guides to help you plan, start, and grow your hustle — the Kenyan way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Scroll to Featured */}
              <Button
                size="lg"
                onClick={scrollToCategories}
                className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold text-lg px-8 rounded-lg shadow-lg"
              >
                See Featured PDFs
              </Button>

              {/* Navigate to All Products */}
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/all-products")}
                className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-semibold px-8 py-5 rounded-lg transition-all"
              >
                View All 20 Guides
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Person planning their hustle with digital guides"
              className="rounded-2xl shadow-2xl w-full h-auto border border-[var(--border)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;