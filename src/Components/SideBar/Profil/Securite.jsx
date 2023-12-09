import React from 'react'
import { List, ListItem} from "@material-tailwind/react";
import { Divider } from '@mui/material';
import { IoMdOpen } from "react-icons/io";

export default function Securite() {
  return (
    <div>
        
        <div className='cursor-default dark:text-white text-gray-900 opacity-70 font-bold ml-4 ' style={{ transform: "translateY(380px)" }}>Safety</div>
            <div className="mx-2 w-96 dark:bg-[rgb(20,20,28)] bg-gray-300 " style={{ transform: "translateY(380px)" }}>
            <List className='dark:text-white text-gray-900 mt-9 '>
              <a href="#" className="text-initial flex  ">
                <ListItem className='  hover:bg-inherit active:bg-inherit focus:bg-inherit dark:hover:text-white hover:text-gray-900'>
                    <span  style={{ whiteSpace: 'nowrap' }} >Community Guidelines</span>

                    < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                </ListItem>
              </a>
              <Divider color="#757575" className='w-90'/>

              <a href="#" className="text-initial flex">
                <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit dark:hover:text-white hover:text-gray-900'>
                  <span  style={{ whiteSpace: 'nowrap' }}>Safety & Policy </span>
                  < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                </ListItem>
              </a>
                  <Divider color="#757575" className='w-90'/>

                <a href="#" className="text-initial flex">
                    <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit dark:hover:text-white hover:text-gray-900'>
                        <span  style={{ whiteSpace: 'nowrap' }}>Safety Tips </span>
                        < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                      </ListItem>
                    </a>
              </List>
              </div>
    </div> 
  );
}