import MoviesNav from "@/components/MoviesNav/MoviesNav";

export default function MoviesLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <MoviesNav />
      {children}
    </div>
  );
}
