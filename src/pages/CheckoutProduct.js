// src/pages/CheckoutProduct.js — FINAL + ENHANCED POLLING WITH LOGGING
import { Button } from "../components/ui/button";
import { ArrowLeft, CheckCircle, Lock, Phone, User, Download, Clock } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [payheroReference, setHeroReference] = useState(null);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <p className="text-2xl text-[var(--muted-foreground)] font-medium">Product not found</p>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{9}$/.test(phoneNumber))
      newErrors.phoneNumber = "Enter valid 9-digit number (e.g. 712345678)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    const clientRef = `hustlepoa-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    try {
      const res = await fetch("/api/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: `0${phoneNumber}`,
          amount: parseInt(product.price.replace("KES ", "")),
          reference: clientRef,
        }),
      });

      const data = await res.json();
      console.log("PayHero STK Response:", data);

      const payheroRef = data.reference || data.payheroReference || data.payheroRef;

      if (!data.success || !payheroRef) {
        toast.error(data.error || "Payment failed. Please try again.", {
          icon: "❌",
          style: { background: "#ef4444", color: "white" },
        });
        setIsProcessing(false);
        return;
      }

      setHeroReference(payheroRef);

      toast.success("STK Push sent! Please approve on your phone.", {
        icon: "📱",
        duration: 10000,
        style: {
          background: "#10b981",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "16px",
          padding: "20px",
        },
      });

      // ENHANCED POLLING WITH DETAILED LOGGING
      const checkPaymentStatus = async (ref) => {
        // console.log(
        //   `%c🚀 POLLING STARTED → Reference: ${ref}`,
        //   "background: #006A4E; color: white; padding: 6px 12px; border-radius: 8px; font-weight: bold; font-size: 13px;"
        // );

        const poll = async () => {
          const timestamp = new Date().toLocaleTimeString("en-KE", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });

          // console.log(
          //   `%c🕒 [${timestamp}] Polling status for → ${ref}`,
          //   "color: #F9C80E; font-weight: bold; font-size: 12px;"
          // );

          try {
            const statusRes = await fetch(`/api/transaction-status?reference=${ref}`);
            const statusData = await statusRes.json();

            // console.log(
            //   `%c📊 Response: ${statusData.status || "NO_STATUS"}`,
            //   statusData.status === "SUCCESS"
            //     ? "color: #10b981; background: #ecfdf5; padding: 2px 8px; border-radius: 4px;"
            //     : statusData.status === "FAILED" || statusData.status === "CANCELLED"
            //     ? "color: #ef4444; background: #fee2e2; padding: 2px 8px; border-radius: 4px;"
            //     : "color: #f59e0b; background: #fff7ed; padding: 2px 8px; border-radius: 4px;"
            // );

            if (statusData.status === "SUCCESS") {
              // console.log("%c🎉 PAYMENT SUCCESSFUL! Triggering download...", "color: #10b981; font-size: 16px; font-weight: bold;");
              
              setIsProcessing(false);
              setIsSuccess(true);

              toast.success("Payment successful! Your guide is downloading now...", {
                icon: "🎉",
                duration: 8000,
                style: { background: "#10b981", color: "white", fontSize: "20px", fontWeight: "bold" },
              });

              // Auto Download
              const link = document.createElement("a");
              link.href = product.pdf;
              link.download = `${product.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.pdf`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);

              // console.log("%c📥 Download triggered successfully!", "color: #006A4E; font-weight: bold;");

              setTimeout(() => {
                setFullName("");
                setPhoneNumber("");
              }, 3000);

              return;
            }

            if (["CANCELLED", "FAILED"].includes(statusData.status)) {
              console.log("%c❌ Payment failed or cancelled by user", "color: #ef4444; font-weight: bold;");
              setIsProcessing(false);
              toast.error("Payment cancelled or failed.", { icon: "❌" });
              return;
            }

            console.log("%c⏳ Still pending → retrying in 2 seconds...", "color: #6366f1; font-style: italic;");
            setTimeout(poll, 2000);

          } catch (err) {
            console.error("%c🚨 Network error during polling:", "color: #ef4444;", err);
            console.log("%c🔄 Retrying in 5 seconds...", "color: #f59e0b;");
            setTimeout(poll, 5000);
          }
        };

        poll();
      };

      // Start polling
      checkPaymentStatus(payheroRef);

      // 5-minute timeout fallback
      setTimeout(() => {
        if (!isSuccess) {
          console.log("%c⏰ 5-minute timeout reached", "color: #dc2626; font-weight: bold;");
          setIsProcessing(false);
          toast.error("Payment timed out. Please try again.", { icon: "⏰" });
        }
      }, 300000);

    } catch (err) {
      console.error("STK Push failed:", err);
      toast.error("Network error. Check your connection.", { icon: "🌐" });
      setIsProcessing(false);
    }
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
                <>
                  <Clock className="w-6 h-6 animate-spin" />
                  Waiting for payment approval...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Payment Successful! 🎉
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