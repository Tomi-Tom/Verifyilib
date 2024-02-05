import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import VerAppBar from "@/components/VerAppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verifyilib",
  description: "A playground website for some of my projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <VerAppBar />
        {children}
      </body>
    </html>
  );
}
