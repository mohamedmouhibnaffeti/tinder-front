import React from 'react'
import { List} from "@material-tailwind/react";
import { FaFire } from "react-icons/fa";
import Reglages from './Reglages';
import Decouverte from './Decouverte';
import Theme from './Theme';
import Preference from './PreferencesAffichage';
import Securite from './Securite';
import Bloquer from './Bloquer';
import Deconnexion from './Deconnexion';
import SupprimerCompte from './SupprimerCompte';

const Profil = () => {
  return (
    <div className="w-[25rem] min-h-screen bg-black">
      {/***************Réglages*******************/}
            <Reglages/>
      {/***************Reglages et découverte ************/}
            <Decouverte/>
      {/***************Bloquer contacts****************/}
            <Bloquer/>
     
      {/***************Thème*******************/}
            <Theme/>
      {/***************Préférence d'affichage*******************/}
            <Preference/>
      {/***************Sécurité*******************/}
            <Securite/>
      {/***************Déconnexion*******************/}
            <Deconnexion/>
      {/************* Tinder version *******************/}
            <List className="justify-content-center items-center bg-black "  style={{ transform: "translateY(530px)" }}>
                  <FaFire className='w-8 h-8 ' style={{color:"#660099"}}/>
                  <span className='mt-3 text-white cursor-default'>Version 4.44.0</span>
            </List>

      {/*************** Supprimer mon compte *******************/}
           <SupprimerCompte/>
    </div>
  )
}
export default Profil
