import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full bg-therapyDarkGreen py-4 mt-[50px]">
      <div className="mx-auto w-90 pt-4 flex flex-col md:flex-row items-center border-b-2 md:justify-between border-therapyLightGreen text-white md:pb-5">
        <div className="mb-5 md:mb-0 md:w-1/2 flex md:justify-start">
          <ul className="flex m-0 p-0 ">
            <li className="px-2">
              <a href="#" className="capitalize text-xs">
                therapy app
              </a>
            </li>
            <li className="px-2">
              <a href="#" className="capitalize text-xs">
                about us
              </a>
            </li>
            <li className="px-2">
              <a href="#" className="capitalize text-xs">
                services
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-5 md:mb-0 md:w-1/2 flex md:justify-end">
          <ul className="flex m-0 p-0 ">
            <li className="mx-2  w-[30px] h-[30px] flex justify-center items-center border-2 border-therapyLightGreen rounded-[50%] overflow-hidden">
              <a href="#" className="capitalize text-sm">
                <FiFacebook />
              </a>
            </li>
            <li className="mx-2 w-[30px] h-[30px] flex justify-center items-center border-2 border-therapyLightGreen rounded-[50%] overflow-hidden">
              <a href="#" className="capitalize text-sm">
                <FiTwitter />
              </a>
            </li>
            <li className="mx-2 w-[30px] h-[30px] flex justify-center items-center border-2 border-therapyLightGreen rounded-[50%] overflow-hidden">
              <a href="#" className="capitalize text-sm">
                <FiInstagram />
              </a>
            </li>

            <li className=" w-[30px] h-[30px] flex justify-center items-center border-2 border-therapyLightGreen rounded-[50%] overflow-hidden">
              <a href="#" className="capitalize text-sm">
                <FaPinterestP />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-90 mx-auto flex justify-center md:justify-end mt-2 py-2">
        <p className="text-sm capitalize text-white">
          &copy; {date.getFullYear()} therapy app
        </p>
      </div>
    </footer>
  );
};

export default Footer;
