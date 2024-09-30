import type { Metadata } from "next";
// import Image from "next/image";
// import Test from '@/app/common';
import SyntaxHighlighter from "react-syntax-highlighter";
import { gml } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import fs from 'fs'

export const metadata: Metadata = {
   title: 'JavaScript｜'+process.env.SITE_TITLE,
   description: "について",
};

function SyntaxCode(lang: string, code: string) {
   const text  = fs.readFileSync("../"+lang+"/"+code+"."+lang+"", 'utf8')
   const lines = text.toString().split('¥n')
   return <div className="grid">
   <p className="absolute text-base px-2 bg-slate-500 text-white">{code}.{lang}</p>
   <SyntaxHighlighter language={lang} style={gml} className="mb-3 mt-6">{lines}</SyntaxHighlighter>
   </div>;
}

function WrapCode(txt: string) {
   return <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">JavaScript</span><span className="text-md">について</span></h1>
      <p>本項目ではJavaScriptの書き方について、基本のみを学習し、<br />
      主に本サイトで利用している{WrapCode('next.js')}についての説明をしていきます</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody>
            <tr>
               <th className="pr-4">server</th><td>Amazon Linux 2023</td>
            </tr>
            <tr>
               <th className="pr-4">node.js</th><td>v22.8.0</td>
            </tr>
            <tr>
               <th className="pr-4">npm</th><td>v10.8.2</td>
            </tr>
            <tr>
               <th className="pr-4">next.js</th><td>v14.2.9</td>
            </tr>
            <tr>
               <th className="pr-4">mysql</th><td>v11.5.2-MariaDB</td>
            </tr>
            </tbody>
         </table>
      </div>

      <section id="basis">
         <h2 className="text-2xl font-semibold mb-3">基本操作</h2>
         <p className="leading-7 mb-3">本サイトを作成するにあたり、next.jsを導入しています<br />
         next.jsが動作する環境を構築しつつ、基本動作についても学んでいきます</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">各種インストール</h3>
            <p className="leading-7 mb-3">node.jsとnpmが必要なので、まずec2にインストールされているかを確認します</p>
            {SyntaxCode('sh','nextjs/install')}
            <p className="leading-7 mb-3">どちらも導入されていました、ローカルで開発する前提なのでローカルのmacOSは<br />
            後ほどec2環境と一致させます<br />
            その後、サーバー上でnext.jsをinstallします</p>
            {SyntaxCode('sh','nextjs/step1')}
            <p className="leading-7 mb-3">git環境とapacheの環境構築に関しては省略しますが、あらかじめ設定済みです<br />
            この時点でドメインにアクセスするとnext.jsが確認できますが、<br />
            サーバーからexitすると{WrapCode('npm run start')}が無効となり、表示ができなくなります</p>
            <p className="leading-7 mb-3">サーバーからexitで抜けた後も起動させ続けるコマンドを実行します</p>
            {SyntaxCode('sh','nextjs/step2')}
            <p className="leading-7 mb-3">上記コマンドでとりあえず実行できます<br />
            現サーバーはなるべく安く済ませられるように最弱のインスタンスにしているため、メモリの少なさから実行できないため<br />
            buildを正常に終わらせるための、キャッシュ削除やswap作成など、オプションコマンドを多数設けてます</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">構造</h3>
            <p className="leading-7 mb-3">app内が主に編集するファイルが集まっています<br />
            その中がどのようなディレクトリ構成になっているかをtreeコマンドで確認しましょう</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('sh','nextjs/tree')}
            <p className="leading-7 mb-3">{WrapCode('(website)')}はasideがないレイアウト<br />
            {WrapCode('(plain)')}はasideがあるレイアウトのページファイルを格納します<br />
            試しに{WrapCode('(plain)')}の中身を見てみましょう</p>
            {SyntaxCode('sh','nextjs/tree_plain')}
            <p className="leading-7 mb-3">next.jsではlayout.tsxファイルのレイアウトが以下ディレクトリに適用されるようになっています<br />
            JavaScript,aboutなどのディレクトリは、そのままドメイン以下のpathになります</p>
            <p className="leading-7 mb-3">次にcomponentsの中身を見てみます</p>
            {SyntaxCode('sh','nextjs/tree_components')}
            <p className="leading-7">ここではheaderやfooterなど、すべてのページで共通で使うようなパーツを置きます<br />
            呼び出す場合はまずlayout.tsxの上部でimportしPlainLayoutのreturn内にて呼び出します<br />
            これらを踏まえた上で、next.jsに対しカスタマイズを行います</p>
         </div>

      </section>

      <section id="customize">
         <h2 className="text-2xl font-semibold mb-3">カスタマイズ</h2>
         <p className="leading-7 mb-3">各種コードを各ページに残せるようなページを作成するため、カスタマイズを行います</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">json</h3>
            <p className="leading-7 mb-3">next.js直下にdata.jsonを作成し、ページ内容をjson形式で共通で表示させます<br />
            {WrapCode('import Datas from "../../../data.json"')}</p>
            {SyntaxCode('sh','nextjs/data')}
            <p className="leading-7 mb-3">これによってすべてのページで共通のメニュー内容を表示させることができます</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">コードファイルの読み込み</h3>
            <p className="leading-7 mb-3">各所にコードブロックを標示させる場合に、<br />
            next.jsのページファイル自体に書き込んでしまうと、ページファイル自体のテキスト量が膨大になってしまいます<br />
            また、コード自体は一度実行結果を確認したいため、コードファイル自体はコードファイルとして、保存しておきたいです<br />
            そのためにまず、next.jsが存在するディレクトリの構成を以下のようにしています</p>
            {SyntaxCode('sh','nextjs/tree_root')}
            <p className="leading-7 mb-3">next.js以外のディレクトリには各プログラミング言語の実行ファイルを格納し<br />
            実行ファイルをテキストで読み込み、シンタックスハイライターで表示させる関数をページファイル上で実行しています</p>
            {SyntaxCode('sh','nextjs/code')}
         </div>

      </section>

      </main>
    </div>
  );
}
