import { createContext } from "react";
import { useCookies } from "react-cookie";

export const CookieContext = createContext()
export const CookieProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['TinderJWT', 'i18next', 'TinderEmail'])


    return (
        <CookieContext.Provider value={{cookies, setCookie, removeCookie}} >
            {children}
        </CookieContext.Provider>
    )
}