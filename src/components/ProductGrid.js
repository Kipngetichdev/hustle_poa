// src/components/ProductGrid.js
import { useMemo } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { products } from "../data/products";

/* ---------- Pure JavaScript helper ---------- */
const getRandomProducts = (allProducts, count) => {
  const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const ProductGrid = () => {
  // 4 items on small screens, 6 items on large screens
  const randomProducts = useMemo(() => {
    const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint
    const count = isLargeScreen ? 6 : 4;
    return getRandomProducts(products, count);
  }, []);

  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Featured PDFs
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Fresh picks to power your hustle — updated every visit!
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {randomProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-[var(--secondary)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <CardContent className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-[var(--foreground)] line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] line-clamp-2">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-[var(--accent)]">
                  {product.price}
                </p>
              </CardContent>

              {/* Footer */}
              <CardFooter className="p-5 pt-0">
                <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-semibold text-sm">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-semibold"
            onClick={() => window.location.href = "/all-products"}   // ← NEW
          >
            View All 20 Guides
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;