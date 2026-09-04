import Header from "@/components/Header/Header";
import "./globals.css";
import TanstackProvider from "@/components/TanstackProvider/TanstackProvider";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <Header />
          <main>{children}</main>
        </TanstackProvider>
      </body>
    </html>
  );
}
