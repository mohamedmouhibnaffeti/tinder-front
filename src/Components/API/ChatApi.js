import axios from "axios"

const BASE_URL = 'http://localhost:5000/api'

export const GetMyChats = async({ email }) => {
    try{
        const MyChats = await axios.get(`${BASE_URL}/chat/${email}`)
        return MyChats
    }catch(err){
        console.log(err)
    }
}

export const getChatMessages = async({ chatID }) => {
    try{
        console.log(chatID)
        const messages = await axios.get(`${BASE_URL}/message?chatId=${chatID}`)
        return messages.data.Messages
    }catch(err){
        console.log(err)
    }
}

export const CreateMessage = async({message}) => {
    try{
        const { data } = await axios.post(`${BASE_URL}/message`, {sender: message.sender, chatId: message.chatId, text: message.text})
        console.log(data)
    }catch(err){
        console.log(err)
    }
}