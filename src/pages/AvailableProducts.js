// src/pages/AvailableProducts.js
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { ShoppingCart } from "lucide-react"; // ← Add this import
import { products } from "../data/products";

const AvailableProducts = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px- 4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-3">
            All Hustle Guides
          </h1>
          <p className="text-base md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            20 premium PDF guides to start, grow, and scale your Kenyan hustle — from M-Pesa to Poultry, Mitumba to Mobile Apps.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-[var(--border)] flex flex-col"
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
              <CardContent className="p-4 md:p-6 space-y-2 flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] line-clamp-2 leading-tight">
                  {product.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--muted-foreground)] line-clamp-3 leading-snug">
                  {product.description}
                </p>
                <div className="flex items-center justify-between flex-wrap mt-3">
                  <span className="text-sm md:text-lg font-bold text-[var(--accent)]">
                    {product.price}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)] bg-[var(--secondary)] px-2 py-1 rounded whitespace-nowrap">
                    Instant Download
                  </span>
                </div>
              </CardContent>

              {/* Footer – Buy Now + Cart Icon */}
              <CardFooter className="p-4 md:p-6 pt-0 mt-auto">
                <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold text-sm md:text-lg py-4 md:py-6 rounded-[4px] flex items-center justify-center gap-2">
                  <span>Buy Now</span>
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-medium text-sm md:text-base px-8"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AvailableProducts;