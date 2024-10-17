'use client';

import { usePathname } from "next/navigation";
import Link  from 'next/link'
import Image from "next/image";
import Datas from "../../../data.json"
import React, { useState } from "react";
import { useEffect } from 'react'

export default function Aside() {
  const pathname = usePathname()
  //const searchParams = useSearchParams()

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active)
  }

  useEffect(() => {
    setActive(false)
  }, [pathname])

  return (
    <aside className="flex justify-center h-40 h-full">
      <div className="fixed top-0 left-0 p-4 bg-white">
      <Link href="/" onClick={handleClick} className={active ? "hidden" : "inline"}>
        <Image
          className="mb-3"
          src={pathname+'.png'}
          alt="Next.js logo {'/'+pathname+'.png'}"
          width={180}
          height={38}
          priority
        />
      </Link>

      <div className={active ? "flex svg-loader mb-3" : "hidden svg-loader mb-3"}>
        <svg className="svg-container" height={100} width={100} viewBox="0 0 100 100">
          <circle className="loader-svg bg" cx={50} cy={50} r={45}></circle>
          <circle className="loader-svg animate" cx={50} cy={50} r={45}></circle>
        </svg>
      </div>

      <button className="hidden">
        ボタン
      </button>
      <ul>
      {Datas.menus.map(item =>
      {
        //const active_link = (pathname == item.title ? 'yes': '');
        return (
          <li className='font-[family-name:var(--font-geist-mono)]' key={item.id}>
            <Link className={pathname == '/'+item.title ? 'font-bold': ''} onClick={handleClick} href={{ pathname:item.title}}>{item.title}</Link>
            {pathname == '/'+item.title ? <ul className='mb-2 pt-2'>{item.subs.map(item => 
              {
                return (<li className='text-[#5B995B] text-slate-400 text-sm leading-5' key="id"><Link href={'#'+item}>{item}</Link></li>);
              })}
            </ul>: ''}
          </li>);
      })}
      </ul>
      </div>
    </aside>
    
  )

}