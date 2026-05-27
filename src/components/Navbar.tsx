import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, CreditCard, Clipboard, Globe, ArrowRight } from "lucide-react";
import logo from "@/assets/pentagonware-logo.png";

const products = [
  {
    label: "NerdClip",
    icon: Clipboard,
    tagline: "Modern education",
    href: "/products",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    items: [
      { title: "Smart Classrooms", desc: "Interactive learning tools" },
      { title: "Course Library", desc: "Curated educational content" },
      { title: "Live Sessions", desc: "Real-time virtual classes" },
    ],
  },
  {
    label: "PentPic",
    icon: Sparkles,
    tagline: "AI image generation",
    href: "/products",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    items: [
      { title: "Prompt-Free Mode", desc: "Generate without typing" },
      { title: "Style Presets", desc: "Curated visual styles" },
      { title: "High-Res Exports", desc: "Production-ready output" },
    ],
  },
  {
    label: "InvoicePent",
    icon: Globe,
    tagline: "Operations in one",
    href: "/products",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    items: [
      { title: "Invoicing", desc: "Send and track invoices" },
      { title: "Inventory", desc: "Stock & catalog management" },
      { title: "Receipts", desc: "Digital receipts & reports" },
    ],
  },
  {
    label: "PentaPay",
    icon: CreditCard,
    tagline: "Payment gateway",
    href: "/products",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    items: [
      { title: "Checkout", desc: "Frictionless payment flows" },
      { title: "Payouts", desc: "Disburse with one click" },
      { title: "Analytics", desc: "Track revenue in real time" },
    ],
  },
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
              className={link.hasDropdown ? "static" : "relative"}
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

              <AnimatePresence>
                {link.hasDropdown && showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 right-0 mt-1 z-50"
                  >
                    <div className="max-w-7xl mx-auto section-padding">
                      <div className="bg-background border border-border rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-6">
                        {/* Featured card */}
                        <div
                          className="col-span-4 rounded-xl p-6 flex flex-col justify-between text-primary-foreground relative overflow-hidden"
                          style={{
                            background:
                              "radial-gradient(circle at 80% 0%, #1F63ED 0%, #0a0f1f 60%)",
                          }}
                        >
                          <div>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1F63ED] mb-3">
                              ● What's New
                            </p>
                            <h3 className="font-display font-extrabold text-2xl leading-tight">
                              Build with the{" "}
                              <span className="text-[#5b9bff]">Pentagonware</span>{" "}
                              ecosystem.
                            </h3>
                            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                              Four products engineered to power your modern business  education, payments, operations, and creative AI.
                            </p>
                            <div className="mt-5 space-y-3">
                              {[
                                ["4", "Products in the ecosystem"],
                                ["54+", "Projects completed"],
                                ["95%", "Customer satisfaction"],
                              ].map(([n, l]) => (
                                <div key={l} className="flex items-center gap-3 text-sm">
                                  <span className="font-display font-bold text-base w-10 text-primary-foreground">{n}</span>
                                  <span className="text-primary-foreground/60">{l}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Link to="/products" className="mt-6 inline-block">
                            <Button
                              size="sm"
                              className="rounded-[3px] font-semibold gap-2 text-primary-foreground"
                              style={{ backgroundColor: "#1F63ED" }}
                            >
                              See full platform <ArrowRight size={14} />
                            </Button>
                          </Link>
                        </div>

                        {/* Product columns */}
                        <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-7">
                          {products.map((p) => (
                            <div key={p.label}>
                              <Link
                                to={p.href}
                                className="flex items-start gap-3 group"
                              >
                                <div className={`w-9 h-9 rounded-lg ${p.iconBg} ${p.iconColor} flex items-center justify-center shrink-0`}>
                                  <p.icon size={18} />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-foreground group-hover:text-brand transition-colors">
                                    {p.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{p.tagline}</div>
                                </div>
                              </Link>
                              <ul className="mt-3 space-y-2 pl-12">
                                {p.items.map((it) => (
                                  <li key={it.title} className="flex gap-2">
                                    <span className="text-muted-foreground/40 mt-1.5 text-[6px]">●</span>
                                    <Link to={p.href} className="group">
                                      <div className="text-[13px] font-semibold text-foreground group-hover:text-brand transition-colors leading-tight">
                                        {it.title}
                                      </div>
                                      <div className="text-xs text-muted-foreground leading-tight">
                                        {it.desc}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
