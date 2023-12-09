import React, { useState, useContext, useEffect } from 'react';
import { ListItem } from '@material-tailwind/react';
import { Switch } from '@material-tailwind/react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { SidebarContext } from '../../../Context/SideBarContext';

function valuetext(value) {
  return `${value} km`;
}

export default function DistanceMax() {
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
        <ListItem className="cursor-default h-24 hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white">
          <span style={{ whiteSpace: 'nowrap' }} className="cursor-default">
            Distance Preference
          </span>
          <p style={{ marginLeft: 'auto' }} className="text-white text-sm opacity-50 paragrapheLimite hover:text-red-400">
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
          <span className="cursor-default text-white opacity-50 text-left w-50 ml-3">Only show people in this range</span>
          <Switch color="pink" checked={fixedDistance} onChange={handleSwitchChange} />
        </div>
      </a>
    </div>
  );
}
