import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";


import DashboardTable from "../components/TherapistDashboard/DashboardTable";
import DashboardSidebar from "../components/TherapistDashboard/DashboardSidebar";
import DashboardHeader from "../components/TherapistDashboard/DashboardHeader";

const TherapistDashboard = () => {
 
  return (
    <div className="w-full  h-[calc(100vh-64px)]  py-4 text-black text-sm dashboardmd:h-screen ">
      <div className="flex flex-wrap text-black w-full dashboardmd:flex-col "  >
        <DashboardSidebar/>
        <div className="w-5/6 flex flex-col dashboardmd:w-full   ">
          <div className=" mx-8 mb-4">
            <DashboardHeader/>
          </div>
          <DashboardTable/>
        </div>
      </div>
    </div>
  );
};

export default TherapistDashboard;
