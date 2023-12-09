import React from "react";

const Privacy = () => {
    return (
        <div className="text-black dark:text-white flex flex-wrap md:justify-center justify-between gap-10 -mt-4 bg-gray-50 border-gray-200 dark:bg-gray-800 w-11/12 mb-8 rounded-2xl mr-4 lg:w-8/12 border dark:border-gray-700">
            <div className="flex flex-col px-7 py-3 mb-8">
                <h1 className="font-bold mb-2 text-xl">Legacy</h1>
                <p className="hover:text-[#E91E63] cursor-pointer">privacy</p>
                <p className="hover:text-[#E91E63] cursor-pointer">Terms</p>
                <p className="hover:text-[#E91E63] cursor-pointer">Cookie Policy</p>
                <p className="hover:text-[#E91E63] cursor-pointer">Intellectual Property</p>
            </div>
            <div className="flex flex-col px-7 py-3 mb-8">
                <h1 className="font-bold mb-2 text-xl">Carrers</h1>
                <p className="hover:text-[#E91E63] cursor-pointer">Carrers Portal</p>
                <p className="hover:text-[#E91E63] cursor-pointer">Tech Blog</p>
            </div>
            <div className="flex flex-col px-7 py-3 mb-8">
                <h1 className="font-bold mb-2 text-xl">About</h1>
                <p className="hover:text-[#E91E63] cursor-pointer">FAQ</p>
                <p className="hover:text-[#E91E63] cursor-pointer">Destinations</p>
                <p className="hover:text-[#E91E63] cursor-pointer">Press Room</p>
                <p className="hover:text-[#E91E63] cursor-pointer">Contact</p>
            </div>
            <div className="flex flex-col px-7 py-3 mb-8">
                <h1 className="font-bold mb-2 text-xl">Social</h1>
                <div className="flex md:gap-4 gap-2 items-center">
                    <svg className="hover:text-[#E91E63] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <svg className="hover:text-[#E91E63] cursor-pointer"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    <svg className="hover:text-[#E91E63] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <svg className="hover:text-[#E91E63] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default Privacy