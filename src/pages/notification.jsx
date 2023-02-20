import React, { useEffect, useState, useContext } from "react";
import Dashboardlayout from "../components/layout/Dashboardlayout";
import UserOboardingContext from "../context/UserOboardingContext";
// import { OnboardingContext } from "../context/UserOboardingContext";
import { OnboardingContext } from "../context/UserOboardingContext";
import { userID } from "../services/requests";
import { storeUserDetails  } from "../services/requests";

export default function Notification() {
  const [notification, setNotification] = useState([]);
  const [newNotice, setNotice] = useState(false);
  const { notice: notify, noticeData } = useContext(OnboardingContext);
  const [id, setId] = useState();
  const [receiveId, setRecieveId] = useState()
  const [checkMyNotice, setCheckMyNotice] = useState([])

  useEffect(() => {
   
    const { notification: noicemy, recieverId} = notify;
const {userId } = storeUserDetails()
    setNotification(noticeData)
    setRecieveId(recieverId)
    setId(userId)


  }, []);

  

  const notice = ["Hello whre are u", "This is nicwe"];

  if (id !== receiveId) {
    return (
      <Dashboardlayout>
        <div className="flex justify-center items-center h-3/4  w-3/4 mx-auto my-8 bg-therapistCardzzBackground">
          <h2>No notification</h2>
        </div>
      </Dashboardlayout>
    );
  }

  if (notification.length < 1) {
    return (
      <Dashboardlayout>
        <div className="flex justify-center items-center h-3/4  w-3/4 mx-auto my-8 bg-therapistCardzzBackground">
          <h2>No notification</h2>
        </div>
      </Dashboardlayout>
    );
  }

  return (
    <Dashboardlayout>
      <div className="flex-col w-3/4 mx-auto bg-therapistCardzzBackground rounded-3xl mt-4 ">
        <h2 className="text-center text-therapyDarkGreen py-4 bg-white rounded-">
          Notification
        </h2>
        {notification.map((notice, i) => {
          const { notification } = notice;
          const { message, appointmentTime,username
          } = notification;
          return (
            <div
              className=" flex flex-col justify-center  w-3/4 mx-auto"
              key={i}
            >
              <div className="m-4 flex justify-between p-4 items-center bg-white rounded-t-md">
                <span className="   ">{username} {message.slice(24)}</span>
                <span>{appointmentTime}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Dashboardlayout>
  );
}
