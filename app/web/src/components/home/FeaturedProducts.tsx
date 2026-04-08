import type { Product } from "../../types/product";
import ProductCard from "../shop/ProductCard";
import { useAppSelector } from "../../store/hooks";

// import ProductCard, { type Product } from "../shop/ProductCard";

// Placeholder data — replace with real API data via useProducts hook
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Suction Cup Tank Mount",
    price: 29.99,
    category: "Bike Mounts",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&auto=format&fit=crop",
    badge: "Best Seller",
    badgeVariant: "default",
  },
  {
    id: "2",
    name: "Camera Cleaning Kit",
    price: 34.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Pro Chin Mount Kit",
    price: 299.99,
    category: "Helmet Mounts",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&auto=format&fit=crop",
    badge: "New",
    badgeVariant: "info",
  },
  {
    id: "4",
    name: "GoPro Hero 12 Black",
    price: 399.99,
    category: "Action Cameras",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop",
    badge: "Sale",
    badgeVariant: "error",
  },
  {
    id: "5",
    name: "Vibration Dampener Mount",
    price: 399.99,
    category: "Bike Mounts",
    image:
      "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=400&auto=format&fit=crop",
  },
];

export default function FeaturedProducts() {
  const currency = useAppSelector((s) => s.currency.currency); // get current currency

  return (
    <section className="bg-light-gray py-16">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <h2 className="mb-10 text-center font-['Montserrat'] text-2xl font-extrabold text-dark-gray md:text-3xl">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
