import React, {useContext}  from 'react'
import { List, ListItem } from "@material-tailwind/react";
import { SidebarContext } from '../../../Context/SideBarContext';
import { Divider } from '@mui/material';

export default function Preference() {
  const { setTinderComponentOpen, setProfileComponentOpen, setPreferredLanguageOpen, setTinderOpen, setUserOpen } = useContext(SidebarContext)
  const handleClick = () => {
    setPreferredLanguageOpen(true)
    setProfileComponentOpen(false)
    setTinderComponentOpen(false)
    setTinderOpen(false)
    setUserOpen(true) 
  }
  return (
    <div>
          <div className='ml-4 font-bold dark:text-white text-gray-900 opacity-70 cursor-default ' style={{ transform: "translateY(360px)" }}>Display Preference</div>
            <div className="mx-2 w-96 dark:bg-[rgb(20,20,28)] bg-gray-300 " style={{ transform: "translateY(350px)" }}>
            <List className='dark:text-white text-gray-900 mt-9 '>
              <a href="#" className="flex text-initial ">
                <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white' onClick={handleClick}>
                    <span  style={{ whiteSpace: 'nowrap' }} >Language</span>
                    <p style={{ marginLeft: 'auto' }} className='text-sm dark:text-white text-gray-900 opacity-70 hover:text-red-400'>English</p>

                    <svg style={{ marginLeft: 'auto' }}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>
                   
                </ListItem>
              </a>
              <Divider color="#757575" className='w-90'/>

              <a href="#" className="flex text-initial">
                <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white'>
                  <span  style={{ whiteSpace: 'nowrap' }}>Show Distances in </span>
                  <p style={{ marginLeft: 'auto' }} className='text-sm dark:text-white text-gray-900 opacity-70 hover:text-red-400'>km</p>

                  <svg style={{ marginLeft: 'auto' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>                  
                </ListItem>
              </a>
              </List>
              </div>
    </div>
  );
}
