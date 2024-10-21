import type { Metadata } from "next";

import Image from "next/image"
import Link  from 'next/link'

export const metadata: Metadata = {
  title: 'about｜'+process.env.SITE_TITLE,
  description: "について",
};

function WrapCode(txt: string) {
   return <code className="ms-2 break-all bg-red-100 dark:text-black dark:bg-white/[.8] px-1 py-0.5 font-semibold rounded text-red-500 text-xs">{txt}</code>;
}

function LinkTag(link: string, txt: string) {
   const text = txt ? txt : link;
   return <Link className="ms-2 break-all bg-sky-100 dark:text-black dark:bg-white/[.8] px-1 py-0.5 font-semibold rounded text-sky-500 text-xs" href={link} target="_blank">{text}</Link>;
}

function LinkMark(link: string) {
   return <Link href={link} target="_blank"><i className="ph ph-arrow-square-out ms-1"></i></Link>;
}

export default function Home() {
   
   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">About me</span><span className="text-md">私について</span></h1>
      <section id="biography">
         <h2 className="text-2xl font-semibold mb-2 text-center">biography</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3">かんたんな自己紹介です</p>

         <h3 className="text-lg font-semibold mb-2"><i className="ph ph-user me-2"></i>Introduction</h3>
         <p className="leading-7 mb-3">はじめまして。髙橋と申します。<br />
         大学卒業後、演劇活動、フリーランスを経て株式会社portiaに入社し、大学で学んだ知識を活かしていました。<br />
         株式会社portiaでは、webサイトのコーディングからプログラミングまでを担当し、<br />
         主にサーバー構築からdb定義、社内独自サービスのbtob専用支払い「PortiaPAY」のapi接続から運用までを行なっていました。<br />
         身に付けたスキルを生かし、持続可能な未来に貢献できるキャリアを歩める転職を検討しています。</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">Profile</h3>

            <div className="relative sm:rounded-lg mb-4 grid overflow-hidden w-fit">
            <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
               <tbody className="align-top">
               <tr>
                  <td className="text-right">名前</td><td >｜</td><td>髙橋佳佑（たかはしけいすけ）</td>
               </tr>
               <tr>
                  <td className="text-right">生年月日</td><td >｜</td><td>1990.3.18（満34歳）</td>
               </tr>
               <tr>
                  <td className="text-right">住所</td><td >｜</td><td>〒151-0053<br />
                  東京都渋谷区代々木1-25-10-303</td>
               </tr>
               <tr>
                  <td colSpan={2}></td>
                  <td>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1578.9675478175286!2d139.700217613816!3d35.681906164870846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5p2x5Lqs6YO95riL6LC35Yy65Luj44CF5pyoMS0yNS0xMC0zMDM!5e0!3m2!1sja!2sjp!4v1729230640960!5m2!1sja!2sjp"
                  width={300}
                  height={300}
                  className="my-3"></iframe></td>
               </tr>
               <tr>
                  <td className="text-right">電話番号</td><td >｜</td><td>080-3177-5789</td>
               </tr>
               <tr>
                  <td className="text-right">e-mail</td><td >｜</td><td>tkhsksk0318@gmail.com</td>
               </tr>
               </tbody>
            </table>
            </div>
         </div>

      </section>

      <section id="history" className="w-full">
         <h2 className="text-2xl font-semibold mb-2 text-center">history</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3">大学〜現在までの経歴について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="leading-7 text-center font-semibold"><i className="ph ph-student me-2"></i>学歴</p>
            <h3 className="text-lg font-semibold">2009年4月</h3>
            <p className="leading-7">東京工科大学 コンピュータサイエンス学部入学</p>
            <h3 className="text-lg font-semibold">2013年3月</h3>
            <p className="leading-7">東京工科大学 コンピュータサイエンス学部卒業</p>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold"><i className="ph ph-suitcase-simple me-2"></i>職歴</p>
            <h3 className="text-lg font-semibold">2015年4月</h3>
            <p className="leading-7">株式会社good spell co.設立</p>
            <h3 className="text-lg font-semibold">2016年3月</h3>
            <p className="leading-7">株式会社portia入社</p>
            <h3 className="text-lg font-semibold">2024年10月</h3>
            <p className="leading-7">株式会社portia 一身上の都合により退職</p>
            <p className="leading-7">現在に至る</p>
         </div>

      </section>

      <section id="sitegraphy" className="w-full">
         <h2 className="text-2xl font-semibold mb-2 text-center">sitegraphy</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3">これまでの制作実績と成果について<br />
         主要なものをピックアップ</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">株式会社オプトスタイル様のサイト立ち上げから更新まで</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="font-semibold">https://optstyle.jp/{LinkMark('https://optstyle.jp/')}</p>
                  <p className="text-slate-900">構築環境：php5.6、Symfony、Twig、BootStrap、mysql</p>
               </div>
               <p>企業様からサイト立ち上げのお話をいただき、ecサイトをご希望だったので、無料のec専用フレームワークeccube3にて作成しました。<br />
               購入者は企業様を主な対象としていたため、ポーシャペイ導入をご希望されました、そのため支払い方法にポーシャペイを組み込んでいます。<br />
               他にも確認事項を登録するオプション機能、管理画面より各商品の説明ページを編集する機能などを、カスタマイズで追加しています。<br /><br />
               デザイン、コーディング、フロント・バックエンド、更新作業全てを担当していました。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/opt.jpg'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>
            </div>

            <hr className="my-5" />

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">豊川ハム株式会社様のコーポレートサイト作成</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="font-semibold">https://toyokawahamu.co.jp/{LinkMark('https://toyokawahamu.co.jp/')}</p>
                  <p className="text-slate-900">構築環境：php7.4、BootStrap、mysql</p>
               </div>
               <p>クライアント様にとって初めてのコーポレートサイト立ち上げだったため、クライアント様のもとに出向いて打ち合わせを行いました。<br />
               ご要望として、自社にてサイトのお知らせを更新できる機能があったため、wordpressにて作成しています。<br />
               当初は商品を用いたレシピ集を追加予定だったため、レシピを追加する機能をカスタマイズで作成しています。<br /><br />
               デザイン、コーディング、フロント・バックエンド、更新作業全てを担当していました。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/toyo.png'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>
            </div>

            <hr className="my-5" />

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">豊川ハム株式会社様のecサイト作成と更新およびカスタマイズ</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="font-semibold">https://toyokawahamu-online-store.jp/{LinkMark('https://toyokawahamu-online-store.jp/')}</p>
                  <p className="text-slate-900">構築環境：php7.4、Symfony、Twig、BootStrap、mysql</p>
               </div>
               <p>コーポレートサイトの立ち上げと同時に、ecサイトの立ち上げも同時に行いました。<br />
               卸売サイトのためポーシャペイの導入、量り売り機能、お届けび指定機能を追加しています。<br /><br />
               デザイン、コーディング、フロント・バックエンド、更新作業全てを担当していました。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/toyoec.jpg'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>

            </div>

            <hr className="my-5" />

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">株式会社タスク様のフォレンジックサイト作成</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="font-semibold">https://governance-network.com/{LinkMark('https://governance-network.com/')}</p>
                  <p className="text-slate-900">構築環境：php7.4、BootStrap5、mysql</p>
               </div>
               <p>ipoの企業様より、不正企業を登録できるサイトを作成したいとのご希望がありました。<br />
               当初はワードプレスにて作成する予定でしたが、登録内容の種類と機能面から考えて、phpのみで作成することにしました。<br />
               企業情報の登録に加え、更新情報の登録、管理者登録、用語登録が企画書にあったため、dbのテーブルは5つ作成し、年度別で検索できる機能も付与しています。<br /><br />
               企画、デザイン、コーディング、フロント・バックエンド、ロゴ制作、画像制作全てを担当しています。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/gov.png'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>

            </div>

            <hr className="my-5" />

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">株式会社AXIVE様のサービス開発とサイト作成</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="font-semibold">https://carevision-ai.com/{LinkMark('https://carevision-ai.com/')}</p>
                  <p className="text-slate-900">構築環境：php7.4、BootStrap5</p>
               </div>
               <p>カメラの映像を解析して、人物の転倒を検知するサービスをCTOが構築し、そのサービスサイトをデザインしました。<br />
               サイト内にsvgのアニメーションを作成し、サービスをわかりやすく紹介しています。<br /><br />
               デザインからサイトコーディングまでを担当しました。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/care.jpg'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>

            </div>

            <hr className="my-5" />
            
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">株式会社トライザ様のサイト作成</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="font-semibold">https://tryza.jp/{LinkMark('https://tryza.jp/')}</p>
                  <p className="text-slate-900">構築環境：php8.1、smarty、BootStrap5</p>
               </div>
               <p>大元となる卸売業者様による販売サイトに、出品者となる企業様がサプライヤーとして出品できるサイトです。<br />
               開発期間との兼ね合いから、既存の有料サービスであるCScartにて作成しました。<br />
               CScartにデザインを加え、さらにポーシャペイを支払い方法として利用できるようにカスタマイズしています。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/tryza.jpg'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>

            </div>

            <hr className="my-5" />

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">薬局様のコーポレートサイト刷新</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="font-semibold">https://www.miyamoto-drug.co.jp/{LinkMark('https://www.miyamoto-drug.co.jp/')}</p>
                  <p className="text-slate-900">構築環境：php8.3、BootStrap5</p>
               </div>
               <p>クライアントには既存のコーポレートサイトが存在していましたが、サーバーのphpバージョンアップとともにサイト表示ができなくなってしまったため、サイトの再生と同時にリニューアルを担当しました。<br />
               wordpressでの制作をご希望だったので、最新のwordpressと最新のphpにて作成しました。<br />
               また、記事だけでなく、バナーの更新もクライアント様側で更新を希望されていたため、独自の関数を作成し、管理画面より更新できるようにカスタマイズしました。<br /><br />
               コーディングを担当しました。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/miya.png'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>
            </div>

            <hr className="my-5" />

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">衣料品卸売企業様の請求をポーシャペイ請求に変換するサイト</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="text-slate-900">構築環境：php8.1、laravel、PostgreSQL、BootStrap5</p>
               </div>
               <p>クライアントの衣料品卸売企業様から、請求業務を全てポーシャペイに委託したいとのことだったので、<br />
               クライアント様が独自に発行している請求書csvを取り込み、ポーシャペイからの請求に変換するサイトを作成しました。<br />
               専用の管理画面からログインし、csvファイルをアップロードするシステムになっています。<br /><br />
               フロントからバックエンドまで、基本的には全て担当しています。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/portiapay.svg'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>
            </div>

            <hr className="my-5" />

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">衣料品卸売企業様のコーポレートサイト、環境再構築</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="text-slate-900">構築環境：php8.3、EC2(rsync,cron,postfix)、Route53、Amazon Load Balancer</p>
               </div>
               <p>既存のコーポレートサイトがphp5環境だったため、php8環境にしたいというご要望がありました。<br />
               そのご要望のみであれば、サーバー移行のみで済むのですが、現在更新に利用しているブログシステムを利用したい、なおかつ負荷分散をさせたい、とのことでした。<br />
               ブログシステムは1つのサーバーのみしか更新できないため、rsyncにて2つのサーバーの情報を合わせるようにしました。<br />
               また、ブログ更新にはftpの速度が重要だったため、東京リージョンに設定。<br />
               移行中にphp8環境で作動しなかった部分をサーバー上で微修正を行いました。<br /><br />
               サーバー移行(ec2,route53)、修正、メールの送信サーバー設定(postfix)などを担当しました。</p>
               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain bg-slate-300"
                 src={'/about/alb.png'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>
            </div>

            <hr className="my-5" />

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <h3 className="text-base font-semibold mb-2 mt-3">社員管理サイト「ララワークス（仮名）」</h3>
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="text-slate-900">構築環境：php8.3.7、laravel10.41.0、v11.5.2-MariaDB</p>
               </div>
               <p className="mb-3">シフト提出や社員管理をするためのデータベースがなかったため、社内業務改善のために作成しました。<br />
               開発期間はおよそ半年で、デザインからdb設計、コーディングに至るまで全て制作しています。<br />
               詳細につきましては以下リンク先に制作課程のログを残しています</p>
               <Link className="flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 text-center" href="/php#laravel" target="_blank">ララワークス制作ログ<i className="ms-2 ph ph-caret-right"></i></Link>

               </div>

               <div className="items-center justify-center dark:bg-gray-800">
               <Image
                 className="mb-3 mx-auto aspect-square object-contain"
                 src={'/about/login.svg'}
                 alt="success"
                 width={280}
                 height={38}
                 priority
               />
               </div>
            </div>
         </div>

      </section>

      <section id="skills" className="w-full">
         <h2 className="text-2xl font-semibold mb-2 text-center">skills</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3">現時点で所持している私のスキルです<br />
         年数が明示されていないものは、リンク先にて学習ログを残しています</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="leading-7 text-center font-semibold"><i className="ph ph-app-window me-2"></i>フロントエンド</p>
            <h3 className="text-lg font-semibold">html</h3>
            <p className="leading-7 mb-2">HTML5{WrapCode('9年')}</p>
            <h3 className="text-lg font-semibold">template</h3>
            <p className="leading-7 mb-2">Smarty{WrapCode('6年')}、Twig{WrapCode('8年')}、Laravel Blade{WrapCode('6年')}</p>
            <h3 className="text-lg font-semibold">css</h3>
            <p className="leading-7">CSS{WrapCode('9年')}、SCSS{WrapCode('6年')}、Bootstrap v3〜5{WrapCode('9年')}、Tailwind CSS</p>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold"><i className="ph ph-terminal-window me-2"></i>バックエンド</p>
            <h3 className="text-lg font-semibold">PHP</h3>
            <p className="leading-7 mb-2">php v5.7〜8.2{WrapCode('8年')}{LinkTag('php','ログ')}、Symfony{WrapCode('8年')}、Laravel{WrapCode('4年')}{LinkTag('php#laravel','ログ')}</p>
            <h3 className="text-lg font-semibold">python</h3>
            <p className="leading-7 mb-2">python{LinkTag('python','ログ')}、django{LinkTag('python#django','ログ')}</p>
            <h3 className="text-lg font-semibold">Java</h3>
            <p className="leading-7 mb-2">Java{LinkTag('java','ログ')}、Spring Boot{LinkTag('java#Spring_Boot','ログ')}</p>
            <h3 className="text-lg font-semibold">Go</h3>
            <p className="leading-7 mb-2">Go{LinkTag('go','ログ')}、gin{LinkTag('go#gin','ログ')}</p>
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <p className="leading-7 mb-2">jQuery{WrapCode('8年')}、Vue.js{WrapCode('2年')}、Next.js{LinkTag('JavaScript','ログ')}</p>
            <h3 className="text-lg font-semibold">Shell</h3>
            <p className="leading-7">macOS{WrapCode('5年')}、Windows PowerShell{WrapCode('5年')}、Amazon Linux{WrapCode('4年')}、<br />Amazon Linux2{WrapCode('4年')}、Amazon Linux2023{WrapCode('1年')}</p>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold"><i className="ph ph-database me-2"></i>データベース</p>
            <p className="leading-7">MySQL{WrapCode('7年')}、MariaDB{WrapCode('3年')}、PostgreSQL{WrapCode('3年')}</p>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold"><i className="ph ph-hard-drives me-2"></i>サーバーエンド</p>
            <h3 className="text-lg font-semibold">AWS{WrapCode('5年')}</h3>
            <p className="leading-7">EC2、route53、VPC、RDS、SES、WorkMail、ELB</p>
         </div>

      </section>


      </main>
    </div>
  );
}
