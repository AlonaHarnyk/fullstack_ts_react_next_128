import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { fetchProductById } from "@/lib/products-api";
import { Metadata } from "next";

interface ProductDetailsPageProps {
  params: Promise<{ productId: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailsPageProps): Promise<Metadata> {
  const { productId } = await params;

  const product = await fetchProductById(Number(productId));

  return {
    title: `Info about ${product.title}`,
    description: `${product.description}`,
  };
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
