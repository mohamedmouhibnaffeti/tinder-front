import React  from 'react'
import { List, ListItem } from "@material-tailwind/react";

export default function Deconnexion() {
  return (
    <div>
    <div className="mx-2 w-96 bg-[rgb(20,20,28)] " style={{ transform: "translateY(470px)" }}>
    <List className='text-white  justify-content-center items-center'>
          <a href="#">
            <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                <span  >Logout</span>
            </ListItem>
          </a>
      </List>
      </div>
      </div>
  );
}
