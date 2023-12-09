import React, { useState, useEffect } from 'react';
import { List, ListItem, Checkbox, ListItemSuffix } from "@material-tailwind/react";
import { Divider } from '@mui/material';

export default function Theme() {
  const [checked, setChecked] = useState(0);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      setChecked(2);
    } else {
      setTheme('light');
      setChecked(1);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
      <div className='cursor-default text-white opacity-50 font-bold ml-4 ' style={{ transform: "translateY(330px)" }}>Appearance</div>
      <div className="  mx-2 w-96 bg-[rgb(20,20,28)] " style={{ transform: "translateY(330px)" }}>
        <List className='text-white mt-9 '>
          <a href="#" className="text-initial flex ">
            <ListItem className=' cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
              <span>Use System Setting</span>
              <ListItemSuffix>
                <Checkbox color="pink" checked={checked === 0} onChange={handleToggle(0)} />
              </ListItemSuffix>
            </ListItem>
          </a>
          <Divider color="#757575" className='w-90' />

          <a href="#" className="text-initial flex">
            <ListItem className='cursor-default  hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
              <span style={{ whiteSpace: 'nowrap' }}>Light Mode</span>
              <ListItemSuffix>
                <Checkbox color="pink" checked={checked === 1} onChange={handleToggle(1)} />
              </ListItemSuffix>
            </ListItem>
          </a>
          <Divider color="#757575" className='w-90' />
          <a href="#" className="text-initial flex">
            <ListItem className='cursor-default  hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
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
