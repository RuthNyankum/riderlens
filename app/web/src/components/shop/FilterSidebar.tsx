import { Tag, DollarSign, Zap } from "lucide-react";
import { CATEGORIES, PRICE_RANGES, FEATURES } from "../../constants/shop";
import { formatPrice } from "../../utils/formatPrice";
import { useAppSelector } from "../../store/hooks";

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedPrice: string;
  onPriceChange: (value: string) => void;
  selectedFeatures: string[];
  onFeatureToggle: (value: string) => void;
}

export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
  selectedFeatures,
  onFeatureToggle,
}: FilterSidebarProps) {
  const currency = useAppSelector((s) => s.currency.currency);
  const rate = useAppSelector((s) => s.currency.rate);
  // console.log("PRICE_RANGES:", PRICE_RANGES);

  return (
    <aside className="flex w-full flex-col gap-6 lg:w-56 lg:shrink-0">
      {/* Categories */}
      <div className="rounded-xl border border-border-gray bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Tag size={15} className="text-bright-yellow" />
          <h3 className="font-['Montserrat'] text-sm font-bold text-dark-gray">
            Categories
          </h3>
        </div>

        <ul className="flex flex-col gap-1">
          {CATEGORIES.map(({ label, value, count }) => {
            const isActive = selectedCategory === value;

            return (
              <li key={value}>
                <button
                  onClick={() => onCategoryChange(value)}
                  className={[
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors duration-150",
                    isActive
                      ? "bg-brand-orange text-white"
                      : "text-dark-gray hover:bg-light-gray",
                  ].join(" ")}
                >
                  <span className="font-['Inter'] text-sm">{label}</span>

                  <span
                    className={[
                      "rounded-full px-1.5 py-0.5 text-xs font-semibold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-light-gray text-medium-gray",
                    ].join(" ")}
                  >
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price Range */}
      <div className="rounded-xl border border-border-gray bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <DollarSign size={15} className="text-bright-yellow" />
          <h3 className="font-['Montserrat'] text-sm font-bold text-dark-gray">
            Price Range
          </h3>
        </div>

        <select
          value={selectedPrice}
          onChange={(e) => onPriceChange(e.target.value)}
          className="w-full rounded-lg border border-border-gray bg-light-gray px-3 py-2 font-['Inter'] text-sm text-dark-gray focus:border-brand-orange focus:outline-none"
        >
          {PRICE_RANGES.map((range) => {
            if (range.value === "all") {
              return (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              );
            }

            const { min, max } = range;

            // safety check
            if (min === undefined || max === undefined) {
              return (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              );
            }

            return (
              <option key={range.value} value={range.value}>
                {max === 9999
                  ? `${formatPrice(min, currency, rate)}+`
                  : `${formatPrice(min, currency, rate)} - ${formatPrice(max, currency, rate)}`}
              </option>
            );
          })}
        </select>
      </div>

      {/* Features */}
      <div className="rounded-xl border border-border-gray bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Zap size={15} className="text-bright-yellow" />
          <h3 className="font-['Montserrat'] text-sm font-bold text-dark-gray">
            Features
          </h3>
        </div>

        <ul className="flex flex-col gap-2">
          {FEATURES.map(({ label, value, count }) => (
            <li key={value}>
              <label className="flex cursor-pointer items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(value)}
                    onChange={() => onFeatureToggle(value)}
                    className="h-4 w-4 cursor-pointer accent-brand-orange"
                  />
                  <span className="font-['Inter'] text-sm text-dark-gray">
                    {label}
                  </span>
                </div>

                <span className="text-xs text-medium-gray">{count}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
