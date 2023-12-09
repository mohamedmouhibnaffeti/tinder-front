import React,{useState, useEffect, useContext} from 'react'
import { useTranslation } from 'react-i18next';
import { GetUserLikes, CheckLiked } from '../API/Likes';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import ProfileCard from './ProfileCard';
import { CookieContext } from "../../Context/CookieContext"
import Messages from './Messages';

const TabsSideBar = () => {
    const { cookies } = useContext(CookieContext)
    const email = cookies['TinderEmail']

    const [isMessage, setMessages] = useState('')
    const [isMatch, setMatches] = useState('')
    
    const [isRotated, setIsRotated] = useState('');
  
    const setMessagesEnabled = async (email) => {
      setMessages('underline')
      setMatches('')
    }
    
    const setMatchesEnabled = () => {
      setMessages('')
      setMatches('underline')
      setIsRotated('rotate-[30deg]');
      setTimeout(() => {
        setIsRotated('');
      }, 400);
     
    }
    const{t}=useTranslation()

    //getting userlikes : 
    const [MyLikes, setLikes] = useState([])
    const [MySuperLikes, setSuperLikes] = useState([])
    useEffect(()=>{
        const ReturnData = async ({email}) => {
            const likes = await CheckLiked({email})
            const superLike = await GetUserLikes({email})
            console.log(likes)
            if(likes){
              setLikes(likes.data.message)
            }
            if(superLike){
              setSuperLikes(superLike.data.message)
            }
          }
          ReturnData({email})
    }, [email])

    console.log("Likes => ", MyLikes)


  return (  
      <Tabs>
            <TabsHeader  className=" flex bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent ",
        }}>
        
                 <Tab  key={"match"} value={"value"} className={`text-white text-lg ml-5 ${isMatch} underline-offset-8 decoration-4 decoration-pink-500 mt-5`} onClick={setMatchesEnabled}>
                     <div  >
                       {t('Who Liked Me')} 
                    </div>
                   
                 </Tab>
                 <Tab  key={"msg"} value={"value1"} className={` text-white text-lg ml-5 ${isMessage} underline-offset-8 decoration-4 decoration-pink-500 mt-5`} onClick={setMessagesEnabled}>
                     <div>
                       {t('My Likes')} 
                      </div>
                    </Tab>
            </TabsHeader>
            <TabsBody style={{zIndex: 0}}>
                <TabPanel key={"match"} value={"value"}>

                {MyLikes?.length === 0 ? <div className="flex flex-col justify-center items-center mt-9" > 
                    <div className={`h-52 w-32  bg-gradient-to-tr from-red-400 to-pink-500 rounded-lg shadow1 ${isRotated} ? 'rotate-[30deg]' : '' `}>
                    </div>
                    <div className='cursor-default mt-10 justify-content-center items-center text-center'>
                      <h1 className=" text-white text-2xl font-bold">
                         {t('startmatching')} 
                      </h1>
                       <p className="text-white opacity-75 font-light mt-3">
                       {t('textmatch')} 
                       </p>
                    </div>
                </div>
                : 
                <div className="w-full h-full flex gap-2 flex-wrap mt-4 items-center justify-center">
                  { MyLikes?.map((match)=>(
                    <ProfileCard  imageUrl={match?.images[0]} profileName={match?.firstname}  />
                    ))}
                </div>
                }

                   </TabPanel>

                 <TabPanel key={"msg"} value={"value1"}>
                 {MySuperLikes?.length === 0 ? <div className="flex flex-col justify-center items-center mt-9" > 
                    <div className={`h-52 w-32  bg-gradient-to-tr from-red-400 to-pink-500 rounded-lg shadow1 ${isRotated} ? 'rotate-[30deg]' : '' `}>
                    </div>
                    <div className='cursor-default mt-10 justify-content-center items-center text-center'>
                      <h1 className=" text-white text-2xl font-bold">
                         {t('startmatching')} 
                      </h1>
                       <p className="text-white opacity-75 font-light mt-3">
                       {t('textmatch')} 
                       </p>
                    </div>
                </div>
                : 
                <div className="w-full h-full flex gap-2 flex-wrap mt-4 items-center justify-center">
                  { MySuperLikes?.map((match)=>(
                    <ProfileCard  imageUrl={match?.images[0]} profileName={match?.firstname}  />
                    ))}
                </div>}

                 </TabPanel>
            </TabsBody>
        </Tabs>
    
  )
}

export default TabsSideBar
