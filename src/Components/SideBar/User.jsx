import React from 'react'
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Language from "../SideBar/Language"

import {
    Typography,
    Avatar
  } from "@material-tailwind/react";
  
const User = ({ setTinderOpen, setUserOpen }) => {
  return (
    <div className="flex justify-between ">

    <div className="flex duration-300 rounded-full max-w-40  items-center justify-center  hover:bg-black/60 hover:rounded-r-full" onClick={()=>{ setTinderOpen(true); setUserOpen(false) }} >

    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="w-15 h-10 rounded-full"/>
        <a href="#">
           <Typography className="text-white text-lg font-sans" variant="h1">
             Mouhib
           </Typography>
         </a>
    </div>

      <div className="flex mt-3" style={{marginLeft:'auto'}}>
        <Language /> 
        <BsPersonHearts color="#660099" size={"24px"} className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300'/>
        <MdOutlineSecurity color="#660099" size={"24px"} className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300' />
      </div>

   
    </div>
  )
}

export default User
