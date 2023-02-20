import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { storeUserDetails } from "../../services/requests";
import { gettherapist } from "../../services/requests";
import Spinner from "../utils/Spinner";
import Dashboardlayout from "../layout/Dashboardlayout";
export default function PatientBookingTable({handleSpinner}) {
  const [therapist, setTherapist] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    let user = storeUserDetails();
    // set state here
    const details = async () => {
      const response = await gettherapist(user.token);
      const { therapists } = response;
 
      handleSpinner()
      setTherapist(therapists);
     
      // set state here
    };
    details();
  }, []);

 
  const userTherapists = therapist.map((user, i) => {
    const firstName = user.name.split(" ")[0];
    const lastName = user.name.split(" ")[1];

    if(therapist.length < 1){
      return <div className="flex justify-center items-center h-3/4  w-3/4 mx-auto my-8 bg-therapistCardzzBackground">
      <h2>No Therapist at the moment!</h2>
    </div>
    }

    return (
      <tr key={user.userId}>
        <th>{i + 1}</th>
        <td className="capitalize">{firstName}</td>
        <td className="capitalize">{lastName}</td>
        <td className="capitalize">{user.specialty}</td>
        <td className="capitalize">{user.email}</td>
        <td className="capitalize">{user.location}</td>
        <td>
          <Link
            to="/bookapp"
            state={{
              therapistId: user.userId,
              name: user.name,
              email: user.email,
              specialty: user.specialty,
              location: user.location,
            }}
          >
            <button
              type="button"
              className="h-6 bg-therapyDarkGreen w-20 text-white rounded-lg capitalize text-xs"
            >
              book
            </button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>s/n</th>
              <th>first name</th>
              <th>last name</th>
              <th>specialization</th>
              <th>Email</th>
              <th>location</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>{userTherapists}</tbody>
        </table>
       
      </div>
    </>
  );
}
