import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Süreç", href: "/surec" },
  { name: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-bg-primary/90 backdrop-blur-md border-border-light shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Globe className="w-6 h-6 text-accent-primary transition-transform group-hover:rotate-12" strokeWidth={1.5} />
          <span className="font-serif text-xl tracking-wide text-text-primary">ZEG</span>
          <span className="text-xs tracking-widest uppercase text-text-secondary mt-1 hidden sm:inline-block">Dış Ticaret</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors hover:text-accent-primary",
                location.pathname === link.href ? "text-accent-primary font-medium" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/iletisim"
            className="text-xs uppercase tracking-widest border border-border-medium px-5 py-2 rounded-full hover:bg-text-primary hover:text-white transition-all duration-300"
          >
            Teklif Al
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü aç"
        >
          {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-primary border-b border-border-light shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-lg py-2 border-b border-border-light/50",
                location.pathname === link.href ? "text-accent-primary font-medium" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
