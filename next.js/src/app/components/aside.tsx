'use client';

import { usePathname } from "next/navigation";
import Link  from 'next/link'
import Image from "next/image";
import Datas from "../../../data.json"

const handleClick = () => {
  alert(123);
}

export default function Aside() {
  const pathname = usePathname()

  return (
    <aside className="flex justify-center bg-gray-100 h-40 h-full">
      <div className="fixed top-0 left-0 p-4">
      <Link href="/">
        <Image
          className="dark:invert mb-3"
          src="/test.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </Link>
      <button className="hidden" onClick={handleClick}>
        ボタン
      </button>
      <ul>
      {Datas.menus.map(item =>
      {
        //const active_link = (pathname == item.title ? 'yes': '');
        return <li className="font-[family-name:var(--font-geist-mono)]" key={item.id}><Link className={pathname == '/'+item.title ? 'text-teal-500': ''} href={{ pathname:item.title}}>{item.title}</Link></li>;
      })}
      </ul>
      </div>
    </aside>
  )

}