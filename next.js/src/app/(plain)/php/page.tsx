import type { Metadata } from "next";
// import Image from "next/image";
// import Test from '@/app/common';
import SyntaxHighlighter from "react-syntax-highlighter";
import { gml } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import fs from 'fs'

export const metadata: Metadata = {
   title: 'php｜'+process.env.SITE_TITLE,
   description: "について",
};

function Syntax(lang: string, code: string) {
   return <div className="grid"><SyntaxHighlighter language={lang} style={gml} className="my-3">{code}</SyntaxHighlighter></div>;
}

function SyntaxCode(lang: string, code: string) {
   const text  = fs.readFileSync("../"+lang+"/"+code+"."+lang+"", 'utf8')
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
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">php</span><span className="text-md">について</span></h1>
      <p>本項目ではphpの書き方について、基本から応用までを学習し、<br />最終はフレームワーク{WrapCode('laravel')}にて基本動作の作成まで進めます</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody>
            <tr>
               <th className="pr-4">php</th><td>v8.3.7</td>
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
            {SyntaxCode('php','helloWorld')}
            <p className="leading-7 mb-3">Hello World.以外の文字列を表記する場合は、上記コードのHello World.部分をそれ以外の文字列に置き換えるだけです<br />次にphpの文字列を改行したい場合があります、htmlでは単純に{WrapCode('br')}タグのみで改行できましたがphpで実行した場合以下の出力になります
            </p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('php','helloWorld_br')}
            <p className="mb-3">htmlタグをphpの文中挟むとそのまま表示されてしまいます。<br />php中の改行には\nを用います。</p>
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','Hello World.\nBye world.')}

               <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数</h3>
            <p className="leading-7">文字列にテキストや数値を格納しておくことも可能です<br />中学生の数学で学習したx=1,y=2と同じ要領です</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('php','var')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','test')}
            <p className="mb-3">{WrapCode('x="test";')}でxにtestを格納し、それをechoで呼び出します<br />文字を結合する場合にはx,yにそれぞれの文字列を格納して.(ドット)で結合することができます</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('php','join')}
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
            {SyntaxCode('php','calc01')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','6')}
            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('php','calc02')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','4\n6\n3')}
            <p className="mb-3">次に変数に数字を代入して計算をしてみます、数字の場合はダブルクォーテーションで囲む必要はありません</p>
            <p className="font-semibold">実行内容</p>
            {SyntaxCode('php','calc03')}
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','5')}
            <p>phpではこれでも全く問題はないのですが、本来は型を宣言する必要があります<br />次の章で解説します</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">型宣言</h3>
            <p className="leading-7">本来、変数に値を代入する場合は、型の宣言が必要です<br />phpの場合、そこが非常に曖昧になっているため宣言せずとも計算が可能ですが<br />宣言した上での計算をしましょう</p>
            <p className="leading-7 mb-3">例えば7という文字があった場合、文字としての7とも捉えられるし、数字としての7とも捉えられます<br />この7は数字としての7
            だよ、と宣言するのが型宣言です</p>
            {SyntaxCode('php','type_int')}
            <p className="leading-7 mb-3">代入する値を入力する前に(int)をつけるだけで、「数字の7」と宣言することができます<br />では、以下の場合どうなるでしょうか</p>
            {SyntaxCode('php','type_str')}
            <p className="mb-3">文字列としての7と8を宣言して、それを足しています</p>
            <p className="font-semibold">実行結果</p>
            {Syntax('shell','15')}
            <p className="mb-3">文字列と宣言しても、足し算が可能です<br />型を宣言せずに足し算や結合ができる言語は極めて特殊です</p>
         </div>

      </section>

      <section>
         <h2 className="text-2xl font-semibold mb-3">関数、Class</h2>
         <p className="leading-7 mb-3">関数の宣言、public private protectedについて</p>

         <div className="p-5 border-l-2">
            <h3 className="text-lg font-semibold mb-3">関数</h3>
            <p className="leading-7">プログラム中に何度も出現する数値を変数に代入することで、再利用が可能ですが<br />計算式や定まった結合などを行う場合は関数を用います<br />以下は2つの数字を足してから1を引く、という計算を何度も使う場合です</p>
            {SyntaxCode('php','function')}
            <p className="mb-3">x,yという変数を設定し、それぞれを足した上で1を引き、それをreturnで返り値にしています<br />この関数をechoで表示することによって計算後の結果を表示させます<br />よって2+3-1が計算され以下が結果となります</p>
            {Syntax('shell','4')}

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">Class</h3>
            <p className="leading-7 mb-3">また関数を使う場合、その関数をさらに囲うためにClassというものがというものが定義できます<br />利点としては、1つのサイト内でfunctionの数は何十にも及ぶ可能性があるため、それらをclassでまとめる際に有効です<br />このClassの設定、またClass内の関数を利用する場合の例を以下に示します</p>
            {SyntaxCode('php','class')}
            <p className="leading-7 mb-3">基本的な説明は、コード内にコメントアウトで表記していますが、functionのアクセス修飾子については以下に詳細を表記します</p>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                <table class="w-full text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead class="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                修飾子名
                            </th>
                            <th scope="col" class="px-6 py-3">
                                class外で取得できるか
                            </th>
                            <th scope="col" class="px-6 py-3">
                                class外で取得する方法
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                public
                            </th>
                            <td class="px-6 py-4">
                                できる
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                protected
                            </th>
                            <td class="px-6 py-4">
                                できない
                            </td>
                            <td class="px-6 py-4">
                                classを継承する
                            </td>
                        </tr>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                private
                            </th>
                            <td class="px-6 py-4">
                                できない
                            </td>
                            <td class="px-6 py-4">
                                なし
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="leading-7 mb-3">アクセス修飾子にルールは特にないですが、そのclass内のみで利用する場合はなるべくprivate、<br />各所で利用するfunctionの場合はpublicにするなど、セキュリティ対策として有効です</p>

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
                        {SyntaxCode('php','array01')}
                     </div>
                     <div className="items-center justify-center dark:bg-gray-800">
                     <p><span className="font-semibold">配列</span>で表現する場合</p>
                        {SyntaxCode('php','array02')}
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
            {SyntaxCode('php','for')}
            <p className="leading-7 mb-3">上記構文をざっくりした解説はコメントアウトにて説明されていますが、<br />
            $xの配列の0番目、1番目...と続き、3番目までをechoする構文です<br />
            もちろんfor文で配列を表示させることは可能ですし、具体的にx番目からx番目まで表示、などの場合は有効なのですが<br />
            例えば配列が何番目まで存在しているかが不明なケースは存在していない配列を指定するとエラーが発生するため、issetもしくはemptyなどを必要とします<br />
            数に関わらず、配列が全て表示され切るまで表示させる場合はforeachが有効でしょう</p>
            <p className="font-semibold">foreachで配列を回す</p>
            {SyntaxCode('php','foreach')}
            <p className="leading-7 mb-3">数の指定などをしなくても、すべての配列が表示されます<br />
            forとforeachは似ているようで異なっているため、用途に基づいて利用しましょう</p>

            <hr className="my-5" />

            <p className="font-semibold">データの検索</p>
            <p className="leading-7 mb-3">配列から配列を作成することで、簡易的なデータ検索が可能です<br />
            配列を回して、その中で該当となるデータのみ格納する配列を新規に作成すると、検索済みデータの配列を作成できます</p>
            <p>実際のコードは以下です</p>
            {SyntaxCode('php','foreach_search')}
            <p>新規に検索データの配列を作成する場合はforよりも、<br />
            繰り返しの処理に向いている、foreachの方が分かりやすく且つ作りやすい構造です<br /><br />
            繰り返しの処理で言うと、例えばすべてのデータに🐶をつける場合も</p>
            {SyntaxCode('php','foreach_dogs')}
            <p>で可能です<br />
            phpを深く学ぶまで配列の利点はわかりにくいものですが、<br />
            実務で利用するにあたり、検索や繰り返しの処理で重要な役割を果たしていることに気づきました</p>

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
