import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)] border-b border-[var(--border)] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-[var(--primary)]">Hustle Poa</span>{" "}
              <span className="text-[var(--accent)]">PDFs</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium">
              About
            </a>
            <a href="#categories" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium">
              Categories
            </a>
            <a href="#contact" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-semibold">
              Login
            </Button>
            <Button className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--accent-foreground)] font-semibold">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#categories"
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </a>
              <a
                href="#contact"
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" className="font-semibold w-full">
                  Login
                </Button>
                <Button className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--accent-foreground)] font-semibold w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;