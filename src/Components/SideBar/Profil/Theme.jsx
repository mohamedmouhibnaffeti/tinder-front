import React, { useState, useEffect, useContext } from 'react';
import { List, ListItem, Checkbox, ListItemSuffix } from "@material-tailwind/react";
import { Divider } from '@mui/material';
import { ThemeContext } from '../../../Context/ThemeContext';

export default function Theme() {
  const { checked, setChecked, setTheme } = useContext(ThemeContext)

  const handleToggle = (index) => () => {
    setChecked(index);
    if (index === 0) {
      setTheme(null);
    } else if (index === 1) {
      setTheme('light');
    } else if (index === 2) {
      setTheme('dark');
    }
  };

  return (
    <div>
      <div className='cursor-default dark:text-white text-gray-900 opacity-70 font-bold ml-4 ' style={{ transform: "translateY(330px)" }}>Appearance</div>
      <div className="  mx-2 w-96 bg-gray-300 dark:bg-[rgb(20,20,28)] " style={{ transform: "translateY(330px)" }}>
        <List className='dark:text-white text-gray-900 mt-9 '>
          <a href="#" className="text-initial flex ">
            <ListItem className=' cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white'>
              <span>Use System Setting</span>
              <ListItemSuffix>
                <Checkbox color="pink" checked={checked === 0} onChange={handleToggle(0)} />
              </ListItemSuffix>
            </ListItem>
          </a>
          <Divider color="#757575" className='w-90' />

          <a href="#" className="text-initial flex">
            <ListItem className='cursor-default  hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white'>
              <span style={{ whiteSpace: 'nowrap' }}>Light Mode</span>
              <ListItemSuffix>
                <Checkbox color="pink" checked={checked === 1} onChange={handleToggle(1)} />
              </ListItemSuffix>
            </ListItem>
          </a>
          <Divider color="#757575" className='w-90' />
          <a href="#" className="text-initial flex">
            <ListItem className='cursor-default  hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white'>
              <span style={{ whiteSpace: 'nowrap' }}>Dark Mode</span>
              <ListItemSuffix>
                <Checkbox color="pink" checked={checked === 2} onChange={handleToggle(2)} />
              </ListItemSuffix>
            </ListItem>
          </a>
        </List>
      </div>
    </div>
  );
}
