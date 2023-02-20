import React from 'react'

export default function Toggler() {
  return (
    <div>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-therapyDarkGreen drawer-button  lg:hidden hover:bg-therapyLightGreen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
  )
}
