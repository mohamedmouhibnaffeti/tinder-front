import React from 'react'
import { List, ListItem} from "@material-tailwind/react";
import { Divider } from '@mui/material';
import { IoMdOpen } from "react-icons/io";

export default function Securite() {
  return (
    <div>
        
        <div className='cursor-default text-white opacity-50 font-bold ml-4 ' style={{ transform: "translateY(380px)" }}>Safety</div>
            <div className="mx-2 w-96 bg-[rgb(20,20,28)] " style={{ transform: "translateY(380px)" }}>
            <List className='text-white mt-9 '>
              <a href="#" className="text-initial flex  ">
                <ListItem className='  hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                    <span  style={{ whiteSpace: 'nowrap' }} >Community Guidelines</span>

                    < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                </ListItem>
              </a>
              <Divider color="#757575" className='w-90'/>

              <a href="#" className="text-initial flex">
                <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                  <span  style={{ whiteSpace: 'nowrap' }}>Safety & Policy </span>
                  < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                </ListItem>
              </a>
                  <Divider color="#757575" className='w-90'/>

                <a href="#" className="text-initial flex">
                    <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                        <span  style={{ whiteSpace: 'nowrap' }}>Safety Tips </span>
                        < IoMdOpen style={{ marginLeft: 'auto' }} className='opacity-50 hover:text-red-400 '/>

                      </ListItem>
                    </a>
              </List>
              </div>
    </div>
  );
}
