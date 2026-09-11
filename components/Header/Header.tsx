"use client";
import Link from "next/link";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
}
