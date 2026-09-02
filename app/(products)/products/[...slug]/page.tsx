import { fetchProductsByCategory } from "@/lib/products-api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import ProductsByCategoryClient from "./ProductsByCategory.client";
import { Metadata } from "next";

interface ProductsByCategoryProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: ProductsByCategoryProps): Promise<Metadata> {
  const { slug } = await params;
  const category = slug[0];
  return {
    title: `Products list by category: ${category}`,
    description: `List of products, which belong to ${category} category`,
    openGraph: {
      url: `/products/${category}`,
      images: [
        {
          url: "/image.png",
          alt: "product image",
          width: 600,
          height: 300,
        },
      ],
    },
  };
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
