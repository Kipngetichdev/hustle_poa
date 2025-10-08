import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">
              <span className="text-[var(--primary)]">Hustle Poa</span>{" "}
              <span className="text-[var(--accent)]">PDFs</span>
            </h3>
            <p className="text-[var(--background)]/80">
              Because kila hustle inahitaji plan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[var(--background)]/80 hover:text-[var(--accent)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[var(--background)]/80 hover:text-[var(--accent)] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[var(--background)]/80 hover:text-[var(--accent)] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#terms" className="text-[var(--background)]/80 hover:text-[var(--accent)] transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="w-10 h-10 bg-[var(--background)]/10 rounded-lg flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-[var(--background)]/10 rounded-lg flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-[var(--background)]/10 rounded-lg flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-[var(--background)]/10 rounded-lg flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--background)]/20 pt-6 text-center text-[var(--background)]/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Hustle Poa PDFs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;