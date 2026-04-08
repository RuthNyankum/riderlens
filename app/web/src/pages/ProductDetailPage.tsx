const ProductDetailPage = () => {
  return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;

/*
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { slug } = useParams();

  // Find the product based on slug
  const product = PLACEHOLDER_PRODUCTS.find(
    (p) => slugify(p.name) === slug
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      {/* other details */
//     </div>
//   );
// };
