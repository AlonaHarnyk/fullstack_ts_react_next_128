import Modal from "@/components/Modal/Modal";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { fetchProductById } from "@/lib/products-api";

interface ProductDetailsPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailsModal({
  params,
}: ProductDetailsPageProps) {
  const { productId } = await params;

  const product = await fetchProductById(Number(productId));

  return (
    <Modal>
      <ProductDetails product={product} />
    </Modal>
  );
}
