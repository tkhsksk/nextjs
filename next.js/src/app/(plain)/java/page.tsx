import type { Metadata } from "next";
// import Image from "next/image";
// import Test from '@/app/common';
import SyntaxHighlighter from "react-syntax-highlighter";
import { gml } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import fs from 'fs'

export const metadata: Metadata = {
   title: 'java｜'+process.env.SITE_TITLE,
   description: "について",
};

function Syntax(lang: string, code: string) {
   return <div className="grid">
   <SyntaxHighlighter language={lang} style={gml} className="my-3">{code}</SyntaxHighlighter>
   </div>;
}

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
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">java</span><span className="text-md">について</span></h1>
      <p>本項目ではphpの書き方について、基本から応用までを学習し、<br />最終はフレームワーク{WrapCode('spring boot')}にて基本動作の作成まで進めます</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody>
            <tr>
               <th className="pr-4">java</th><td>openjdk version 23</td>
            </tr>
            <tr>
               <th className="pr-4">spring boot</th><td>v</td>
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
            <p className="leading-7">まず、{WrapCode('java')}はphpやpythonと違いコンパイラ言語であるため、ファイルをそのままは実行できないので<br />
            ファイルをコンパイルする必要がある<br />
            その手順を含めてHello World.を出力する方法を記載します<br />
            {WrapCode('java')}で文字列を表示する場合は、以下の表記で実行できます</p>
            {SyntaxCode('java','Helloworld')}
            <p className="leading-7 mb-3">{WrapCode('java')}の構文は{WrapCode('class')}および{WrapCode('public static void main(String[] args)')}が必要です<br />
            基本的にこの体系がないとコンパイルの時点でエラーが発生するのでエラーメッセージを元に確認しましょう<br />
            この.javaファイルに対して以下のコマンドを実行しコンパイルします</p>
            {SyntaxCode('sh','javac')}
            <p className="mb-3">コンパイル実行後、{WrapCode('Helloworld.class')}ファイルが生成されます<br />
            .classファイルの中身は機械語のため、英語と数字の羅列があります<br />
            この.classファイルをさらに以下のコマンドで実行しましょう</p>
            {SyntaxCode('sh','java')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','Hello World.')}
            <p className="mb-3">改行については多言語と同じく{WrapCode('\\n')}を用います。</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数と型宣言</h3>
            <p className="leading-7">文字列にテキストや数値を格納しておくことも可能です<br />中学生の数学で学習したx=1,y=2と同じ要領です</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('java','type_int')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','hoge')}
            <p className="mb-3">{WrapCode('String x = "hoge";')}でxにhogeを格納し、それを{WrapCode('System.out.println()')}で呼び出します<br />
            文字を結合する場合にはx,yにそれぞれの文字列を格納して+(プラス)で結合することができます</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('java','join')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','hogepiyo')}
         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">計算と型宣言</h2>
         <p className="leading-7 mb-3">数字での計算（足し算、引き算、掛け算、割り算）と型について</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">計算</h3>
            <p className="leading-7">単純にプラスの符号を用いて、足し算をします</p>
            {SyntaxCode('java','add')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','16')}
            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('java','calc')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','6\n25\n2')}
            <p className="leading-7 mb-3">では、文字を{WrapCode('int')}型にせず{WrapCode('string')}型でプラス符号を使ったらどうなるでしょうか</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('java','string')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','52')}
            <p>この場合{WrapCode('string')}で文字列として宣言しているため、足し算は行われず結合のみ行われます</p>
         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">関数、Class</h2>
         <p className="leading-7 mb-3">関数の宣言、public private protectedについて</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">Class</h3>
            <p className="leading-7 mb-3">{WrapCode('java')}ではデフォルトで{WrapCode('main')}関数が設定されているので、{WrapCode('main')}はそのまま宣言します<br />
            同じクラス内で他の関数を宣言し、そこから取得するパターンを試してみましょう<br />
            以下は別関数で足し算して、その関数結果を取得して表示しています</p>
            {SyntaxCode('java','class_sub')}
            <p className="leading-7 mb-3">基本的な説明は、コード内にコメントアウトで表記していますが、{WrapCode('function')}のアクセス修飾子については以下に詳細を表記します</p>

            <div className="relative overflow-x-auto sm:rounded-lg mb-4">
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
                                できない
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

            <p className="leading-7 mb-3">アクセス修飾子にルールは特にないですが、そのclass内のみで利用する場合はなるべくprivate、<br />
            各所で利用する{WrapCode('function')}の場合は{WrapCode('public')}にするなど、セキュリティ対策として有効です<br />
            基本的に{WrapCode('java')}と{WrapCode('python')}は似ていますね</p>

         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">配列、for、foreach</h2>
         <p className="leading-7 mb-3">配列の作り方と各種回し方について</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">配列</h3>
            <p className="leading-7 mb-3">また、配列は一覧表示に有効です<br />
            javaでは{WrapCode("for")}と{WrapCode("forEach")}どちらも使えます<br />
            具体的には以下のように回します</p>
            <p className="font-semibold">forで配列を「回数制限して」回す</p>
            {SyntaxCode('java','for')}
            <p className="font-semibold">forで配列を「最後まで」回す</p>
            {SyntaxCode('java','forEnd')}

            <hr className="my-5" />

            <p className="mb-3">次に{WrapCode('forEach')}で回すケースです<br />
            配列を宣言する場合もさまざまな宣言方法があるので、一挙宣言して回してみましょう</p>
            {SyntaxCode('java','forEach')}
            <p className="leading-7 mb-3">Mapsのみ引数を2つ用意する必要があるので、インデックスも取得しています<br />
            ところが、通常の配列を{WrapCode('forEach')}ではインデックスを取得できないとのことで<br />
            通常の配列でインデックスを使う場合は、for文で回す必要があるようです</p>

            <hr className="my-5" />

            <p className="font-semibold">多次元配列</p>
            <p className="leading-7 mb-3">一つの要素に複数の情報を含めたいときに利用する多次元配列を利用する場合です<br />
            この場合以下のように設定し、取得します</p>
            <p className="font-semibold">多次元配列</p>
            {SyntaxCode('java','forEachIn')}
            <p className="leading-7 mb-3">本来は{WrapCode('{0,"test"}')}として、インデックスは{WrapCode('int')}で取得したいところですが、<br />
            多次元配列に複数の型を宣言できないようなので、{WrapCode('String')}で数字を入力しています</p>

            <hr className="my-5" />

            <p className="font-semibold">データの検索</p>
            <p className="leading-7 mb-3">配列から配列を作成することで、簡易的なデータ検索が可能です<br />
            配列を回して、その中で該当となるデータのみ格納する配列を新規に作成すると、検索済みデータの配列を作成できます</p>
            <p>まずは{WrapCode('if')}で表示するのみの場合</p>
            {SyntaxCode('java','IfElse')}
            <p>また新規にデータ配列を作成する場合は、空の配列を作成して、{WrapCode('for文')}と{WrapCode('if文')}で配列に格納していきます</p>
            {SyntaxCode('java','Search')}
            <p>新規に検索データの配列を作成する場合は{WrapCode('for')}よりも、<br />
            繰り返しの処理に向いている、{WrapCode('forEach')}の方が分かりやすく且つ作りやすい構造です<br />
            ただしインデックスを付けたい場合などの場合は、{WrapCode('Map')}や{WrapCode('for文')}を使うなど工夫しなければなりません<br />
            また配列の作成は前述にもあるとおり複数あるので、ある程度自分の中で特定の{WrapCode('import')}などを確定させる必要があります<br /><br />
            繰り返しの処理で言うと、例えばすべてのデータに🐶をつける場合も</p>
            {SyntaxCode('java','Dog')}
            <p>で可能です<br />
            {WrapCode('java')}ではやはり複数の方法があるため、逆に分かりづらい部分も多そうです</p>

         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">CRUD</h2>
         <p className="leading-7 mb-3">dbにおける作成（Create）、読み出し（Read）、更新（Update）、削除（Delete）を一挙解説</p>

         <div className="p-5 border-l-2">
            <p className="font-semibold mb-3">CRUDを始める前に</p>
            <p className="leading-7 mb-3">前提としてmysqlにdatabase名(php)を作成、user(guest)を作成し、guestに対してphpへのすべての権限を付与しています<br />
            データベースphpにはtoyというテーブルを作成し、id,nameをカラムとして登録しました</p>
            {SyntaxCode('sh','db')}

            <hr className="my-5" />

            <p className="font-semibold mb-3">Create</p>
            <p className="leading-7">早速crudのc、create(作成)から開始します<br />
            php上でcreate(dbの追加)するケースもありますが、ほとんどの場合{WrapCode('insert')}(データの追加)が多いです<br />
            よってcreateよりも先に{WrapCode('insert')}について記載します<br />
            {WrapCode('insert')}には各種方法がありますが、mysqliにて{WrapCode('insert')}する例を示します<br />
            データベース{WrapCode('php')}、テーブル{WrapCode('toy')}に{WrapCode('id:1、name:bear')}をinsertするphpが以下です</p>
            {SyntaxCode('php','create')}
            <p>実際に登録されたかどうかを確認するために<br />
            データを読み込む、readするphpを作成する前に、shell上でコマンドを利用し中身を見てみましょう</p>
            {SyntaxCode('sh','create_result')}

            <hr className="my-5" />

            <p className="font-semibold mb-3">Read</p>
            <p>dbを直に覗くとデータが追加されていることが確認できました<br />
            insertを応用すれば、ecサイトの会員登録、商品登録、カテゴリー登録など、または情報サイトへの情報登録、ブログサイトへの日記登録などに活用できます<br />
            ですが実際に各種サイトデータを利用する場合は、登録後にread(読み込み)し出力させなければなりません</p>
            <p>それではphpから{WrapCode('select')}を使って出力してみます</p>
            {SyntaxCode('php','read')}
            <p>var_dumpで出力することができました</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Update</p>
            <p>dbに登録したデータを変更したい場合もあるかと思います、その場合は{WrapCode('update')}を使ってデータを更新します<br />
            先ほど{WrapCode('insert')}したデータをbear→robotに{WrapCode('update')}してみましょう</p>
            {SyntaxCode('php','update')}
            <p>実際に更新されたことを確認しましょう</p>
            {SyntaxCode('sh','update_result')}

            <hr className="my-5" />

            <p className="font-semibold mb-3">Delete</p>
            <p>実際にはdbからデータを削除することはほぼなくデータベースを設計する際にvisibleなどの項目を設け、<br />
            そこに公開非公開をフラッグとすることが多いです<br />
            特にdbからデータを削除してしまうと二度とデータを閲覧できなくなってしまいます<br />
            そのため、deleteするケースは少ないですが、deleteする場合は{WrapCode('delete')}を使ってデータを更新します</p>
            {SyntaxCode('php','delete')}
            <p>実際に削除されたことを確認しましょう</p>
            {SyntaxCode('sh','delete_result')}
         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">POST、GET</h2>
         <p className="leading-7 mb-3">別のページにデータを送る{WrapCode('POST')}、クエリパラメータを取得する{WrapCode('GET')}</p>

         <div className="p-5 border-l-2">
            <p className="font-semibold mb-3">htmlページに密接に関わる</p>
            <p className="leading-7">{WrapCode('POST')}は「登録する」ボタンなどをクリックした際に別ページやコントローラなどにデータを受け渡し、処理する際に利用します<br />
            また、getは主にクエリパラメータを取得しています<br />
            ページロード時に消えてしまう{WrapCode('POST')}に対して、{WrapCode('GET')}はurl上のパラメータを取得するため、反恒久的にデータを保持することが可能です<br />
            {WrapCode('POST,GET')}も実行できるphpを作成する予定でしたが<br />
            htmlも関わってくるため、実行できるはずのプログラムを以下に示します</p>
            {SyntaxCode('php','post_get')}
         </div>

      </section>

      </main>
    </div>
  );
}
