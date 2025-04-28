import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vækst AS skaber vaekst - Firma Foredrag",
  description:
    "Carsten Sommeskov har over 30 års erfaring som foredragsholder . Positivitet der virker og holder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${inter.variable} antialiased flex min-h-screen flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
