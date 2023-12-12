import React, { useState } from "react";
import User from "./User";
import Tabs from "./Tabs"
import Profil from "./Profil/Profil";
import TinderIcon from "./TinderIcon";

  export default  function Sidebar() {
    const [tinderOpen, setTinderOpen] = useState(true)
    const [userOpen, setUserOpen] = useState(false)
    return (
      <div className="h-screen min-w-[25rem] overflow-y-auto overflow-x-hidden">
        <div className="h-20 violet-sidebar1 p-4 ">
          {
            tinderOpen &&
            <TinderIcon setUserOpen={setUserOpen} setTinderOpen={setTinderOpen} />
          }
          {
            userOpen &&
            <User setUserOpen={setUserOpen} setTinderOpen={setTinderOpen} /> 
          }
        </div>
        <div className='bg-black min-h-screen'>
       
        {
          tinderOpen && 
            <Profil/> 
        }
        {
          userOpen &&
            <Tabs/> 
        }
      </div>
      </div>
    

    );
  }