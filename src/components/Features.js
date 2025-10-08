import { BookOpen, Briefcase, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Simple, Actionable Guides",
    description: "Learn step-by-step with easy PDFs designed for real results.",
  },
  {
    icon: Briefcase,
    title: "Made for Kenyans",
    description: "Real examples, local insights, and strategies that work here.",
  },
  {
    icon: Zap,
    title: "Affordable & Instant Access",
    description: "Download anytime, anywhere. Start learning immediately.",
  },
  {
    icon: Globe,
    title: "Empower Your Hustle",
    description: "From small ideas to big moves. Your success starts here.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--secondary)]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-t-4 border-t-[var(--primary)] hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[var(--accent-foreground)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;