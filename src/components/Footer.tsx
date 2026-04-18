import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import logoWhite from "@/assets/pentagonware-logo-white.png";

const footerLinks = {
  Products: [
    { label: "Nerdclip", href: "/products" },
    { label: "InvoicePent", href: "/products" },
    { label: "Pentimage", href: "/products" },
    { label: "Pentapay", href: "/products" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pentagonware-technologies/",
    Icon: Linkedin,
  },
  { label: "X", href: "https://x.com/pentagonware", Icon: Twitter },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pentagonware",
    Icon: Instagram,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[hsl(220_72%_8%)] text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src={logoWhite} alt="Pentagonware" className="h-7 w-auto" />
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Engineering the future of digital systems.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Pentagonware Technologies. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-[3px] border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
