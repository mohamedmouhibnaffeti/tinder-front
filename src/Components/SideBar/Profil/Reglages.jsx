import React from 'react'
import { List, ListItem} from "@material-tailwind/react";

import { Divider } from '@mui/material';

export default function Reglages() {
  return (
    <div>
    <div className='cursor-default text-white opacity-50 font-bold ml-4 transform translate-y-10'>Account Settings</div>
    <div className="mx-2 w-96 bg-[rgb(20,20,28)] transform translate-y-10">
        <List className='text-white mt-9 '>
          <a href="#" className="text-initial flex  ">
            <ListItem className='  hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                <span  style={{ whiteSpace: 'nowrap' }} >Email</span>
                
                  <p style={{ marginLeft: 'auto' }} className='text-white text-sm opacity-50 paragrapheLimite hover:text-red-400'>mouhamednaffeti77@gmail.com</p>
                  <svg style={{ marginLeft: 'auto' }}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>
               
            </ListItem>
          </a>
          <Divider color="#757575" className='w-90'/>

          <a href="#" className="text-initial flex">
            <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
              <span  style={{ whiteSpace: 'nowrap' }}>Phone Number</span>
               
                  <p style={{ marginLeft: 'auto' }} className='text-white text-sm opacity-50 paragrapheLimite hover:text-red-400 '>54697347</p>
                  <svg style={{ marginLeft: 'auto' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>
               
            </ListItem>
          </a>
      
        </List>
    </div>
    <div>
    <p className='cursor-default text-white opacity-75 transform translate-y-24 ml-5'>
      Verified Phone Number and Email help secure your account.
    </p>
    </div>
    </div>
  );
}
