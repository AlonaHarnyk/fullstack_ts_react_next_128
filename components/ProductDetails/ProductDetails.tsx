import { Product } from "@/lib/products-api";

interface ProductProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductProps) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <img src={product.images[0]} alt={product.title} width={240} />
    </div>
  );
}