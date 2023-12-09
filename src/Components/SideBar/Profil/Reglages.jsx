import React, {useContext} from 'react'
import { List, ListItem} from "@material-tailwind/react";
import { SidebarContext } from '../../../Context/SideBarContext';
import { Divider } from '@mui/material';

export default function Reglages({ email, phone }) {
  const { setTinderComponentOpen, setProfileComponentOpen, setPreferredLanguageOpen, setEmailOpen, setLikesTabOpen, setPhoneOpen } = useContext(SidebarContext)
  const handleLikesClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(false)
    setLikesTabOpen(false)
    setEmailOpen(true)
  }
  const handlePhoneClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(false)
    setLikesTabOpen(false)
    setEmailOpen(false)
    setPhoneOpen(true)
  }
  const phoneNumber = phone ? phone : "None"
  return (
    <div>
    <div className='ml-4 font-bold text-gray-900 dark:text-white transform translate-y-10 opacity-70 cursor-default'>Account Settings</div>
    <div className="mx-2 w-96 bg-gray-300 dark:bg-[rgb(20,20,28)] transform translate-y-10">
        <List className='text-gray-900 dark:text-white mt-9'>
          <a href="#" className="flex text-initial ">
            <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white' onClick={handleLikesClick}>
                <span  style={{ whiteSpace: 'nowrap' }} >Email</span>
                
                  <p style={{ marginLeft: 'auto' }} className='text-sm text-gray-900 dark:text-white opacity-50 paragrapheLimite hover:text-red-400'>{email}</p>
                  <svg style={{ marginLeft: 'auto' }}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>
               
            </ListItem>
          </a>
          <Divider color="#757575" className='w-90'/>

          <a href="#" className="flex text-initial">
            <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white' onClick={handlePhoneClick}>
              <span  style={{ whiteSpace: 'nowrap' }}>Phone Number</span>
               
                  <p style={{ marginLeft: 'auto' }} className='text-sm text-gray-900 dark:text-white opacity-70 paragrapheLimite hover:text-red-400 '>{phoneNumber}</p>
                  <svg style={{ marginLeft: 'auto' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>
               
            </ListItem>
          </a>
      
        </List>
    </div>
    <div>
    <p className='ml-5 text-gray-900 dark:text-white transform translate-y-24 opacity-75 cursor-default'>
      Verified Phone Number and Email help secure your account.
    </p>
    </div>
    </div>
  );
}
