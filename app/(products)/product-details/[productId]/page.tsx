import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { fetchProductById } from "@/lib/products-api";

interface ProductDetailsPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { productId } = await params;

  const product = await fetchProductById(Number(productId));

  return (
    <div>
      <main>
        <ProductDetails product={product} />
      </main>
    </div>
  );
}
