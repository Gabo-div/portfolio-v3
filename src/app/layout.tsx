import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel H. Vallés",
  description:
    "Gabriel Valles es un programador web que crea aplicaciones y experiencias digitales para la web.",
  openGraph: {
    locale: "es",
    images: "/og.png",
    siteName: "Gabriel H. Vallés",
    type: "website",
    title: "Gabriel H. Vallés",
    description:
      "Gabriel Valles es un programador web que crea aplicaciones y experiencias digitales para la web.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel H. Vallés",
    description:
      "Gabriel Valles es un programador web que crea aplicaciones y experiencias digitales para la web.",
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
