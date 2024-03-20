import type { Metadata } from "next";
import "./globals.css";


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
