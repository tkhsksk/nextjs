'use client';

import localFont from "next/font/local";
import "@/app/globals.css";

import Header from '@components/header';
import Aside  from '@components/aside';
import Footer from '@components/footer';

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
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="grid grid-cols-4 gap-4 min-h-screen">
          <Aside />
            {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
