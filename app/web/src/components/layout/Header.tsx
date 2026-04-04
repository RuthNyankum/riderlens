import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useAppSelector } from "../../store/hooks";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cartCount = useAppSelector((s) =>
    s.cart.items.reduce(
      (acc: number, item: { quantity: number }) => acc + item.quantity,
      0,
    ),
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-dark-charcoal shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="font-['Montserrat'] text-[1.375rem] font-extrabold tracking-tight text-brand-orange transition-opacity hover:opacity-80"
          >
            RiderLens
          </Link>

          {/* Desktop Nav — visually centered */}
          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    "relative font-['Inter'] text-[0.9375rem] font-normal text-[#f8f9fa] transition-colors duration-200",
                    "after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:bg-brand-orange after:transition-[width] after:duration-[250ms]",
                    isActive
                      ? "text-white after:w-full"
                      : "after:w-0 hover:text-white hover:after:w-full",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Cart icon */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative flex items-center justify-center p-1 text-[#f8f9fa] transition-colors duration-200 hover:text-[#ff4500]"
            >
              <ShoppingCart size={22} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#ff4500] font-['Inter'] text-[0.6875rem] font-bold leading-none text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="flex items-center justify-center p-1 text-[#f8f9fa] transition-colors duration-200 hover:text-[#ff4500] md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        links={navLinks}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
