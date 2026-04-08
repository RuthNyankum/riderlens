import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Package } from "lucide-react";
import FilterSidebar from "../components/shop/FilterSidebar";
import ProductGrid from "../components/shop/ProductGrid";
import {
  PLACEHOLDER_PRODUCTS,
  CATEGORY_MAP,
  CATEGORY_IMAGES,
} from "../constants/shop";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sort, setSort] = useState("featured");

  const handleFeatureToggle = (value: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value],
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...PLACEHOLDER_PRODUCTS];

    if (selectedCategory !== "all") {
      const label = CATEGORY_MAP[selectedCategory];
      result = result.filter((p) => p.category === label);
    }

    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sort === "newest") result.reverse();

    return result;
  }, [selectedCategory, selectedPrice, sort]);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Page header banner */}
      <div className="bg-dark-charcoal px-6 py-10 md:px-10">
        <div className="mx-auto max-w-350">
          <nav className="mb-4 flex items-center gap-1.5 font-['Inter'] text-sm text-white/60">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">Shop</span>
          </nav>
          <h1 className="font-['Montserrat'] text-3xl font-extrabold text-white md:text-4xl">
            Shop
          </h1>
          <p className="mt-2 font-['Inter'] text-light-gray/70">
            Premium action cameras and mounts built for riders
          </p>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="mx-auto max-w-350 px-6 py-10 md:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPrice={selectedPrice}
            onPriceChange={setSelectedPrice}
            selectedFeatures={selectedFeatures}
            onFeatureToggle={handleFeatureToggle}
          />
          <ProductGrid
            products={filteredProducts}
            total={PLACEHOLDER_PRODUCTS.length}
            sort={sort}
            onSortChange={setSort}
          />
        </div>
      </div>

      {/* Shop by Categories */}
      <div className="mx-auto max-w-350 px-6 pb-16 md:px-10">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            {/* Left label */}
            <div className="flex flex-col gap-4 lg:w-48 lg:shrink-0">
              <h2 className="font-['Montserrat'] text-2xl font-extrabold leading-tight text-dark-gray">
                Shop
                <br />
                by Categories
              </h2>
              <div className="h-1 w-10 rounded bg-brand-orange" />
              <div className="flex items-center gap-2">
                <Package size={20} className="text-bright-yellow" />
                <div>
                  <p className="font-['Montserrat'] text-base font-bold text-dark-gray">
                    200+
                  </p>
                  <p className="font-['Inter'] text-xs text-medium-gray">
                    Unique products
                  </p>
                </div>
              </div>
              <Link
                to="/shop"
                className="font-['Montserrat'] text-sm font-bold text-brand-orange underline underline-offset-4 transition-colors hover:text-hover-orange"
              >
                ALL CATEGORIES &gt;&gt;
              </Link>
            </div>

            {/* Category image grid */}
            <div className="grid flex-1 grid-cols-2 gap-4">
              {CATEGORY_IMAGES.map(({ label, value, image }) => (
                <Link
                  key={value}
                  to={`/shop?category=${value}`}
                  className="group relative overflow-hidden rounded-xl border-2 border-transparent bg-light-gray transition-all duration-200 hover:border-brand-orange"
                >
                  <img
                    src={image}
                    alt={label}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-3 text-center">
                    <span className="font-['Montserrat'] text-sm font-bold text-brand-orange">
                      {label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
