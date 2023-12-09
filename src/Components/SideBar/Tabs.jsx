import React,{useState, useEffect, useContext} from 'react'
import { useTranslation } from 'react-i18next';
import { GetUserMatches } from '../API/Likes';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import ProfileCard from './ProfileCard';
import { GetMyChats } from '../API/ChatApi';

import { CookieContext } from "../../Context/CookieContext"
import Messages from './Messages';
import { CheckProfile } from '../API/ProfileAPI';

const TabsSideBar = () => {
    const [MyMatches, setMyMatches] = useState([])
    const { cookies } = useContext(CookieContext)
    const email = cookies['TinderEmail']
    const [fetchedChats, setFetchedChats] = useState([])
    const [UserDataToShow, setUserDataToShow ] = useState([])
    useEffect(()=>{
      const ReturnMatches = async ({email}) => {
        const res = await GetUserMatches({email})
        const chats = await GetMyChats({email})
        if(res){
          setMyMatches(res.data.message)
          console.log(res)
        }
        if(chats){
          setFetchedChats(chats.data.chats)
        }
      }
      ReturnMatches({email})
    }, [])

    useEffect(() => {
      fetchedChats.forEach(async (chat) => {
          const member = chat.members.find((member) => member !== email);
          const memberObject = await CheckProfile({ email: member });
          if (memberObject) {
              const memberdata = memberObject.data.Profile;
              memberdata['ChatID'] = chat._id;
              setUserDataToShow((prevData) => [...prevData, memberdata]);
          }
      });
  }, [fetchedChats]);
    const [isMessage, setMessages] = useState('')
    const [isMatch, setMatches] = useState('')
    
    const [isRotated, setIsRotated] = useState('');
  
    const setMessagesEnabled = async (email) => {
      setMessages('underline')
      setMatches('')
      const ArrayToShow = UserDataToShow.filter((user, index)=>{
        const firstIndex = UserDataToShow.findIndex(u=>u.email === user.email)
        return index === firstIndex
      })
      setUserDataToShow(ArrayToShow)
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

  return (  
      <Tabs>
            <TabsHeader  className=" flex bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent ",
        }}>
        
                 <Tab  key={"match"} value={"value"} className={` text-gray-900 dark:text-white text-lg ml-5 ${isMatch} underline-offset-8 decoration-4 decoration-pink-500 mt-5`} onClick={setMatchesEnabled}>
                     <div  >
                       {t('match')} 
                    </div>
                   
                 </Tab>
                 <Tab  key={"msg"} value={"value1"} className={` text-gray-900 dark:text-white text-lg ml-5 ${isMessage} underline-offset-8 decoration-4 decoration-pink-500 mt-5`} onClick={setMessagesEnabled}>
                     <div>
                       {t('msg')} 
                      </div>
                    </Tab>
            </TabsHeader>
            <TabsBody style={{zIndex: 0}}>
                <TabPanel key={"match"} value={"value"}>

                {(MyMatches.length === 0) ? <div className="flex flex-col justify-center items-center mt-9" > 
                    <div className={`h-52 w-32  bg-gradient-to-tr from-red-400 to-pink-500 rounded-lg shadow1 ${isRotated} ? 'rotate-[30deg]' : '' `}>
                    </div>
                    <div className='cursor-default mt-10 justify-content-center items-center text-center'>
                      <h1 className=" text-gray-900 dark:text-white text-2xl font-bold">
                         {t('startmatching')} 
                      </h1>
                       <p className="text-gray-900 dark:text-white opacity-75 font-light mt-3">
                       {t('textmatch')} 
                       </p>
                    </div>
                </div>
                : 
                <div className="w-full h-full flex gap-2 flex-wrap mt-4 items-center justify-center">
                  { MyMatches?.map((match)=>(
                    <ProfileCard  imageUrl={match?.images[0]} profileName={match?.firstname}  />
                    ))}
                </div>
                }

                   </TabPanel>

                 <TabPanel key={"msg"} value={"value1"}>
                    <div className="flex flex-col justify-center items-center">

                      {UserDataToShow.length === 0 ?
                      <div>
                        <iframe src="https://lottie.host/embed/cb938baf-01e7-4649-ac44-062630fb66cb/Z8DkbPVGaF.json" className="w-96 h-64"></iframe>
                        <div className='cursor-default	mt-10 justify-content-center items-center text-center'>
                          <h1 className="text-white text-2xl font-bold ">
                           {t('sayhello')} 
                          </h1>
                          <p className="text-white opacity-75  font-light mt-3">
                           {t('textmsg')} 
                          </p>
                        </div>
                      </div>
                      : 
                      <div className="w-full h-full flex flex-col gap-2">
                        {
                          UserDataToShow.map((member) => {
                              return (
                                <Messages member={member} />
                              );
                          })
                        }
                      </div>
                      }
                    </div>

                 </TabPanel>
            </TabsBody>
        </Tabs>
    
  )
}

export default TabsSideBar
