"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const clickHandler = () => {
    if (true) {
      router.push("/test");
    }
  };

  return (
    <>
      <h2>Home</h2>
      <button
        onClick={clickHandler}
        onMouseEnter={() => {
          console.log("here");
          router.prefetch("/test");
        }}
      >
        Test button
      </button>
      {/* <Link href="/test">Test</Link> */}
    </>
  );
}
