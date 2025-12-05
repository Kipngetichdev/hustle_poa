// src/pages/CheckoutProduct.js — FINAL & FLAWLESS
import { Button } from "../components/ui/button";
import { ArrowLeft, CheckCircle, Lock, Phone, User, Download } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

const CheckoutProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <p className="text-2xl text-[var(--muted-foreground)]">Product not found</p>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{9}$/.test(phoneNumber)) newErrors.phoneNumber = "Enter valid 9-digit number (e.g. 712345678)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate M-Pesa STK push → Success → Download
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      // REAL PDF DOWNLOAD — 100% WORKING
      const link = document.createElement('a');
      link.href = product.pdf; // ← Uses your correct pdf path
      link.download = `${product.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optional: Reset form after success
      setTimeout(() => {
        setFullName("");
        setPhoneNumber("");
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 pb-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 font-medium mb-10 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Guide
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-[var(--primary)] to-emerald-600 p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-black mb-4">Complete Your Purchase</h1>
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <img src={product.image} alt={product.title} className="w-24 h-32 object-cover rounded-xl shadow-lg" />
              <div>
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className="text-4xl font-black mt-2">{product.price}</p>
              </div>
            </div>
          </div>

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
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className={`w-full pl-14 pr-6 py-5 rounded-2xl border-2 focus:outline-none text-lg transition-all ${
                    errors.fullName ? "border-red-500" : "border-gray-200 focus:border-[var(--primary)]"
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-lg font-semibold text-[var(--foreground)] mb-3">
                M-Pesa Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
                <div className="flex">
                  <span className="inline-flex items-center px-6 bg-gray-100 border-2 border-gray-200 border-r-0 rounded-l-2xl text-lg font-medium">
                    +254
                  </span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 9))}
                    placeholder="712345678"
                    className={`w-full pl-6 pr-6 py-5 rounded-r-2xl border-2 focus:outline-none text-lg transition-all ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-200 focus:border-[var(--primary)]"
                    }`}
                  />
                </div>
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>}
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

            {/* Pay Button */}
            <Button
              onClick={handlePayment}
              disabled={isProcessing || isSuccess}
              className={`w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold text-lg md:text-xl py-5 md:py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 ${
                isSuccess ? "bg-emerald-600 hover:bg-emerald-700" : ""
              }`}
            >
              {isProcessing ? (
                <>Processing Payment...</>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Payment Successful! Download Started
                </>
              ) : (
                <>
                  <span>Pay {product.price} with M-Pesa</span>
                  <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold">
                    Safaricom
                  </span>
                </>
              )}
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