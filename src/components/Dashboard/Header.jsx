import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <div className="container flex border-b-2 border-therapyDarkGreen w-full h-[60px] place-items-center px-6 items-center">
      <div className="flex justify-between w-full items-center">
        <h2 className="font-bold text-base uppercase text-therapyDarkGreen">
          Dashboard
        </h2>
        <div>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-therapyLightGreen drawer-button lg:hidden"
          >
            <GiHamburgerMenu className="text-therapyDarkGreen w-6 h-6 " />
          </label>
        </div>
      </div>
    </div>
  );
}
