import React, {useState, useContext, useEffect, useRef} from "react";
import {format} from "timeago.js"
import InputEmoji from "react-input-emoji"
import { ConversationContext } from "../../Context/ConversationContext";
import { getChatMessages } from "../API/ChatApi";
import { loadLanguages } from "i18next";
import { CookieContext } from "../../Context/CookieContext";
import { CreateMessage } from "../API/ChatApi";

export default function Conversation ({ setOpen, setSendMessage, receiveMessage, sendMessage, setReceiveMessage }){
    const { chatID, setChatID, ChatMember } = useContext(ConversationContext)
    const { cookies } = useContext(CookieContext)
    const email = cookies['TinderEmail']
    const [text, setText] = useState("");
    const scroll = useRef();

    
    async function handleSend() {
        if(text.length > 0){
            const message = {
                chatId: chatID,
                sender: email,
                text: text,
            }
            const receiverEmail = ChatMember.email
            setSendMessage({...message, receiverEmail})
            setText('')
            await CreateMessage({message})
        }
        
    }
    const [messages, setMessages] = useState([])
    
    useEffect(()=>{
        const LoadMessages = async({chatID}) =>{
            const res = await getChatMessages({chatID})
            if(res){
                setMessages(res)
            }
        }
        LoadMessages({chatID})
        console.log(messages)
    }, [chatID])
    useEffect(()=>{
        if(receiveMessage !== null && receiveMessage.chatId === chatID){
            setMessages((prevMessages) => [...prevMessages, receiveMessage]);
            setReceiveMessage(null);
        }
    }, [receiveMessage])

    useEffect(()=>{
        scroll.current?.scrollIntoView({behaviour: "smooth"})
    }, [messages])
    return (
        <div className="flex flex-col bg-white dark:bg-black w-full h-screen ">
            <div className="flex justify-between items-center border-b-2 border-gray-400 dark:border-gray-700  shadow-blue-gray-400 dark:shadow-blue-gray-900 shadow-md h-20 px-8">
                <div className="flex gap-5 items-center">
                    <img src={`${ChatMember.images[0]}`} alt="" width={60} height={60} className="rounded-full w-14 h-14" />
                    <p className="text-lg text-pink-700 font-bold cursor-default">
                        { `${ChatMember.firstname} ${ChatMember.lastname}` }
                    </p>
                </div>
                <div>
                    <div className="border-2 border-gray-700 dark:border-gray-500 rounded-full p-[1px] cursor-pointer active:scale-90" onClick={()=>{setOpen(false); setChatID('')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-700 dark:text-gray-400 transition ease-in-out delay-300 hover:rotate-90 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-8">
                {messages.map((message)=>{
                    const timestamp = new Date(message.createdAt)
                    return (
                        (
                            message.sender === email ?
                                <div className="ml-auto" ref={scroll} >
                                    <div className="bg-blue-600 rounded-l-md rounded-tr-md max-w-[11rem] w-fit min-w-[5rem] ml-auto mr-3 px-2 py-2 break-words ">
                                        <p className="text-sm text-white">{message.text}</p>
                                    </div>
                                    <p className="text-xs text-white mt-2 mr-2">
                                        {format(timestamp.toUTCString())}
                                    </p>
                                </div>
                            :
                            <div className="" ref={scroll} >
                                    <div className="bg-gray-600 rounded-r-md rounded-tl-md max-w-[11rem] w-fit min-w-[5rem] ml-2 px-2 py-2 break-words">
                                        <p className="text-sm text-white">{message.text}</p>
                                    </div>
                                    <p className="text-xs text-white mt-2 mr-2 ml-2">
                                        {format(timestamp.toUTCString())}
                                    </p>
                                </div>
                        )
                    )
                })

                }
            </div>
            <div className="flex h-14">
                <div className="flex justify-between w-full border-t-2 border-slate-600">
                    {/*<input type="text" className="px-2 w-full outline-none bg-zinc-800 w-inherit text-gray-200 overflow-wrap-break-words border-t-2 border-t-slate-600 transition ease-in-out delay-100 focus-within:border-purple-600" placeholder="Type a message...." />*/}
                    <InputEmoji
                        value={text}
                        onChange={setText}
                        cleanOnEnter
                        keepOpened={true}
                        onEnter={handleSend}
                        placeholder="Type a message"
                    />
                    <button className="text-red-700 font-bold bg-inherit w-20 transition ease-in-out delay-100 hover:bg-zinc-800 active:bg-zinc-950" onClick={handleSend}>SEND</button>
                </div>
            </div>
        </div>
    )
}
