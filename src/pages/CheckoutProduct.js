// src/pages/CheckoutProduct.js
import { Button } from "../components/ui/button";
import { ArrowLeft, CheckCircle, Lock, Phone, User } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const CheckoutProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <p className="text-2xl text-[var(--muted-foreground)]">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 pb-32">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 font-medium mb-10 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Guide
        </button>

        {/* Main Checkout Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header – Product Info */}
          <div className="bg-gradient-to-r from-[var(--primary)] to-emerald-600 p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-black mb-4">Complete Your Purchase</h1>
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-24 h-32 object-cover rounded-xl shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className="text-4xl font-black mt-2">{product.price}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12 space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full font-bold text-lg">
                <Lock className="w-6 h-6" />
                Secure M-Pesa Payment
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-lg font-semibold text-[var(--foreground)] mb-3">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none text-lg transition-all"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-lg font-semibold text-[var(--foreground)] mb-3">
                M-Pesa Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <div className="flex">
                  <span className="inline-flex items-center px-6 bg-gray-100 border-2 border-gray-200 border-r-0 rounded-l-2xl text-lg font-medium">
                    +254
                  </span>
                  <input
                    type="tel"
                    placeholder="712345678"
                    className="w-full pl-6 pr-6 py-5 rounded-r-2xl border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none text-lg transition-all"
                  />
                </div>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mt-3">
                You’ll receive an M-Pesa STK push instantly
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 py-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">Instant Download</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2 text-purple-700">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">Lifetime Access</span>
              </div>
            </div>

            {/* Smaller, Mobile-First, Thumb-Friendly Pay Button */}
            <Button 
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold text-lg md:text-xl py-5 md:py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Pay {product.price} with M-Pesa</span>
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold">
                Safaricom
              </span>
            </Button>

            <p className="text-center text-sm text-gray-500 mt-6">
              After payment, your PDF will download automatically • No account needed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;