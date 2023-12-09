import React, { useContext }  from 'react'
import { List, ListItem } from "@material-tailwind/react";
import { CookieContext } from '../../../Context/CookieContext';
import { useNavigate } from 'react-router-dom';

export default function Deconnexion() {
  const { setCookie } = useContext(CookieContext)
  const navigate = useNavigate()
  const Logout = () => {
    setCookie('TinderJWT', '', 0)
    setCookie('TinderEmail', '', 0)
    navigate("/")
}
  return (
    <div>
    <div className="mx-2 w-96 bg-gray-300 dark:bg-[rgb(20,20,28)] " style={{ transform: "translateY(470px)" }}>
    <List className='text-gray-900 dark:text-white  justify-content-center items-center' onClick={Logout}>
          <a href="#">
            <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit dark:hover:text-white hover:text-gray-900'>
                <span  >Logout</span>
            </ListItem>
          </a>
      </List>
      </div>
      </div>
  );
}
