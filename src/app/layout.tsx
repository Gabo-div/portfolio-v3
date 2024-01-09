import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const title = "Gabriel Vallés - Desarrollador y Programador Web";
const description =
  "Gabriel Hernández Vallés es un programador y desarrollador web que crea aplicaciones y experiencias digitales para la web.";


export const viewport: Viewport = {
  themeColor: "#0e1015",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Programador", "Desarrollador", "Gabriel Vallés", "Web", "Full-Stack", "FullStack"],
  metadataBase: new URL("https://www.gabrielvalles.dev"),
  alternates: {
    canonical: "/",
  },
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
