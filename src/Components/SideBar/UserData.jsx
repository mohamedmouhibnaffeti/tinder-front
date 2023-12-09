import React from "react";
export default UserData = () => {
    return (
        <div className="flex flex-col bg-zinc-900 w-full h-screen ">
            <div className="flex justify-between items-center border-b-2 border-gray-700 shadow-slate-900 shadow-md h-20 px-8">
                <div className="flex gap-5 items-center">
                    <img src={`${ChatMember.images[0]}`} alt="" width={60} height={60} className="rounded-full w-14 h-14" />
                    <p className="text-lg text-pink-700 font-bold cursor-default">
                        { `${ChatMember.firstname} ${ChatMember.lastname}` }
                    </p>
                </div>
                <div>
                    <div className="border-2 border-gray-500 rounded-full p-[1px] cursor-pointer active:scale-90" onClick={()=>{setOpen(false); setChatID('')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-400 transition ease-in-out delay-300 hover:rotate-90 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
            
        </div>
    )
}