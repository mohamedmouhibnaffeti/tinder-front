import React,{useState, useEffect, useContext} from 'react'
import { useTranslation } from 'react-i18next';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    ListItem,
    List
  } from "@material-tailwind/react";
  import ProfileCard from '../ProfileCard';
import { CookieContext } from "../../../Context/CookieContext"
import { blockUser, getBlockedUsers } from '../../API/Likes';

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
    const [targetEmail, setTargetEmail] = useState('')
    const [res, setRes] = useState()
    const Block = async({ targetEmail, email }) => {
        const result = await blockUser({ targetEmail: targetEmail, currentEmail: email })
        if(result){
            setRes(result)
            console.log(result)
        }
    }

    const [blocks, setBlocks] = useState([])
    useEffect(()=>{
        const ReturnData = async ({email}) => {
            const Blocks = await getBlockedUsers({userEmail: email})
            if(Blocks.status === 200){
              setBlocks(Blocks.data.blockedContacts)
            } 
        }
          ReturnData({email})
          
    }, [email])

  return (  
      <Tabs>
            <TabsHeader  className=" flex bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent ",
        }}>
        
                 <Tab  key={"match"} value={"value"} className={`text-gray-900 dark:text-white text-lg ml-5 ${isMatch} underline-offset-8 decoration-4 decoration-pink-500 mt-5`} onClick={setMatchesEnabled}>
                     <div  >
                       {t('My Blocks')} 
                    </div>
                   
                 </Tab>
                 <Tab  key={"msg"} value={"value1"} className={` text-gray-900 dark:text-white text-lg ml-5 ${isMessage} underline-offset-8 decoration-4 decoration-pink-500 mt-5`} onClick={setMessagesEnabled}>
                     <div>
                       {t('Block User')} 
                      </div>
                    </Tab>
            </TabsHeader>
            <TabsBody style={{zIndex: 0}}>
                <TabPanel key={"match"} value={"value"}>

                {blocks.length === 0 ? <div className="flex flex-col justify-center items-center mt-9" > 
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
                  { blocks?.map((match)=>(
                    <ProfileCard  imageUrl={match?.images[0]} profileName={match?.firstname}  />
                    ))}
                </div>
                }

                   </TabPanel>

                 <TabPanel key={"msg"} value={"value1"}>
                 <List className='text-gray-900 dark:text-white mt-9 gap-6 '>
                        <input type="text" className="bg-gray-200 border-2 border-gray-400 outline-1 outline-gray-600 dark:text-gray-400  text-gray-200 dark:bg-gray-800 rounded-md py-2" value={targetEmail} onChange={(e)=>setTargetEmail(e.target.value)} placeholder='Insert user email...' />
                        <button className="bg-pink-400 dark:bg-pink-800/90 py-2 rounded-lg transition delay-150 ease-in-out font-semibold text-lg hover:bg-pink-400/90 dark:hover:bg-pink-800/80 dark:text-black text-white" onClick={()=>Block({ targetEmail, email })}> Block </button>
                </List>
                {res?.status === 202 
                ? 
                <p className="text-green-800 text-md font-thin ml-24 ">{res?.data?.message}</p> 
                : 
                <p className="text-red-800 text-md font-thin ml-10">{res?.message}</p>}

                 </TabPanel>
            </TabsBody>
        </Tabs>
    
  )
}

export default TabsSideBar
