import React, {useEffect} from "react";
import Dashboardlayout from "../layout/Dashboardlayout";
import { useLocation } from "react-router-dom";
import { getImage } from "../../services/requests";

export default function EachSessionDetails() {
  const location = useLocation();
  const imagUrl = location?.state?.details?.therapistImageUrl


  
  return (
    <Dashboardlayout>
      <div className="card card-side bg-base-100 ">
        <figure>
          <div className=" w-44 h-44 mx-auto  rounded-3xl border-8 border-therapyDarkGreen my-4"  style={{
                backgroundImage:
                  `url(${imagUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} >
            
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{location.state.details.therapistname}</h2>
          <p>{location.state?.details?.therapistEmail}</p>
          <p>{location.state?.details?.therapistLocation}</p>
        </div>
      </div>
      <div className=" flex-col items-center">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Session Link</th>
              <th>Day and Time</th>
              <th>Session type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full">
              <td className="">
                {" "}
                <a
                  className={
                    location.state?.details?.seeionLink ? "underline" : ""
                  }
                  href={location.state?.details?.seeionLink.slice(12)}
                >
                  {location.state?.details?.seeionLink
                    ? "start meeting"
                    : "none"}
                </a>{" "}
              </td>
              <td>
                {location.state?.details?.day}{" "}
                {location.state?.details?.appointmentTime}
              </td>
              <td>{location.state?.details?.meetingType}</td>
              <td>{location.state?.details?.description}</td>
            </tr>
          </tbody>
        </table>
        <p className="capitalize"></p>
        <p className="capitalize"></p>
        <p className="capitalize"></p>
        <p className="capitalize"></p>
      </div>
    </Dashboardlayout>
  );
}
