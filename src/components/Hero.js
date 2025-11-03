// src/components/Hero.js
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const scrollToCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const target = document.querySelector("#categories");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
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
              {/* Featured PDFs → scroll to #categories */}
              <Button
                size="lg"
                onClick={scrollToCategories}
                className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-semibold text-lg px-8"
              >
                See Featured PDFs
              </Button>

              {/* Search Top PDFs – with icon after text */}
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] font-semibold text-lg px-8 flex items-center gap-2"
              >
                Search Top PDFs
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Person planning their hustle with digital guides"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;