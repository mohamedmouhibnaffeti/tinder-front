import React, {useState, useContext, useEffect} from "react";
import User from "./User";
import Tabs from "./Tabs"
import Profil from "./Profil/Profil";
import TinderIcon from "./TinderIcon"
import PreferredLanguage from "./Profil/PreferredLanguage";
import { SidebarContext } from "../../Context/SideBarContext";
import LikesTab from "./LikesTab"
import Email from "./Profil/Email"
import Phone from "./Profil/Phone";
import BlockTabs from "./Profil/BlockTabs"

export default  function Sidebar() {
    
  const { tinderOpen, tinderComponentOpen, profileComponentOpen, userOpen, preferredLanguageOpen, LikesTabOpen, EmailOpen, PhoneOpen, blockOpen } = useContext(SidebarContext)
    return (
      <div className=" w-[33.5rem] min-h-screen overflow-x-hidden overflow-y-scroll ">
        <div className="h-20 p-4 violet-sidebar "> 
          <div className="h-20 violet-sidebar1 p-4 min-w-[25.5rem] ">
            {
              tinderOpen &&
              <TinderIcon/>
            }
            {
              userOpen &&
              <User/> 
            }
          </div>

          </div>
          <div className="bg-gray-200 dark:bg-black h-screen dark:border-r-black border-r-2 border-r-gray-700">
            {
              preferredLanguageOpen && 
              <PreferredLanguage/>
            }
            {
              tinderComponentOpen && 
              <div className="bg-gray-200 dark:bg-black h-[270vh] dark:border-r-black  border-r-gray-700">
                <Profil />
              </div>
            }
            {
              profileComponentOpen &&
                <Tabs/> 
            }
            {
              LikesTabOpen &&
                <LikesTab/> 
            }
            {EmailOpen && <Email />}
            { PhoneOpen && <Phone /> }
            { blockOpen && <BlockTabs /> }
          </div>
      </div>
    

    );
  }