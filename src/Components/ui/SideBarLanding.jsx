import React, { useState } from "react";
import TinderLogo from "../Images/Tinder-logo-dark.png"
import Login from "../ui/Login";
import { NavLink } from "react-router-dom";

const SideBarLanding = ({ SetSideOpen, items, SideBarOpen }) => {
    const [open, setOpen] = useState(false)
    return(
        <div className={`lg:hidden flex flex-col z-50 fixed bg-white h-screen  justify-between  ${SideBarOpen ? 'translate-x-0 w-screen' : 'translate-x-full w-screen'} ease-in-out duration-300 dark:text-white dark:bg-black -top-[1px]`} >
            <div>
                <div className="flex justify-between">
                    <div className="flex gap-[1px] translate-y-5 ">
                        <img src={TinderLogo} alt="" className="w-8 h-10 ml-7" />
                        <p className="text-black dark:text-white font-bold text-3xl">tinder</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-6 mr-7 cursor-pointer transition delay-150 hover:rotate-180 " onClick={()=>SetSideOpen(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col gap-5 items-center mt-4">
                    {items.map((item, key)=>(
                        <NavLink to={`/${item.toLowerCase()}`} className="w-11/12 flex justify-center">
                            <div key={key} className="w-11/12 bg-gray-200 rounded-lg px-2 py-2 flex flex-row justify-between cursor-pointer transition delay-75 hover:bg-slate-300 active:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:active:bg-zinc-700">
                                <p className="text-xl font-semibold"> {item} </p>
                                <div className="mr-4 w-full flex justify-end transition delay-75 hover:translate-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="self-center w-full flex flex-col items-center gap-7">
                <button className="mt-12 login-btn-bg px-7 py-2 text-xl text-white w-11/12 rounded-3xl border-2 border-red-100 transition delay-75 hover:scale-[1.05]" onClick={()=>setOpen(true)}>Log in</button>
                <h1 className="flex text-xl font-bold text-gray-700 gap-2 mb-10 -translate-x-1 dark:text-gray-400">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                            </svg>
                        </span>
                        Language
                </h1>
            </div>
            <Login open={open} setOpen={setOpen} />
        </div>
    )
}

export default SideBarLanding