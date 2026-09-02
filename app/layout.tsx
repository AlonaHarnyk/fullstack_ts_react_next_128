import Header from "@/components/Header/Header";
import "./globals.css";
import TanstackProvider from "@/components/TanstackProvider/TanstackProvider";
import { Metadata } from "next";
import { Roboto, Hanalei } from "next/font/google";
import { localFont } from "next/font/local";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const hanalei = Hanalei({
  variable: "--font-hanalei",
  subsets: ["latin"],
  weight: ["400"],
});

const lato = localFont({
  src: [
    {
      path: "../fonts/Lato-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Products App",
  description:
    "App with information about available products, grouped by categories",
  metadataBase: "https://example.com",
  openGraph: {
    title: "Products App",
    description: "App with information about available products",
    url: "/",
    images: [
      {
        url: "/image.png",
        alt: "product image",
        width: 600,
        height: 300,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${hanalei.variable} ${lato}`}>
        <TanstackProvider>
          <Header />
          <main>{children}</main>
        </TanstackProvider>
      </body>
    </html>
  );
}
