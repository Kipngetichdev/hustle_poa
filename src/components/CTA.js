import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--primary)] text-[var(--primary-foreground)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to plan your next move?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Download a guide today and start your journey to success.
        </p>
        <Button 
          size="lg" 
          className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--accent-foreground)] font-semibold text-lg px-12"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CTA;