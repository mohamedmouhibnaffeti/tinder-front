import React, { useEffect } from 'react'
import { List, ListItem } from "@material-tailwind/react";
import { Divider } from '@mui/material';
import DistanceMax from './DistanceMax';
import TranchesAge from './TranchesAge';
import International from './International';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TiTick } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:500,
  bgcolor: 'black',
  border: '2px solid #660099',
  borderRadius:'30px',
  boxShadow: 24,
  p: 4,
};

export default function Decouverte({ location, LookingFor }) {

  const{t}=useTranslation()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [locationString, setLocationString] = useState()

useEffect(()=>{
  if (location?.status === 200) {
    setLocationString(`${location.data.results[0].components.state}, ${location.data.results[0].components.country}`);
  }
  
})
  return (
    <div>
        <div className='ml-4 font-bold dark:text-white text-gray-900 transform translate-y-40 opacity-50 cursor-default'>{t('discovery')}</div>
        <div className="mx-2 w-96 bg-gray-300 dark:bg-[rgb(20,20,28)] transform translate-y-40">
            <List className='dark:text-white text-gray-900 mt-9 '>
              <a href="#" className="flex text-initial ">
                <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white' onClick={handleOpen}>
                    <span  style={{ whiteSpace: 'nowrap' }} >{t('location')}</span>
                    <p style={{ marginLeft: 'auto' }} className='text-sm text-gray-900 dark:text-white  opacity-100 paragrapheLimite hover:text-red-400'>{locationString}</p>
                    <svg style={{ marginLeft: 'auto' }}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171]"><path d="m9 18 6-6-6-6"/></svg>
                </ListItem>
              </a>
              <Divider color="#757575"  className='w-90'/>

                    <DistanceMax/>

              <Divider color="#757575"  className='w-90'/>

              <a href="#" className="flex text-initial">
                <ListItem  className='hover:bg-inherit active:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white '>
                    <span  style={{ whiteSpace: 'nowrap' }}>{t('lookingfor')}</span>
                    <p style={{ marginLeft: 'auto' }} className='text-sm dark:text-white text-gray-900 opacity-100 paragrapheLimite hover:text-red-400'>{LookingFor}s</p>
                    <svg style={{ marginLeft: 'auto' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right hover:stroke-[#f87171] active:stroke-[#f87171] "><path d="m9 18 6-6-6-6"/></svg>
                </ListItem>
              </a>
              <Divider color="#757575"  className='w-90'/>

                    <TranchesAge/>

            
            </List>
        </div>
            


            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} >

                <div >   
                  <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center text-white '>
                  Location
                  </Typography>
                  </div>
            
                <div className='mt-5 font-bold text-white opacity-50 cursor-default '> {t('currentlocation1')}</div>
                  <div className="mt-7 bg-[rgb(20,20,28)] ">
                <List className='text-white border-t-2 border-b-2  border-[#757575]'>

                <a href="#" >
                    <ListItem className='flex cursor-default  h-18 hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>

                    <FaLocationDot  color='#660099' size={"24px"} style={{ marginRight: 'auto' }}/>

                      <span  style={{ whiteSpace: 'nowrap',marginRight:'auto' }} >{t('currentlocation')}</span>
                      <TiTick style={{ marginLeft: 'auto' }} color='#660099' size={"24px"}/>
                       
                    </ListItem>
                    <p className='ml-20 text-sm text-white opacity-50 hover:text-red-400'>{locationString}</p>


      
                </a>
                </List>
            
            </div>


              </Box>
            </Modal>

      </div>
  );
}
