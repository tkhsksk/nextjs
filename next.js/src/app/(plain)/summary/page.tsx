import type { Metadata } from "next";

// import Link  from 'next/link'
import Image from "next/image"
// import Github from '@components/github';
import Syhl from '@components/code';

export const metadata: Metadata = {
   title: 'summary｜'+process.env.SITE_TITLE,
   description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">summary｜</span><span className="text-md">まとめ</span></h1>
      <p className="leading-7">{WrapCode('hireroo')}対策として作成</p>

      <section id="helloWorld">

         <h2 className="text-2xl font-semibold mb-3">GOとSwift早見表</h2>
         <p className="leading-7 mb-3">企業が求めている言語として2つのみをピックアップ</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">

            <div className="relative shadow-md sm:rounded-lg mb-4 grid overflow-hidden w-fit">
                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                言語
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <Image
                                   className=""
                                   src={'/Go_Logo_Blue.svg'}
                                   alt="success"
                                   width={90}
                                   height={90}
                                   priority
                                 />
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <Image
                                   className=""
                                   src={'/Swift_logo.svg'}
                                   alt="success"
                                   width={90}
                                   height={90}
                                   priority
                                 />
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                表示(print)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='print.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='print.swift'
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                変数の代入(String)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='type_str.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='type_str.swift'
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                変数の代入(Int)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='type_int.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='type_int.swift'
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                配列の代入(array)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='arr.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='arr.swift'
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                構造体
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='struct.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='struct.swift'
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                計算
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='calc.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='calc.swift'
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                文字の結合
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='join.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='join.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                関数(int → int)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_int.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_int.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                関数(複数 → 複数)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_multiple.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_multiple.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                関数(配列 → 複数)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_arr.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_arr.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                関数(構造体 → 複数)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_struct.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_struct.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                関数(配列 → 配列)
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_arr_to_arr.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_arr_to_arr.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                for文
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='for.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='for.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                foreach文
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='foreach.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='foreach.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                foreach文（多次元）
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='foreach_multiple.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='foreach_multiple.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                foreachで配列を作成
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='search.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='search.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                入力: arr = [1,2,3]<br />
                                出力: [2,4,6]<br />
                                説明: 1*2=2, 2*2=4, 3*2=6 なので [2,4,6] が答えとなる。
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_hireroo1.go'
                                />
                            </td>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='func_hireroo1.swift'
                                />
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                入力: nums = [2,7,11,15], target = 9<br />
                                出力: [0,1]<br />
                                説明: Because nums[0] + nums[1] == 9, we return [0, 1].
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='leetcode1.go'
                                />
                            </td>
                            <td className="px-6 py-4">

                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                入力: s = abcabcbb<br />
                                出力: 3<br />
                                説明: The answer is abc, with the length of 3.
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='leetcode2.go'
                                />
                            </td>
                            <td className="px-6 py-4">

                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white [writing-mode:vertical-lr]">
                                Input: nums1 = [1,3], nums2 = [2]<br />
                                Output: 2.00000<br />
                                Explanation: merged array = [1,2,3] and median is 2.
                            </th>
                            <td className="px-6 py-4">
                                <Syhl
                                    lang='summary'
                                    file='leetcode3.go'
                                />
                            </td>
                            <td className="px-6 py-4">

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

         </div>

      </section>

      </main>
    </div>
  );
}
