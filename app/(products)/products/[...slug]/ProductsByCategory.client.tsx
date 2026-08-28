"use client";

import { fetchProductsByCategory } from "@/lib/products-api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductsByCategoryClient() {
  const { slug } = useParams<{ slug: string[] }>();
  const category = slug[0];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", { category }],
    queryFn: () => fetchProductsByCategory(category),
    refetchOnMount: false,
  });

  return (
    <>
      {data && data.length > 0 && (
        <ul>
          {data.map(({ title, id })  => (
            <li key={id}><Link href={`/product-details/${id}`}>{title}</Link></li>
          ))}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
    </>
  );
}
