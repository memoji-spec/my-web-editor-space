import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, Server, CreditCard, GraduationCap, Clipboard, Globe } from "lucide-react";
import logo from "@/assets/pentagonware-logo.png";

const products = [
  { label: "NerdClip", icon: Clipboard, href: "/products" },
  { label: "PentPic", icon: Sparkles, href: "/products" },
  { label: "InvoicePent", icon: Globe, href: "/products" },
  { label: "PentaPay", icon: CreditCard, href: "/products" },
];

const navLinks = [
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 section-padding">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Pentagonware" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
            >
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors relative group flex items-center gap-1 ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-brand transition-transform origin-left ${
                  location.pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>

              {link.hasDropdown && showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-1 bg-background border border-border rounded-xl shadow-xl p-3 min-w-[320px] grid grid-cols-2 gap-1 z-50"
                >
                  {products.map((p) => (
                    <Link
                      key={p.label}
                      to={p.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                        <p.icon size={16} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{p.label}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button
              size="sm"
              className="text-primary-foreground rounded-[3px] font-bold transition-all duration-300 hover:scale-[1.02] hover:opacity-95"
              style={{ backgroundColor: "#1F63ED" }}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button
                  size="sm"
                  className="mt-2 w-full text-primary-foreground rounded-[3px] font-bold"
                  style={{ backgroundColor: "#1F63ED" }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
