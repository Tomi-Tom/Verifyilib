import {Inter} from "next/font/google";
import type {Metadata} from "next";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verifyilib",
  description: "A playground website for some of my projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    {children}
    </body>
    </html>
  )
}