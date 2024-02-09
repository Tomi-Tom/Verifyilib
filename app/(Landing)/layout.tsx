'use client'

import React from "react";
import "@/styles/globals.css";
import VerAppBar from "@/components/VerAppBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <VerAppBar />
      <div className="min-h-screen min-w-screen bg-gray-200 p-8">
        <div className="container mx-auto bg-white p-4 rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
}
