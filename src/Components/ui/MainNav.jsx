import React from "react";
import { FaFire } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

import Language from "../SideBar/Language";

const Navbar = () => {

  const{t}=useTranslation()

    return(
        <div className=" flex w-screen  h-20 px-8 items-center bg-gradient-to-r from-pink-400 to-pink-500 md:flex-row">
               <NavLink to={"/"}>
               <div className="flex">
                    <FaFire className='w-10 h-8 animate-pulse ' style={{color:"lightgray"}}/>
                    <h1 className="text-3xl font-bold text-gray-400">{t('tinder')}</h1>
                </div>
                </NavLink>
        
                    <div className=" xl:-translate-x-96 flex text-xl font-semibold  md:flex z-50" style={{marginLeft:"auto"}}>
                        <Language />
                    </div>
            
        </div>
    )
}

export default Navbar