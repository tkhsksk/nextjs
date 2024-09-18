import type { Metadata } from "next";
// import Image from "next/image";
// import Test from '@/app/common';
import SyntaxHighlighter from "react-syntax-highlighter";
import { gml } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import fs from 'fs'

export const metadata: Metadata = {
   title: 'python｜'+process.env.SITE_TITLE,
   description: "について",
};

function getFilePhp(file: string) {
   const text  = fs.readFileSync("../php/"+file+".php", 'utf8')
   const lines = text.toString().split('¥n')
   return lines
}

function getFile(file: string) {
   const text  = fs.readFileSync(".."+file+"", 'utf8')
   const lines = text.toString().split('¥n')
   return lines
}

function Syntax(lang: string, code: string) {
   return <div className="grid"><SyntaxHighlighter language={lang} style={gml} className="my-3">{code}</SyntaxHighlighter></div>;
}

function WrapCode(txt: string) {
   return <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">python</span><span className="text-md">について</span></h1>
      <p>本項目ではpythonの書き方について、基本から応用までを学習し、<br />最終はフレームワーク{WrapCode('django')}にて基本動作の作成まで進めます</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody>
            <tr>
               <th className="pr-4">python</th><td>v3.12.5</td>
            </tr>
            <tr>
               <th className="pr-4">laravel</th><td>v10.41.0</td>
            </tr>
            <tr>
               <th className="pr-4">mysql</th><td>v11.5.2-MariaDB</td>
            </tr>
            </tbody>
         </table>
      </div>

      <section>
         <h2 className="text-2xl font-semibold mb-3">Hello World、変数</h2>
         <p className="leading-7 mb-3">文字列としてHello Worldの出力、変数への代入について記述します</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">Hello World.</h3>
            <p className="leading-7">phpで文字列を表示する場合は、以下の表記で実行できます</p>
            {Syntax('php',getFilePhp("helloWorld"))}
            <p className="leading-7 mb-3">Hello World.以外の文字列を表記する場合は、上記コードのHello World.部分をそれ以外の文字列に置き換えるだけです<br />次にphpの文字列を改行したい場合があります、htmlでは単純に{WrapCode('br')}タグのみで改行できましたがphpで実行した場合以下の出力になります
            </p>
            <p className="font-semibold">実行内容</p>
            {Syntax('php',getFilePhp("helloWorld_br"))}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','Hello World.<br />Bye world.')}
            <p className="mb-3">htmlタグをphpの文中挟むとそのまま表示されてしまいます。<br />php中の改行には\nを用います。</p>
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','Hello World.\nBye world.')}

               <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数</h3>
            <p className="leading-7">文字列にテキストや数値を格納しておくことも可能です<br />中学生の数学で学習したx=1,y=2と同じ要領です</p>
               <p className="font-semibold">実行内容</p>
            {Syntax('php',getFilePhp("var"))}
               <p className="font-semibold">実行結果</p>
               {Syntax('shell','test')}
            <p className="mb-3">{WrapCode('x="test";')}でxにtestを格納し、それをechoで呼び出します<br />文字を結合する場合にはx,yにそれぞれの文字列を格納して.(ドット)で結合することができます</p>
            <p className="font-semibold">実行内容</p>
            {Syntax('php',getFilePhp("join"))}
            <p className="font-semibold">実行結果</p>
               {Syntax('shell','testhoge')}
         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">計算と型</h2>
         <p className="leading-7 mb-3">数字での計算（足し算、引き算、掛け算、割り算）と型について</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">計算</h3>
            <p className="leading-7">単純にプラスの符号を用いて、足し算をします</p>
            {Syntax('php',getFilePhp("calc01"))}
            <p className="font-semibold">実行結果</p>
               {Syntax('shell','6')}
            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            {Syntax('php',getFilePhp("calc02"))}
            <p className="font-semibold">実行結果</p>
               {Syntax('shell','4\n6\n3')}
            <p className="mb-3">次に変数に数字を代入して計算をしてみます、数字の場合はダブルクォーテーションで囲む必要はありません</p>
            <p className="font-semibold">実行内容</p>
            {Syntax('php',getFilePhp("calc03"))}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','5')}
            <p>phpではこれでも全く問題はないのですが、本来は型を宣言する必要があります<br />次の章で解説します</p>

               <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">型宣言</h3>
            <p className="leading-7">本来、変数に値を代入する場合は、型の宣言が必要です<br />phpの場合、そこが非常に曖昧になっているため宣言せずとも計算が可能ですが<br />宣言した上での計算をしましょう</p>
            <p className="leading-7 mb-3">例えば7という文字があった場合、文字としての7とも捉えられるし、数字としての7とも捉えられます<br />この7は数字としての7
            だよ、と宣言するのが型宣言です</p>
            {Syntax('php',getFilePhp("type_int"))}
            <p className="leading-7 mb-3">代入する値を入力する前に(int)をつけるだけで、「数字の7」と宣言することができます<br />では、以下の場合どうなるでしょうか</p>
            {Syntax('php',getFilePhp("type_str"))}
            <p className="mb-3">文字列としての7と8を宣言して、それを足しています</p>
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','15')}
            <p className="mb-3">文字列と宣言しても、足し算が可能です<br />型を宣言せずに足し算や結合ができる言語は極めて特殊です</p>
         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">配列、for、foreach</h2>
         <p className="leading-7 mb-3">配列の作り方と各種回し方について</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">配列</h3>
            <p className="leading-7 mb-3">この配列について、phpの学習上でつまづきました<br />そもそもなぜ配列が必要なのか？について的確に解説をしているサイトも参考書もなかったからです<br />自分が学習上で学び、配列の有効性について独自解釈しましたのでそれを以下に記載します</p>
            <h3 className="text-lg font-semibold mb-3">配列は一覧表示、データの検索、繰り返しに便利</h3>
            <p className="leading-7 mb-3">まず、1000ほどもあるデータを変数に代入するとします<br />その場合、変数も1000準備しなければなりません<br />特にデータは1000どころか10000、ときには100000になる場合もあります<br />これを解消できるのが配列です</p>
            <div className="w-full mb-3">
               <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                     <div className="items-center justify-center dark:bg-gray-800">
                     <p><span className="font-semibold">変数</span>で表現する場合</p>
                        {Syntax('php',getFilePhp("array01"))}
                     </div>
                     <div className="items-center justify-center dark:bg-gray-800">
                     <p><span className="font-semibold">配列</span>で表現する場合</p>
                        {Syntax('php',getFilePhp("array02"))}
                     </div>
                  </div>
               </div>
            </div>
            <p className="leading-7 mb-3">上記どちらの場合でも、データを格納しそれを表示させることができますが、<br />
            配列の方が圧倒的に合理的です<br />
            また、配列は一覧表示にも有効です<br />
            forもしくはforeachで回せますが、回数や順番で制限したい場合はfor、全てを表示させたい場合はforeachで表示させるのが一般的です<br />
            とはいえ、実際にどのような違いがあるのか分かりにくいので、稼働させて確認するのが一番分かりやすいでしょう</p>
            <p className="font-semibold">forで配列を回す</p>
            {Syntax('php',getFilePhp("for"))}
            <p className="leading-7 mb-3">上記構文をざっくりした解説はコメントアウトにて説明されていますが、<br />
            $xの配列の0番目、1番目...と続き、3番目までをechoする構文です<br />
            もちろんfor文で配列を表示させることは可能ですし、具体的にx番目からx番目まで表示、などの場合は有効なのですが<br />
            例えば配列が何番目まで存在しているかが不明なケースは存在していない配列を指定するとエラーが発生するため、issetもしくはemptyなどを必要とします<br />
            数に関わらず、配列が全て表示され切るまで表示させる場合はforeachが有効でしょう</p>
            <p className="font-semibold">foreachで配列を回す</p>
            {Syntax('php',getFilePhp("foreach"))}
            <p className="leading-7 mb-3">数の指定などをしなくても、すべての配列が表示されます<br />
            forとforeachは似ているようで異なっているため、用途に基づいて利用しましょう</p>

            <hr className="my-5" />

            <p className="font-semibold">データの検索</p>
            <p className="leading-7 mb-3">配列から配列を作成することで、簡易的なデータ検索が可能です<br />
            配列を回して、その中で該当となるデータのみ格納する配列を新規に作成すると、検索済みデータの配列を作成できます</p>
            <p>実際のコードは以下です</p>
            {Syntax('php',getFilePhp("foreach_search"))}
            <p>新規に検索データの配列を作成する場合はforよりも、<br />
            繰り返しの処理に向いている、foreachの方が分かりやすく且つ作りやすい構造です<br /><br />
            繰り返しの処理で言うと、例えばすべてのデータに🐶をつける場合も</p>
            {Syntax('php',getFilePhp("foreach_dogs"))}
            {Syntax('sh', getFile("/sh/delete_result.sh"))}
            <p>で可能です<br />
            phpを深く学ぶまで配列の利点はわかりにくいものですが、<br />
            実務で利用するにあたり、検索や繰り返しの処理で重要な役割を果たしていることに気づきました</p>

         </div>

      </section>

      </main>
    </div>
  );
}
