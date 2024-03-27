import type { Metadata } from "next";
import "./globals.css";
import "../style/basic.style.css";
import "../style/text-color.css";
import "../style/spacement.style.css";
import { Roboto } from "@next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
export const metadata: Metadata = {
  title: "Mes Recettes",
  description: "Recettes de cuisine",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <Navbar>Navbar</Navbar>
        <main className={"main-container"}>{children}</main>
        <Footer>Footer</Footer>
      </body>
    </html>
  );
}
