import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link  from 'next/link'
import Image from "next/image"
// import test from '../../../hooks/test'

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <div className="fixed bottom-0 text-gray-400 z-20">
      </div>
    </footer>
  )
}