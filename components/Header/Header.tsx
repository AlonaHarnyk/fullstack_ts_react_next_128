"use client";
import {
  selectChangeLang,
  selectLang,
  useLangStore,
} from "@/stores/languageStore";
import Link from "next/link";

export default function Header() {
  // const { changeLang, lang } = useLangStore();
  const lang = useLangStore(selectLang);
  const changeLang = useLangStore(selectChangeLang);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
      <select value={lang} onChange={(e) => changeLang(e.target.value)}>
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </header>
  );
}
