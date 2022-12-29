import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';  
import Image from 'next/image';
import camera from "./images/camera.svg";
import home from "./images/home.svg";
import usersquare from "./images/usersquare.svg";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if(router.pathname === "/")
    {
        setValue(1)
    }
    else if(router.pathname === "/upload")
    {
        setValue(0)
    }
    else
    {
        setValue(2)
    }
  });

  return (
    <Box sx={{ position: "fixed", bottom: "0",left: "0", right: "0" }}>
      <BottomNavigation
        showLabels
        value={value}
      >
        <BottomNavigationAction href='/upload' label="Upload" icon={<Image src={camera} alt="Upload" />} />
        <BottomNavigationAction href='/' label="Home" icon={<Image src={home} alt="Home" />} />
        <BottomNavigationAction href='/profile' label="Profile" icon={<Image src={usersquare} alt="Profile" />} />
      </BottomNavigation>
    </Box>
  );
}