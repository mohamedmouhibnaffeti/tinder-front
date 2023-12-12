import React, {useContext, useEffect} from "react";
import {ConversationContext} from "../../Context/ConversationContext" 

const Messages = ({member}) => {
    const { setOpen, setChatID, setChatMember, ChatID } = useContext(ConversationContext)
    const chatID = member.ChatID
    const image = member.images[0]
    const name = `${member.firstname} ${member.lastname}`
    return(
        <div className="flex flex-col w-full" onClick={()=>{setOpen(true); setChatID(chatID);setChatMember(member)}}>
            <div className={`rounded-lg border border-slate-700 w-full h-24 flex items-center bg-zinc-800 hover:bg-zinc-700 hover:border-y hover:border-y-gray-400 hover:border-r-4 hover:border-r-red-700 px-2 gap-5 cursor-pointer text-gray-300 hover:text-pink-700 ${ChatID === chatID ? "border-r-2 border-r-red-800" : ""} `}>
                <div>
                    <img src={`${image}`} alt="" width={70} height={70} className="rounded-full w-16 h-16 shadow-slate-500 shadow-md" />
                </div>
                <p className="font-bold text-lg truncate ">{name}</p>
            </div>
        </div>
    )
}

export default Messages 