import React, { useState, useContext, useEffect } from 'react';
import { ListItem } from '@material-tailwind/react';
import { Switch } from '@material-tailwind/react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { SidebarContext } from '../../../Context/SideBarContext';
import { useTranslation } from 'react-i18next';


function valuetext(value) {
  return `${value} km`;
}

export default function DistanceMax() {
  const{t}=useTranslation()

  const { setDistancePreference, setFixedDistance, fixedDistance, DistancePreference } = useContext(SidebarContext);
  const handleSliderChange = (event, newValue) => {
    setDistancePreference(newValue);
  };

  const handleSwitchChange = () => {
    setFixedDistance((prevIsFixedDistance) => !prevIsFixedDistance);
  };


  return (
    <div>
      <a href="#" className="text-initial">
        <ListItem className="cursor-default h-24 hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:hover:text-white dark:focus:text-white dark:active:text-white">
          <span style={{ whiteSpace: 'nowrap' }} className="cursor-default">
              {t('distancepref')}
          </span>
          <p style={{ marginLeft: 'auto' }} className="text-gray-900 dark:text-white text-sm opacity-70 paragrapheLimite hover:text-red-400">
            {DistancePreference} km
          </p>
        </ListItem>
        <div className="w-88 mb-4">
          <Box className="ml-3" sx={{ width: 350 }}>
            <Slider
              aria-label="Custom marks"
              value={DistancePreference}
              getAriaValueText={valuetext}
              step={2}
              valueLabelDisplay="auto"
              color="secondary"
              min={2}
              max={161}
              onChange={handleSliderChange}
            />
          </Box>
        </div>
        <div className="flex gap-24">
          <span className="cursor-default text-gray-900 dark:text-white opacity-50 text-left w-50 ml-3">{t('onlyshow')}</span>
          <Switch color="pink" checked={fixedDistance} onChange={handleSwitchChange} />
        </div>
      </a>
    </div>
  );
}
