import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border-gray bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-light-gray"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3">
            <Badge variant={product.badgeVariant}>{product.badge}</Badge>
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {product.category && (
          <span className="font-['Inter'] text-xs font-medium uppercase tracking-wide text-medium-gray">
            {product.category}
          </span>
        )}
        <h3 className="font-['Montserrat'] text-[0.9375rem] font-bold leading-snug text-dark-gray">
          <Link
            to={`/product/${product.id}`}
            className="transition-colors duration-200 hover:text-brand-orange"
          >
            {product.name}
          </Link>
        </h3>
        <p className="font-['Montserrat'] text-lg font-extrabold text-brand-orange">
          ${product.price.toFixed(2)}
        </p>
        <Button
          href={`/product/${product.id}`}
          variant="outline"
          size="sm"
          className="mt-auto w-full"
        >
          View Product
        </Button>
      </div>
    </div>
  );
}
