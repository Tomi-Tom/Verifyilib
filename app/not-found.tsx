import Image from 'next/image';
import VerAppBar from "@/components/VerAppBar";
import React from "react";
import "@/styles/globals.css";

function NotFoundPage() {
  return (
    <html>
      <body>
        <VerAppBar />
        <div className="min-h-screen min-w-screen bg-gray-200 p-8">
          <div className="container mx-auto bg-white p-4 rounded-lg">
            <div className="min-h-screen flex justify-center items-center flex-col">
              <div className="hero-content block text-center">
                <Image src="/not-found.png" className="mx-auto" alt="Page not found" width={700} height={700}/>
                <h1 className="text-4xl font-bold">Page not found</h1>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default NotFoundPage;