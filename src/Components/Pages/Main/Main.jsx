import React, { useEffect, useContext, useState, useRef } from "react"
import { isAuthenticated } from "../../API/AuthApi"
import { CookieContext } from "../../../Context/CookieContext"
import { useNavigate } from "react-router-dom"
import { ConversationContext, ConversationProvider } from "../../../Context/ConversationContext"
import Conversation from "../../SideBar/Conversation"
import { io } from "socket.io-client"
import Cardtinder from "../../SideBar/Cardtinder"
import { SidebarProvider } from "../../../Context/SideBarContext"
import Sidebar from "../../SideBar/SideBar"
import MainNav from "../../ui/MainNav"
import { IoMdMenu } from "react-icons/io";

export default function MainTinder(){
    const { open, setOpen, chatID } = useContext(ConversationContext)
    const { cookies, setCookie } = useContext(CookieContext)
    const TinderToken = cookies['TinderJWT']
    const navigate = useNavigate()
    useEffect(()=>{
        const CheckUser = async () => {
            const res =  await isAuthenticated({TinderToken})
            if(res?.status !== 200){
                navigate("/")
                setCookie('TinderJWT', '', 0)
                setCookie('TinderEmail', '', 0)
            }
        }
        CheckUser()
    }, [TinderToken])

    const socket = useRef()
    const [onlineUsers, setOnlineUsers] = useState([])
    const [receiveMessage, setReceiverMessage] = useState(null)
    const [sendMessage, setSendMessage] = useState(null)
    const email = cookies['TinderEmail']
    

    useEffect(()=>{
        socket.current = io('http://localhost:8800')
        socket.current.emit('new-user-add', email)
        socket.current.on("get-users", (users)=>{
            setOnlineUsers(users)
        })
    }, [chatID])

    useEffect(()=>{
        if(sendMessage !== null ){
            socket.current.emit('send-message', sendMessage)
        }
    }, [sendMessage])

    useEffect(()=>{
        socket.current.on("receive-message", (data)=>{
            setReceiverMessage(data)
        })
    }, [])

    const[showSidebar,setShowSidebar]=useState('hidden')
    const[showNav,setShowNav]=useState(true)
    const[showCard,setShowCard]=useState(true)

    const openSidebar=()=>{

        setShowSidebar(showSidebar === 'hidden'   ? '' : 'hidden');
        setShowNav(!showNav);
        setShowCard(!showCard);
    
      }
    
    
    return(
        <SidebarProvider>
        <div className="flex w-screen lg:flex-row md:fixed flex-col overf overflow-y-hidden overflow-x-hidden">
            <div className={`lg:block ${showSidebar}`}>
                <Sidebar/>
            </div>
            { showCard && !open && <main className="flex flex-col items-center justify-center w-full h-screen overflow-y-hidden overflow-x-hidden dark:bg-black bg-gray-200 ">
                {showNav && <MainNav />}
                <Cardtinder/>
            </main>}
            { open && <Conversation setOpen={setOpen} setSendMessage={setSendMessage} receiveMessage={receiveMessage} sendMessage={sendMessage} setReceiveMessage={setReceiverMessage} /> }
            <footer className="bg-pink-500 h-20 md:hidden flex items-center justify-center overflow-y-hidden">

            <div >
              <button onClick={openSidebar}><IoMdMenu size={70} color="#660099"  /></button>
            </div>
          </footer>
        </div>
        </SidebarProvider>
    )
}