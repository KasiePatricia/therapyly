import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getTherapistSessions } from "../../services/requests";
import { storeUserDetails } from "../../services/requests";
import { getdonesessions } from "../../services/requests";
import cogoToast from "cogo-toast";
import Spinner from "../utils/Spinner";
export default function TherapistBookingTable({ handleSpinner }) {
  const [isDone, setIsDone] = useState(false);
  const [holdPrev, setPrevious] = useState("");
  const [finalDone, setFinalDone] = useState({
    done: "",
    id: "",
    innitialDone: true,
  });
  const [booked, setBooked] = useState({
    spinner: true,
    sessionsT: [],
  });

  useEffect(() => {
    const { token } = storeUserDetails();

    const therapistSessions = async () => {
      const { sessions } = await getTherapistSessions(token);
      // setFinalDone({...finalDone, innitialDone: false})

      setBooked({ ...booked, spinner: false, sessionsT: sessions || [] });
      handleSpinner();
    };
    therapistSessions();
  }, []);

  const handleDone = async (id) => {
    const { token } = storeUserDetails();
    // cogoToast.loading("saving")
    const response = await getdonesessions({ id: id }, token);
   
    setFinalDone({ ...finalDone, done: response.appontment, id: response._id });
   
    cogoToast.success("saved!")

    const newbookDone = booked.sessionsT.map((eachItem) => {
  
      if (eachItem._id === response._id) {
        eachItem.done = response.appontment;
      }
      return eachItem;
    });
    setBooked({ ...booked, sessionsT: newbookDone });
  };

  if(booked.spinner){
    return <Spinner/>
  }


  if (booked.sessionsT.length < 1) {
    return (
      <div className="flex justify-center items-center h-3/4  w-3/4 mx-auto my-8 bg-therapistCardzzBackground">
        <h2>No Booked seesion at the moment!</h2>
      </div>
    );
  }
  const tharapistsession = booked.sessionsT.map((items, i) => {
    const { username, day, meetingType } = items;
    const name = username.split(" ");
    return (
      <tr key={items._id}>
        <th>{i+1}</th>
        <td className="capitalize">{name[0]}</td>
        <td className="capitalize">{name[1]}</td>
        <td className="capitalize">{meetingType}</td>
        <td className="capitalize">{day}</td>
        <td className="capitalize flex items-center space-x-2 text-black ">
          <div
            className={
              items.done
                ? "w-4 h-4 bg-green-900 rounded-full"
                : "w-4 h-4 bg-red-900 rounded-full"
            }
          ></div>
          <p>{items.done ? "concluded" : "pending"}</p>
        </td>

        {/* {!finalDone.innitialDone && <td className="capitalize flex items-center space-x-2 text-black ">
      <div className={items._id === finalDone.id ? 'w-4 h-4 bg-green-900 rounded-full': 'w-4 h-4 bg-red-900 rounded-full'}></div>
      <p>{items._id === finalDone.id && finalDone.done ? 'concluded': 'pending'}</p>
    </td>  } */}
        <td>
          <button
            onClick={() => handleDone(items._id) }
            type="button"
            className="h-6 bg-therapyDarkGreen w-20 text-white rounded-lg capitalize text-xs"
         disabled={items.done}
         >
            done
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>s/n</th>
            <th>first name</th>
            <th>last name</th>
            <th>meeting type</th>
            <th>day</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{tharapistsession}</tbody>
      </table>
    </div>
  );
}
