import { Metadata } from "next";
import { ReactNode, Suspense } from "react";

interface ProductsLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal:  ReactNode;
}

export default function ProductsLayout({ children, sidebar, modal }: ProductsLayoutProps) {
  return (
    <div style={{ display: "flex", gap: 20, backgroundColor: "bisque" }}>
      <Suspense fallback={<div>Loading categories...</div>}>{sidebar}</Suspense>
      {children}
      {modal}
    </div>
  );
}
