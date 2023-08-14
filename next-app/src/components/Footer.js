import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
   <div className="w-full bg-[rgb(242,242,242)] divide-y-2 pt-3 pb-1">

   <div className="px-7 text-[#70757a] text-sm">
Nigeria
   </div>


   <div className="w-full flex sm:flex-row flex-col md:justify-evenly space-x-12 lg:justify-between my-4 pt-3 px-7">
    <div className="flex space-x-5 text-sm self-center flex-wrap">
        <Link href="#" className="text-[#70757a] hover:underline underline-[#70757a]">About</Link>
        <Link href="#" className="text-[#70757a] hover:underline underline-[#70757a]">Advertising</Link>
        <Link href="#" className="text-[#70757a] hover:underline underline-[#70757a]">Business</Link>
        <Link href="#" className="text-[#70757a] hover:underline underline-[#70757a]">How Search works</Link>
    </div>

    <div className="flex space-x-5 sm:mt-0 mt-7 text-sm self-center flex-wrap">
    <Link href="#" className="text-[#70757a] hover:underline underline-[#70757a]">Privacy</Link>
        <Link href="#" className="text-[#70757a] hover:underline underline-[#70757a]">Terms</Link>
        <Link href="#" className="text-[#70757a] hover:underline underline-[#70757a]">Settings</Link>
    </div>
   </div>

   </div>
  )
}
