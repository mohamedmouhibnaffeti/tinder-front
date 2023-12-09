import { useState, createContext } from "react";

export const ConversationContext = createContext()
export const ConversationProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [chatID, setChatID] = useState('')
    const [ChatMember, setChatMember] = useState({})
    return (
        <ConversationContext.Provider value={{ open, setOpen, chatID, setChatID, ChatMember, setChatMember }} >
            {children}
        </ConversationContext.Provider>
    )
}