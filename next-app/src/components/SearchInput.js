import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import {MdOutlineKeyboardVoice} from "react-icons/md";
import {HiOutlineCamera} from "react-icons/hi"
export default function SearchInput() {
  return(
        <div className = "flex max-w-[600px] border border-1 py-3 rounded-[40px] px-2 mx-auto grow mt-5 hover:shadow-[0px_2px_10px_1px_rgba(0,0,0,0.1)]">
            <AiOutlineSearch className = "text-xl"/>
            <input type="text" className="w-[100%] outline-none flex-1 grow px-2" />
            <MdOutlineKeyboardVoice className = "text-xl flex-0.3 cursor-pointer"/>
            <HiOutlineCamera className = "text-xl cursor-pointer basis-7"/>

        </div>
    
  )
}
