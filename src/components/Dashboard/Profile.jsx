import React, {useEffect, useState} from "react";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { storeUserDetails } from "../../services/requests";

export default function Profile(props) {
const [details, setDetails] = useState(storeUserDetails())


const {username} = details



  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="">
        <div className=" flex flex-col items-center w-full">
          <div className=" w-full flex items-center py-4 px-2 rounded-md border ">
            <div
              className="w-14 h-12   border-2 rounded-full "
              style={{
                backgroundImage:
                  `url(${props.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex items-center justify-around  w-full">
              <div className="text-base">
                <p className=" text-center">{props.name}</p>
                <p className=" text-center">
                  <GoPrimitiveDot className="inline text-green-900 " /> Online
                </p>
              </div>
              <div className=" ">
                <span>
                  <MdOutlineKeyboardArrowUp />
                </span>
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
