import React,{useState, useContext} from 'react';
import { List, ListItem ,Checkbox,ListItemSuffix} from "@material-tailwind/react";
import { Divider } from '@mui/material';
import { SidebarContext } from '../../../Context/SideBarContext';

export default function PreferredLanguage() {
  const { setTinderComponentOpen, setProfileComponentOpen, setPreferredLanguageOpen, setTinderOpen, setUserOpen } = useContext(SidebarContext)
  const handleClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(true)
    setTinderOpen(false)
    setUserOpen(true)
  }
       
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (language) => {
    if (selectedItems.includes(language)) {
      setSelectedItems(selectedItems.filter(item => item !== language));
    } else {
      if (selectedItems.length < 5) {
        setSelectedItems([...selectedItems, language]);
      }
    }
  };
    return (
        <div className="w-[27rem] h-[110vh] bg-gray-200 dark:bg-black">
    <div className='ml-4 font-bold text-gray-900 dark:text-white opacity-70 cursor-default ' style={{ transform: "translateY(30px)" }}>Sélectionner une langue</div>
    <div className=" mx-1 w-96 bg-gray-300 dark:bg-[rgb(20,20,28)] " style={{ transform: "translateY(30px)" }}>
    <List className='text-gray-900 dark:text-white mt-9 '>
      <a href="#" className="flex text-initial ">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
            <span>Anglais</span>
            <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Anglais')}
            onChange={() => handleCheckboxChange('Anglais')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>

      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Français</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Français')}
            onChange={() => handleCheckboxChange('Français')}/>
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit  hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Arabe</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Arabe')}
            onChange={() => handleCheckboxChange('Arabe')}  />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Allemand</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Allemand')}
            onChange={() => handleCheckboxChange('Allemand')} />
            </ListItemSuffix>
        </ListItem>
      </a>

      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Espagnol</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Espagnol')}
            onChange={() => handleCheckboxChange('Espagnol')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Italien</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Italien')}
            onChange={() => handleCheckboxChange('Italien')} />
            </ListItemSuffix>
        </ListItem>
      </a>

      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Japonais</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Japonais')}
            onChange={() => handleCheckboxChange('Japonais')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>

      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Corréen</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Corréen')}
            onChange={() => handleCheckboxChange('Corréen')}  />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>

      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Turc</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Turc')}
            onChange={() => handleCheckboxChange('Turc')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>

      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 active:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:active:text-white dark:focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Russe</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Russe')}
            onChange={() => handleCheckboxChange('Russe')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      </List>
      </div>
      <button className="mt-12 mb-5 bg-blue-gray-600 dark:bg-blue-gray-700 rounded-2xl py-2 border mx-2 px-32 ml-10 border-white text-white hover:bg-blue-gray-600/80 dark:hover:bg-blue-gray-700/80 transition ease-in-out delay-150 active:scale-90" onClick={handleClick} > Confirm </button>
</div>
);
}
