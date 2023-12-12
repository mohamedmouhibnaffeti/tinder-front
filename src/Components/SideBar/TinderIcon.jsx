import React from 'react'
import { FaFire } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Language from './Language';

const TinderIcon = ({ setTinderOpen, setUserOpen }) => {
  return (
    <div className="flex mt-2 justify-between items-center -translate-y-5">
      <a href="#">
        <FaFire className='w-10 h-10 animate-pulse text-purple-900 ' onClick={()=>{ setTinderOpen(false); setUserOpen(true) }} />
      </a>
      <div className="flex gap-5 mt-2 translate-x-12 items-center">
        <BsPersonHearts color="#660099" size={"60"} className=' text-purple-900 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'/>
        <MdOutlineSecurity color="#660099" size={"60px"} className=' text-purple-900 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' />
        <Language /> 
      </div>

    </div>
  )
}

export default TinderIcon
