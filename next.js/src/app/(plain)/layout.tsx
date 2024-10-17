'use client';

import localFont from "next/font/local";
import "@/app/globals.css";
import "@/../public/css/customize.css";
import { useEffect } from 'react'

import Header from '@components/header';
import Aside  from '@components/aside';
import Footer from '@components/footer';
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function PlainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState(false);
  const pathname = usePathname()

  const handleClick = () => {
    setActive(!active)
  }

  useEffect(() => {
    setActive(false)
  }, [pathname])

  return (
    <html lang="ja" className={active ? "active" : "deactive"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased sm:text-base text-sm`}
      >
        <Header />
        <div className="grid grid-cols-4 min-h-screen">
          <Aside />
          {children}
        </div>
        <Footer />

        <div className="w-full sm:hidden fixed bottom-0 z-20">
          <div className="text-gray-400 flex justify-center">
            <button onClick={handleClick}>
              <Image
                className="mb-3"
                src={pathname+'.png'}
                alt="Next.js logo {'/'+pathname+'.png'}"
                width={60}
                height={60}
                priority
              />
            </button>
          </div>
        </div>

      </body>
    </html>
  );
}
