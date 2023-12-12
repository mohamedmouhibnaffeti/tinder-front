import React, { useState, useContext, useEffect } from "react"
import Logo from "./Images/logo.png"
import SideBarLanding from "./ui/SideBarLanding"
import { NavLink } from "react-router-dom"
import Login from "./ui/Login"
import { CookieContext } from "../Context/CookieContext"
import { CheckProfile } from "./API/ProfileAPI"
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Language from '../Components/SideBar/Language'





const Navbar = () => {

const{t}=useTranslation()
const items = [
    {'about': t('about')},
    {'faq': t('faq')},
    {'contact': t('contact')},
    {'security': t('security')},
    {'policy': t('policy')},
  ];
    const { cookies, setCookie } = useContext(CookieContext)
    const navigate = useNavigate()
    const email = cookies['TinderEmail']
    const [username, setUsername] = useState()
    useEffect(()=>{
        const CheckingProfile = async ({email}) => {
            const res = await CheckProfile({email})
            if(res){
                setUsername(res.data.Profile.firstname)
            }
        }
        CheckingProfile({email})
        console.log("fel navbar")
    }, [])
    const Logout = () => {
        setCookie('TinderJWT', '', 0)
        setCookie('TinderEmail', '', 0)
        window.location.reload()
    }
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [open, setOpen] = useState(false)
    return(
        <div className="fixed top-0 mb-8 w-full z-40 border-b pink-glassmorphism flex justify-around">
            <div className="flex">
                <NavLink to="/"> <img src={Logo} alt="" width={180} className="object-cover object-center w-32 translate-y-[2px]" /> </NavLink>
                <div className=" hidden lg:flex flex-row items-center justify-between px-3 gap-10 ">
            { items.map((item, key)=>{
                const Key = Object.keys(item)[0]
                const value = item[Key]
                return(
                      <h1 className="text-white font-semibold text-xl -translate-y-1 hover:cursor-pointer transition delay-150 hover:text-purple-900 hover:scale-[1.05]" key={key}> <NavLink to={`/${Key}`}> {value} </NavLink> </h1>
                )}
                  ) }
            </div>
            </div>
            
            <div className="lg:flex hidden items-center justify-around gap-10 pl-12">
                    <div className=" flex text-xl font-semibold  md:flex" style={{marginLeft:"auto"}}>
                        <Language />
                    </div>
                {!username?
                    <button className="bg-white text-black rounded-2xl px-7 py-1 font-semibold transition delay-75 text-lg hover:bg-gray-200 dark:bg-gray-900 border border-gray-400 dark:text-white dark:hover:bg-gray-800 dark:border-gray-600" onClick={()=>setOpen(true)}> 
                                               {t('login')}
                    </button>
                    :
                    <div className="flex justify-center items-center gap-4">
                        <NavLink to="/MainTinder">
                            <div className="px-6 py-2 rounded-md  h-fit bg-gray-900 self-center border-2 border-gray-300 lg:flex hidden cursor-pointer hover:bg-gray-900/90 transition delay-100"><p className="text-lg font-bold text-gray-300">{username}</p></div>
                        </NavLink>
                        <button className=" py-[0.63rem] px-3 bg-gray-900 text-white border-2 border-gray-300 rounded-lg hover:bg-gray-900/80 transition delay-100" onClick={Logout}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </button>
                    </div>
                    
                }
            </div>
            <div className="lg:hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 -translate-y-0 transition delay-75 text-white cursor-pointer hover:text-purple-900" onClick={()=>setSideBarOpen(!sideBarOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
                <SideBarLanding SetSideOpen={setSideBarOpen} items={items} SideBarOpen={sideBarOpen} username={username} Logout={Logout} />
                <Login open={open} setOpen={setOpen} />
                
        </div>
    )
}

export default Navbar