import Link from "next/link";

export default function MoviesNav() {
  return (
      <nav>
        <ul>
          <li>
            <Link href="/movies/comedy">Comedy</Link>
          </li>
          <li>
            <Link href="/movies/drama">Drama</Link>
          </li>
          <li>
            <Link href="/movies/thriller">Thriller</Link>
          </li>
        </ul>
      </nav>
  );
}