import React from 'react'
import Link from "next/link";
import {TbGridDots} from "react-icons/tb";
export default function GoogleHeader() {
  return (
    <div className = "flex justify-end items:center h-[53px]">
      <div className = "flex text-sm items-center">
<Link href="#" className = "hover:underline">Gmail</Link>
<Link href="#" className = "hover:underline mx-4">Images</Link>
<Link href="#" className = "text-lg"><TbGridDots /></Link>
<button type="button" className="text-white bg-blue-600 px-4 py-1 rounded-[5px] font-bold ml-4">Sign In</button>
      </div>
    </div>
  )
}
