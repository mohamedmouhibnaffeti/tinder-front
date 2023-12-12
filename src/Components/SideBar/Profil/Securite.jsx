import React from 'react'
import { List, ListItem} from "@material-tailwind/react";
import { Divider } from '@mui/material';
import { IoMdOpen } from "react-icons/io";
import { useTranslation } from 'react-i18next';


export default function Securite() {

  const{t}=useTranslation()

  return (
    <div>
        
        <div className='cursor-default dark:text-white text-gray-900 opacity-70 font-bold ml-4 ' style={{ transform: "translateY(380px)" }}>Safety</div>
            <div className="mx-2 w-96 dark:bg-[rgb(20,20,28)] bg-gray-300 " style={{ transform: "translateY(380px)" }}>
            <List className='dark:text-white text-gray-900 mt-9 '>
              <a href="/community" className="text-initial flex  ">
                <ListItem className='  hover:bg-inherit active:bg-inherit focus:bg-inherit dark:hover:text-white hover:text-gray-900'>
                    <span  style={{ whiteSpace: 'nowrap' }} >{t('community')}</span>

                    < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                </ListItem>
              </a>
              <Divider color="#757575" className='w-90'/>

              <a href="/Policy" className="text-initial flex">
                <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit dark:hover:text-white hover:text-gray-900'>
                  <span  style={{ whiteSpace: 'nowrap' }}>{t('safety')} </span>
                  < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                </ListItem>
              </a>
                  <Divider color="#757575" className='w-90'/>

                <a href="/tips" className="text-initial flex">
                    <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit dark:hover:text-white hover:text-gray-900'>
                        <span  style={{ whiteSpace: 'nowrap' }}>{t('safetytips')} </span>
                        < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                      </ListItem>
                    </a>
              </List>
              </div>
    </div> 
  );
}