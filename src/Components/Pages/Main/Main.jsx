import React, { useEffect, useContext, useState, useRef } from "react"
import { isAuthenticated } from "../../API/AuthApi"
import { CookieContext } from "../../../Context/CookieContext"
import { useNavigate } from "react-router-dom"
import FileBase from "react-file-base64"
import SideBar from "../../SideBar/SideBar"
import { ConversationContext, ConversationProvider } from "../../../Context/ConversationContext"
import Conversation from "../../SideBar/Conversation"
import { io } from "socket.io-client"

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
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      
      function success(pos) {
        const crd = pos.coords;
      
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    const location = navigator.geolocation.getCurrentPosition(success, error, options)
    console.log(location)
    
    return(
        <div className="flex flex-row overflow-y-hidden">
            <SideBar />
            { open && <Conversation setOpen={setOpen} setSendMessage={setSendMessage} receiveMessage={receiveMessage} sendMessage={sendMessage} setReceiveMessage={setReceiverMessage} /> }
        </div>
    )
}