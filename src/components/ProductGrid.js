// src/components/ProductGrid.js
import { useMemo } from "react";
import { useNavigate } from "react-router-dom"; // ← ADD THIS
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
// Remove unused Eye import
import { products } from "../data/products";

/* ---------- Pure JavaScript helper ---------- */
const getRandomProducts = (allProducts, count) => {
  const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const ProductGrid = () => {
  const navigate = useNavigate(); // ← NOW DEFINED

  const randomProducts = useMemo(() => {
    const isLargeScreen = window.innerWidth >= 1024;
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
          <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Fresh picks to power your hustle — updated every visit!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {randomProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-[var(--border)] flex flex-col group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[var(--secondary)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-4 md:p-6 space-y-2 flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] line-clamp-2 leading-tight">
                  {product.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--muted-foreground)] line-clamp-3 leading-snug">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm md:text-lg font-bold text-[var(--accent)]">
                    {product.price}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)] bg-[var(--secondary)] px-2 py-1 rounded whitespace-nowrap">
                    Instant Download
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-4 md:p-6 pt-0 mt-auto">
                <Button 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold text-sm md:text-lg py-4 md:py-6 rounded-[4px] flex items-center justify-center gap-2.5 group"
                >
                  <span>View Details</span>
                  {/* Optional: Add Eye back if you want icon */}
                  {/* <Eye className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" /> */}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => navigate("/all-products")}
            size="lg"
            variant="outline"
            className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-semibold px-8 py-5 rounded-lg"
          >
            View All 20 Guides
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;