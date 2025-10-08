import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import pdfBusiness from "../assets/pdf-business.jpg";
import pdfExitPlan from "../assets/pdf-exit-plan.jpg";
import pdfSideHustles from "../assets/pdf-side-hustles.jpg";

const products = [
  {
    id: 1,
    title: "How to Start a Business",
    description: "A complete guide to launching your business in Kenya with practical steps and templates.",
    price: "KES 299",
    image: pdfBusiness,
  },
  {
    id: 2,
    title: "How to Leave Your Job with an Exit Plan",
    description: "Strategic planning guide for a smooth career transition into entrepreneurship.",
    price: "KES 399",
    image: pdfExitPlan,
  },
  {
    id: 3,
    title: "Side Hustles That Work",
    description: "Proven side hustle ideas and strategies to grow your income in Kenya.",
    price: "KES 249",
    image: pdfSideHustles,
  },
];

const ProductGrid = () => {
  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Featured PDFs
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Get practical, actionable guides designed to help you succeed in your hustle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] overflow-hidden bg-[var(--secondary)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {product.title}
                </h3>
                <p className="text-[var(--muted-foreground)]">
                  {product.description}
                </p>
                <p className="text-2xl font-bold text-[var(--accent)]">
                  {product.price}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-semibold">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;