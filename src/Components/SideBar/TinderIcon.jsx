import React, { useContext } from 'react'
import { FaFire } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Language from './Language';
import { SidebarContext } from '../../Context/SideBarContext';
import { useNavigate } from 'react-router-dom';

const TinderIcon = () => {
  const navigate = useNavigate()
  const { setTinderComponentOpen, setProfileComponentOpen, setPreferredLanguageOpen, setTinderOpen, setUserOpen, setLikesTabOpen, setPhoneOpen } = useContext(SidebarContext)
  const handleClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(true)
    setTinderOpen(false)
    setUserOpen(true)
    setLikesTabOpen(false)
    setPhoneOpen(false)
  }
  const handleLikesClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(false)
    setTinderOpen(false)
    setUserOpen(true)
    setPhoneOpen(false)
    setLikesTabOpen(true)
  }
  return (
    <div className="flex items-center justify-between -translate-y-2 min-w-[27rem]">
      <a href="#" onClick={handleClick}>
        <FaFire className='w-10 h-10 animate-pulse ' style={{color:"#660099"}}/>
      </a>
      
      <div className="flex items-center gap-3 -translate-x-24">
        <BsPersonHearts color="#660099" size={"30"} className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110' onClick={handleLikesClick}/>
        <MdOutlineSecurity color="#660099" size={"30px"} className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110'  onClick={()=>navigate("/Security")} />
      </div>

    </div>
  )
}

export default TinderIcon
