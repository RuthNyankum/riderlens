import { Link } from "react-router-dom";
import { Camera, Bike, Package } from "lucide-react";

const categories = [
  {
    to: "/shop?category=action-cameras",
    label: "Action Cameras",
    icon: <Camera size={40} strokeWidth={1.5} className="text-brand-orange" />,
    bg: "from-[#00b4d8] to-[#2b2d42]",
  },
  {
    to: "/shop?category=helmet-mounts",
    label: "Motorcycle Mounts",
    icon: <Bike size={40} strokeWidth={1.5} className="text-brand-orange" />,
    bg: "from-[#2b2d42] to-[#3d4060]",
  },
  {
    to: "/shop?category=accessories",
    label: "Accessories",
    icon: <Package size={40} strokeWidth={1.5} className="text-brand-orange" />,
    bg: "from-[#3d4060] to-[#2b2d42]",
  },
];

export default function CategoryCards() {
  return (
    <section className="relative -mt-14 pb-16 bg-transparent">
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-6 px-6 sm:grid-cols-3 md:px-10">
        {categories.map(({ to, label, icon, bg }) => (
          <Link
            key={to}
            to={to}
            className="group flex flex-col overflow-hidden rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Coloured image area */}
            <div
              className={`flex h-44 items-center justify-center bg-linear-to-br ${bg}`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                {icon}
              </div>
            </div>

            {/* Label + CTA */}
            <div className="flex flex-col items-center gap-3 bg-white px-4 py-5">
              <h3 className="font-['Montserrat'] text-base font-bold text-dark-gray">
                {label}
              </h3>
              <span className="inline-flex items-center justify-center rounded border border-brand-orange px-5 py-1.5 font-['Montserrat'] text-sm font-semibold text-brand-orange transition-colors duration-200 group-hover:bg-hover-orange group-hover:text-white">
                Shop now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
