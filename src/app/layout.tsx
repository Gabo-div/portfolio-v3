import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const title = "Gabriel Vallés - Desarrollador y Programador Web";
const description =
  "Gabriel Hernández Vallés es un programador y desarrollador web que crea aplicaciones y experiencias digitales para la web.";

export const metadata: Metadata = {
  title,
  description,
  canonical: "https://www.gabrielvalles.dev",
  openGraph: {
    locale: "es",
    images: "/og.png",
    siteName: title,
    type: "website",
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "/og.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
