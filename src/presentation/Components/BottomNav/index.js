import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import camera from "../../Common/icons/camera.svg";
import home from "../../Common/icons/home.svg";
import usersquare from "../../Common/icons/usersquare.svg";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
        <BottomNavigation
          className="fixed bottom-0 flex justify-around w-[100%]"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/camera"
            icon={<img src={camera} alt="camera" />}
          />
          <BottomNavigationAction
            component={Link}
            to="/"
            icon={<img src={home} alt="home" />}
          />
          <BottomNavigationAction
            component={Link}
            to="/profile"
            icon={<img src={usersquare} alt="userSquare" />}
          />
        </BottomNavigation>
  );
}
