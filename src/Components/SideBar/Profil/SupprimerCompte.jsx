import React, {useContext} from 'react'
import { List, ListItem } from "@material-tailwind/react";
import { DeleteUser } from '../../API/ProfileAPI';
import { useNavigate } from 'react-router-dom';
import { CookieContext } from '../../../Context/CookieContext';

export default function SupprimerCompte() {
  const navigate = useNavigate()
  const { cookies, setCookie } = useContext(CookieContext)
  const email = cookies['TinderEmail']
  const deleteUser = async ( {email} ) => {
    await DeleteUser({email})
    setCookie('TinderJWT', '', 0)
    setCookie('TinderEmail', '', 0)
    navigate("/")
  }
  return (
   <div>
    
    <div className="mx-2 w-96 dark:bg-[rgb(20,20,28)] bg-gray-300 " style={{ transform: "translateY(550px)" }} >
                  <List className='dark:text-white text-gray-900 justify-content-center items-center cursor-pointer ' onClick={()=>deleteUser({email})} >
                     <a href="#">
                        <ListItem className=' hover:bg-inherit active:bg-inherit focus:bg-inherit dark:hover:text-white hover:text-gray-900 text-center'>
                          <span  style={{ whiteSpace: 'nowrap' }} >Delete Account </span>
                        </ListItem>
                      </a>
                  </List>
              </div>
   </div>
  );
}