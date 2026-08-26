import { fetchCategories } from "@/lib/products-api";
import Link from "next/link";

export default async function Sidebar() {
  const categories = await fetchCategories();
  
  return (
    <div>
      <main>
        <ul>
          {categories.map(({ slug, name }) => (
            <li key={slug}>
              <Link href={`/products/${slug}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
