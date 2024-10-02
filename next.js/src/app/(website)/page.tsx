
import type { Metadata } from "next";
import Link  from 'next/link'
import Image from "next/image";
import Datas from "../../../data.json"

export const metadata: Metadata = {
  title: 'Home｜'+process.env.SITE_TITLE,
  description: "kskのポートレート",
};
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/about.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <ul>
          {Datas.menus.map(item => {
            return <li className="font-[family-name:var(--font-geist-mono)]" key={item.id}><Link href={{ pathname:item.title}}>{item.title}</Link></li>;
          })}
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
