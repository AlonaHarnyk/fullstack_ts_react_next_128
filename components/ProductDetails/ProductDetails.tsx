import { Product } from "@/lib/products-api";
import Image from 'next/image'

interface ProductProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductProps) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <Image src={product.images[0]} alt={product.title} width={240} height={200} />
    </div>
  );
}