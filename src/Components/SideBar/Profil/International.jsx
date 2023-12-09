import React from 'react'
import {  ListItem } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { Divider } from '@mui/material';

export default function International() {
  return (
    <div>
          <a href="#" className="text-initial flex">
                <ListItem  className='hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white  focus:text-white active:text-white'>
                <span  style={{ whiteSpace: 'nowrap' }}>Global</span>

                </ListItem>
                <div  className='flex'>
                        <Switch style={{ marginLeft: 'auto' }} color="pink" defaultChecked />
                      </div>
              </a>
              <Divider color="#757575"  className='w-90'/>

              <a href="#" className="text-initial flex">
                <ListItem  className='hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white focus:text-white active:text-white '>
                <span  style={{ whiteSpace: 'nowrap' }}>Preferred Languages</span>
                <p style={{ marginLeft: 'auto' }} className='text-white text-sm opacity-50 paragrapheLimite hover:text-red-400 opacity-100'>English</p>

                <svg style={{ marginLeft: 'auto' }}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>
                </ListItem> 
              </a>
    </div>
  );
}
