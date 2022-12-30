import React from "react";
import { Link } from "react-router-dom";
import coin from "../../Common/icons/coin.svg";
import search from "../../Common/icons/search.svg";
// import { userDetails } from "./userDetails";
const index = () => {
  return (
    <div className="container m-0 p-5 mb-5 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center m-0">
        <h4 className="font-poppins justify-between font-extrabold text-[1.7rem]">
          BeClean
        </h4>

        <div className=" flex items-center space-x-4 m-0">
          <img src={search} alt="" />
          <Link to={"/wallet"} className="rounded-[1.4rem] bg-[#3F63F4] flex">
            <h2 className="p-2 text-white font-poppins font-normal text-[1.2rem]">
              400
            </h2>
            <img className="pr-2" src={coin} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
