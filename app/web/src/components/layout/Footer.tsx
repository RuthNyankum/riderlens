import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

// Link data
const shopLinks = [
  { to: "/shop?category=action-cameras", label: "Action Cameras" },
  { to: "/shop?category=helmet-mounts", label: "Helmet Mounts" },
  { to: "/shop?category=bike-mounts", label: "Bike Mounts" },
  { to: "/shop?category=accessories", label: "Accessories" },
];

const supportLinks = [
  { to: "/contact", label: "Contact Us" },
  { to: "/shipping-policy", label: "Shipping Info" },
  { to: "/return-policy", label: "Returns" },
];

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy", blue: true },
  { to: "/terms", label: "Terms & Conditions", blue: false },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <FaFacebook size={18} />,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <FaInstagram size={18} />,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: <FaYoutube size={18} />,
  },
];

// Shared sub-components

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-['Montserrat'] text-[1.0625rem] font-bold tracking-[0.2px] text-brand-orange">
      {children}
    </h3>
  );
}

function FooterLink({
  to,
  blue = false,
  children,
}: {
  to: string;
  blue?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={[
        "font-['Inter'] text-[0.9375rem] font-normal leading-snug transition-colors duration-200",
        blue
          ? "text-[#f8f9fa] hover:text-electric-blue"
          : "text-[#f8f9fa] hover:text-electric-blue",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

// Footer

export default function Footer() {
  return (
    <footer className="bg-dark-charcoal text-[#f8f9fa]">
      {/* Top grid */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-8 py-12 md:grid-cols-4 md:px-16">
        {/* Shop */}
        <div className="flex flex-col gap-5">
          <ColHeading>Shop</ColHeading>
          <ul className="flex flex-col gap-3.5">
            {shopLinks.map(({ to, label }) => (
              <li key={to}>
                <FooterLink to={to}>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-5">
          <ColHeading>Support</ColHeading>
          <ul className="flex flex-col gap-3.5">
            {supportLinks.map(({ to, label }) => (
              <li key={to}>
                <FooterLink to={to}>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-5">
          <ColHeading>Legal</ColHeading>
          <ul className="flex flex-col gap-3.5">
            {legalLinks.map(({ to, label, blue }) => (
              <li key={to}>
                <FooterLink to={to} blue={blue}>
                  {label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-5">
          <ColHeading>Connect</ColHeading>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6c757d] text-[#f8f9fa] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#ff4500]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1400px] px-8 pb-8 md:px-16">
        <div className="mb-6 border-t border-white/10" />
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-['Inter'] text-[0.9rem] text-[#f8f9fa]">
            © {new Date().getFullYear()} RiderLens. All rights reserved.
          </p>
          <p className="font-['Inter'] text-[0.875rem] text-[#f8f9fa]/80">
            🔒 Secure Checkout
          </p>
        </div>
      </div>
    </footer>
  );
}
