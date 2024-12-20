
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
          className="dark:hidden"
          src="/logo.svg"
          alt="logo"
          width={300}
          height={38}
          priority
        />

        <Image
          className="hidden dark:inline"
          src="/logo-dark.svg"
          alt="logo"
          width={300}
          height={38}
          priority
        />

        <ul>
          {Datas.menus.map(item => {
            return (
              <li className="font-[family-name:var(--font-geist-mono)]" key={item.id}>
                <Link href={{ pathname:item.title}}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        
      </main>
    </div>
  );
}
