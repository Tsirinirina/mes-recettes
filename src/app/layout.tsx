import type { Metadata } from "next";
import "./globals.css";
import "../style/basic.style.css";
import "../style/text-color.css";
import "../style/spacement.style.css";

export const metadata: Metadata = {
  title: "Mes Recettes",
  description: "Recettes de cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
