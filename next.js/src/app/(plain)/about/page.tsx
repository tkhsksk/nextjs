import type { Metadata } from "next";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gml } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const metadata: Metadata = {
  title: 'about｜'+process.env.SITE_TITLE,
  description: "について",
};

export default function Home() {

   const codeString = [
     '<link rel="shortcut icon" sizes="16x16" href="">',
     '</link>',
   ].join('\n');
   
   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">About me</span><span className="text-md">私について</span></h1>
      <section id="helloWorld">
         <h2 className="text-2xl font-semibold mb-3">biography</h2>
         <p className="leading-7 mb-3">文字列としてHello Worldの出力、変数への代入について記述します</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">Hello World.</h3>
            <p className="leading-7">pythonで文字列を表示する場合は、以下の表記で実行できます</p>
         </div>

      </section>

      <section id="helloWorld">
         <h2 className="text-2xl font-semibold mb-3">history</h2>
         <p className="leading-7 mb-3">文字列としてHello Worldの出力、変数への代入について記述します</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">Hello World.</h3>
            <p className="leading-7">pythonで文字列を表示する場合は、以下の表記で実行できます</p>
         </div>

      </section>


      </main>
    </div>
  );
}
