// src/pages/AvailableProducts.js
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { products } from "../data/products";

const AvailableProducts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            All Hustle Guides
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
            20 premium PDF guides to start, grow, and scale your Kenyan hustle — from M-Pesa to Poultry, Mitumba to Mobile Apps.
          </p>
        </div>

        {/* Full Grid – All 20 Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[var(--border)]"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-[var(--secondary)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[var(--foreground)] line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[var(--accent)]">
                    {product.price}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)] bg-[var(--secondary)] px-2 py-1 rounded">
                    Instant Download
                  </span>
                </div>
              </CardContent>

              {/* Footer */}
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold text-lg py-6">
                  Buy Now – {product.price}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Back to Top */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AvailableProducts;