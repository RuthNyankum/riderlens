import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setCurrency } from "../../store/slices/currencySlice";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const dispatch = useAppDispatch();
  const currency = useAppSelector((s) => s.currency.currency);

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

          {/* Desktop Nav */}
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
                    "relative font-['Inter'] text-[0.9375rem] text-light-gray transition-colors duration-200",
                    "after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:bg-brand-orange after:transition-[width] after:duration-250",
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
            {/* Currency Switcher */}
            <div className="flex items-center gap-1 rounded-lg border border-white/20 bg-dark-charcoal p-1">
              <button
                onClick={() => dispatch(setCurrency("GHS"))}
                className={[
                  "px-2 py-1 text-xs font-semibold rounded-md transition",
                  currency === "GHS"
                    ? "bg-brand-orange text-white"
                    : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                ₵
              </button>

              <button
                onClick={() => dispatch(setCurrency("USD"))}
                className={[
                  "px-2 py-1 text-xs font-semibold rounded-md transition",
                  currency === "USD"
                    ? "bg-brand-orange text-white"
                    : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                $
              </button>
            </div>

            {/* Cart icon */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative flex items-center justify-center p-1 text-light-gray transition-colors duration-200 hover:text-[#ff4500]"
            >
              <ShoppingCart size={22} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#ff4500] font-['Inter'] text-[0.6875rem] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger (mobile) */}
            <button
              className="flex items-center justify-center p-1 text-light-gray transition-colors duration-200 hover:text-[#ff4500] md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        links={navLinks}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
