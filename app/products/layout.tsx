import Sidebar from "@/components/Sidebar/Sidebar";
import { ReactNode } from "react";

interface ProductsLayoutProps {
  children: ReactNode;
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <div style={{ display: "flex", gap: 20, backgroundColor: "bisque" }}>
      <Sidebar />
      {children}
    </div>
  );
}
