import React from "react";
import coin from "../../Common/icons/coin.svg";
import search from "../../Common/icons/search.svg";
// import { userDetails } from "./userDetails";
const index = () => {
  return (
    <div className="container m-0">
      <div className="flex justify-between items-center m-0">
        <h4 className="font-poppins justify-between font-extrabold text-[1.7rem]">
          BeClean
        </h4>

        <div className=" flex flex-row items-center space-x-4 m-0">
          <img src={search} alt="" />
          <div className="rounded-[1.4rem] bg-[#3F63F4] flex">
            <h2 className="p-2 text-white font-poppins font-normal text-[1.2rem]">
              400
            </h2>
            <img className="pr-2" src={coin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
