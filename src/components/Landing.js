import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import ProductGrid from "./ProductGrid";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";

const Landing = () => {
return (
    <div className="font-sans">
      <Header />
        <Hero />
        <Features />
        <ProductGrid />
        <Testimonials />
        <CTA />
        <Footer />
    </div>
  );
};

export default Landing;