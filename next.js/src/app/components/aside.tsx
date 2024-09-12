'use client';

import Link  from 'next/link'
import Image from "next/image";
import Datas from "../../../data.json"

const handleClick = () => {
  alert(123);
}

export default function Aside() {

  return (
    <aside className="flex justify-center bg-gray-100 h-40 h-full">
      <div className="fixed top-0 left-0 p-4">
      <Link href="/">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </Link>

      <button onClick={handleClick}>
        ボタン
      </button>

      <ul>
        {Datas.menus.map(item => {
          return <li key={item}>{item.title}</li>;
      })}
      </ul>
      </div>
    </aside>
  )

}