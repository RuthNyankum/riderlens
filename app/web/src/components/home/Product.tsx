export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  badgeVariant?:
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "outline";
}
