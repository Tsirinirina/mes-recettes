import type { Metadata } from "next";
import "./globals.css";
import "../style/basic.style.css";
import "../style/text.style.css";
import "../style/spacement.style.css";
import "../style/font.style.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import {
  Roboto,
  Playfair_Display,
  Lora,
  Pacifico,
  Cookie,
  Bonbon,
} from "@next/font/google";
export const metadata: Metadata = {
  title: "Mes Recettes",
  description: "Recettes de cuisine",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const cockie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
});

const bonbon = Bonbon({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar>Navbar</Navbar>
        <main className={"main-container"}>{children}</main>
        <Footer>Footer</Footer>
      </body>
    </html>
  );
}

// ${roboto.className}
// ${playfair_display.className}
// ${lora.className}
// ${pacifico.className}
// ${cockie.className}
// ${bonbon.className}
