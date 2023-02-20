import React, { useState } from "react";
import Dashboardlayout from "./components/layout/Dashboardlayout";
import { useParams } from "react-router-dom";
import PatientBookingTable from "./components/Dashboard/PatientBookingTable";
import TherapistBookingTable from "./components/Dashboard/TherapistBookingTable";
import { OnboardingContext } from "./context/UserOboardingContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { getClientDashBoard } from "./services/requests";
import { storeUserDetails } from "./services/requests";
import { useLocation } from "react-router-dom";
import Spinner from "./components/utils/Spinner";
import { logoutUser } from "./services/requests";

import { io } from "socket.io-client";


const socket = io.connect("https://apitherapy-production.up.railway.app");

export default function Dashboard() {
  const[spinner, setSpinner] = useState(true)
  
  const { loginData, handlePatientLoginDetails, user } =
    useContext(OnboardingContext);
  const location = useLocation();
  const { id } = useParams();
  const userType = "patient";
  useEffect(() => {
    let user = storeUserDetails();
    // set state here
    const details = async () => {
      const response = await getClientDashBoard(user.token);
     

      // set state here
      if (response.userId) {
        const { imageUrl, location, username,liscense,specialty } = response;

        storeUserDetails({ ...user, imageUrl, username, location,liscense, specialty });
        handlePatientLoginDetails({ ...user, imageUrl, username });
      }
    };
    details();
  
  }, []);

  

  const handleSpinner = ()=>{
    setSpinner(false)
  }
let typeUser = ""
  
  if (user?.userId) {
    if (user.userType === "client") {
      typeUser = <PatientBookingTable handleSpinner={handleSpinner}/>;
    } else {
      typeUser = <TherapistBookingTable handleSpinner={handleSpinner}/>;
    }
  }

 


  return (
    <Dashboardlayout>
     
      <div className="w-full h-full">{typeUser}
      
      { spinner && <div className="flex justify-center items-center h-4/5  ">

      <Spinner color="therapyDarkGreen" className="mx-auto "/>

        </div> }
      
      </div>

    </Dashboardlayout>
  );
}
