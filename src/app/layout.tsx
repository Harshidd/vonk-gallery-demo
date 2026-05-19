import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/hooks/use-translation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VONK — Contemporary Art by Esra Yiğit Şahin & Onur Şahin",
  description:
    "Contemporary works shaped by colour, surface and shared studio practice. Painting, mixed media and curated collections from the VONK artist duo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
