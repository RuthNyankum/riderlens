import type { Product } from "../types/product";

export const CATEGORIES = [
  { label: "All Products", value: "all", count: 65 },
  { label: "Action Cameras", value: "action-cameras", count: 5 },
  { label: "Helmet Mounts", value: "helmet-mounts", count: 12 },
  { label: "Bike Mounts", value: "bike-mounts", count: 18 },
  { label: "Accessories", value: "accessories", count: 25 },
];

export const PRICE_RANGES = [
  { label: "All Prices", value: "all" },
  { label: "$0 - $50", value: "0-50", min: 0, max: 50 },
  { label: "$50 - $150", value: "50-150", min: 50, max: 150 },
  { label: "$150 - $300", value: "150-300", min: 150, max: 300 },
  { label: "$300+", value: "300-9999", min: 300, max: 9999 },
];

export const FEATURES = [
  { label: "Vibration Safe", value: "vibration-safe", count: 12 },
  { label: "Weatherproof", value: "weatherproof", count: 28 },
  { label: "Quick Release", value: "quick-release", count: 8 },
];

export const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Best Selling", value: "best-selling" },
];

export const CATEGORY_MAP: Record<string, string> = {
  "action-cameras": "Action Cameras",
  "helmet-mounts": "Helmet Mounts",
  "bike-mounts": "Bike Mounts",
  accessories: "Accessories",
};

export const CATEGORY_IMAGES = [
  {
    label: "Action Cameras",
    value: "action-cameras",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop",
  },
  {
    label: "Helmet Mounts",
    value: "helmet-mounts",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
  },
  {
    label: "Bike Mounts",
    value: "bike-mounts",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&auto=format&fit=crop",
  },
  {
    label: "Accessories",
    value: "accessories",
    image:
      "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=400&auto=format&fit=crop",
  },
];

// Placeholder — replace with useProducts() hook when API is ready
export const PLACEHOLDER_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Vibration Dampener Mount Pro",
    price: 399.99,
    category: "Action Cameras",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&auto=format&fit=crop",
    badge: "Best Seller",
    badgeVariant: "default",
  },
  {
    id: "2",
    name: "Vibration Dampener Mount Pro",
    price: 399.99,
    category: "Action Cameras",
    image:
      "https://images.unsplash.com/photo-1568772585407-9f595aedd0a7?w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "GoPro Hero 12 Black",
    price: 399.99,
    category: "Action Cameras",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop",
    badge: "New",
    badgeVariant: "info",
  },
  {
    id: "4",
    name: "Pro Chin Mount Kit",
    price: 399.99,
    category: "Helmet Mounts",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Pro Chin Mount Kit",
    price: 399.99,
    category: "Helmet Mounts",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
    badge: "Sale",
    badgeVariant: "error",
  },
  {
    id: "6",
    name: "Vibration Dampener Mount Pro",
    price: 399.99,
    category: "Action Cameras",
    image:
      "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=400&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Suction Cup Tank Mount",
    price: 29.99,
    category: "Bike Mounts",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Camera Cleaning Kit",
    price: 34.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=400&auto=format&fit=crop",
  },
  {
    id: "9",
    name: "Handlebar Mount Pro",
    price: 79.99,
    category: "Bike Mounts",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&auto=format&fit=crop",
  },
  {
    id: "10",
    name: "Helmet Side Mount",
    price: 49.99,
    category: "Helmet Mounts",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
  },
  {
    id: "11",
    name: "Chest Harness Mount",
    price: 59.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop",
  },
  {
    id: "12",
    name: "RAM Mount Ball Base",
    price: 24.99,
    category: "Bike Mounts",
    image:
      "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=400&auto=format&fit=crop",
  },
];
