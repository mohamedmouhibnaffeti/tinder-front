import React from "react";
import TinderLogo from "../Images/Tinder-logo-dark.png"

const Navbar = () => {
    return(
        <header className="z-40 w-screen h-24 flex justify-between ProfileNavbar items-center px-8 border-1 border-b-gray-400">
            <div className="flex gap-1">
                <img src={TinderLogo} alt="" className="w-10 h-12"/>
                <h1 className="text-3xl text-black dark:text-white font-bold translate-y-1">Tinder</h1>
            </div>
            <h1 className="flex text-xl font-semibold text-gray-900 dark:text-gray-400 gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>
                    </span>
                    Language
            </h1>
        </header>
    )
}

export default Navbar