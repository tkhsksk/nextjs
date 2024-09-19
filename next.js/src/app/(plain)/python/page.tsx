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

function Syntax(lang: string, code: string) {
   return <div className="grid"><SyntaxHighlighter language={lang} style={gml} className="my-3">{code}</SyntaxHighlighter></div>;
}

function SyntaxCode(lang: string, file: string) {
   const text  = fs.readFileSync("../"+lang+"/"+file+"", 'utf8')
   const lines = text.toString().split('¥n')
   return <div className="grid"><SyntaxHighlighter language={lang} style={gml} className="my-3">{lines}</SyntaxHighlighter></div>;
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
            <p className="leading-7">pythonで文字列を表示する場合は、以下の表記で実行できます</p>
            {SyntaxCode('python','helloWorld.py')}
            <p className="leading-7 mb-3">Hello World.以外の文字列を表記する場合は、上記コードのHello World.部分をそれ以外の文字列に置き換えるだけです<br />
            次にpythonの文字列を改行したい場合があります<br />
            htmlでは単純に{WrapCode('br')}タグのみで改行できますがpythonでは、phpと同じく{WrapCode('\\n')}で改行します
            </p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('python','helloWorld_br.py')}

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数と結合</h3>
            <p className="leading-7 mb-3">文字列にテキストや数値を格納しておくことも可能です<br />
            中学生の数学で学習したx=1,y=2と同じ要領です<br />
            変数nameに名前、変数oldに年齢を格納し、文章を作成してみます</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('python','var.py')}
            <p className="mb-3">それぞれに数字と文字を格納して、結合するとエラーが発生しました<br />
            {WrapCode('TypeError: can only concatenate str (not "int") to str')}を確認すると<br />
            str(文字列)にはstr(文字列)しか結合できません、とのことです<br />
            phpでは曖昧になっていた文字列と数字の定義が、pythonではかなり厳格になっていることがわかります<br />
            これを解消するためには2通りの方法があります</p>
            <ol className="mb-3">
               <li>①数字をstr型に変更する</li>
               <li>②print内で(カンマ)結合し引数{WrapCode("sep=''")}を用いてスペースを排除する</li>
               <li>③初期の宣言をstr型にする</li>
            </ol>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('python','join.py')}
            <p>どちらでも可能ですが、変数の再利用や分かりやすさを加味すると前者の方法を採用した方が良いと思います<br />
            よって以降は前者の方法でプログラムを記述していきます</p>
         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">計算と型</h2>
         <p className="leading-7 mb-3">数字での計算（足し算、引き算、掛け算、割り算）と型について</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">計算</h3>
            <p className="leading-7">単純にプラスの符号を用いて、足し算をします</p>
            {SyntaxCode('python','calc01.py')}
            <p className="mb-3">これも型の宣言が重要で、<br />
            1番上はint型同士の足し算、2番目はstr型の結合、3番目はintとstrを結合しようとするためエラーが発生します<br />
            計算時はnum01、num02のようにint宣言した方が良いでしょう</p>
            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('python','calc02.py')}
            <p className="mb-3">phpと同じ符号で計算できますが、pythonでは/(スラッシュ)で割り算をすると、整数の答えが出力されないようです<br />
            //というふうにスラッシュを連続で打つと整数の答えが出力されるようです<br />
            次の変数に代入した上での計算で、実行してみましょう</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('python','calc03.py')}
            <p>ここで気になるのが、割り切れない数で整数割り算した場合、小数点以下がある数を計算した場合です</p>
            {SyntaxCode('python','calc04.py')}
            <p>元の数が少数であれば、割り算で//を利用しても非整数の答えが出て<br />
            掛け算も少数以下まで計算されています<br />
            ところが一番上の計算だけ本来は15.1となるところが、15.100000000000001となります<br />
            これはコンピュータ上で2進数の表現の限界があるため、ずれが生じます<br /><br />
            正確に計算するためには{WrapCode("decimal")}モジュールを利用する必要があるようです<br />
            数字をダブルクォーテーションで囲んだ上で、{WrapCode("Decimal")}で囲んで計算します</p>
            {SyntaxCode('python','calc05.py')}

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">型宣言</h3>
            <p className="leading-7">ここまでの計算記述でわかりますが、strを宣言する場合は"(ダブルクォーテーション)で囲み<br />
            intの場合は囲まずにそのまま代入する、という理解ができます<br />
            またpythonは前述の通り型の宣言に厳しいです<br />
            各種結合を一覧で表示します</p>
            {SyntaxCode('python','type_int.py')}
         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">関数、Class</h2>
         <p className="leading-7 mb-3">関数の宣言、public private protectedについて</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">関数</h3>
            <p className="leading-7">プログラム中に何度も出現する数値を変数に代入することで、再利用が可能ですが<br />
            計算式や定まった結合などを行う場合は関数を用います<br />
            以下は2つの数字を足してから1を引く、という計算を何度も使う場合です</p>
            {SyntaxCode('python','def.py')}
            <p>x,yという変数を設定し、それぞれを足した上で1を引き、それをreturnで返り値にしています<br />
            この関数をprintで表示することによって計算後の結果を表示させます<br />
            よって5+4-1が計算され実行結果となります</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">Class</h3>
            <p className="leading-7 mb-3">また関数を使う場合、その関数をさらに囲うためにClassというものがというものが定義できます<br />
            利点としては、1つのサイト内でdefの数は何十にも及ぶ可能性があるため、それらをclassでまとめる際に有効です<br />このClassの設定、またClass内の関数を利用する場合の例を以下に示します<br />
            phpではpublicやprivateなどで明示的にしていましたが、pythonの場合少し違います</p>
            {SyntaxCode('python','class.py')}
            <p className="mb-3">class内で各種宣言をするには{WrapCode("__init__")}で関数を作成し、<br />
            その関数内でpublic、protected、privateを宣言します<br />
            特にprotectedの定義は外部で取得できたりで曖昧ですが、原則使わないようにします</p>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                <table className="w-full text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                修飾子名
                            </th>
                            <th scope="col" className="px-6 py-3">
                                class外で取得できるか
                            </th>
                            <th scope="col" className="px-6 py-3">
                                class外で取得する方法
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                public
                            </th>
                            <td className="px-6 py-4">
                                できる
                            </td>
                            <td className="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                protected
                            </th>
                            <td className="px-6 py-4">
                                できない(外部では取得できるが、原則しない)
                            </td>
                            <td className="px-6 py-4">
                                classを継承する
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                private
                            </th>
                            <td className="px-6 py-4">
                                できない
                            </td>
                            <td className="px-6 py-4">
                                なし
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </div>
      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">配列、for</h2>
         <p className="leading-7 mb-3">配列の作り方と各種回し方について</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">配列</h3>
            <p className="leading-7 mb-3">また、配列は一覧表示に有効です<br />
            pythonには{WrapCode("foreach")}がなく、{WrapCode("for")}のみです<br />
            具体的には以下のように回します</p>
            <p className="font-semibold">forで配列を回す</p>
            {SyntaxCode('python','for.py')}
            <p className="leading-7 mb-3">forがforeachと同じ機能を果たしていることが分かります<br />
            ではphpでは取得できたインデックスや、phpでのfor文のように回数で制限する場合はどうすれば良いでしょうか<br />
            以下のように表現できます</p>
            <p className="font-semibold">forでインデックスを取得</p>
            <p className="leading-7">インデックスを取得するには{WrapCode("range")}を指定する必要がある</p>
            {SyntaxCode('python','foreach01.py')}
            <p className="font-semibold">forのような表現</p>
            {SyntaxCode('python','foreach02.py')}
            <p className="leading-7 mb-3">pythonでは{WrapCode("for")}のみで{WrapCode("foreach")}と同じ役割を果たします</p>

            <hr className="my-5" />

            <p className="font-semibold">データの検索</p>
            <p className="leading-7 mb-3">phpでは配列から配列を作成することで、データ検索をするのはもちろんのこと<br />
            pythonでは配列を回す際に条件をつけることができます<br />
            例えば、配列のデータに「e」が含まれる場合のみ取得する場合です</p>
            <p className="font-semibold">配列を条件つきで{WrapCode("print")}する</p>
            {SyntaxCode('python','foreach_cond.py')}
            <p className="font-semibold">配列を条件つきで回して配列作成</p>
            {SyntaxCode('python','foreach_search.py')}
            <p>pythonの{WrapCode("for")}はインデントをつけるだけで、括る必要もないので、楽ですね<br /><br />
            繰り返しの処理で言うと、例えばすべてのデータに🐶をつける場合も</p>
            {SyntaxCode('python','foreach_dogs.py')}
            <p>で可能です<br />
            pythonでも{WrapCode("for")}は、phpと同等の機能を持っていて、なおかつforのみで全て賄えるのでシンプルですね</p>

         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">CRUD</h2>
         <p className="leading-7 mb-3">dbにおける作成（Create）、読み出し（Read）、更新（Update）、削除（Delete）を一挙解説</p>

         <div className="p-5 border-l-2">
            <p className="font-semibold mb-3">CRUDを始める前に</p>
            <p className="leading-7 mb-3">前提としてmysqlにdatabase名(python)を作成、user(guest)を作成し、guestに対してpythonへのすべての権限を付与しています<br />
            データベースpythonにはtoyというテーブルを作成し、id,nameをカラムとして登録しました</p>
            {SyntaxCode('sh','db_python.sh')}

            <hr className="my-5" />

            <p className="font-semibold mb-3">Create</p>
            <p className="leading-7">早速crudのc、create(作成)から開始します<br />
            create(dbの追加)するケースもありますが、ほとんどの場合{WrapCode('insert')}(データの追加)が多いです<br />
            よってcreateよりも先に{WrapCode('insert')}について記載します</p>
            {SyntaxCode('php','create.php')}
            <p>実際に登録されたかどうかを確認するために<br />
            データを読み込む、readするphpを作成する前に、shell上でコマンドを利用し中身を見てみましょう</p>
            {SyntaxCode('sh','create_result.sh')}

            <hr className="my-5" />

         </div>

      </section>

      </main>
    </div>
  );
}
