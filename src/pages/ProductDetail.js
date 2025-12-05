// src/pages/ProductDetail.js
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { ArrowLeft, Download, CheckCircle } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <p className="text-3xl text-[var(--muted-foreground)] mb-6">Guide Not Found</p>
          <Button onClick={() => navigate('/all-products')}>
            Back to All Guides
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] pt-20 pb-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 font-medium mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Guides
        </button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)]">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[var(--primary)] text-white px-6 py-3 rounded-xl shadow-xl font-bold text-lg">
              {product.price}
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[var(--foreground)] leading-tight mb-4">
                {product.title}
              </h1>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What You'll Get</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--primary)] mt-0.5" />
                  50+ pages of actionable steps
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--primary)] mt-0.5" />
                  Real Kenyan examples & contacts
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--primary)] mt-0.5" />
                  Budget templates & profit calculators
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--primary)] mt-0.5" />
                  Lifetime updates
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-3 rounded-xl font-semibold">
                <Download className="w-5 h-5" />
                Instant Download
              </span>
              <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-3 rounded-xl font-semibold">
                <CheckCircle className="w-5 h-5" />
                30-Day Money Back
              </span>
            </div>

            {/* FIXED: Now redirects to checkout page */}
            <Button 
              onClick={() => navigate(`/checkout/${product.id}`)}
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-extrabold text-xl md:text-2xl py-8 rounded-2xl shadow-2xl hover:shadow-[var(--primary)]/30 transition-all duration-300 flex items-center justify-center gap-4 group"
            >
              <span>Get Instant Access Now</span>
              <Download className="w-7 h-7 group-hover:translate-y-1 transition-transform" />
            </Button>

            <p className="text-center text-lg text-[var(--muted-foreground)] font-medium">
              Pay safely with M-Pesa • Download immediately after payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;