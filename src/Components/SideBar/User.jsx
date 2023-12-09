import React, {useContext} from 'react'
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Language from "../SideBar/Language"
import { SidebarContext } from '../../Context/SideBarContext';
import { useNavigate } from 'react-router-dom';
import {
    Typography,
    Avatar
  } from "@material-tailwind/react";
  
const User = () => {
  const navigate = useNavigate()
  const { setTinderComponentOpen, setProfileComponentOpen, setPreferredLanguageOpen, setTinderOpen, setUserOpen, profile, setLikesTabOpen, setEmailOpen, setPhoneOpen, setBlockOpen } = useContext(SidebarContext)
  const handleClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(true)
    setTinderComponentOpen(false)
    setTinderOpen(true)
    setUserOpen(false)
    setLikesTabOpen(false)
    setEmailOpen(false)
    setPhoneOpen(false)
    setBlockOpen(false)
  }

  const handleLikesClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(false)
    setTinderOpen(true)
    setUserOpen(false)
    setLikesTabOpen(true)
    setEmailOpen(false)
    setPhoneOpen(false)
    setBlockOpen(false)
  }
  const name = profile.firstname
  const image = profile.images[0]
  return (
    <div className="flex justify-between items-center -translate-y-2 min-w-[27.5rem]" >

    <div className="flex gap-2 hover:bg-[#421f27] -translate-x-6 hover:-translate-y-1 hover:scale-110 duration-300 rounded-full " onClick={handleClick} >

    <Avatar src={image} alt="avatar" className="w-10 h-10 rounded-full cursor-pointer" />
        <a href="#" >
           <Typography className="text-white text-md font-sans mt-2 paragrapheLimite1 " variant="h1">
             {name}
           </Typography>
         </a>
    </div>

    <div className="flex items-center gap-3 -translate-x-24">
        <BsPersonHearts color="#660099" size={"30"} className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110' onClick={handleLikesClick}/>
        <MdOutlineSecurity color="#660099" size={"30px"} className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110'  onClick={()=>navigate("/Security")} />
      </div>

    
      </div>
  )
}

export default User
