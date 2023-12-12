import React from 'react'
import { List, ListItem } from "@material-tailwind/react";
import { Divider } from '@mui/material';
import DistanceMax from './DistanceMax';
import TranchesAge from './TranchesAge';
import International from './International';

export default function Decouverte() {

  return (
    <div>
        <div className='cursor-default text-white opacity-50 font-bold ml-4 transform translate-y-40'>Discovery Settings</div>
        <div className="mx-2 w-96 bg-[rgb(20,20,28)] transform translate-y-40">
            <List className='text-white mt-9 '>
              <a href="#" className="text-initial flex  ">
                <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                    <span  style={{ whiteSpace: 'nowrap' }} >Location</span>
                    <p style={{ marginLeft: 'auto' }} className='text-white text-sm opacity-50 paragrapheLimite hover:text-red-400 opacity-100'>Sousse,Tunisie</p>
                    <svg style={{ marginLeft: 'auto' }}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>
                </ListItem>
              </a>
              <Divider color="#757575"  className='w-90'/>

                    <DistanceMax/>

              <Divider color="#757575"  className='w-90'/>

              <a href="#" className="text-initial flex">
                <ListItem  className='hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white  '>
                    <span  style={{ whiteSpace: 'nowrap' }}>Looking for</span>
                    <p style={{ marginLeft: 'auto' }} className='text-white text-sm opacity-50 paragrapheLimite hover:text-red-400 opacity-100'>Women</p>
                    <svg style={{ marginLeft: 'auto' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171] "><path d="m9 18 6-6-6-6"/></svg>
                </ListItem>
              </a>
              <Divider color="#757575"  className='w-90'/>

                    <TranchesAge/>

              <Divider color="#757575"  className='w-90'/>

                <International/>
            
            </List>
        </div>
            <div>
                <p className='cursor-default text-white opacity-75 transform translate-y-48 ml-5'>
                  Going global will allow you to see people from around the world after you've run out of profiles nearby.
                </p>
            </div>
    </div>
  );
}
