import {Outfit, Ovo} from "next/font/google";
import "./globals.css";
import OuterLayoutRouter from "next/dist/client/components/layout-router";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Outfit"
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Ovo"
});


export const metadata = {
  title: "Portfolio - Minh",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
