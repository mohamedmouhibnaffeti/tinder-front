import React, {useContext} from 'react'
import { List, ListItem } from "@material-tailwind/react";
import { SidebarContext } from '../../../Context/SideBarContext';
import { useTranslation } from 'react-i18next';

export default function Bloquer() {
  
  const { setTinderComponentOpen, setProfileComponentOpen, setPreferredLanguageOpen, setTinderOpen, setUserOpen, profile, setLikesTabOpen, setEmailOpen, setPhoneOpen, setBlockOpen } = useContext(SidebarContext)
  const{t}=useTranslation()

  const handleBlockClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(false)
    setLikesTabOpen(false)
    setEmailOpen(false)
    setPhoneOpen(false)
    setBlockOpen(true)
  }
  return (
    <div>
        
        <div className="mx-2 w-96 bg-gray-300 dark:bg-[rgb(20,20,28)] transform translate-y-64">
        <List className='dark:text-white text-gray-900 '>
              <a href="#" className="flex text-initial ">
                <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white' onClick={handleBlockClick}>
                    <span  style={{ whiteSpace: 'nowrap' }} >{t('block')}</span>
                    <svg style={{ marginLeft: 'auto' }}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>                  
                </ListItem>
              </a>
          </List>
          </div>
    </div>
  );
}
