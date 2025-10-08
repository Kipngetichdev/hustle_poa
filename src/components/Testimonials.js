import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Wanjiku M.",
    role: "Small Business Owner",
    quote: "Nilipata plan yangu hapa, and now my business is running well! These guides are exactly what every hustler needs.",
  },
  {
    name: "Brian K.",
    role: "Entrepreneur",
    quote: "The exit plan guide helped me leave my job confidently. Now I'm running two successful businesses. Worth every shilling!",
  },
  {
    name: "Faith N.",
    role: "Side Hustler",
    quote: "Simple, practical, and affordable. These PDFs gave me the roadmap I needed to start my side hustle properly.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--secondary)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            What Hustlers Are Saying
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Real stories from real people building their success.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-l-4 border-l-[var(--accent)] hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-[var(--accent)]" />
                <p className="text-[var(--foreground)] italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;