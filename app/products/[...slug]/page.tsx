import { fetchProductsByCategory } from "@/lib/products-api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import ProductsByCategoryClient from "./ProductsByCategory.client";

interface ProductsByCategoryProps {
  params: Promise<{ slug: string[] }>;
}

export default async function ProductsByCategory({
  params,
}: ProductsByCategoryProps) {
  const { slug } = await params;

  const category = slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", { category }],
    queryFn: () => fetchProductsByCategory(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsByCategoryClient />
    </HydrationBoundary>
  );
}
