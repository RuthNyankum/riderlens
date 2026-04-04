import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { to: string; label: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-[199] bg-black/55 transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Slide-in drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={[
          "fixed right-0 top-0 z-[200] flex h-full w-[min(280px,85vw)] flex-col bg-[#2b2d42] px-6 py-6 shadow-[-4px_0_24px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="mb-8 self-end text-[#f8f9fa] transition-colors duration-200 hover:text-[#ff4500]"
        >
          <X size={22} />
        </button>

        {/* Nav links */}
        <nav className="flex flex-col">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  "border-b border-white/[0.06] py-3 font-['Montserrat'] text-lg font-semibold transition-colors duration-200",
                  isActive
                    ? "text-brand-orange"
                    : "text-[#f8f9fa] hover:text-brand-orange",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
