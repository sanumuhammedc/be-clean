import React from 'react'
import { Link } from 'react-router-dom';
import close from "../../Common/icons/close.svg"
const index = () => {
  return (
    <div className="container">
      <div className="flex justify-between align-center">
        <div>
          <h4 className="font-poppins font-extrabold text-[1.7rem]">
            Settings
          </h4>
        </div>
        <Link to={"/profile"} className=" flex flex-row space-x-4">
          <img src={close} alt="" />
        </Link>
          </div>
          
          
    </div>
  );
}

export default index