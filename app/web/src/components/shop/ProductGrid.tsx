import ProductCard from "../shop/ProductCard";
import type { Product } from "../../types/product";
import SortDropdown from "./SortDropdown";
import { useAppSelector } from "../../store/hooks";

interface ProductGridProps {
  products: Product[];
  total: number;
  sort: string;
  onSortChange: (value: string) => void;
}

export default function ProductGrid({
  products,
  total,
  sort,
  onSortChange,
}: ProductGridProps) {
  const currency = useAppSelector((state) => state.currency.currency);
  return (
    <div className="flex flex-1 flex-col gap-5">
      {/* Toolbar */}
      <div className="flex items-center justify-between rounded-xl border border-border-gray bg-white px-4 py-3 shadow-sm">
        <p className="font-['Inter'] text-sm text-medium-gray">
          Showing{" "}
          <span className="font-semibold text-brand-orange">
            {products.length}
          </span>{" "}
          of <span className="font-semibold text-dark-gray">{total}</span>{" "}
          products
        </p>
        <SortDropdown value={sort} onChange={onSortChange} />
      </div>

      {/* Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border-gray bg-white py-20 text-center">
          <p className="font-['Montserrat'] text-lg font-bold text-dark-gray">
            No products found
          </p>
          <p className="mt-2 font-['Inter'] text-sm text-medium-gray">
            Try adjusting your filters
          </p>
        </div>
      )}
    </div>
  );
}
