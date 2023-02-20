import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Profile from "../Dashboard/Profile";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineLogout, AiOutlineSchedule } from "react-icons/ai";
import Header from "../Dashboard/Header";
import { OnboardingContext } from "../../context/UserOboardingContext";
import { useContext } from "react";
import { BiBookAlt } from "react-icons/bi";
import { logoutUser } from "../../services/requests";

export default function Dashboardlayout({ children }) {
  // const [user, setUser] = useState(storeUserDetails())
  const { loginData, noticeData, notice, user } = useContext(OnboardingContext);

  const [myId, setMyId] = useState();
  const { id } = useParams();
  useEffect(() => {
    const { recieverId } = notice;
    setMyId(recieverId);
  }, []);

  // const { notification: noicemy, recieverId} = notify
  const { imageUrl, name, userId } = user;

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-screen  ">
          <div className="h-[60px] ">
            <Header />
          </div>
          <div className="h-[calc(100vh-60px)] p-6 overflow-auto ">
            {children}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-60 bg-white text-therapyDarkGreen border-r-2 border-therapyDarkGreen flex flex-col justify-between">
            <div className="w-full  ">
              <NavLink
                to="/"
                className="cursor-pointer text-base font-bold uppercase text-therapyDarkGreen"
              >
                Therapy
              </NavLink>

              <div className="mt-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? ` items-center py-2 my-2 w-full border-t-[1px] border-b-[1px] border-therapyLightGreen `
                      : ` flex items-center py-2 my-2  w-full text-therapyDarkGreen  `
                  }
                  end
                >
                  <span>
                    <AiOutlineHome />
                  </span>
                  <p className="ml-4 text-sm font-semibold capitalize">home</p>
                </NavLink>

                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? `flex items-center py-2 my-2 w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                      : ` flex items-center py-2 my-2 w-full text-therapyDarkGreen  `
                  }
                  end
                >
                  <span>
                    <AiOutlineSchedule />
                  </span>
                  <p className="ml-4 text-sm font-semibold capitalize">
                    booking
                  </p>
                </NavLink>

                {user.userType === "therapist" && (
                  <NavLink
                    to={"/therapist-profile"}
                    className={({ isActive }) =>
                      isActive
                        ? `flex items-center py-2 my-2 w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                        : ` flex items-center py-2 my-2 w-full text-therapyDarkGreen  `
                    }
                    end
                  >
                    <span>
                      <FiUser />
                    </span>
                    <p className="ml-4 text-sm font-semibold capitalize">
                      therapist profile
                    </p>
                  </NavLink>
                )}

                {user.userType === "client" && (
                  <NavLink
                    to={"/patient-profile"}
                    className={({ isActive }) =>
                      isActive
                        ? `flex items-center py-2 my-2 w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                        : ` flex items-center py-2 my-2 w-full text-therapyDarkGreen  `
                    }
                    end
                  >
                    <span>
                      <FiUser />
                    </span>
                    <p className="ml-4 text-sm font-semibold capitalize">
                      Patient profile
                    </p>
                  </NavLink>
                )}

                <NavLink
                  to={"/notification"}
                  className={({ isActive }) =>
                    isActive
                      ? `flex items-center py-2 my-2 w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                      : ` flex items-center py-2 my-2 w-full text-therapyDarkGreen  `
                  }
                  end
                >
                  <span className="flex items-center relative">
                    <span className="absolute bottom-2 text-xs  font-serif left-5">
                      {myId === userId && noticeData.length}
                    </span>
                    <IoIosNotificationsOutline />
                  </span>
                  <p className="ml-4 text-sm font-semibold capitalize">
                    Notification
                  </p>
                </NavLink>
                {user.userType === "client" && (
                  <NavLink
                    to="/sessions"
                    className={({ isActive }) =>
                      isActive
                        ? `flex items-center py-2 my-2 w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                        : ` flex items-center py-2 my-2 w-full text-therapyDarkGreen  `
                    }
                    end
                  >
                    <span>
                      <BiBookAlt />
                    </span>
                    <p className="ml-4 text-sm font-semibold capitalize">
                      sessions booked
                    </p>
                  </NavLink>
                )}
                <div
                  onClick={logoutUser}
                  className="flex items-center py-2 my-2 w-full cursor-pointer hover:text-therapyLightGreen"
                >
                  <span>
                    <AiOutlineLogout />
                  </span>
                  <p className="ml-4 text-sm font-semibold capitalize">
                    logout
                  </p>
                </div>
              </div>
            </div>
            <Profile name={name} imageUrl={imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
