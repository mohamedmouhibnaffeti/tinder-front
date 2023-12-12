import React, {useContext, useEffect, useState} from 'react'
import { List} from "@material-tailwind/react";
import { FaFire } from "react-icons/fa";
import Reglages from './Reglages';
import Decouverte from './Decouverte';
import Theme from './Theme';
import Securite from './Securite';
import Bloquer from './Bloquer';
import Deconnexion from './Deconnexion';
import SupprimerCompte from './SupprimerCompte';
import { SidebarContext } from '../../../Context/SideBarContext';
import { useTranslation } from 'react-i18next';


const Profil = () => {
      const { profile, LocationData, setEmailOpen } = useContext(SidebarContext)
      console.log(LocationData)
      const email = profile.email
      const phone = profile.phone
      const LookingFor = profile.showme
      const{t}=useTranslation()

      return (
      <div className="bg-gray-200 dark:bg-black min-h-fit flex justify-center flex-col lg:items-center items-center">
            {/***************Réglages*******************/}
                  <Reglages email={email} phone={phone} setOpen={setEmailOpen} />
            {/***************Reglages et découverte ************/}
                  <Decouverte location={LocationData} LookingFor={LookingFor} />
            {/***************Bloquer contacts****************/}
                  <Bloquer/>
      
            {/***************Thème*******************/}
                  <Theme/>
          
            {/***************Sécurité*******************/}
                  <Securite/>
            {/***************Déconnexion*******************/}
                  <Deconnexion/>
            {/************* Tinder version *******************/}
            <List className="justify-content-center items-center "  style={{ transform: "translateY(510px)" }}>
                        <FaFire className='w-8 h-8 ' style={{color:"#660099"}}/>
                        <span className='mt-3 dark:text-white text-gray-900 cursor-default'>{t('version')}</span>
                  </List>

            {/*************** Supprimer mon compte *******************/}
            <SupprimerCompte/>
      </div>
      )
}
export default Profil
