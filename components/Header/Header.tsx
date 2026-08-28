import { fetchCategories } from "@/lib/products-api";
import Link from "next/link";

export default async function Header() {
  const categories = await fetchCategories();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href={`/products/${categories[0].slug}`}>Products</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
