import React from 'react';
import { List, ListItem} from "@material-tailwind/react";
import { Divider } from '@mui/material';
import { TiTick } from "react-icons/ti";

function LookingFor(props) {
    return (
        <div>
            <div className="mx-2 w-96 bg-[rgb(20,20,28)] transform translate-y-10">
                <List className='text-white '>
                <a href="#" className="flex text-initial ">
                    <ListItem className='h-10 ml-4 cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                        <span  style={{ whiteSpace: 'nowrap' }} >Homme</span>
                        <TiTick style={{ marginLeft: 'auto' }} color='#660099' size={"24px"}/>
                    </ListItem>
                </a>
                <Divider color="#757575" className='w-90'/>
                <a href="#" className="flex text-initial ">
                    <ListItem className='h-10 ml-4 cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                        <span  style={{ whiteSpace: 'nowrap' }} >Femme</span>
                    </ListItem>
                </a>
                </List>

            
            </div>
              
                 <p className='mx-5 mt-20 text-white opacity-75'>
                    Vous ne verrez que des hommes dans la fonctionnalité "Découverte"
                </p>
              
            
        </div>
    );
}

export default LookingFor;