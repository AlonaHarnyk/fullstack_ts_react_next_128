"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <strong>PAGE DOES NOT EXIST!</strong>
      <button onClick={() => router.replace("/")}>Go back!</button>
    </>
  );
}
