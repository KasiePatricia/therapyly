import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { storeUserSessions } from "../../services/requests";
import { storeUserPage } from "../../services/requests";

export default function Pages({ page, count }) {
  const [correntPage, setCorrentPage] = useState(storeUserPage() || count);

  const show = (item) => {
    console.log(item);
  };

  let sessions = page[storeUserPage() || count].map((item, i) => {
    const desc = item?.description.slice(0, 10)
    return (
      <tr onClick={() => show(item)}>
        <th>{i + 1}</th>
        <td className="capitalize">{item?.therapistname}</td>
        <td className="capitalize">{item?.meetingType}</td>
        <td className="capitalize">{item?.day}</td>
        <td className="capitalize">{item?.appointmentTime}</td>
        <td className="capitalize">{desc}...</td>
        <td>
          <Link to="/session-details" state={{ details: item }}>
            <button
              type="button"
              className="h-6 bg-therapyDarkGreen w-20 text-white rounded-lg capitalize text-xs"
            >
              Details
            </button>
          </Link>
        </td>
      </tr>
    );
  });

  return <>{sessions}</>;
}

{
  /* <tr key={user._id}>
        <th>{i + 1}</th>
        <td className="capitalize">{user.therapistname}</td>
        <td className="capitalize">{user.meetingType}</td>
        <td className="capitalize">{user.day}</td>
        <td className="capitalize">{user.description}...</td>
        <td className="capitalize">{user.appointmentTime}</td>
        <td>
          <Link to="/bookapp">
            <button
              type="button"
              className="h-6 bg-therapyDarkGreen w-20 text-white rounded-lg capitalize text-xs"
            >
              Details
            </button>
          </Link>
        </td>
      </tr>
   ; */
}
