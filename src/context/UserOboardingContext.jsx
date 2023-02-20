import React, { createContext, useContext, useState, useEffect } from "react";
import { storeUserDetails } from "../services/requests";
import { io } from "socket.io-client"; 
  const socket = io.connect("https://apitherapy-production.up.railway.app");

  
export const OnboardingContext = createContext();

export default function UserOboardingContext({ children }) {
  const [socketData, setSocketData] = useState(socket.connected)
  const [notice, setNotice] = useState([])
  const [noticeData, setNoticeData]  = useState([])
  const [user, setUser] = useState(storeUserDetails())
 
  
 
  const [loginData, setLoginData] = useState({});
  
  useEffect(()=>{

    socket.on('connect', socket=>{
setSocketData(true)
    })

    socket.on("notification", (data) => {
      setNotice(data)
      setNoticeData(prev=>[...prev, data])
    
      
    });
    
  },[])
  

const setGoogleUserDetails = (details)=>{

  setUser(details)
}
  
  //   This function here gets the user id on successful patient onboarding
  

  const handlePatientLoginDetails = (details) => {

    setLoginData(details);
  };
 

  return (
    <OnboardingContext.Provider
      value={{
        handlePatientLoginDetails,
        loginData,
        notice,
        noticeData,
        user,
        setUser
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}
