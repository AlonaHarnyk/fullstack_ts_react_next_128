import Header from "@/components/Header/Header";
import "./globals.css";
import TanstackProvider from "@/components/TanstackProvider/TanstackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <AuthProvider>
            <Header />
            <main>{children}</main>
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
