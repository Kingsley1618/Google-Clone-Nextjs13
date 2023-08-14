import Link from 'next/link'
import React from 'react'
import { AiFillVideoCamera } from 'react-icons/ai'

export default function ButtonLayout() {
  return (
    <div className="mt-7">
      <div className="flex space-x-4 justify-center">
        <button type="button" className="bg-[#f8f9fa] px-4 px-2 rounded-md text-sm">
Google Search
        </button>
        <button type="button" className="bg-[#f8f9fa] px-4 py-2 rounded-md text-sm">
          I'm Feeling Lucky
          </button>
      </div>

      <div className="flex justify-center space-x-2 mt-6 text-sm">
      <div>Google offered in:</div>
<div className='flex space-x-3'>
        <Link href="#" className="text-[#1a0dab] hover:underline underline-[#1a0dab]">
        Hausa
        </Link>

        <Link href="#" className="text-[#1a0dab] hover:underline underline-[#1a0dab]">
        Igbo
        </Link>

        <Link href="#" className="text-[#1a0dab] hover:underline underline-[#1a0dab]">
        Ede Yoruba
        </Link>

        <Link href="#" className="text-[#1a0dab] hover:underline underline-[#1a0dab]">
        Pidgin
        </Link>
        </div>
        </div>
    </div>
  )
}
