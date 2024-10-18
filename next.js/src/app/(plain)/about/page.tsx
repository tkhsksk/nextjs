import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'about｜'+process.env.SITE_TITLE,
  description: "について",
};

function WrapCode(txt: string) {
   return <code className="ms-2 break-all bg-red-100 dark:text-black dark:bg-white/[.8] px-1 py-0.5 font-semibold rounded text-red-500 text-xs">{txt}</code>;
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
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3">これまでの制作実績と成果</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
               <div className="items-center justify-center dark:bg-gray-800">
               <p>https://optstyle.jp/</p>
                  aaa
               </div>
               <div className="items-center justify-center dark:bg-gray-800">
               <p>https://toyokawahamu.co.jp/</p>
                  bbb
               </div>
               <div className="items-center justify-center dark:bg-gray-800">
               <p>https://governance-network.com/</p>
                  aaa
               </div>
            </div>
         </div>

      </section>

      <section id="skills" className="w-full">
         <h2 className="text-2xl font-semibold mb-2 text-center">skills</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3">大学〜現在までの経歴について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="leading-7 text-center font-semibold"><i className="ph ph-app-window me-2"></i>フロントエンド</p>
            <h3 className="text-lg font-semibold">html</h3>
            <p className="leading-7">HTML5{WrapCode('9年')}</p>
            <h3 className="text-lg font-semibold">template</h3>
            <p className="leading-7">Smarty{WrapCode('6年')}、Twig{WrapCode('8年')}、Laravel Blade{WrapCode('6年')}</p>
            <h3 className="text-lg font-semibold">css</h3>
            <p className="leading-7">CSS{WrapCode('9年')}、SCSS{WrapCode('6年')}、Bootstrap v3〜5{WrapCode('9年')}、Tailwind CSS</p>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold"><i className="ph ph-terminal-window me-2"></i>バックエンド</p>
            <h3 className="text-lg font-semibold">PHP</h3>
            <p className="leading-7">php v5.7〜8.2{WrapCode('8年')}、Symfony{WrapCode('8年')}、Laravel{WrapCode('4年')}</p>
            <h3 className="text-lg font-semibold">python</h3>
            <p className="leading-7">python、django</p>
            <h3 className="text-lg font-semibold">Java</h3>
            <p className="leading-7">Java、Spring Boot</p>
            <h3 className="text-lg font-semibold">Go</h3>
            <p className="leading-7">Go、gin</p>
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <p className="leading-7">jQuery{WrapCode('8年')}、Vue.js{WrapCode('2年')}、Next.js</p>
            <h3 className="text-lg font-semibold">Shell</h3>
            <p className="leading-7">macOS{WrapCode('5年')}、Windows PowerShell{WrapCode('5年')}、Amazon Linux{WrapCode('4年')}、Amazon Linux2{WrapCode('4年')}、Amazon Linux2023{WrapCode('1年')}</p>

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
